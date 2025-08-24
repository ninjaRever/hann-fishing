document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Pour mobile : cliquer pour ouvrir le sous-menu
  const dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle('open');
    }
  });
});

document.addEventListener('click', function (e) {
  const dropdown = document.querySelector('.dropdown');
  if (window.innerWidth <= 768 && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});
