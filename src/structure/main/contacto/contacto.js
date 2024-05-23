import './contacto.css';

const buildContacto = () => {
  const contacto = document.createElement('div');

  const p1 = document.createElement('p');

  p1.innerText = 'Contacto';

  contacto.append(p1);

  const main = document.querySelector('main');
  main.append(contacto);
};

export { buildContacto };
