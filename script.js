// Navigation toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

// Hero section typing animation (replace with your desired text)
const typingTexts = [
  'a web developer',
  'a passionate designer',
  'building creative solutions'
];
let currentTextIndex = 0;
const typingTextElement = document.querySelector('.typing-text');

function typeText() {
  const currentText = typingTexts[currentTextIndex];
  let typedText = '';

  for (let i = 0; i < currentText.length; i++) {
    setTimeout(() => {
      typedText += currentText[i];
      typingTextElement.textContent = typedText;
    }, i * 50); // Adjust speed here (ms)
  }

  currentTextIndex++;
  if (currentTextIndex >= typingTexts.length) {
    currentTextIndex = 0;
  }

  setTimeout(typeText, 3000); // Adjust delay between animation loops (ms)
}

typeText();
