//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!




const botonBienvenida = document.querySelector("#boton-bienvenida");

botonBienvenida.onclick = function(event) {
    let resultado = "";

    const mensajeBienvenida = document.querySelector('h1');
    const resultadoAMostrar = document.querySelector("#resultado")

    const nombre1Usuario = document.querySelector("#primer-nombre").value;
    const nombre2Usuario = document.querySelector("#segundo-nombre").value;
    const apellidoUsuario = document.querySelector("#apellido").value;
    const edadUsuario = document.querySelector("#edad").value;

    resultado = (nombre1Usuario + " " + nombre2Usuario + " " + apellidoUsuario + `, ${edadUsuario} años.`);

    resultadoAMostrar.value = resultado;

    mensajeBienvenida.innerText = `Bienvenido, ${nombre1Usuario}!`;

    event.preventDefault();
    return false;
}