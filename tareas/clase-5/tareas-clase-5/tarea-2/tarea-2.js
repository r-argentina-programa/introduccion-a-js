document.querySelector('#mostrar-informacion-usuario').onclick = function () {
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidosUsuario = document.querySelector('#apellidos-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    const informacionUsuario = capturarInformacionUsuario(
        primerNombreUsuario,
        segundoNombreUsuario,
        apellidosUsuario,
        edadUsuario,
    );
    const saludoAUsuario = 'Bienvenid@!';

    document.querySelector('#borrar').onclick = function () {
        document.querySelector('#bienvenido').innerHTML = `${saludoAUsuario}`;
    };

    document.querySelector('#bienvenido').innerHTML = `${saludoAUsuario} ${informacionUsuario}`;
    return false;
};

function capturarInformacionUsuario(primerNombreUsuario, segundoNombreUsuario, apellidosUsuario, edadUsuario) {
    return `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidosUsuario} de ${edadUsuario} años`;
}
