//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

let nombreUsuario;
let edadUsuario;
let $botonEnviar = document.querySelector(".boton_enviar_datos");
let informacionUsuario = document.querySelector(".user_information");
let saludoUsuario = document.querySelector(".saludo");
let $botonReset = document.querySelector(".boton_reset")

$botonEnviar.onclick = function () {
    nombreUsuario = document.querySelector(".user_name").value;
    edadUsuario = Number(document.querySelector(".user_age").value);
    saludoUsuario.textContent = `Bienvenido/a, ${nombreUsuario}!!`;
    informacionUsuario.style.display = "block";
    informacionUsuario.innerText = `Tu nombre completo es ${nombreUsuario}\nTu edad es ${edadUsuario}`;
    return false;


}

$botonReset.onclick = function () {
    nombreUsuario = "";
    edadUsuario = "";
    informacionUsuario.style.display = "none";
    saludoUsuario.textContent = `Bienvenido`;


}

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */
