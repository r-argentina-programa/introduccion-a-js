const botonRegistro = document.querySelector("#boton-registro");

botonRegistro.onclick = function(){
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre").value;
    const apellidoUsuario =document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;
    const mostrarDatos = document.querySelector("#mostrar-datos");
    const bienvenidaUsuario = document.querySelector("h1");

    mostrarDatos.value = `Hola ${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} tu edad es ${edadUsuario} años`;
    bienvenidaUsuario.innerText = `Bienvenido ${nombreUsuario}!!`;

    return false;
}