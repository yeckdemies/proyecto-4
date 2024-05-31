import './header.css';

const buildHeader = () => {
  const header = document.createElement('header');

  const inicio = document.createElement('div');
  inicio.id = 'inicio';

  const labelNombre = document.createElement('label');
  labelNombre.className = 'labelNombre';
  labelNombre.innerHTML = `<span style="color: var(--ypn-color-primary); width: 30px;">■</span>Yolanda Pérez`;

  const labelPerfil = document.createElement('label');
  labelPerfil.className = 'labelPerfil';
  labelPerfil.innerText =
    'Consultora Analista CRM | Consultora Funcional ERP | Coordinación de equipos | Testing | Helpdesk';

  inicio.append(labelNombre, labelPerfil);

  const menu = document.createElement('nav');
  menu.className = 'menu';

  const linkSobreMi = document.createElement('a');
  linkSobreMi.innerText = 'SOBRE MÍ';
  linkSobreMi.id = 'sobreMi';
  menu.appendChild(linkSobreMi);

  const linkCurriculum = document.createElement('a');
  linkCurriculum.innerText = 'CURRÍCULUM';
  linkCurriculum.id = 'curriculum';
  menu.appendChild(linkCurriculum);

  const linkPortfolio = document.createElement('a');
  linkPortfolio.innerText = 'PORTAFOLIO';
  linkPortfolio.id = 'portafolio';
  menu.appendChild(linkPortfolio);

  const linkContacto = document.createElement('a');
  linkContacto.innerText = 'CONTACTO';
  linkContacto.id = 'contacto';
  menu.appendChild(linkContacto);

  header.append(inicio, menu);
  app.appendChild(header);
};

export { buildHeader };
