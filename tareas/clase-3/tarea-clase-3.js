// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
const miNombre = "alan";
const miNovia = "ayelen";
const nombreUsuario = prompt("Como te llamas?");

if( nombreUsuario.toLowerCase() == miNombre){
        console.log(`Hola ${nombreUsuario}!, te llamas como yo.`);
}else if ( nombreUsuario.toLowerCase() == miNovia){
        console.log(`Hola ${nombreUsuario}!, te llamas como mi novia.`);
}else{
        console.log(`Hola ${nombreUsuario}!`);
};
*/



//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
const edadUsuario = Number(prompt("Cual es tu edad?"));
const miEdad = 24;

if(edadUsuario === miEdad){
    console.log("Tenes mi misma edad!");
}else if(edadUsuario < miEdad){
    console.log("Sos mas chico que yo");
}else if(edadUsuario > miEdad){
    console.log("Sos mas grande que yo");
}else{
    console.log("No entendi tu edad");
};
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


// Funcion recursiva TEST 1

function ENTRAR_AL_BOLICHE(){

const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";
const EDAD_MINIMA_PARA_ENTRAR = 18;
const PREGUNTA_DNI = (prompt("Tenes DNI? (SI/NO)") || "").toLowerCase();


const usuarioTieneDni = PREGUNTA_DNI;

    if(usuarioTieneDni === RESPUESTA_SI){
            const edadUsuario = Number(prompt("Cuantos años tenes?"));
            if(edadUsuario >= EDAD_MINIMA_PARA_ENTRAR){
                console.log("Bienvenido Pez");
            }else if(edadUsuario < EDAD_MINIMA_PARA_ENTRAR){
                console.log("Raja de aca Pa', sos menor de edad");
            }else{
                console.log("No te entendi");
                return ENTRAR_AL_BOLICHE()
            }

    }else if(usuarioTieneDni === RESPUESTA_NO){
        console.log("Como que te no tenes DNI? Juira");
    }else{
        console.log("No te entendi");
        return ENTRAR_AL_BOLICHE()
    }

}

//ENTRAR_AL_BOLICHE();