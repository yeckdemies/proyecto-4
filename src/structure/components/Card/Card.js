import './Card.css';
import data from '../../../utils/data';

const Card = ({ padre }) => {
  const sectionCard = document.createElement('section');
  sectionCard.className = 'sectionCard';

  const imgPerfil = document.createElement('img');
  imgPerfil.alt = 'Imagen de perfil de Yolanda Pérez';
  imgPerfil.src = data.avatar;
  imgPerfil.className = 'imgPerfil';
  imgPerfil.id = 'imgPerfil';

  const nombre = document.createElement('h2');
  nombre.innerHTML = `${data.name} <br /> ${data.surname}`;

  const linea = document.createElement('hr');
  linea.className = 'custom-hr';

  const puestoActual = document.createElement('span');
  puestoActual.innerText = 'FULLSTACK DEVELOPER TRAINEE';

  sectionCard.append(imgPerfil, nombre, linea, puestoActual);

  const sectionFooter = document.createElement('section');
  sectionFooter.className = 'sectionFooter';

  const facebook = document.createElement('i');
  facebook.className = 'fab fa-facebook social-icons';

  const twitter = document.createElement('i');
  twitter.className = 'fab fa-twitter social-icons';

  const linkedin = document.createElement('i');
  linkedin.className = 'fab fa-linkedin social-icons';

  const instagram = document.createElement('i');
  instagram.className = 'fab fa-instagram social-icons';

  sectionFooter.append(facebook, twitter, linkedin, instagram);

  padre.append(sectionCard, sectionFooter);
};

export { Card };
