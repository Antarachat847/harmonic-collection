// Get the canvas and its context
let canvas = document.getElementById('eraserCanvas');
let ctx = canvas.getContext('2d');

// Adjust canvas size to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fill the canvas with the maroon color
ctx.fillStyle = '#E5DFB4';
let rectWidth = 930;  // Width of the rectangle
let rectHeight = 160;  // Height of the rectangle

// Calculate the x and y coordinates to center the rectangle
let centerX = (canvas.width - rectWidth) / 2;
let centerY = (canvas.height - rectHeight) / 2;

// Draw the rectangle centered on the canvas
ctx.fillRect(centerX, centerY, rectWidth, rectHeight);

// Dynamically set the font size based on canvas size
let fontSize = Math.min(canvas.width * 0.05, 40); // Adjusts font size to 5% of canvas width, max 40px
ctx.font = `18px 'Hammersmith One'`; // Use Hammersmith One font
ctx.fillStyle = 'maroon';  // Set the text color to maroon
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Add the custom text 'd r a w   m e' in the center of the rectangle
ctx.fillText('d r a w   m e', canvas.width / 2, canvas.height / 2);  // Check for parentheses here

// Eraser settings
ctx.globalCompositeOperation = 'destination-out';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 120;

let isErasing = false;

function erase(e) {
    if (!isErasing) return;

    let x = e.clientX;
    let y = e.clientY;

    ctx.beginPath();
    ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2);  // Ensure all parentheses are closed
    ctx.fill();
}

canvas.addEventListener('mousedown', function (e) {
    isErasing = true;
    erase(e);  // Erase on the first click
});

canvas.addEventListener('mouseup', function () {
    isErasing = false;
});

canvas.addEventListener('mousemove', erase);
