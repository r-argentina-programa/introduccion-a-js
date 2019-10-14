//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!



document.querySelector('#ingresar').onclick = function(){
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = document.querySelector ('#edad-usuario').value;

    let titulo = document.querySelector('h1');
    titulo.innerText = ('Bienvenido, ' + nombreUsuario + '!');

    resultado.innerText = `Nombre: ${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} Edad: ${edadUsuario} años.`;
}




