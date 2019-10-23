//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario

// también vamos a crear un <h1> que diga Bienvenido!

// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector('#resultado').onclick = function() {
    const primerNombreUsuario = String(document.querySelector('#nombre').value);
    const devolucionUsuario = String(document.querySelector('#nombre').value) + ' ' + 
    String(document.querySelector('#segNombre').value) + ' ' + String(document.querySelector('#apellido').value) + ' ' + 
    String(document.querySelector('#edad').value);
    document.querySelector('#head1').textContent = 'Bienvenido, ' + primerNombreUsuario;
    document.querySelector('#textoResultado').textContent = devolucionUsuario;

    return false;
}

