const buttonMenu = document.querySelector('.main-nav__button');
const navContainer = document.querySelector('.main-nav');
const menu = document.querySelector('.main-nav__list');

buttonMenu.addEventListener('click', (e) => {
  navContainer.classList.toggle('main-nav--show');
  if (buttonMenu.classList.contains('main-nav__button--closed')) {
    buttonMenu.classList.remove('main-nav__button--closed');
    buttonMenu.classList.add('main-nav__button--opened');
  } else {
    buttonMenu.classList.add('main-nav__button--closed');
    buttonMenu.classList.remove('main-nav__button--opened');
  }
});