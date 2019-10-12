// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// let nombreUsuario = prompt('¿Cuál es tu nombre?');
// const miNombre = 'Lucas';
// const nombreHijo = 'Agustín';

// if (nombreUsuario === miNombre) {
//     alert('Hola tocayo, yo también me llamo ' + miNombre);
// }
// if (nombreUsuario === nombreHijo) {
//     alert('Hola ' + nombreUsuario + ', te llamás igual a mi hijo');
// }
// else ('Hola' + nombreUsuario);


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

// let edadUsuario = Number (prompt('¿Qué edad tenés?'));
// const edadMia = 36;

// if (edadUsuario === edadMia){
//     alert('Tenés mi misma edad!!!');
// }
// if (edadUsuario < edadMia){
//     alert('Sos más chico que yo!!!')
// }
// if (edadUsuario > edadMia){
//     alert('Sos más grande que yo!!!')
// }


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let preguntarUsuario = prompt('¿Tenés documento?');
let respuestaLower = preguntarUsuario.toLocaleLowerCase();
let edadUsuario;

if (respuestaLower === 'si') {
    edadUsuario = Number(prompt('¿Qué edad tenés?')); //faltaba el Number

    if (edadUsuario > 18) {
        alert('Bienvenido!!!');
    }
    if (edadUsuario < 18) {
        alert('No te puedo dejar pasar');
    }
}
if (respuestaLower === 'no') {
    alert('Sin documentos no puedo dejarte entrar!!!')
}
else {
    alert('No te entiendo. Hablá bien!!!');
}
