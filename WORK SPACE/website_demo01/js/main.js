/* Main JavaScript Entry Point */
const initApp = () => {
    const { ready } = window.DOM;

    // Initialize when DOM is ready
    ready(() => {
        if (window.initNavbar) initNavbar();
        if (window.initScrollAnimations) initScrollAnimations();
        if (window.initHomePage) initHomePage();
    });
};

// Initialize app
initApp();
