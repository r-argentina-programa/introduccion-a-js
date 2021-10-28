const $nombreUsuario = document.querySelector('#nombre-usuario');
const $edadUsuario = document.querySelector('#edad-usuario');
const $botonIngresar = document.querySelector('#ingresar');
const $resultado = document.querySelector('#resultado');

$botonIngresar.onclick = function(){
    const nombreUsuario = $nombreUsuario.value;
    const edadUsuario = $edadUsuario.value;

    $resultado.textContent = nombreUsuario + ' , ' + edadUsuario + ' años.';

    document.querySelector('h1').textContent = `Bienvenido, ${nombreUsuario}`;
}
