window.addEventListener("load", () => {
    const sound = document.getElementById("netflixSound");

    // Wait for user interaction
    const enablePlayback = () => {
        setTimeout(() => {
            sound.play().catch(err => {
                console.warn("Still blocked:", err);
            });
        }, 40); // ⏱️ Adjust delay (ms) to sync with animation
        document.removeEventListener("click", enablePlayback);
        document.removeEventListener("touchstart", enablePlayback);
    };

    document.addEventListener("click", enablePlayback);
    document.addEventListener("touchstart", enablePlayback);
});
