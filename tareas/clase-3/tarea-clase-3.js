// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
/*
let nombreUsuario = prompt("Ingrese su nombre").toLowerCase()
const miNombre = ("Leonardo").toLowerCase()
const nombrePariente = ("Alejandro").toLowerCase()
let userConMayus = nombreUsuario[0].toUpperCase()+nombreUsuario.slice(1)

function saludar(nombreUsuario){
let mensaje;    
    if(nombreUsuario === miNombre){
        mensaje = "Hola tocayo!, yo también me llamo " + userConMayus +"!.";
    } else if (nombreUsuario === nombrePariente){
        mensaje = "Hola " + userConMayus + "!, te llamas igual que mi cuñado." 
    } else {
        mensaje = "Hola " + userConMayus +"!, bienvenido al sitio"
    }
    console.log(mensaje)
}

saludar(nombreUsuario)
*/



//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
let edadUsuario = prompt("Ingrese su edad")
let miEdad = 32
function compararEdad (edadUsuario){
    let mensaje;
    if (edadUsuario > miEdad){
        mensaje = "Sos mayor que yo, tenés " + edadUsuario + " años."
    } else if (edadUsuario < miEdad){
        mensaje = "Sos menor que yo, tenés " + edadUsuario + " años."
    } else {
        mensaje = "Tenemos la misma edad, ambos " + edadUsuario + " años."
    }
    console.log(mensaje)
}
compararEdad(edadUsuario)
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/*
const tieneDNI = prompt("¿Tenés documento? (Si/No)").toLowerCase();
const afirmativo = "si";
const negativo = "no";
const edadMinima = 18;

function ingresoAlBar(){
let mensaje;
if (tieneDNI === afirmativo) {
    const edadUsuario = Number(prompt("¿Cuántos años tenés?"));

    if (edadUsuario >= edadMinima) {
        mensaje = "¡Bienvenido al bar! Podés ingresar"
    } else if (edadUsuario < edadMinima) {
        mensaje = "No se puede ingresar siendo menor de 18 años."
    } else {
        mensaje = "No entendí su respuesta"
    }
} else if (tieneDNI === negativo) {
        mensaje = "No podés ingresar sin DNI"
} else {
        mensaje = "No entendí su respuesta"
}   
        alert(mensaje)
}
ingresoAlBar()
*/

