document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('hamburguer');
  const nav = document.querySelector('nav');

  btn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});
