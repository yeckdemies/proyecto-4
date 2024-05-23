import './curriculum.css';

const buildCurriculum = () => {
  const curriculum = document.createElement('div');

  const p1 = document.createElement('p');

  p1.innerText = 'Curriculum';

  curriculum.append(p1);

  const main = document.querySelector('main');
  main.append(curriculum);
};

export { buildCurriculum };
