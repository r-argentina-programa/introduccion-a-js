// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
const nombreUsuario = prompt('Cual es tu nombre?').toLowerCase() //Para minuscula es " string.toLowerCase() "

let miNombre = 'guillermo'
let nombreMadre = 'marcia'
let nombrePadre = 'elias'
let nombreHermana = 'valeria'

if (nombreUsuario === miNombre) {
    console.log(`Hola ${nombreUsuario}!, yo tambien me llamo ${nombreUsuario}`)
} else if (nombreUsuario === nombreMadre) {
    console.log(`Hola ${nombreUsuario}!, te llamas igual que mi madre`)
} else if (nombreUsuario === nombrePadre) {
    console.log(`Hola ${nombreUsuario}!, te llamas igual que mi padre`)
} else {
    console.log(`Hola ${nombreUsuario}!`)
}
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
let miEdad = '26'
let edadUsuario = prompt(`Cual es tu edad?`)

if (edadUsuario === '26') {
    console.log(`tenes mi misma edad!`)
} else if (edadUsuario > '26') {
    console.log(`sos mayor que yo`)
} else {
    console.log(`sos menor que yo`)
}
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/*
let documentoUsuario = prompt(`tenes documento? (si/no)`).toLowerCase()

if (documentoUsuario === `si`) {
    let edadUsuario = prompt(`cual es tu edad?`)
    if (edadUsuario >= 18) {
        console.log(`Bienvenido al bar`)
    } else if (edadUsuario < 18) {
        console.log(`No podes ingresar al bar`)
    } else {
        console.log(`No entiendo tu respuesta`)
    }
} else {
    console.log(`no podes ingresar al bar`)
}
*/



function tarea() {
    //  comparacionNombre()
    //   comparacionEdad()
    //  preguntaDniEntrada()
}

const MI_NOMBRE = 'guillermo'
const NOMBRE_MADRE = 'marcia'

function comparacionNombre() {
    const nombreUsuario = prompt('Cual es tu nombre?' || "").toLowerCase()
    if (nombreUsuario === MI_NOMBRE) {
        alert(`bienvenido ${nombreUsuario}!, tu nombre es igual al mio`)
    } else if (nombreUsuario === NOMBRE_MADRE) {
        alert(`bienvenido ${nombreUsuario}, tu nombre es igual al de mi madre`)
    } else {
        alert(`Bienvenido ${nombreUsuario}!`)
    }
    return
}

const MI_EDAD = 26

function comparacionEdad() {
    const EDAD_USUARIO = Number(prompt(`cual es tu edad?`));
    if (EDAD_USUARIO === MI_EDAD) {
        alert(`Tienes la misma edad que yo`)
    } else if (EDAD_USUARIO > MI_EDAD) {
        alert(`Eres mayor que yo`)
    } else if (EDAD_USUARIO < MI_EDAD) {
        alert(`Eres menor que yo`)
    } else {
        alert(`No entendi tu respuesta`)
        comparacionEdad()
    }
}

//TAREA 3

function preguntaDniEntrada() {
    const RESPUESTA_SI = 'si'
    const RESPUESTA_NO = 'no'
    const preguntaDocumento = prompt(`Tenes documento? (RESPONDER SI/NO)`).toLowerCase().trim()
    if (preguntaDocumento === RESPUESTA_SI) {
        return true
    } else if (preguntaDocumento === RESPUESTA_NO) {
        return false
    } else {
        alert('no entendi tu respuesta')
        return preguntaDniEntrada()
    }
}


function preguntaEdadEntrada() {
    const MAYOR_DE_EDAD = 18
    EDAD_USUARIO = Number(prompt('Cual es tu edad?' || ""))
    if (EDAD_USUARIO === 0) {
        alert(`Ingrese un numero valido`)
        return preguntaEdadEntrada()
    } else if (EDAD_USUARIO >= MAYOR_DE_EDAD) {
        return true
    } else if (EDAD_USUARIO < MAYOR_DE_EDAD) {
        return false
    } else {
        alert(`No entendi tu respuesta`)
        return preguntaEdadEntrada()
    }
}

const tieneDni = preguntaDniEntrada()
if (tieneDni) {
    const esMayor = preguntaEdadEntrada()
    if (esMayor) {
        alert(`Bienvenido`)
    } else {
        alert(`Menores no pueden ingresar`)
    }
} else {
    alert(`Sin DNI no pasas`)
}

