/* Home Page Specific JavaScript */
const initHomePage = () => {
    const { $, on } = window.DOM;

    // Form submission
    const orderForm = $('.order-form');
    if (orderForm) {
        on(orderForm, 'submit', (e) => {
            e.preventDefault();
            const textarea = orderForm.querySelector('textarea');
            const message = textarea ? textarea.value.trim() : '';
            
            if (message) {
                alert('Thank you for your order! We will contact you soon.');
                if (textarea) {
                    textarea.value = '';
                }
            } else {
                alert('Please write something in your message.');
            }
        });
    }
};
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// Play / Pause
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Update progress
audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Set duration
audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});

// Seek
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Volume
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

// Time formatter
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}

// Make function available globally
window.initHomePage = initHomePage;
