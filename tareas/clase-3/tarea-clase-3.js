// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const miNombre = 'sergio';
const nombreMiMascota = 'nina'
const nombreUsuario = prompt('ingrese su nombre', 'ingresa tu nombre para continuar...').toLowerCase();

if (nombreUsuario === miNombre) {
    console.log(`Hola tocayo! yo tambien me llamo ${nombreUsuario}!`);
} else if (nombreUsuario === nombreMiMascota) {
    console.log(`Hola ${nombreUsuario}! Mi mascota tambien se llama asi`);
} else {
    console.log(`Hola ${nombreUsuario}!`)
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const miEdad = 28;
const edadUsuario = Number(prompt('cuantos anios tenes?', 'ingresa tu edad'));

if (edadUsuario < miEdad) {
    console.log(`Veo que tenes ${edadUsuario}, sos mas chico que yo, porque tengo ${miEdad} anios`);
} else if (edadUsuario > miEdad) {
    console.log(`Veo que tenes ${edadUsuario}, sos mas grande que yo, porque tengo ${miEdad}`);
} else {
    console.log(`Veo que tenes ${edadUsuario}, tenemos la misma edad!`)
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const tieneDocumento = prompt('trajiste tu DNI?', 'contestar por si o por no').toLowerCase();


if (tieneDocumento === 'si') {
    if (edadUsuario >= 18) {
        console.log('podes entrar al bar, pasa');
    } else {
        console.log('lo lamento, pero no podes ingresar al bar, volve cuando seas mayor de edad');
    }

} else {
    console.log('sin documento no puedo dejar que ingreses al bar, volve luego');
}
