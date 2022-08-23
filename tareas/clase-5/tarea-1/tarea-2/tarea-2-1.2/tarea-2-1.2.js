const informacionUsuario = (document.querySelector('#mostrar-informacion-usuario').onclick = function () {
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellidos-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);

    const datosUsuario = capturarInformacionUsuario(
        primerNombreUsuario,
        segundoNombreUsuario,
        apellidoUsuario,
        edadUsuario,
    );
    const saludoAlUsuario = 'Bienvenid@';
    document.querySelector('#bienvenido').innerText = `${saludoAlUsuario} ${datosUsuario}`;

    return false;
});

function capturarInformacionUsuario(primerNombreUsuario, segundoNombreUsuario, apellidoUsuario, edadUsuario) {
    const informacionDelUsuario = `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} de ${edadUsuario} años`;
    return informacionDelUsuario;
}

const limpiarFormulario = (document.querySelector('#borrar').onclick = function () {
    const borrar = (document.querySelector('#bienvenido').innerText = 'Bienvenid@!');
});
