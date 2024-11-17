document.addEventListener("DOMContentLoaded", function() {
    const mediaContainer = document.querySelector(".media-container");
    const backgroundImage = document.querySelector(".background-image");
    const backgroundVideo = document.querySelector(".background-video");

    function checkScroll() {
        const rect = mediaContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            backgroundImage.style.display = "none"; // Hide the image
            backgroundVideo.style.display = "block"; // Show the video
            backgroundVideo.play(); // Play the video
        } else {
            backgroundImage.style.display = "block"; // Show the image
            backgroundVideo.style.display = "none"; // Hide the video
            backgroundVideo.pause(); // Pause the video
        }
    }

    window.addEventListener("scroll", checkScroll);
});
