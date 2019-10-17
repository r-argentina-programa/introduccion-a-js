
const $ingresar = document.querySelector("#ingresar");

$ingresar.onclick = function () {
    const $primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value;
    const $segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const $nombreUsuario = $primerNombreUsuario + " " + $segundoNombreUsuario + " " + $apellidoUsuario;
    document.querySelector("h1").textContent = "Bienvenido " + $nombreUsuario + "!";
}