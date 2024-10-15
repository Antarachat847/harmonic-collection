const canvas = document.getElementById('revealCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();

// Set canvas size to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load the background image
img.src = 'images/Pattachitra.jpg'; // Update the image path based on your folder structure

img.onload = function() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'destination-out'; // Sets the blend mode to "erase"
};

// Add an event listener for the mouse movement to "erase" the canvas
canvas.addEventListener('mousemove', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  const radius = 40; // The size of the brush/eraser

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();
});

// Ensure the canvas resizes with the window
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});
