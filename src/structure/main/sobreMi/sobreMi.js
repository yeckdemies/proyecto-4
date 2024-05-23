import './sobreMi.css';

const buildSobreMi = () => {
  const sobreMi = document.createElement('div');

  const p1 = document.createElement('p');

  p1.innerText = 'Sobre Mi';

  sobreMi.append(p1);

  const main = document.querySelector('main');
  main.append(sobreMi);
};

export { buildSobreMi };
