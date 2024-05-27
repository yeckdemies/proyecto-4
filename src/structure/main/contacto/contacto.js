import './contacto.css';
import { Button } from '../../components/Button/Button';

const buildContacto = () => {
  const contacto = document.createElement('div');
  contacto.className = 'contacto';

  const titulo = document.createElement('h2');
  titulo.className = 'titulo';
  titulo.innerHTML = `<span style="color: var(--ypn-color-primary); width: 30px;"> ■ </span> Contacto`;

  contacto.append(titulo);

  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  const form = document.createElement('form');
  form.id = 'contactForm';

  const fields = [
    { label: 'Nombre', id: 'nombre', type: 'text', required: true },
    { label: 'Apellido', id: 'apellido', type: 'text', required: true },
    { label: 'Email', id: 'email', type: 'email', required: true },
    { label: 'Asunto', id: 'asunto', type: 'text', required: false },
    { label: 'Mensaje', id: 'mensaje', type: 'textarea', required: false }
  ];

  fields.forEach((field) => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.setAttribute('for', field.id);
    label.textContent = field.label + (field.required ? ' *' : '');

    const input =
      field.type === 'textarea'
        ? document.createElement('textarea')
        : document.createElement('input');
    input.id = field.id;
    input.name = field.id;
    if (field.type !== 'textarea') input.type = field.type;
    if (field.required) input.required = true;

    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form.appendChild(formGroup);
  });

  Button({
    padre: form,
    texto: 'ENVIAR',
    clase: 'buttonAzul',
    id: 'enviar'
  });

  formContainer.appendChild(form);
  contacto.appendChild(formContainer);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario de contacto enviado!');
    form.reset();
  });

  const main = document.querySelector('main');
  main.append(contacto);
};

export { buildContacto };
