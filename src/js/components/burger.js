const btnBurger = document.querySelector('.menu__btn');
const menu = document.querySelector('.header__list');
const bodyOverlay = document.querySelector('.overlay');

btnBurger.addEventListener('click', () => {
  menu.classList.toggle('header__list--active');
  bodyOverlay.classList.toggle('overlay--active');
});
