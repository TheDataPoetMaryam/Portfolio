document.addEventListener("DOMContentLoaded", () => {

    const isProjectPage = window.location.pathname.includes("/projects/");
    const musicPath = isProjectPage
        ? "../audio/music.mp3"
        : "audio/music.mp3";

    const audio = new Audio(musicPath);

    audio.loop = true;
    audio.volume = 0.25;
    audio.preload = "auto";

    const musicButton = document.createElement("button");

    musicButton.className = "music-toggle";
    musicButton.innerHTML = "🎵";
    musicButton.setAttribute("aria-label", "Toggle background music");
    musicButton.title = "Play / Pause music";

    document.body.appendChild(musicButton);

    let isPlaying = false;

    function updateButton() {
        musicButton.innerHTML = isPlaying ? "🔊" : "🎵";
        musicButton.classList.toggle("playing", isPlaying);
    }

    async function startMusic() {
        try {
            await audio.play();
            isPlaying = true;
            updateButton();
        } catch (error) {
            console.log("Music could not autoplay:", error);
        }
    }

    function stopMusic() {
        audio.pause();
        isPlaying = false;
        updateButton();
    }

    musicButton.addEventListener("click", (event) => {
        // VERY IMPORTANT:
        // Prevent the page-level interaction listener
        // from immediately restarting the music.
        event.stopPropagation();

        if (isPlaying) {
            stopMusic();
        } else {
            startMusic();
        }
    });

    function startOnInteraction() {
        if (!isPlaying) {
            startMusic();
        }

        document.removeEventListener("click", startOnInteraction);
        document.removeEventListener("touchstart", startOnInteraction);
        document.removeEventListener("keydown", startOnInteraction);
    }

    document.addEventListener("click", startOnInteraction);
    document.addEventListener("touchstart", startOnInteraction);
    document.addEventListener("keydown", startOnInteraction);

    updateButton();
});