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
    //usamos interpolacion de strings
    console.log(`Hola, Tocayo! Yo tambien me llamo ${nombreUsuario}`);
}else if(otroNombre === nombreUsuario){
    console.log(`Hola ${otroNombre}, te llamás igual que el abogado`);
}else{
    console.log(`Hola ${nombreUsuario}!`);
}
*/
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
}

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

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//Correccion desde el video https://www.youtube.com/watch?v=sI_u2Nj84Ls

//usar ctes en mayuscula
const MI_NOMBRE = 'fabrizio';

//si apreto ESC en el prompt, me da NULL (vacio)
//NUll != undefined
//cofre cerrado = undefined
//cofre abierto y vacio = NULL, ausencia de valor

const nombreUsuario = (prompt('Como te llama?') || '').toLowerCase();

//funcion trim para strings, me saca los espacios antes y despues
nombreUsuario.trim();

//estoy preguntando si el string está vacio
nombreUsuario.trim().length === 0;

//operadores
//convertir algo en boolean

Number("1");    //me convierte string a numero
Boolean(2);     //me da true
2 || algo;      //me da true por el 2, y no se gasta en seguir revisando. OR

const nombreUsuario = prompt('COmo te llamás?') || '';
// "" || "" el primer vacio va ser false, entonces va adoptar el segundo paramtro, aunque tmb sea false.
//Revisar documentacion con este tema de booleans
// hay algo llamado "masomenos false o masomenos true"
//ejemplos
// "" || "" me da vacio ""
// false || "" me da ""
// "" || false me da false


//una forma de hacerlo:
let nombreUsuario = prompt('Como te llamas?');
if(nombreUsuario === null){
    nombreUsuario = "";
}
nombreUsuario = nombreUsuario.toLowerCase();

//forma mas corta:
const nombreUsuario = (prompt("COmo te llamas?") || "").toLowerCase();

//puedo poner en constantes:
const TEXTO_PREGUNTA_EDAD = "Que edad tenés?";
// el año que viene, solo cambio la cte y se cambia en todo el programa
const MI_EDAD = 32;

*/

/*
//correccion tarea 3

const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = "si";
const RESPUESTA_NO = 'no';

const usuarioTieneDocumento = (prompt("Tenes documento?") || '').toLowerCase();

if(usuarioTieneDocumento === RESPUESTA_SI){
    const edadUsuario = Number(prompt('cuantos años tenes?'));

    if(edadUsuario >= EDAD_MINIMA_PARA_ENTRAR){
        console.log('Bienvenido al bar!');
    }else if(edadUsuario < EDAD_MINIMA_PARA_ENTRAR){
        console.log('no podes entrar al bar.');
    }else {
        console.log('no entendi la respuesta');
    }
}else if(usuarioTieneDocumento === RESPUESTA_NO){
    console.log('se necesita documento para pasar al bar');
}else{
    console.log('no entendi la respuesta');
}
*/



//-----------------------------------------------------------------------
//ejemplo 3 clean code

function tarea(){
    tareaCompararNombres();
    tareaCompararEdades();
    tareaEntradaAlBar();
}

function tareaCompararNombres(){
    const NOMBRE_MIO = "juan carlos";
    const NOMBRE_MI_PERRO = "chiquito";

    const nombreUsuario = prompt('Como te llamas?');
    const nombreUsuarioMinusculas = nombreUsuario.toLowerCase();

    if(NOMBRE_MIO === nombreUsuarioMinusculas){
        alert(`Bienvenido Tocayo! Yo tambien me llamo ${NOMBRE_MIO}`);
    }else if(NOMBRE_MI_PERRO === nombreUsuarioMinusculas){
        alert(`${NOMBRE_MI_PERRO}?, te llamás como mi Perro. Bienvenido igual al bar!`);
    }else{
        alert(`Bienvenido ${nombreUsuario}`);
    }
}

function tareaCompararEdades(){
    const EDAD_MIA = 32;

    const edadUsuario = Number(prompt('Cuantos años tenes?'));

    if(edadUsuario < EDAD_MIA){
        alert('Soy mas grande que vos');
    }else if(edadUsuario > EDAD_MIA){
        alert('Sos mas grande que yo');
    }else{
        alert(`Tenemos la misma edad, ${EDAD_MIA}`);
    }
}

function tareaEntradaAlBar(){
    const EDAD_MINIMA_PARA_ENTRAR = 18;
    const SALUDO_ENTRADA = 'Asi que queres entrar al bar, vamos a ver';
    alert(SALUDO_ENTRADA);

    const tieneDNI = preguntarDNIEnLaEntrada();

    if(tieneDNI){
        preguntarEdadEnLaEntrada(EDAD_MINIMA_PARA_ENTRAR);
    }
}

function preguntarDNIEnLaEntrada(){
    const RESPUESTA_SI = 'si';
    const RESPUESTA_NO = 'no';

    //este codigo, si toco ESC, va fallar, arreglar luego.
    const usuarioTieneDNI = prompt('Tenes DNI? (si o no').toLocaleLowerCase();

    if(usuarioTieneDNI === RESPUESTA_SI){
        return true;
    }else if(usuarioTieneDNI === RESPUESTA_NO){
        alert('Anda buscar tu DNI');
        return false;
    }else{
        alert('No te entendí');
        //recursividad
        return preguntarDNIEnLaEntrada();
    }
}

function preguntarEdadEnLaEntrada(edadMinimaParaIngresar){
    const edadUsuario = Number(prompt('cuantos años tenes?'));
    const esMayorDeEdad = edadUsuario >= edadMinimaParaIngresar;
    if(esMayorDeEdad){
        alert('Bienvenido al bar.');
    }else{
        alert('NO podes pasar.');
    }

}

tarea();