// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = (prompt("¿Como te llamas?") || "").toLowerCase();
const MI_NOMBRE = "jose";
const NOMBRE_HIJO = "benjamin";

if(MI_NOMBRE === nombreUsuario){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}` );
}else if(NOMBRE_HIJO === nombreUsuario){
    console.log(`Hola ${nombreUsuario} te llamas igual que mi hijo`);
}else if(nombreUsuario.trim().length === 0){
    console.log('No ingresaste ningun nombre');
}else {
    console.log(`Hola ${nombreUsuario}`);
}




//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/* const edadUsuario = Number(prompt("¿Cual es tu edad?"));
const miEdad = 27;

if(edadUsuario === miEdad){
    console.log("tenemos la misma edad");
}else if(edadUsuario > miEdad){
    console.log("Sos mayor que yo");
}else if(edadUsuario < miEdad){
    console.log("Sos menor que yo");
}else{
    console.log("no entendi tu edad");
} */

/* 
const edadUsuario = Number(prompt("¿Cuantos años tenes?") || "").toLowerCase();
const MI_EDAD = 27;

if (MI_EDAD === edadUsuario) {
    console.log("Mira vos che, tenemos la misma edad");
}else if (MI_EDAD < edadUsuario) {
    console.log("Sos mas grande que yo");
}else if(MI_EDAD > edadUsuario){
    console.log("Soy mas grande que vos");
}else if (edadUsuario.trim().length === 0){
    console.log("No ingresaste ninguna edad");
}else{
    console.log("No entendi tu edad");
} */
const edadUsuario = Number(prompt("¿Cuantos años tenes?"));
const MI_EDAD = 27;

if (MI_EDAD === edadUsuario) {
    console.log("Mira vos che, tenemos la misma edad");
}else if (MI_EDAD < edadUsuario) {
    console.log("Sos mas grande que yo");
}else if(MI_EDAD > edadUsuario){
    console.log("Soy mas grande que vos");
}else{
    console.log("No entendi tu edad");
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

// "Fabricio" === "fabricio"

const usuarioTieneDocumento = (prompt("¿Tenes el comumento?") || "").toLowerCase();
const RESPUESTA_AFIRMATIVA = "si";
const RESPUESTA_NEGATIVA = "no";
const EDAD_MINIMA_PARA_ENTRAR = 18;

if(RESPUESTA_AFIRMATIVA === usuarioTieneDocumento){
    const edadDelUsuario = Number(prompt("¿Cuantos años tenes?"));

    if(edadDelUsuario >= 18){
        console.log("Sos mayor de edad,pasa tranquilo");
    }else if(edadDelUsuario < 18){
        console.log("No compremetas al personal pibe, sos menor de edad, no te puedo dejar pasar");
    }else{
        console.log("no se te entiende");
    }
    
}else if(RESPUESTA_NEGATIVA === usuarioTieneDocumento){
    console.log("No compremetas al personal pibe, sin documento no te puedo dejar pasar");
}else{
    console.log("no se te entiende");
}
