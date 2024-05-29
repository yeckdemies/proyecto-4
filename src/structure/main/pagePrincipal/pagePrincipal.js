import './pagePrincipal.css';
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import data from '../../../utils/data';

const buildPagePrincipal = () => {
  const pagePrincipal = document.createElement('div');
  pagePrincipal.className = 'pagePrincipal';

  const left = document.createElement('section');
  const right = document.createElement('section');
  const center = document.createElement('section');

  left.className = 'center left';
  right.className = 'center right';
  center.className = 'content';

  const card = document.createElement('article');
  Card({ padre: card });

  const presentation = document.createElement('article');
  card.className = 'card';
  presentation.className = 'presentation';

  const title = document.createElement('h2');
  title.innerText = 'Sobre Mí';

  const subtitle = document.createElement('h3');
  subtitle.innerText = 'Apasionada de la programación en constante cremiento.';

  const contentButtons = document.createElement('div');
  contentButtons.className = 'contentButtons';

  Button({
    padre: contentButtons,
    texto: 'CURRICULUM',
    clase: 'buttonAzul',
    id: 'buttonCurriculum'
  });
  Button({
    padre: contentButtons,
    texto: 'PROYECTOS',
    clase: 'buttonBlanco',
    id: 'buttonCurriculum'
  });

  const contentP = document.createElement('div');
  contentP.className = 'contentP';
  const p1 = document.createElement('p');

  p1.innerText = data.aboutMe;

  contentP.appendChild(p1);

  presentation.append(title, subtitle, contentButtons, contentP);

  center.append(card, presentation);
  pagePrincipal.append(left, right, center);

  const main = document.querySelector('main');
  main.append(pagePrincipal);
};

export { buildPagePrincipal };
