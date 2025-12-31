/* DOM Helper Functions */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const ready = (callback) => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
};

const on = (element, event, handler) => {
    if (element) {
        element.addEventListener(event, handler);
    }
};

const addClass = (element, className) => {
    if (element) {
        element.classList.add(className);
    }
};

const removeClass = (element, className) => {
    if (element) {
        element.classList.remove(className);
    }
};

const toggleClass = (element, className) => {
    if (element) {
        element.classList.toggle(className);
    }
};

// Make functions available globally
window.DOM = { $, $$, ready, on, addClass, removeClass, toggleClass };
