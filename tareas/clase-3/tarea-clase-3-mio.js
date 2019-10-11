// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/* const miNombre = "Guido";
const nombreMadre = "Norma";
const nombreUsuario = prompt("Igresá tu nombre") || "";

if (miNombre === nombreUsuario) {
	console.log(`Hola tocayo! Yo también me llamo ${miNombre}`);
} else if (nombreMadre === nombreUsuario) {
	console.log(`Hola ${nombreUsuario}! Te llamás igual que mi madre`);
} else {
	console.log(`Hola ${nombreUsuario}!`);
} */

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/* const miEdad = 27;
const edadUsuario = Number(prompt("Ingresá tu edad"));

if (edadUsuario === miEdad) {
	console.log(`Tenés la misma edad que yo!`);
} else if (edadUsuario <= miEdad) {
	console.log(`Tenés menos años que yo!`);
} else if (edadUsuario >= miEdad) {
	console.log(`Tenés más años que yo!`);
} else {
	console.log("Ingresaste un valor erróneo");
} */

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function validacionEdad() {
	const tieneDocumento = (prompt("Tenés documento? (si/no)") || "").toLowerCase;
	const EDAD_MINIMA = 18;

	if (tieneDocumento === "no") {
		return "Disculpame, sin documento no te puedo dejar pasar";
	} else if (tieneDocumento === "si") {
		const edad = prompt("¿Cuántos años tenés?");
		if (Number(edad) >= EDAD_MINIMA) {
			return "Bienvenido al bar!";
		} else if (Number(edad) < EDAD_MINIMA) {
			return `Disculpame, no podés entrar con menos de ${EDAD_MINIMA} al bar`;
		} else {
			return "Disculpame, no te entendí";
		}
	} else {
		return "Disculpame, no te entendí";
	}
}

console.log(validacionEdad());
