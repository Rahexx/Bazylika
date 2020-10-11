import './sass/main.scss';
import { gsap } from 'gsap';

const burger = document.querySelector('.burger');
const verticalMenu = document.querySelector('.mobileNav__item--vertical');

function changeBurgerClasses(item, isOpen) {
  if (isOpen) {
    item.classList.remove('fa-bars');
    item.classList.add('fa-times');
  } else {
    item.classList.add('fa-bars');
    item.classList.remove('fa-times');
  }
}

function showMenu(item, width) {
  console.log(item);
  item.classList.add('active');
  gsap.to('.mainNavigation', { x: width, duration: 1 });
  changeBurgerClasses(item.children[0], true);
}

function closeMenu(item) {
  item.classList.remove('active');
  gsap.to('.mainNavigation', { x: 0, duration: 1 });
  item.children[0].classList.add('fa-bars');
  item.children[0].classList.remove('fa-times');
  changeBurgerClasses(item.children[0], false);
}

verticalMenu.addEventListener('click', () => {
  const pageWidth = document.body.offsetWidth;
  const icon = document.querySelector('.mobileNav__icon--menu');

  if (!burger.classList.contains('active')) {
    showMenu(burger, pageWidth);
    changeBurgerClasses(icon, true);
  } else {
    closeMenu(burger);
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
    changeBurgerClasses(icon, false);
  }
});

burger.addEventListener('click', () => {
  const pageWidth = document.body.offsetWidth;

  if (!burger.classList.contains('active')) {
    showMenu(burger, pageWidth);
  } else {
    closeMenu(burger);
  }
});
