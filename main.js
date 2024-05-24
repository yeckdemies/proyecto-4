import './style.css';
import { buildHeader } from './src/structure/header/header';
import { buildPagePrincipal } from './src/structure/main/pagePrincipal/pagePrincipal';
import { startTransformImg } from './src/utils/functions';
import { buildCurriculum } from './src/structure/main/curriculum/curriculum';
import { buildPortafolio } from './src/structure/main/portafolio/portafolio';
import { buildContacto } from './src/structure/main/contacto/contacto';

buildHeader();
const main = document.createElement('main');
document.getElementById('app').append(main);

buildPagePrincipal();

const links = [
  { element: document.querySelector('#inicio'), build: buildPagePrincipal },
  { element: document.querySelector('#sobreMi'), build: buildPagePrincipal },
  { element: document.querySelector('#curriculum'), build: buildCurriculum },
  { element: document.querySelector('#portafolio'), build: buildPortafolio },
  { element: document.querySelector('#contacto'), build: buildContacto }
];

const handleNavigation = (event, buildFunction) => {
  event.preventDefault();
  main.classList.add('fade-exit-active');
  main.addEventListener(
    'transitionend',
    () => {
      main.classList.remove('fade-exit-active');
      main.classList.add('fade-enter');
      main.innerHTML = '';
      buildFunction();
      requestAnimationFrame(() => {
        main.classList.add('fade-enter-active');
        main.classList.remove('fade-enter');
      });
    },
    { once: true }
  );
};

links.forEach(({ element, build }) => {
  element.addEventListener('click', (event) => handleNavigation(event, build));
});

const imgPerfil = document.querySelector('#imgPerfil');
imgPerfil.addEventListener('click', () => startTransformImg(imgPerfil));
