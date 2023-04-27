// burgerMenu

const menuBtn = document.querySelector('.burger__menu'),
      submenu = document.querySelector('.submenu');

function toggleMenu() {
  menuBtn.classList.toggle('active');
  submenu.classList.toggle('vis__submenu');
}