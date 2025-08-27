document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
});
// Bloquer clic droit
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});
// Bloquer certaines touches
document.addEventListener("keydown", function(e) {
  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }
  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
    e.preventDefault();
  }
  // Ctrl+U
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
  }
  // Ctrl+S (enregistrer)
  if (e.ctrlKey && e.key.toLowerCase() === "s") {
    e.preventDefault();
  }
});