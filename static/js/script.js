const lines = ["deploy --target vultr", "status: live ✓"];
let lineIndex = 0;
let charIndex = 0;
const typedEl = document.getElementById("typedLine");

function typeLoop() {
  if (!typedEl) return;
  const current = lines[lineIndex];
  if (charIndex <= current.length) {
    typedEl.textContent = current.slice(0, charIndex);
    charIndex++;
    setTimeout(typeLoop, 60);
  } else {
    setTimeout(() => {
      charIndex = 0;
      lineIndex = (lineIndex + 1) % lines.length;
      typeLoop();
    }, 1400);
  }
}
typeLoop();

const cards = document.querySelectorAll(".card, .section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

cards.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});
