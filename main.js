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

const links = [
  { selector: '#inicio', build: buildPagePrincipal },
  { selector: '#sobreMi', build: buildPagePrincipal },
  { selector: '#curriculum', build: buildCurriculum },
  { selector: '#portafolio', build: buildPortafolio },
  { selector: '#contacto', build: buildContacto },
  { selector: '#buttonCurriculum', build: buildCurriculum },
  { selector: '#buttonProyectos', build: buildPortafolio }
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

document.addEventListener('click', (event) => {
  links.forEach(({ selector, build }) => {
    if (event.target.matches(selector)) {
      handleNavigation(event, build);
    }
  });

  if (event.target.matches('#imgPerfil')) {
    startTransformImg(event.target);
  }
});

buildPagePrincipal();
