const $saludoUsuario = document.querySelector("#ingreso-usuario");

$saludoUsuario.onclick = function() {

    const $nombreUsuario = document.querySelector("#nombre-usuario").value;
    const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const $edadUsuario = Number(document.querySelector("#edad-usuario").value);
}