/* 元のURL: https://cornell.edu */

const phrases = [
  "matters.",
  "saves lives.",
  "feeds the world.",
  "helps animals.",
  "drives innovation.",
  "powers economies.",
  "protects our planet.",
  "connects people.",
  "inspires our future.",
  "matters."
];

const typedText = document.getElementById("typedText");
let phraseIndex = 0;
let charIndex = 0;
let typing = true;
let animationTimeout;
let isTypingActive = true;

// Adjusted speeds for more visible deletion
const typingSpeed = 70;          // Original typing speed
const backspaceSpeed = 30;       // More visible deletion speed (was 20)
const holdAfterTyping = 800;     // Pause after typing
const pauseBetweenPhrases = 200; // Pause before next phrase

function typeEffect() {
  clearTimeout(animationTimeout);
  
  if (!isTypingActive) return;

  const currentPhrase = phrases[phraseIndex];

  if (typing) {
    if (charIndex < currentPhrase.length) {
      typedText.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      animationTimeout = setTimeout(typeEffect, typingSpeed);
    } else {
      if (phraseIndex === phrases.length - 1) return;
      typing = false;
      animationTimeout = setTimeout(typeEffect, holdAfterTyping);
    }
  } else {
    if (charIndex > 0) {
      // Delete 1-2 characters at a time for more visible deletion
      const deleteCount = Math.min(2, charIndex); // Delete 1-2 chars at once
      typedText.textContent = currentPhrase.substring(0, charIndex - deleteCount);
      charIndex -= deleteCount;
      animationTimeout = setTimeout(typeEffect, backspaceSpeed);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      animationTimeout = setTimeout(typeEffect, pauseBetweenPhrases);
    }
  }
}

typeEffect();

document.querySelector('.video_pause_play').addEventListener('click', function() {
  if (this.classList.contains('play')) {
    isTypingActive = true;
    typeEffect();
  } else {
    isTypingActive = false;
    clearTimeout(animationTimeout);
  }
});


