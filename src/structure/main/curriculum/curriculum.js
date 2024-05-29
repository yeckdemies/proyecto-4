import './curriculum.css';
import { BigCard } from '../../components/BigCard/BigCard';
import data from '../../../utils/data';

const buildCurriculum = () => {
  const curriculum = document.createElement('div');
  curriculum.className = 'curriculum';

  const titulo = document.createElement('h2');
  titulo.className = 'titulo';
  titulo.innerHTML = `<span style="color: var(--ypn-color-primary); width: 30px;"> ■ </span> Currículum`;

  curriculum.append(titulo);

  const experiencia = document.createElement('h2');
  experiencia.className = 'experiencia';
  experiencia.innerHTML = `Experiencia`;
  curriculum.append(experiencia);

  for (const job of data.workExperience) {
    BigCard({
      parent: curriculum,
      type: 'W',
      startDate: job.startDate,
      endDate: job.endDate,
      position: job.position,
      company: job.company,
      location: job.location,
      description: job.description
    });
  }

  const educacion = document.createElement('h2');
  educacion.className = 'educacion';
  educacion.innerHTML = `Educación`;

  curriculum.append(educacion);

  for (const education of data.education) {
    BigCard({
      parent: curriculum,
      type: 'E',
      endDate: education.endDate,
      position: education.position,
      company: education.company,
      location: education.location,
      description: education.description
    });
  }

  const main = document.querySelector('main');
  main.append(curriculum);
};

export { buildCurriculum };
