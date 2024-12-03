document.addEventListener("DOMContentLoaded", function () {
    // Get all the selectable images in the gallery
    const images = document.querySelectorAll(".selectable-image");
    const selectedImageContainer = document.getElementById("selected-image");

    // Add click event listener to each image
    images.forEach((image) => {
        image.addEventListener("click", () => {
            // Update the selected image's source and make it visible
            selectedImageContainer.src = image.src;
            selectedImageContainer.style.display = "block";
        });
    });
});
