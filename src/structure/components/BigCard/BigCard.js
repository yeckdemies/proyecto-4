import './BigCard.css';

const BigCard = ({
  padre,
  tipo = 'C',
  fi = '',
  ff = 'Actualidad',
  rol = '',
  empresa = '',
  descripcion = '',
  foto = ''
}) => {
  const sectionBigCard = document.createElement('section');
  sectionBigCard.className = 'sectionBigCard';

  /* Parte izquierda */
  const izq = document.createElement('article');
  izq.className = 'izqArticle';
  sectionBigCard.appendChild(izq);

  const fechas = document.createElement('h2');
  fechas.className = 'fechas';
  fechas.innerText = `${fi} - ${ff}`;

  const puesto = document.createElement('p');
  puesto.innerHTML = `<strong> ${rol} </strong>`;

  const nombreEmpresa = document.createElement('p');
  nombreEmpresa.innerText = empresa;

  izq.append(fechas, puesto, nombreEmpresa);

  /* Parte derecha */
  const dch = document.createElement('article');
  dch.className = 'dchArticle';

  const detalle = document.createElement('h2');
  detalle.innerHTML = `<strong>Descripción</strong>`;

  const descripciónExtendida = document.createElement('p');
  descripciónExtendida.innerText = descripcion;

  dch.append(detalle, descripciónExtendida);
  sectionBigCard.appendChild(dch);
  padre.append(sectionBigCard);
};

export { BigCard };
