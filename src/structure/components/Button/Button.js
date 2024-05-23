import './Button.css';

export const Button = ({ padre, texto, clase, id }) => {
  const button = document.createElement('button');
  button.id = id;
  button.className = clase;

  button.innerHTML = texto;
  padre.appendChild(button);
};
