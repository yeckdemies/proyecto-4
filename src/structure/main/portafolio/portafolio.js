import './portafolio.css';
import { BigCard } from '../../components/BigCard/BigCard';

const buildPortafolio = () => {
  const portafolio = document.createElement('div');
  portafolio.className = 'portafolio';

  const titulo = document.createElement('h2');
  titulo.className = 'titulo';
  titulo.innerHTML = `<span style="color: var(--ypn-color-primary); width: 30px;"> ■ </span> Portafolio`;

  portafolio.append(titulo);

  const descripcion = document.createElement('p');
  descripcion.className = 'descripción';
  descripcion.innerHTML = `Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.`;

  portafolio.append(descripcion);

  BigCard({
    padre: portafolio,
    tipo: 'C',
    fi: '2024',
    rol: 'Consultora Analista CRM',
    empresa: 'Greening Group SL',
    ubicacion: 'Granada',
    descripcion: 'Análisis, diseño, implementación, helpdesk'
  });

  BigCard({
    padre: portafolio,
    tipo: 'C',
    fi: '2024',
    rol: 'Consultora Analista CRM',
    empresa: 'Greening Group SL',
    ubicacion: 'Granada',
    descripcion: 'Análisis, diseño, implementación, helpdesk'
  });

  const main = document.querySelector('main');
  main.append(portafolio);
};

export { buildPortafolio };
