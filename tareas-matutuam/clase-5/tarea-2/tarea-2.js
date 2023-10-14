/*
Tarea 2:
========

- Crear un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
- También vamos a crear un <h1> que diga Bienvenido!
- Vas a crear un botón de acción que una vez apretado va a mostrar toda la información
*/

const $botonEnviar = document.querySelector("#boton-enviar");

$botonEnviar.onclick = function(event) {
    const primerNombre = document.querySelector("#nombre-usuario-1").value;
    const segundoNombre = document.querySelector("#nombre-usuario-2").value;
    const primerApellido = document.querySelector("#apellido-usuario-1").value;
    let segundoApellido = document.querySelector("#apellido-usuario-2").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value);


    if (document.querySelector("#apellido-usuario-2").value === "") {
      segundoApellido = document.querySelector("#apellido-usuario-2").value = "N/C";
    }

    saludarUsuario(primerNombre);
    mostrarInformacionUsuario(primerNombre, segundoNombre, primerApellido, segundoApellido, edadUsuario);

    event.preventDefault();
}

function saludarUsuario(nombreUsuario) {
  document.querySelector("h1").innerText = `Bienvenido, ${nombreUsuario}!`;
}

function mostrarInformacionUsuario(primerNombre, segundoNombre, primerApellido, segundoApellido, edad) {
  document.querySelector("#primer-nombre").innerText = primerNombre;
  document.querySelector("#segundo-nombre").innerText = segundoNombre;
  document.querySelector("#primer-apellido").innerText = primerApellido;
  document.querySelector("#segundo-apellido").innerText = segundoApellido;
  document.querySelector("#edad").innerText = edad;
}
