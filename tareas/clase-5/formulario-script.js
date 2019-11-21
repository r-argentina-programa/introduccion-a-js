const $INGRESAR = document.querySelector('#boton-ingresar');
const $INFORMACION = document.querySelector('#informacion');
const $TITULO = document.querySelector('h1');

$INGRESAR.onclick = function(){
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    $INFORMACION.value = `${nombreUsuario} ${apellidoUsuario} # ${edadUsuario} Años`;
    $TITULO.textContent = `Bienvenid@ ${nombreUsuario}!`
    return false;
}
