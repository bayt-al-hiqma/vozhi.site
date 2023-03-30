// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
}

// Responsive navigation menu
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('nav ul');

menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuIcon.classList.toggle('active');
  navbar.classList.toggle('active');
}

// Typing animation for header section
const typingText = document.querySelector('.typing-text');
const words = ['Real Estate Marketing', 'Hip Hop Freestyle', 'Social Media Marketing'];

let index = 0;
let wordIndex = 0;
let typingInterval = setInterval(type, 100);

function type() {
  const currentWord = words[wordIndex];
  typingText.innerHTML = currentWord.slice(0, index);
  index++;
  if (index > currentWord.length) {
    index = 0;
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
  }
}
