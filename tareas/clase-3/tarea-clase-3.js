// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/* const nombreUsuario = prompt("¿Como te llamas?").toLowerCase();
const miNombre = "sebastian";
const nombrePariente = "benjamin";

if(nombreUsuario === miNombre){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`);
}else if(nombreUsuario === nombrePariente){
    console.log(`Hola ${nombreUsuario} te llamas igual que mi hijo`);
}else{
    console.log(`Hola ${nombreUsuario}`);
} */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejemplos realizados por fabricio */

const MI_NOMBRE = 'fabricio'; // Las constante que definimos nosotros y enj el codigo refleja su valor, por buenas practicas devemos ponerlas con mayusculas
const NOMBRE_MADRE = 'teresa';
// a diferencia de esta otra que el valor inicial nos va a venir del prompt

const nombreUsuario = (prompt('Como te llamas ?') || '').toLowerCase();
// en este caso  null || '' prefiere el valor de la derecha
//Este prompt no es que valga null si no que vale un string vacio
//En este caso va dar null en caso de que el usuario toque la tecla ESC. en prompt nos va devolver null
// y nos da un valor nuevo que es NULL

let x; // va ser undefined por que no le asignamos un valor
//pero tambien la ausencia de valor se indica con null

/* cuando vayas a pasar este usar el and */

if (MI_NOMBRE === nombreUsuario) {
	console.log(`Hola, tocayo! Yo tambien me llamo ${MI_NOMBRE}`);
} else if (NOMBRE_MADRE === nombreUsuario) {
	console.log(`Hola ${nombreUsuario}, te llamás igual que mi mamá!`);
} else if (nombreUsuario.trim().length === 0) {
	// esto '' y esto 0 es exactamente lo mismo
	console.log('No ingresaste ningun nombre.');
} else {
	console.log(`Hola ${nombreUsuario}`);
}

/* Tambien podriamos hacer

let nombreUsuario = prompt("Cómo te llamas?")

if(nombreUsuario === null){
    nombreUsuario = '';
}
nombreUsuario = nombreUsuario.toLowerCase();

y todo esto es igual a
const nombreUsuario = (prompt("Como te llamas ?") || "").toLowerCase();


if(nombreUsuario === "fabricio" && NOMBRE_MADRE === "teresa")

//nombre pepe
if(false === "fabricio" && NOMBRE_MADRE === "teresa")
no se calienta en seguir buscando evalua a false y termina 





*/

//MI_NOMBRE === nombreUsuario este truquito de poner la comparacion del otro lado nos facilita  la hora de encontrar errores o que pasen menos errores
//Tambien usamos las intenpolacion de string ${nombre}

//nombreUsuario.trim().length esta funcion saca todos los espacion que tiene demas

// cada distinto tipo de objetos tienen propiedades o metodos ejemplo (toLowerCase)(.trim)(.length)
//el .length cuenta la cantidad de caracteres y espacios

// OPERADORES LOGICOS ##########
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#logico

/* AND Lógico (&&) */
/* expr1 && expr2 */
/* Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false. */

/* OR lógico (||) */
/* expr1 || expr2 */
/* Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false. */

/* NOT lógico (!) */
/* !expr */

/* Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true. */

/* true || false  = true
flase || true = true 
true || true = true
false || true || false || false = true
*/

/* true &&  true = true;
true && flase  = false 
false && true = false 
false && flase = false 
false && false && false = false
true && true && true = true
true && true && false =  false */

/* 

1 || 1 = 1
1 || 2 = 1
1 || 3 = 1

false == 0 (+o- igual a 0) = true
false === 0 = false

true  == 1 = true

1 == "1" = true
1 === "1" = false(exactamente igual)
1 === 1 = true


false || 123 = 123

convertir algo en boolean

Number ("1") = 1

Boolean() = flase (boolean de vacio)
Boolean (false) = false

flase || 123

pasa esto 

Boolean(false) || 123 (va preferi lo que esta a la derecha)


si fuera true
Boolean(true) || sbc = true

2 || 1 = 2
Boolean() true

por el concepto de Truthy y falsy (son valores que mas o menos son verdaderos o falsos)

https://developer.mozilla.org/es/docs/Glossary/Boolean

0 es mas o menos false
-0 es mas o menos false
null es mas o menos false
false es false
NaN es mas o menos false
undefined es mas o menos false
string("") es mas o menos false
*/

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejemplos realizados por fabricio */

//Tarea 2:

const MI_EDAD = 32; //la constante va en mayuscula por que estamos definiendo el valor en el codigo
/* otro truco podria ser 

const TEXTO_PREGUNTA_EDAD = "Que edads tenes?"
let edadUsuario = Number(prompt(TEXTO_PREGUNTA_EDAD));

estos nos sirve para no andar cambiano todo el codigo osea la logica
*/
let edadUsuario = Number(prompt('Qué edad tenés?'));
//concepto de NaN
//let edadUsuario = Number(prompt("Veinte")); NaN nos va devover falso cuando lo compares con cualquier tipo de numero

if (edadUsuario === MI_EDAD) {
	console.log('tenemos la misma edad!');
} else if (edadUsuario > MI_EDAD) {
	console.log('Sos más grande que yo');
} else if (edadUsuario < MI_EDAD) {
	console.log('Sos mas chico que yo');
} else {
	console.log('No entendi la respuesta.');
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

/* 
const documentoUsuario = prompt("¿Tenes documentos?").toLowerCase();
const respuestaSi = "si";
const respuestaNo = "no";

if(documentoUsuario === respuestaSi){
    const edadUsuario = Number(prompt("Cuantos años tenes?"));

    if(edadUsuario >= 18){
        console.log("Sos mayor de edad,podes pasar al bar");
    }else if(edadUsuario < 18){
        console.log("Disculpa sos menor de edad, no te puedo dejar pasar");
    }else{
        console.log("No entendi tu edad");
    }
}else if(documentoUsuario  === respuestaNo){
    console.log("Sin docuemnto no te puedo dejar pasar");
}else{
    console.log("No entendi que decis");
}
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejemplos realizados por fabricio */

//Tarea 3:

const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';

const usuarioTieneDocumento = (prompt('Tenes documento?') || '').toLowerCase();

if (usuarioTieneDocumento === RESPUESTA_SI) {
	const edadUsuario = Number(prompt('cuantos años tenes?'));

	if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
		console.log('Bienvenidos al bar!');
	} else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
		console.log('No podés entrar al bar.');
	} else {
		console.log('No entendí la respuesta.');
	}
} else if (usuarioTieneDocumento === RESPUESTA_NO) {
	console.log('Se necesita documento para pasar al bar.');
} else {
	console.log('no entendí la respuesta');
}
