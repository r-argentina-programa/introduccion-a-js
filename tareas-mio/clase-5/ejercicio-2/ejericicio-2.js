// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonMostrarResultados = document.querySelector('button');

$botonMostrarResultados.onclick = function () {
  const primerNombre = document.querySelector('#primer-nombre').value;
  const segundoNombre = document.querySelector('#segundo-nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const edad = document.querySelector('#edad').value;

  document.querySelector(
    'h1'
  ).textContent = `Bienvenido, ${primerNombre} ${segundoNombre} ${apellido}. Su edad es ${edad} `;

  return false;
};
