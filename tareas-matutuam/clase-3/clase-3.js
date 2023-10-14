/*
Tarea 1:
========

- Preguntarle al usuario su nombre
- Si el nombre del usuario es el mismo que el nuestro entonces imprimir "Hola, Tocayo!" y su nombre
- Elijan otro nombre, puede ser de un pariente, amigo, étc
- Si el nombre del usuario es el mismo que eligieron entonces imprimir "Hola..." y le decimos que se llaman igual
- Si no, simplemente escribir "Hola, " + nombre
*/

// const nombreUsuario = (prompt("¿Cómo te llamás?") || "").toLowerCase();
// const NOMBRE_ABUELA = "teresa";
// const MI_NOMBRE = "matias";

/*
if (MI_NOMBRE === nombreUsuario) {
    console.log(`Hola, Tocayo! Yo también me llamo ${MI_NOMBRE}`);
} else if (nombreUsuario === NOMBRE_ABUELA) {
    console.log(`Hola, ${nombreUsuario}! Te llamás igual que mi abuela`);
} else if (nombreUsuario.trim().length === 0) {
    console.log("No ingresaste ningún nombre");
} else {
    console.log(`Hola, ${nombreUsuario}`);
}
*/

/*
Tarea 2:
========

- Preguntar la edad del usuario
- Hacerle saber si tiene más, menos o la misma edad que nosotros
*/

// const edadUsuario = Number(prompt("¿Cuántos años tenés"));
// const MI_EDAD = 21;

/*
if (edadUsuario === MI_EDAD) {
    console.log("Hola! Tenemos la misma edad");
} else if (edadUsuario > MI_EDAD) {
    console.log("Hola! Vos sos más grande");
} else if (MI_EDAD > edadUsuario) {
    console.log("Hola! Yo soy más grande");
} else {
    console.log("No entiendo su respuesta");
}
*/

/*
Tarea 3:
========

- Preguntarle al usuario si tiene documento, y que conteste con "Si" o "No"
- Si dice que si, preguntarle la edad
- Si la edad es mayor a 18, dejarlo entrar al bar
- Si la edad es menor a 18, no dejarlo entrar al bar
- Si no tiene documento, no dejarlo entrar al bar
- Si no entendemos la respuesta, le decimos que no entendimos
*/

// const usuarioTieneDocumento = (prompt("¿Tenés documento? (Si/No)") || "").toLowerCase();
// const RESPUESTA_AFIRMATIVA = "si";
// const RESPUESTA_NEGATIVA = "no";
// const EDAD_PERMITIDA = 18;

/*
if (usuarioTieneDocumento === RESPUESTA_AFIRMATIVA) {
    const edadUsuario = Number(prompt("¿Cuántos años tenés?"));

    if (edadUsuario >= EDAD_PERMITIDA) {
        console.log("¡Bienvenido! Podés ingresar");
    } else if (edadUsuario < EDAD_PERMITIDA) {
        console.log("No podés ingresar");
    } else {
        console.log("No entendí su respuesta");
    }
} else if (usuarioTieneDocumento === RESPUESTA_NEGATIVA) {
    console.log("No podés ingresar sin documento");
} else {
    console.log("No entendí su respuesta");
}
*/


// Tarea 3 - Clean Code

/*
function permitirAccesoBar() {
    const EDAD_PERMITIDA = 18;
    const SALUDO_ENTRADA = "¡Bienvenido al Bar Iable!";
    alert(SALUDO_ENTRADA);

    const tieneDNI = preguntarDNI();

    if (tieneDNI) {
        preguntarEdad(EDAD_PERMITIDA);
    }
}
*/

/*
function preguntarDNI() {
    const RESPUESTA_SI = "si";
    const RESPUESTA_NO = "no";

    const respuestaUsuario = (prompt("¿Tenés documento? (Si/No)") || "").toLowerCase();

    if (respuestaUsuario === RESPUESTA_SI) {
        return true;
    } else if (respuestaUsuario === RESPUESTA_NO) {
        preguntarDNI();
    } else {
        console.log("No entendí su respuesta");
    }

    return false;
}
*/

/*
function preguntarEdad(EDAD_PERMITIDA) {
    const edadUsuario = Number(prompt("¿Cuántos años tenés?"));

    if (edadUsuario >= EDAD_PERMITIDA) {
        console.log("¡Adelante! Podés ingresar");
    } else if (edadUsuario < EDAD_PERMITIDA) {
        console.log("¡Afuera! No podés ingresar")
    } else {
        console.log("No entendí su respuesta");
    }
}
*/


// permitirAccesoBar();
