//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonSubmit = document.querySelector('#submit');
const $botonReset = document.querySelector('#reset');

$botonSubmit.onclick = function() {
  const $primerNombre = document.querySelector('#primerNombre').value;
  document.querySelector(
    '#saludo'
  ).textContent = `Bienvenida ${$primerNombre}!!`;

  //agrega los datos en el campo de texto
  const $info = document.querySelector('#info');
  const $segundoNombre = document.querySelector('#segundoNombre').value;
  const $apellidos = document.querySelector('#apellido').value;
  const $edad = document.querySelector('#edad').value;

  $info.value = `${$primerNombre} ${$segundoNombre} ${$apellidos}\n${$edad} `;

  return false;
};

//para borrar el nombre en el saludo
$botonReset.onclick = function() {
  document.querySelector('#saludo').textContent = 'Bienvenida!!';
};
