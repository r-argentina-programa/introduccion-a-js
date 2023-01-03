// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let nombreUsuario = prompt("¿Como te llamas?");
const miNombre = "Jonathan";
const nombrePerro = "Neron";

if (nombreUsuario === miNombre) {
  console.log(`Hola, Tocayo!, yo tambien me llamo ${miNombre}`);
} else if (nombreUsuario === nombrePerro) {
  console.log(`Hola ${nombreUsuario}, te llamas igual que mi perro`);
} else {
  console.log(`Hola ${nombreUsuario}`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt("¿Cuantos años tenes?"));
const miEdad = 23;

if (edadUsuario === miEdad) {
  console.log(`Tenes la misma edad que yo`);
} else if (edadUsuario < miEdad) {
  console.log(`Sos menor que yo`);
} else if (edadUsuario > miEdad) {
  console.log(`Sos mayor que yo`);
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let tieneDocumento = prompt("Hola, ¿tenes documento?");
const mayorDeEdad = 18;

if (tieneDocumento.toLowerCase() === "si") {
  const edadUsuario = Number(prompt("¿Que edad tenes?"));
  if (edadUsuario >= mayorDeEdad) console.log("Podes entrar al bar");
  else if (edadUsuario < mayorDeEdad) console.log("No podes entrar al bar");
} else if (tieneDocumento.toLowerCase() === "no") {
  console.log("No podes entrar al bar");
} else {
  console.log(`No entendi la respuesta ${tieneDocumento}`);
}
