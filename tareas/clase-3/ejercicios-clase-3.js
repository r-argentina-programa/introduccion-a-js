// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!



let nombreUsuario = prompt('¿Cómo te llamas?').toLowerCase();
const miNombre = 'daniel';
const nombreAmigo = 'felipe';

if (nombreUsuario !== null) {
    if (nombreUsuario === miNombre) {
        console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}.`);
    }else if (nombreUsuario === nombreAmigo) {
        console.log(`Hola ${nombreUsuario} te llamas igual que mi amigo.`);
    }else {
        console.log(`Hola ${nombreUsuario}!`);
    }
} else {
    console.log('Error: Debes ingresar un nombre.');
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt(`¿Qué edad tenes?`));
let miEdad = 32;
if (edadUsuario > miEdad) {
    console.log('Sos mayor que yo.');
} else if (edadUsuario < miEdad) {
    console.log('Sos menor que yo.');
} else if (edadUsuario === miEdad) {
    console.log('Tenemos la misma edad.');
} else {
    console.log('Error: Debes ingresar un número.');
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


let documentoUsuario = prompt('¿Tenés documento?', 'si/no');
if (documentoUsuario !== null) {
    documentoUsuario = documentoUsuario.toLowerCase();
}
if (documentoUsuario === 'si') {
    const edadUsuario = Number(prompt('¿Qué edad tenés?'));
    if (edadUsuario >= 18) {
        console.log('Podes entrar al bar.');
    } else {
        console.log('No podes entrar al bar.');
    }
} else if (documentoUsuario === 'no') {
    console.log('No podes entrar al bar.');
} else {
    console.log('No entiendo tu respuesta.');
}
