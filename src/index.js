import './sass/main.scss';
import { gsap } from 'gsap';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.mainNavigation');

burger.addEventListener('click', () => {
  const pageWidth = document.body.offsetWidth;

  if (!burger.classList.contains('active')) {
    burger.classList.add('active');
    gsap.to('.mainNavigation', { x: pageWidth, duration: 1 });
    burger.children[0].classList.remove('fa-bars');
    burger.children[0].classList.add('fa-times');
  } else {
    burger.classList.remove('active');
    gsap.to('.mainNavigation', { x: 0, duration: 1 });
    burger.children[0].classList.add('fa-bars');
    burger.children[0].classList.remove('fa-times');
  }
});
