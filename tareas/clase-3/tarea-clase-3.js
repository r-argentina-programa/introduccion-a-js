// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const MI_NOMBRE = "alexis";
const NOMBRE_HERMANO = "gaspar";
const nombreUsuario = (prompt("Cual es tu nombre?") || "").toLowerCase();

if (MI_NOMBRE === nombreUsuario) {
    console.log(` Hola Tocayo, yo tambien me llamo ${nombreUsuario}`);
} else if (NOMBRE_HERMANO === nombreUsuario) {
    console.log(`Hola, te llamas igual que mi hermano!`);
} else if (nombreUsuario.trim().length === 0) {
    console.log("No ingresaste nungún nombre")
} else {
    console.log(`Hola ${nombreUsuario}`)
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MI_EDAD = 30;
const edadUsuario = Number(prompt("Cual es tu edad?"));

if (MI_EDAD === edadUsuario) {
    console.log(`Tenemos la misma edad!`);
} else if (edadUsuario > MI_EDAD) {
    console.log(`Sos mayor que yo!`);
} else if (edadUsuario < MI_EDAD) {
    console.log(`Sos menor que yo!`);
} else {
    console.log(`No te entendí la respuesta`)
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

alert("Bienvenidos al Bar");
const EDAD_MINIMA_PARA_ENTRAR = 18;
const tenesDocumento = (prompt("Tenes documento? (Si/No)" || "")).toLowerCase();
let edad;


if (tenesDocumento === "si") {
    edad = Number(prompt("Cual es tu edad?"));
    if (edad >= EDAD_MINIMA_PARA_ENTRAR) {
        console.log("Podes entrar al bar!");
    } else {
        console.log("Sos menor, no podes entrar al bar!");
    }
} else if (tenesDocumento === "no") {
    console.log("No podes entrar al bar!");
} else {
    console.log("No entendí tu respuesta");
}
