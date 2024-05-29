import './portafolio.css';
import { BigCard } from '../../components/BigCard/BigCard';
import data from '../../../utils/data';

const buildPortafolio = () => {
  const portafolio = document.createElement('div');
  portafolio.className = 'portafolio';

  const titulo = document.createElement('h2');
  titulo.className = 'titulo';
  titulo.innerHTML = `<span style="color: var(--ypn-color-primary); width: 30px;"> ■ </span> Proyectos`;

  portafolio.append(titulo);

  const descripcion = document.createElement('p');
  descripcion.className = 'descripcion';
  descripcion.innerText =
    'En esta sección, presento los proyectos que he desarrollado durante el Bootcamp FullStack Developer. Cada proyecto refleja los conocimientos adquiridos y las habilidades prácticas aplicadas en el ámbito del desarrollo web.';
  portafolio.append(descripcion);

  for (const project of data.projects) {
    BigCard({
      parent: portafolio,
      type: 'P',
      position: 'Design and development',
      title: project.title,
      description: project.description,
      link: project.link,
      preview: project.preview
    });
  }

  const main = document.querySelector('main');
  main.append(portafolio);
};

export { buildPortafolio };
