// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

//Tarea 1
/*
let nombreUsuario = prompt('Cuál es tu nombre?');
nombreUsuario = nombreUsuario.toLowerCase();

let miNombre = 'Juan Carlos';
miNombre = miNombre.toLowerCase();

let otroNombre = 'Osmar';
otroNombre = otroNombre.toLowerCase();

if (miNombre === nombreUsuario){
    console.log(`Hola, Tocayo! Yo tambien me llamo ${nombreUsuario}`);
}else if(otroNombre === nombreUsuario){
    console.log(`Hola ${otroNombre}, te llamás igual que el abogado`);
}else{
    console.log(`Hola ${nombreUsuario}!`);
}*/

//tarea 2
/*
let miEdad = 32;
let userEdad = Number(prompt('Cual es tu edad?'));

if(miEdad === userEdad){
    console.log('Tenés mi misma edad');
}else if(miEdad > userEdad){
    console.log('Sos más chico que yo.');
}else{
    console.log('Sos más grande que yo');
}*/

let consulta = prompt('Tenés documento? (si/no)');
consulta = consulta.toLowerCase();

if(consulta === 'si'){
    let edad = prompt('cual es tu edad?');
    if(edad>=18){
        alert('Puedes entrar al bar.');
    }else if (edad < 18){
        alert('No podés entrar al bar.');
    }else{
        alert('No entendí la respuesta.');
    }
}else if(consulta === 'no'){
    alert('No podés entrar al bar.');
}else{
    alert('No entendí la respuesta.');
}