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

// TAREA 1:
/*
const MI_NOMBRE = 'javier';
const NOMBRE_PROFE = 'fabricio';
let nombreDeUsuario = prompt('Por favor, escriba su nombre.') || ''; // PUEDO PONER EL .toLowerCase() aca en vez de ponerlo en cada if.

if (nombreDeUsuario.toLowerCase() === MI_NOMBRE){
    console.log(`Hola, Tocayo! Yo tambien me llamo ${nombreDeUsuario}`);
} else if (nombreDeUsuario.toLowerCase() === NOMBRE_PROFE) {
    console.log (`Hola ${nombreDeUsuario}, te llamas igual que mi profesor de programación!`)
} else if (nombreDeUsuario.toLowerCase().trim().length === 0) {
    console.log('No ingresaste ningun nombre.')
} else {
    console.log(`Hola ${nombreDeUsuario}!`); 
}


// TAREA 2:


const MI_EDAD = 28
let edadDeUsuario = Number(prompt('¿Cuantos años tenes?'));

if (edadDeUsuario > MI_EDAD){
    console.log('Sos mas viejo que yo!');
} else if (edadDeUsuario < MI_EDAD){
    console.log('Sos mas joven que yo!');
} else if (edadDeUsuario === MI_EDAD){
    console.log('Tenemos la misma edad!');
}


// TAREA 3:

const documentoDeUsuario = (prompt('¿Tenes documento?') || '').toLowerCase(); // de vuelta, puedo poner el .toLowerCase() aca en vez de ponerlo varias veces.
const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';

if (documentoDeUsuario.toLowerCase() === 'si') {
    const edadUsuario = Number(prompt('¿Y cuantos años tenes?'));
    if(edadUsuario >= EDAD_MINIMA_PARA_ENTRAR){
        console.log('Esta bien, podes pasar.');
        } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR){
            console.log('Sos menor de edad, no podes pasar.');
    } else {
        console.log('No entiendo la respuesta.');
    }
} else if (documentoDeUsuario.toLowerCase() === 'no'){
    console.log('Sin documento no pasas.');
} else {
    console.log('No entiendo la respuesta.');
}


*/

// INTENTAR HACERLO TODO EN FORMA DE FUNCION CON "FUNCTION" COMO EN EL VIDEO DE LA CLASE 4 MAS O MENOS "0:50 "




function tareaBAR(){

    entrarAlBar();


    function entrarAlBar() {
        const EDAD_MINIMA_PARA_ENTRAR = 18;
        
        const tieneDNI = preguntarDNI();

        if (tieneDNI) {
            preguntarEdad(EDAD_MINIMA_PARA_ENTRAR);
        }

}
    
function preguntarDNI() {
    const RESPUESTA_SI = 'si';
    const RESPUESTA_NO = 'no';

    const usuarioTieneDNI = prompt('Tenes DNI? Responder con SI o NO.').toLowerCase();
    
    if (usuarioTieneDNI === RESPUESTA_SI) {
        return true;
    } else if ( usuarioTieneDNI === RESPUESTA_NO) {
        alert('Sin DNI no te puedo dejar pasar');
        return false;
    } else {
        alert('No te entendi.');
        return preguntarDNI();
    }
}

function preguntarEdad(EDAD_MINIMA_PARA_ENTRAR) {
    
    const edadUsuario = Number(prompt('Cuantos años tenes?'));
    
    if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
        alert('Podes pasar.');
    } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
        alert('Sos menor de edad, no podes pasar.');
    } else {
        alert('No entiendo.');        
        preguntarEdad(EDAD_MINIMA_PARA_ENTRAR);           
    }
}

}

tareaBAR();





// ME SALIOOOOOOOOOOOOOOOOO