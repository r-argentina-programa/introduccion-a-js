const btn = document.querySelector("#btn")

btn.onclick = function(){
let nombre = document.querySelector("#nombre_user").value
const segundoNombre = document.querySelector("#segundoNombre_user").value
const apellido = document.querySelector("#apellido_user").value
const edad = document.querySelector("#edad_user").value
const resultado = document.querySelector("#resultado")
const nuestroTitulo = document.querySelector("h1")

let nombreMayus = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase()
let segundoNombreMayus = segundoNombre[0].toUpperCase() + segundoNombre.slice(1).toLowerCase()
let apellidoMayus = apellido[0].toUpperCase() + apellido.slice(1).toLowerCase()

nuestroTitulo.innerText = "Bienvenido al sitio " + nombreMayus +"!"
resultado.innerText = "Tus datos personales: " + nombreMayus + " " + segundoNombreMayus + " " + apellidoMayus + ", " + edad +" años de edad.";
}