const $botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function(){
    const nombreUsuario1 = document.querySelector('#nombre-1-usuario').value;
    const nombreUsuario2 = document.querySelector('#nombre-2-usuario').value;
    const apellidoUsuario1 = document.querySelector('#apellido-1-usuario').value;
    const apellidoUsuario2 = document.querySelector('#apellido-2-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    document.querySelector('#datos-usuario').value = `${nombreUsuario1} ${nombreUsuario2} ${apellidoUsuario1} ${apellidoUsuario2} ${edadUsuario}`
    document.querySelector('#bienvenida').innerText = `Bienvenido, ${nombreUsuario1}!`;
    return false;
}
