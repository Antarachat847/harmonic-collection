const track = document.getElementById("image-track");

let isMouseDown = false;
let startX;
let prevPercentage = 0;

window.onmousedown = (e) => {
    isMouseDown = true;
    startX = e.clientX;
    track.dataset.mouseDownAt = startX;
};

window.onmouseup = () => {
    isMouseDown = false;
    track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousemove = (e) => {
    if (!isMouseDown) return;

    const mouseDelta = startX - e.clientX;
    const maxDelta = window.innerWidth / 2;
    
    // Calculate percentage change based on mouse movement
    let percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = prevPercentage + percentage;
    
    // Clamp the percentage between -100 and 0
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);

    track.dataset.percentage = nextPercentage;
    prevPercentage = nextPercentage;

    // Apply the transform based on the next percentage
    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    // Adjust the position of each image within the track
    for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + nextPercentage}% 50%`;
    }
};
