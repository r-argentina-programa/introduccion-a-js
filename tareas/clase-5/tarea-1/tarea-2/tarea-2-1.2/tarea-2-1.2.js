document.querySelector('#mostrar-informacion-usuario').onclick = function () {
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

    document.querySelector('#bienvenido').innerText = `Bienvenid@! ${datosUsuario}`;

    return false;
};

function capturarInformacionUsuario(primerNombreUsuario, segundoNombreUsuario, apellidoUsuario, edadUsuario) {
    const informacionDelUsuario = `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} de ${edadUsuario} años`;
    return informacionDelUsuario;
}

document.querySelector('#borrar').onclick = function () {
    document.querySelector('#bienvenido').innerText = 'Bienvenid@!';
};

