import './style.css';
import { buildHeader } from './src/structure/header/header';
import { buildPagePrincipal } from './src/structure/main/pagePrincipal/pagePrincipal';
import { startTransformImg } from './src/utils/functions';
import { buildSobreMi } from './src/structure/main/sobreMi/sobreMi';
import { buildCurriculum } from './src/structure/main/curriculum/curriculum';
import { buildPortafolio } from './src/structure/main/portafolio/portafolio';
import { buildContacto } from './src/structure/main/contacto/contacto';

buildHeader();
const main = document.createElement('main');
app.append(main);

buildPagePrincipal();

const inicio = document.querySelector('#inicio');
const sobreMi = document.querySelector('#sobreMi');
const curriculum = document.querySelector('#curriculum');
const portafolio = document.querySelector('#portafolio');
const contacto = document.querySelector('#contacto');

inicio.addEventListener('click', (event) => {
  event.preventDefault();
  main.innerHTML = '';
  buildPagePrincipal();
});

sobreMi.addEventListener('click', (event) => {
  event.preventDefault();
  main.innerHTML = '';
  buildSobreMi();
});

curriculum.addEventListener('click', (event) => {
  event.preventDefault();
  main.innerHTML = '';
  buildCurriculum();
});

portafolio.addEventListener('click', (event) => {
  event.preventDefault();
  main.innerHTML = '';
  buildPortafolio();
});

contacto.addEventListener('click', (event) => {
  event.preventDefault();
  main.innerHTML = '';
  buildContacto();
});

const imgPerfil = document.querySelector('#imgPerfil');
imgPerfil.addEventListener('click', () => startTransformImg(imgPerfil));
