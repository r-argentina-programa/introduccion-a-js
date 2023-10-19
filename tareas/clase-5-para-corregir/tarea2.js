// Tarea 2
// En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $submitButton = document.querySelector("#submit");

$submitButton.onclick = () => {
  const firstName = document.querySelector("#first-name").value;
  const secondName = document.querySelector("#second-name").value;
  const lastName = document.querySelector("#last-name").value;
  const age = document.querySelector("#age").value;

  document.querySelector("#welcome-message").innerText = `Bienvenido ${firstName}!`;
  document.querySelector(
    "#data-display"
  ).innerText = `Nombre: ${firstName} ${secondName}\nApellido/s: ${lastName}\nAge: ${age}`;
};
