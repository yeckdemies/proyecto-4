import './BigCard.css';

const BigCard = ({
  parent,
  type = 'W', //W = Work, E = Education, P = Project
  startDate = '',
  endDate = '',
  position = '',
  company = '',
  description = '',
  title = '',
  link = '',
  preview = ''
}) => {
  const sectionBigCard = document.createElement('section');
  sectionBigCard.className = 'sectionBigCard';

  /* Parte izquierda */
  const izq = document.createElement('article');
  izq.className = 'izqArticle';
  sectionBigCard.appendChild(izq);

  const fechas = document.createElement('h2');
  fechas.className = 'titulos';

  if (type === 'W') {
    if (endDate === '') {
      endDate = 'Actualidad';
    }
    fechas.innerText = `${startDate} - ${endDate}`;
  } else if (type === 'E') {
    fechas.innerText = endDate;
  }

  const puesto = document.createElement('p');
  puesto.innerHTML = `<strong> ${position} </strong>`;

  const nombreEmpresa = document.createElement('p');
  nombreEmpresa.innerText = company;

  /* Parte derecha */
  const dch = document.createElement('article');
  dch.className = 'dchArticle';

  const detalle = document.createElement('h2');
  detalle.className = 'titulos';

  const descripcionExtendida = document.createElement('p');
  if (type === 'P') {
    detalle.innerText = title;
    descripcionExtendida.innerText = description;
    izq.className = 'izqArticle izqPortafolio';
    dch.className = 'dchArticle dchPortafolio';

    const image = document.createElement('img');
    image.alt = 'Vista previa del proyecto';
    image.src = preview;

    const linkPreview = document.createElement('a');
    linkPreview.href = link;
    linkPreview.target = '_blank';

    linkPreview.appendChild(image);

    izq.append(detalle, puesto, descripcionExtendida);
    dch.append(linkPreview);
  } else {
    detalle.innerText = 'Descripción';
    descripcionExtendida.innerText = description.join('\n');
    izq.append(fechas, puesto, nombreEmpresa);
    dch.append(detalle, descripcionExtendida);
  }

  sectionBigCard.appendChild(dch);
  parent.appendChild(sectionBigCard);
};

export { BigCard };
