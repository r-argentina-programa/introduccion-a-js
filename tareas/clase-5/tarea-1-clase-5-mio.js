
const $primerNombre = document.querySelector("#primer-nombre")
const $segundoNombre = document.querySelector("#segundo-nombre")
const $apellido = document.querySelector("#apellido")
const $edad = document.querySelector("#edad")


const $botonIngresar = document.querySelector("#boton-ingresar")
const $titulo = document.querySelector("h1");
const $subtitulo = document.querySelector("h2"); 

const $body = document.querySelector("body")

$botonIngresar.onclick = function(){

    $titulo.innerText = 
    `Bienvenido ${$primerNombre.value} ${$segundoNombre.value} ${$apellido.value}`;
    
    $subtitulo.innerText = 
    `Tenes ${$edad.value} años`;

    return false;
    
}