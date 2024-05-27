import { BigCard } from '../../components/BigCard/BigCard';
import './curriculum.css';

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

  BigCard({
    padre: curriculum,
    tipo: 'C',
    fi: '2024',
    rol: 'Consultora Analista CRM',
    empresa: 'Greening Group SL',
    ubicacion: 'Granada',
    descripcion: 'Análisis, diseño, implementación, helpdesk'
  });

  const educacion = document.createElement('h2');
  educacion.className = 'educacion';
  educacion.innerHTML = `Educación`;

  curriculum.append(educacion);

  BigCard({
    padre: curriculum,
    tipo: 'C',
    fi: '2020',
    rol: 'CFGS DESARROLLO DE APLICACIONES WEB',
    empresa: 'IES Aguadulce',
    ubicacion: 'Almería',
    descripcion: 'Ciclo formativo de grado superior orientado laskdjfañskjdf'
  });

  const main = document.querySelector('main');
  main.append(curriculum);
};

export { buildCurriculum };
