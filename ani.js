const words = ["Folkart", "फोल्कार्ट", "ଫୋଲକର୍ତ୍ତ", "ફોલકરત", "போல்கர்ட்", "ఫాల్కర్ట్", "فولکرٹ", "ফলকার্ট"];
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A1", "#33FFF2", "#FFC133", "#Be443d", "#FF33A1"];
const fonts = [
  "'courier', sans-serif", // Font for "Folkart"
  "'Mangal', sans-serif",      // Font for "फोल्कार्ट"
  "'Noto Sans Oriya', sans-serif", // Font for "ଫୋଲକର୍ତ୍ତ"
  "'Shruti', sans-serif",      // Font for "ફોલકરત"
  "'Lohit Tamil', sans-serif", // Font for "போல்கர்ட்"
  "'Noto Sans Telugu', sans-serif", // Font for "ఫాల్కర్ట్"
  "'Noto Naskh Arabic', sans-serif", // Font for "فولکرٹ"
  "'Noto Serif Bengali', sans-serif" // Font for "ফলকার্ট"
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
