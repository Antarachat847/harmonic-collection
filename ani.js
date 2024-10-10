const words = ["Folkart", "फोल्कार्ट", "ଫୋଲକର୍ତ୍ତ", "ફોલકરત", "போல்கர்ட்", "ఫాల్కర్ట్", "فولکرٹ", "ফলকার্ট"];
const colors = ["#FF5733", "#20492F", "#FD8916", "#8F00FF", "#0000FF", "#0e9594", "#Be443d", "#FF33A1"];
const fonts = [
  "'courier', sans-serif", 
  "'Mangal', sans-serif",      
  "'Noto Sans Oriya', sans-serif", 
  "'Shruti', sans-serif",      
  "'Lohit Tamil', sans-serif", 
  "'Noto Sans Telugu', sans-serif", 
  "'Noto Naskh Arabic', sans-serif", 
  "'Noto Serif Bengali', sans-serif" 
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

const typewriterTextElement = document.getElementById('typewriter-text');
const backgroundTextElement = document.getElementById('background-text');

function typeWriterEffect() {
    let fullWord = words[wordIndex];
    let currentColor = colors[wordIndex];
    let currentFont = fonts[wordIndex];

    if (isDeleting) {
        currentWord = fullWord.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        currentWord = fullWord.substring(0, letterIndex + 1);
        letterIndex++;
    }

    typewriterTextElement.textContent = currentWord;
    typewriterTextElement.style.color = currentColor;
    typewriterTextElement.style.fontFamily = currentFont;

    if (!isDeleting && currentWord === fullWord) {
        isDeleting = true;
        backgroundTextElement.textContent = currentWord;
        backgroundTextElement.style.opacity = 0;
        backgroundTextElement.style.color = currentColor;
        backgroundTextElement.style.fontFamily = currentFont;
        setTimeout(typeWriterEffect, 1000);
    } else if (isDeleting && currentWord === '') {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        backgroundTextElement.style.opacity = 0;
        setTimeout(typeWriterEffect, 500);
    } else {
        const typingSpeed = isDeleting ? 50 : 150; // Adjust speed based on typing or deleting
        setTimeout(typeWriterEffect, typingSpeed);
    }
}

typeWriterEffect();
