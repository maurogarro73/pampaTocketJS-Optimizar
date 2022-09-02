const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');
const textArea = document.querySelectorAll('#formulario textarea');

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'email':
      if (expresiones.email.test(e.target.value)) {
        document.getElementById('grupoEmail').classList.remove('formularioIncorrecto');
        document.getElementById('grupoEmail').classList.add('formularioCorrecto');
      } else {
        document.getElementById('grupoEmail').classList.add('formularioIncorrecto');
      }
      break;
    case 'nombre':
      if (expresiones.nombre.test(e.target.value)) {
        document.getElementById('grupoNombre').classList.remove('formularioIncorrecto');
        document.getElementById('grupoNombre').classList.add('formularioCorrecto');
      } else {
        document.getElementById('grupoNombre').classList.add('formularioIncorrecto');
      }
      break;
    case 'telefono':
      if (expresiones.telefono.test(e.target.value)) {
        document.getElementById('grupoTelefono').classList.remove('formularioIncorrecto');
        document.getElementById('grupoTelefono').classList.add('formularioCorrecto');
      } else {
        document.getElementById('grupoTelefono').classList.add('formularioIncorrecto');
        document.getElementById('grupoTelefono').classList.remove('formularioCorrecto');
      }
      break;
  }
};

input.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

textArea.forEach((textArea) => {
  textArea.addEventListener('keyup', validarFormulario);
  textArea.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
});
