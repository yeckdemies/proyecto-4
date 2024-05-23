import './portafolio.css';

const buildPortafolio = () => {
  const portafolio = document.createElement('div');

  const p1 = document.createElement('p');

  p1.innerText = 'Portafolio';

  portafolio.append(p1);

  const main = document.querySelector('main');
  main.append(portafolio);
};

export { buildPortafolio };
