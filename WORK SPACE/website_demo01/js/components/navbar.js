/* Navigation Component */
const initNavbar = () => {
    const { $, $$, on, toggleClass, removeClass } = window.DOM;
    const { smoothScroll } = window.Utils;

    const mobileMenuToggle = $('.mobile-menu-toggle');
    const navList = $('.nav-list');
    const navLinks = $$('.nav-link');

    // Mobile menu toggle
    if (mobileMenuToggle && navList) {
        on(mobileMenuToggle, 'click', () => {
            toggleClass(navList, 'active');
            toggleClass(mobileMenuToggle, 'active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        on(link, 'click', () => {
            removeClass(navList, 'active');
            removeClass(mobileMenuToggle, 'active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        on(link, 'click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                smoothScroll(targetId);
            }
        });
    });
};

// Make function available globally
window.initNavbar = initNavbar;
