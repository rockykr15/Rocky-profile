const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const phrases = ["Artificial Intelligence", "Agentic AI Systems", "Digital Twins", "Emerging Technologies"];
const typedText = document.getElementById("typedText");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = phrases[phraseIndex];
  typedText.textContent = current.substring(0, charIndex);
  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 85);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 42);
  } else {
    deleting = !deleting;
    if (!deleting) phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, deleting ? 1300 : 300);
  }
}
typeEffect();

// Subtle reveal animation as sections enter the viewport.
const revealItems = document.querySelectorAll(".section, .contact-section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealItems.forEach(item => {
  item.classList.add("reveal");
  observer.observe(item);
});
