// Nivel 1

/*
    Comentarios
    ========

    Empecemos con los  comentarios. Esto es un comentario. Comentarios son notas que la gente puede leer,
    pero las computadoras las van a ignorar.

    Nos van a servir como guía en la introducción a JavaScript

    Un comentario puede ser de 1 sola línea, o multi-línea.
*/

// Este es un comentario de 1 sola línea. Simplemente agregar // a la izquierda de tu comentario.

/*
    ESte es un comentario multi-linea.

    Cuando estás escribiendo código que querés que la máquina ejecute, ponelos AFUERA de los bloques de comentario.
*/


/*
    Mostrando texto
    ===============

    Empecemos mostrando el resultado de tu código en la pantalla.

    Hay algunas maneras de hacerlo, vamos a ver algunas:

    alert('Hola Mundo!');
        Esta línea de código va a mostrar un cartelito en tu navegador con el texto 'Hola Mundo!'
        una vez que se recargue index.html.

    console.log('Hola Mundo!');
        Esta línea de código va a mostrar 'Hola Mundo!' en la consola del navegador,
        una vez que  se recargue index.html.
*/

// Tarea: Ahora te toca a vos! Acá abajo escribí una alerta que diga "Hola mundo!"
/*
alert("Hola Mundo!"); 
console.log("Hola Mundo!"); 
*/
// Tarea: Una vez que la alerta funcione, comentala poniendo '//' en la línea donde está el código y guardá los cambios.
// Una vez que recargás la página, ya no debería aparecer más.

// alert("Hola Mundo!"); 

// Tarea: Ahora probá hacer un console.log de un mensaje que queramos.
/*
console.log("Hola!")
*/
// Consejo: Para recargar el navegador podemos apretar 'CMD + R' en Mac y 'CTRL + R' en
//      Windows.


// Consejo: El atajo del teclado para guardar cambios a un archivo es 'CMD + S' en Mac y 'CTRL + S' en
//      Windows.


/*
    Variables
    =========

    Una variable es un lugar para guardar información. Para crear (o mejor dicho DECLARAR) una variable usamos 'let',
    así:

    let nombreDeVariable;

    Con esto creamos una variable llamada nombreDeVariable. 
    Pero no tiene información o valor, está indefinida.
    JavaScript le llama a estos valores indefinidos 'undefined'.

    Si imprimimos la variable en la consola, podemos verlo.
    console.log("nombreDeVariable es " + nombreDeVariable);

    El resultado va a ser "nombreDeVariable es undefined".

    */
/*
   let nombreDeVariable;
   console.log("NombreDeVariableEs " + nombreDeVariable); //JS es case sensitive, Nombre y nombre son parámetros distintos
*/
/*

 Para darle un valor a nuestra variable (o mejor dicho ASIGNAR un valor), usamos el signo '='.

 nombreDeVariable = 'Hola Mundo!';

 También podemos crear (declarar) y darle valor (asignar) a una variable en un solo paso (la INICIALIZAMOS).

 let nuevaVariable = 1;
 */
/*
let nombre1 = "Victor" //cambie la variable a nombre1 porque si no tiraba error con el código de mas abajo
console.log("Mi nombre es " + nombre1)
*/
/*

Como pueden ver, le podemos dar distintos tipos de valores a nuestras variables -
Cadenas de texto (String), Numeros (Number), Booleanos (Boolean), etc.

Qué son cada uno?
String - Un set de caracteres, palabras), o frases que ponemos entre comillas (dobles o simples, no importa),
como por ejemplo 'hola mundo!'.
Esto puede ser cualquier cosa, incluso números.

Números - Pueden ser enteros (ej.: 5) o decimales (ej.: 5.21). No van entre comillas.

Booleano - representa un valor VERDADERO o FALSO. TRUE o FALSE.


Nota: Seguramente vean código que usa la palabra 'var' en vez de 'let'.
'var' es una palabra reservada que cumple una función un poco distinta a la de 'let'.
Si bien tienen algunas diferencias, por ahora pueden imaginarse que 'var' y 'let' son iguales, pero nosotros vamos
a usar 'let' porque lleva a que tengamos menos errores de programación.
*/

// TAREA: Creá 2 variables indefinidas, llamadas numeroUno y numeroDos.
/*
let numeroUno;
let numeroDos;
*/
/*
    Podés usar el nombre de tus variables pare representar qué información tienen adentro, por ejemplo:

    let saludo = 'Hola Mundo';
    alert(saludo);

    Esto va a mostrar un cartelito con el texto 'Hola Mundo!'
*/
/*
let saludo = "Hola, Mundo!";
alert(saludo);
*/
// Crear 2 variables nuevas, una con tu nombre, la segunda con tu edad. Dales un nombre apropriado y
// mostralas con un alert.
/*
let nombre = "Victor";
let edad = 28;
*/


// Consejo: para mostrar 2 variables de texto al mismo tiempo, las podés unir usando el signo '+'. Ejemplo:
/*
alert("Mi nombre es " + nombre + " y mi edad es " + edad)
*/
/*
* let nombre = 'Fabricio'
* let apellido = 'Sodano'
*
* alert(nombre + apellido)
*
* */


/*
    Constantes
    =========

    Una constante es como una variable, pero se le da un valor cuando es creado y luego no se puede cambiar mientras
    se ejecuta el programa.
    En otras palaras, una constante siempre tiene la misma información durante la ejecución de un programa.

    Para declarar (crear) una constante, usamos la palabra reservada (keyword) `const`.

    Ejemplo:

    const circunferenciaTierraKm = 6371;

    Asignar un nuevo valor a la constante nos va a dar un error, no podemos hacer:
    circunferenciaTierraKm = 6400;

    El nombre de las constantes también puede ser usado para representar la información que contienen,
    como las variables.
*/

// TAREA: Crear una constante y mostrarla con un alert
/*
const IVA = 21;
alert(IVA);
*/
// TAREA: Intentar asignar un valor a una constante y ver qué pasa (mirar la consola)

// IVA = 20; //al cambiar valor a la const tira error, porque justamente tiene que ser constante

// Consejo: No te olvides de comentar (//) los alerts y los errores intencionales (como en la tarea anterior) para
// que los alerts no aparezcan cada vez, y para que los errores no hagan que el programa se detenga.

/*
    Matemática - Operadores aritméticos (sumas, restas, multiplicación y división)
    ============================

    Hay muchos 'operadores' diferentes en programación. Veamos los operadores aritéticos ahora.
    JavaScript incluye operadores estándares (+, -, /, *) que se pueden usar para hacer operaciones matemáticas.

    Ejemplo:

    const resultado = 1 + 3;
    console.log(resultado);

    Esto va a imprimir el número 4 en nuestra console.

    Consejo: Fijate que no pusimos 1 y 3 entre comillas porque queremos que se interpreten como números, no como texto.
*/

//
// TAREA: Crear 3 variables:
//
// * 1ra variable llamada 'diez' con valor 10
// * 2nda variable llamada 'tres' con valor 3
// * 3ra variable llamada resultadoMultiplicacion que va a ser igual a
// la 1ra variable multiplicada (con el operador *) por la 2nda variable.
// Mostrar el valor de resultadoMultiplicacion con un alert o un console.log

/*
let diez = 10
let tres = 3
let resultadoMultiplicacion = diez * tres

console.log(resultadoMultiplicacion)
*/
/*
    Funciones
    =========

    Una función es un set de instrucciones que hace la misma tarea cada vez que la llamamos.
    Las funciones toman parámetros de entrada (ARGUMENTOS o INPUT), y calculan el resultado basado en esos valores y
    devuelven (RETURN) un resultado ó OUTPUT.

    Para crear una función vamos a usar el siguiente formato:

    function nombreFuncion(nombreArgumento) {
        return nombreArgumento * 2;
    };

    Esta función va a tomar sólo 1 argumento y va a devolver (RETURN) el argumento multiplicado por 2.

    Nuestra función acaba de ser DEFINIDA, pero no se va a ejecutar/correr si no la 'llamamos'.

    Para llamar/ejecutar la función usamos el siguiente formato:

    nombreFuncion(10); // nombreDeFuncion(argumento1);

    Esto va a a llamar nuestra funcion con el argumento 10, y nuestra función va a devolver 20 (10 * 2).
    Para poder ver lo que nuestra  función devuelve, podemos pasársela como argumento a console.log.

    Por ejemplo:

    console.log(nombreFuncion(10));

    Esto hace que el resultado de nombreFuncion(10), en este caso, 20 (10 * 2) se pase a console.log.
    Es decir que sería equivalente a hacer console.log(20)

    Consejo: La palabra reservada (keyword) 'return' es usada para definir el valor que devuelve la función,
        podemos hacer cosas ANTES de ejecutar un 'return', pero después de ejecutar 'return' la función termina.

    Ejemplo:

    function codigoDespuesDelReturn(){
        return 1;
        console.log('hola!'); //Esta línea nunca se ejecuta
    }

    Consejo: Podemos aceptar múltiples argumentos (tambien llamados parámetros) separándolos con una coma ','.

         function nombreFunction(argumento1, argumento2) {
         }
*/
/*
function nombreFuncion(nombreArgumento) {
    return nombreArgumento * 2
}
*/
// TAREA: Es tu turno de crear una función!

// Creá una función llamada 'sumar'
// Escribí código para que acepte 2 argumentos (numero1 y numero2)
// Escribí código para que devuelva (return) la suma de numero1 y numero2
// Ejecutá la función sumar y mostrá su resultado en la consola
/*
function sumar(numero1, numero2) {
    return numero1 + numero2
}

console.log(
    sumar(1,10)
); //con esta parte lo muestra en consola, si no lo ejecuta solo)
*/


// TAREA: Ahora creemos otra función llamada 'restar'
//       Que acepte 2 números como parámetro y los reste, y que devuelva ese valor.
// Ejecutá la función con los números 5 y 1 y mostralos con console.log
/*
function restar(numero1, numero2) {
    return numero1 - numero2
}

console.log (
    restar(5,1)
);
*/
// Consejo: Sabías que en vez de pasar los números directamente a tu función podés crear variables con esos números
// y pasarlos como parámetros? Probalo!
/*
let añoNacimiento = 1991
let añoActual = 2019

let miEdad = restar (añoActual, añoNacimiento)
console.log("Mi edad es " + miEdad + " años")
*/
// let edadUsuario = prompt("Por favor, ingrese su edad") para que te lo pregunte como input
/*
function saludar(nombre2){
    return "Hola " + nombre + "!"
};

let nombre2 = prompt ("Cuál es tu nombre?")

console.log(
    saludar(nombre)
);
*/

//EJERCICIO QUE DICE EN EL VIDEO
//Crear una funcion que tenga como parametro el año actual y el año nacimiento
//Y que calcule la edad de nacimiento del usuario (mas o menos)
//Preguntar estos datos al usuario y guardarlo en dos variables
//Estas variables tienen que ser populadas por datos que ingrese el usuario
//Ejecutar la función con estos datos
//Y que se imprimia el resultado en la consola
/*
let añoActual = prompt("En que año estamos?")
let añoNacimiento = prompt("En que año naciste?")

function edadTuya(añoActual, añoNacimiento){
    return "Tu edad es " + (añoActual - añoNacimiento) + " años" // aca igual, no tendria que tener el texto adentro, habria que llamarlo de afuera
}

console.log(
    edadTuya(añoActual, añoNacimiento)
)
*/
//Otro es preguntar el salario anual y calcular el mensual
//Otro es preguntar el mensual y calcular el anual
//Diario, semanal, por hora, etc.
//probar usar Const para meses y horas y eso

/*
let salarioAnual = prompt("Cual es tu salario anual?") //probar usar Number aca, que prompt devuelve string y así aseguramos que sea un número
let mesesDelAño = 12 //esto tendria que estar dentro de las functions, no afuera, la const (porque sabes que NUNCA se va a cambiar) 12 meses adentro de la funcion

function calcularSalarioMensual(salarioAnual, mesesDelAño) {
    return "Tu salario mensual es de " + (salarioAnual / mesesDelAño) + " pesos" //la funcion no tendria que devolver el return, single responsability principle, solo el numero de la edad
}

console.log(
    calcularSalarioMensual(salarioAnual, mesesDelAño)
)
*/



// Consejo: Dejá las funciones como están, no las comentes, las vamos a usar de nuevo.

/*
    Condicionales If-Else
    ==================

    Qué pasa si en nuestro programa queremos decidir sobre qué función debería ejecutarse? Tenemos que usar condicionales!

    "Si (if) tenés una televisión, podés mirarla. Si no (else), hacés otra cosa."

    Es lo mismo con el código. Le podés dar una condición 'if' a una máquina para que haga una decisión acerca de qué
    parte del código tiene que ejecutarse.

    Estructura:

    if (condición) {
        // hacer esto (la condición se cumplió)
    } else {
        // hacer otra cosa, porque la condición no se cumplió
    }

    Necesitamos que la condición sea un Booleano, recordemos: TRUE o FALSE. Es decir, verdadero o falso.

    Por ejemplo, si tenemos un número, lo podemos comprar con algo.

    Ejemplo

    const numero = 7;
    if (numero >= 7) {
        console.log('Nuestro número es mayor o igual que 7');
    } else {
        console.log('Nuestro número es menor que 7');
    }
*/

/*
    Operadores de comparación
    ====================

    Antes hicimos una introducción a los operadores aritméticos de JavaScript (+, -, *, /). Ahora es momento de
    presentar el siguiente set de operadores, los 'Operadores de comparación'. Son usados para comparar valores:
    >   // Mayor que
    <   // Menor que
    <=  // Menor o igual que (se escribe en este orden, =< no existe)
    >=  //Mayor o igual que (se escribe en este orden, => es usado para otra cosa)
    === //Exactamente igual que (1 y "1" no son iguales, pero 1 es exactamente igual a 1 y "1" es exactamente igual a  "1"). Este operador compara el valor y el TIPO del valor.
    !== //Distinto que (dándole importancia al TIPO)

    Atención: No mezclar '=' y '==' ó '===' porque tienen distintos significados.
         '=' significa "asignar". miVariable = 1
         '===' significa preguntar si es "exactamente igual a". miVariable === 1 es verdadero si miVariable es 1, y falso si es cualquier otra cosa distinta de 1.

    También están los operadores '==' y '!=' que son muy similares a '===' y '!==' con una pequeña variación,
    que los hacen que sean más propensos a errores, así que siempre que sea posible vamos a usar '===' y '!=='.

    El resultado de un operador de comparación es un valor Booleano (true o false, verdadero o falso)

    Por ejemplo:

    3 < 4 evalúa a VERDADERO (TRUE), porque 3 es menor que 4.
    1 + 1 === 3 evalía a FALSO (FALSE), porque 1 + 1 no es igual a 3.
*/


// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//


function sumar(numero1, numero2) {
    return numero1 + numero2
}

function restar(numero1, numero2) {
    return numero1 - numero2
}
/*
let operador = prompt("Ingrese + o -");
let numero1 = Number(prompt("Ingrese un primer valor"));
let numero2 = Number(prompt("Ingrese un segundo valor"));

if (operador === "+") {
    resultado = sumar(numero1, numero2)
    alert("El resultado de la suma es " + resultado)
} else {
    resultado = restar(numero1, numero2)
    alert("El resultado de la resta es " + resultado)
}
*/
//DETALLE: Acá no usé single responsability porque los alert estan adentro de cada if o else. Lo ideal seria que el alert estuviera afuera de ese cuerpo y de ahi llamar al resultado del if or else

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.
// Paja hacerla porque es reemplazar nomás?

/*
    'If' - 'Else if' - 'Else'
    ===================

    Bueno, y qué pasa si tenemos 4 operaciones aritméticas en nuestra calculadora? Bueno, entonces usamos una estructura así (pseudocódigo):
    if(condicion)
        //algo
    else if(condicion)
        //algo
    else
        //algo que va a pasar si no se cumple ningún otra condición
        

    Ejemplo:

    const numero = 7;
    if (numero > 7) {
        console.log('Nuestro número es mayor a 7');
    } else if (number < 7) {
        console.log('Nuestro número es menor a 7');
    } else {
        console.log('Nuestro número es igual a 7');
    }

    Consejo: Podemos usar la cantidad de 'else if' que queramos uno después del otro, 
    el primero que es 'verdadero' es el único que pasa.
*/

// TAREA: Creemos 2 funciones más: dividir y multiplicar.
/*
function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

// TAREA: Reescribamos el if-else que teníamos y extendámolos, agregando:
//       'else if' el 'operador' es igual a '-' - llamar a la función 'restar'
//       'else if' el 'operador' es igual a '/' - llamar a la función 'dividir'.
//       'else if' el 'operador' es igual a '*' - llamar a la función 'multiplicar'.
//       else console.log - "Perdón, no conozco ese operador".

const operador = prompt("Ingrese operador (+,-,*,/)");
const numero1 = 10;
const numero2 = 2;

let resultado; //aca para rastrear despues para el alert o console.log
if (operador === "+") {
    resultado = sumar(numero1, numero2);
} else if (operador === "-") {
    resultado = restar(numero1, numero2);
} else if (operador === "/") {
    resultado = dividir(numero1, numero2);
} else if (operador === "*") {
    resultado = multiplicar(numero1, numero2);
} else {
    console.log(`No entiendo el operador ${operador}`); 
}
console.log(`El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`);
// Yo aca habia puesto console.log("Su resultado es " + resultado")
*/
/*
    Operadores Booleanos
    =================
    Poner un signo de exclamación (!) antes de un valor Booleano nos da el valor OPUESTO.
    Este operador ! se llama el operador "not".

    El resultado de una comparación es un valor Booleano, lo podemos guardar en una variable así:

    const bool = (1 < 2);

    Después podemos chequear si 'bool' es verdadero o falso (true o false) usando console.log

    console.log(bool); // Devuelve veradero (TRUE), porque 1 es menor a 2
    console.log(!bool); // devuelve "no verdadero"... es decir falso (FALSE)
    console.log(bool); // El valor original no se ve afectado, sigue siendo veradero, TRUE

    También podemos asignar un valor booleano directamente a una variable o constante con
    las palabras reservadas (keywords) true y false:

    const elPesoEsEstable = false;
    let maradonaMejorQuePele = true;
*/


// TAREA: usando el operador !, Intentá invertir una variable (de true a false, o de false a true) e imprimí el
// resultado en la consola.

let miNombreEsVictor = true;
console.log(!miNombreEsVictor)



// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
/*
const nombreUsuario = prompt("Cual es su nombre?")
const miNombre = "Victor"
const nombrePadre = "Hugo"
if (nombreUsuario === miNombre) {
    console.log("Hola, Tocayo! Yo también me llamo " + miNombre);
} else if (nombreUsuario === nombrePadre) {
    console.log("Hola " + nombreUsuario + "! te llamás igual que mi viejo!");
} else console.log("Hola " + nombreUsuario + "!");
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/*
const edadUsuario = Number(prompt("Que edad tenés?")) //aca let y no const
const edadPropia = Number(28) // aca seria EDAD_PROPIA porque lo armé

if (edadUsuario === edadPropia) {
    console.log("Tenemos la misma edad! :D");
} else if (edadUsuario < edadPropia) {
    console.log("Sos mas chico que yo, pibe");
} else if (edadUsuario > edadPropia) {
    console.log("Sos mas viejo que yo papá");
} else {
    console.log("No te entendí la respuesta");
}
*/
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no. //Aca usar to lowercase.
/*
const tieneDNI = prompt("Tenés DNI? Si o no?"); //aca agregar las pipetas para que no te tire null
const edadPermitida = 18; //aca se podian definir constantes para el "si" y para el "no"
let edadUsuario;

if (tieneDNI.toLowerCase() === "si") {
    edadUsuario = prompt("Que edad tenés?"): //y aca poner que pasa si te escriben "veinte", porque ahi sale un NaN
} if (edadUsuario >= edadPermitida) {
    console.log("Bienvenido al bar!"):
} else if (edadUsuario < edadPermitida) {
    console.log("No podés entrar al bar pibe, sos menor"):
} else if (tieneDNI.toLowerCase() === "no") {
    console.log("No tenés DNI capo, no te puedo dejar entrar");
} else console.log("No te entiendo la respuesta, SÍ o NO te dije!");
*/
//Como tarea 2, esto lo digo yo eh, estaria bueno armar esto mismo con funciones, tipo function patovica(edadPermitida, tieneDNI)

////////////////////////////////////////////////////////////////////////////
// Felicitaciones! Terminaste el Nivel 1 de la introducción a JavaScript! //
// El siguiente nivel es el que está en nivel2.js                         //
///////////////////////////////////////////////////////////////////////////


// Nivel 2

/*
    Introducción
    ============

    ¡Bienvenido al nivel 2! Es tiempo de interactuar con HTML.

    Los archivos Hyper Text Markup Language (HTML) son la columna vertebral de Internet.
    Cada sitio web que visita se carga primero como un archivo HTML.

    No hablaremos demasiado sobre HTML hoy. Lo que necesitas saber es que los archivos HTML
    funcionan como una especie de esqueleto para tu página. Nuestro archivo index.html
    combina todos los archivos de este proyecto para que puedas abrirlos en tu navegador web.

    Este proyecto tiene un archivo llamado index.html. Al final de index.html usted
    verá la siguiente etiqueta:

    <script src="js/nivel1.js"></script>

    Así es como has estado ejecutando el archivo nivel1.js en un navegador. Ahora cambia
     nivel1.js para apuntar a este archivo - nivel2.js.

    ¡Ahora estás listo para comenzar!
*/

/*
    Arrays
    ======

    Un array es una lista ordenada de valores. Podes guardar cualquier cantidad de valores
    dentro. Y también cualquier tipo de valores: números, cadenas, objetos, incluso
    otros Arrays.

    Ejemplo:
// siempre la primera posicion para un programador es CERO, en este caso gato es CERO, perro 1 y caballo2, el lenght es 3 igual
    let animales = ['gato', 'perro', 'caballo'];
    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let numeros = [1, 2, 8, 19];
*/

// TAREA: Crea tu propio array, llamado comidasFavoritas, y escribi dentro algunas
//       cosas que te gustan.

/* // respuesta
const comidasFavoritas = ["milanga", "pizza", "asado", "lasagna"];
*/

/*
    Tamaño del Array
    ================
    
    Podemos verificar fácilmente cuántos elementos tenemos en nuestro Array con una propiedad:
    '.length'

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    console.log(cosasAleatorias.length); // Obtendremos 4.
*/

// TAREA: Verifique cuántos valores tiene en su array comidasFavoritas.
// imprimi utilizando console.log el resultado.

/* //Respuesta
console.log(comidasFavoritas.length);
*/

/*
    Uso del Array
    =============

    Es útil mantener todos estos valores en un solo lugar. Pero, y si queremos
    utilizar solo 1 elemento del array?

    Podemos sacarlos usando 'notación de corchetes'. Gracias a un tipo llamado Edsger
    Dijkstra *, los índices del array se comienzan a contar desde 0. El uso se ve así.

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let primerItem = cosasAleatorias[0];
    let segundoItem = cosasAleatorias[1]; y así sucesivamente

    * https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
*/

// TAREA: Obtené el tercer elemento de tu array comidasFavoritas e imprimilo utilizando console.log.

/* //resultado
console.log(comidasFavoritas[2])
*/

/*
    Cambio de Valores en Arrays
    =========================

    También podemos reemplazar los valores dentro de los arrays asignando un nuevo valor a
    un índice específico.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];

    // reemplacemos 'perro' con 'pez'
    animales[1] = 'pez';

    // ahora nuestro array de animales sera ['gato', 'pez', 'caballo'];
*/

// TAREA: Toma tu array de comidasFavoritas y reemplaza el primer valor
// con cualquier otra cosa.

/* //RESPUESTA
comidasFavoritas[0] = "Tallarines"

console.log(comidasFavoritas);
*/


// TAREA: console.log todo el array para verificar.






// TIP: ¡No te olvides que las posiciones de índice comienzan desde 0!

/*
    Array.push()
    ============

    Si deseas agregar nuevos valores a un array existente, podes usar el método
     '.push()'. Push agregará un nuevo valor al final del array.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    animales.push('conejo');

    // nuestro array de animales sera ['gato', 'perro', 'caballo', 'conejo'];
*/

// TAREA: Extendamos tu lista de comidasFavoritas y agreguemos un valor más.






// TAREA: console.log todo el array para verificar.






/*
    Nota acerca Arrays constantes
    =============================

    Un array es lo que se conoce como un "tipo de referencia". Lo que esto significa es que
    incluso si un array se declara (crea) usando 'const', los valores *dentro* del
    array todavía se pueden cambiar; el array en sí no se puede sobrescribir.

    Ejemplo:

    const animales = ['gato', 'perro', 'caballo'];

    // Esto es legal y funciona de la misma manera que cuando los animales son una variable:
    animales[1] = 'pez';
    animales.push('conejo');


    // Esto es ilegal y devolverá un error igual al que se genera al cambiar cualquier constante:
    animales = [ 'mouse', 'elephant' ];
 */

// TAREA: Intenta crear un array como una constante y modifica los valores que contiene.







// TAREA: Observa lo que sucede si agregas algo con.push(), cambias algo
//       con notación de corchetes (array[1]) y
//       asigna un nuevo array completamente nuevo a la constante






/*
    Bucles
    ======
    
    ¡La gente siempre ha sido perezosa, pero a veces avanza! A nosotros
    no nos gusta repetir las mismas aburridas acciones una y otra vez, 
    así que buscamos formas de evitarlo.

    La programación es igual. Por ejemplo, si quiero imprimir 10 veces 'JavaScript 
    es increible!', ¿cuáles son mis opciones?. Por supuesto, puedo escribir 
    diez líneas de código repitiendo la misma instrucción, pero también 
    puedo decirle a la computadora que lo repita en lugar de que yo lo escriba 10 veces.

    Para esto usamos bucles.

    Cada ciclo debe tener tres cosas principales:
     - un punto de partida
     - una condición (punto final)
     - un contador (un paso)

     Si te olvidas uno de estos, ¡podes entrar en un bucle infinito!

     Veamos diferentes estructuras de bucle.

*/

/*
    Bucles while (mientras)
    ============

    El bucle 'While' hará una acción para siempre hasta que se cumpla alguna condición.

    Ejemplo:

    // punto de partida
    let numero = 0;

    while (numero < 10) {
      // 'menos de 10' es una condición (punto final)

      console.log('JavaScript es increíble!');

      numero = numero + 1;
      // + 1 es un contador / tamaño del paso
    }
*/

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
//Hacer esta solo
// HINT: los contadores pueden ser para arriba o para abajo

/*
let numero = 10

while (numero > 0) {
    console.log(numero);
    numero--;
}
*/

//TAREA EN VIVO:
/* 
let numero1 = 0 //esto se llama contador, acumulador, counter, flag

while(numero1 <= 10) {
    console.log(numero1);
    numero1 += 1;
}
*/


/*
    Bucles for (para)
    ==========

    Los bucles for son muy similares al 'bucle while'. En un bucle for
    se declara un contador en la declaración.

    Ejemplo:

    let i;
    for (i = 0; i <= 5; i = i + 1) {  // (punto de partida; condicion; paso)
      console.log('Hola!');
    }


    let i;
    for (i = 0; i <= 5; i = i++) {  // (punto de partida; condicion; paso)
      console.log('Hola!');
    }

Para i arrancando de 0, mientras i menor o igual a 5, sumarle 1 a i se traduce eso
*/

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
/*

//ME SALIO PAPAAAA
let i;
for (i = 3; i <= 22; i += 3) {
    console.log(i);
}
*/


//TAREA EN VIVO, PRIMER ALGORITMO: calcular las notas de un parcial
/*
const notaParciales = [10, 4, 5, 6]
let totalNotas = 0; //los acumuladores siempre van afuera del for por el tema del scope
for(let i=0; i < notaParciales.length; i++){
    totalNotas = totalNotas + notaParciales[i];
}

console.log("El promedio es " + totalNotas / notaParciales.length);
*/
//TAREA Hacer una funcion que se llame calcular promedio
//que tome como parametro un array



/*
function calcularPromedio(totalNotas, notasParciales){
   for(let i=0; i < notasParciales.length; i++){
        totalNotas = totalNotas + notaParciales[i];
    }
}

calcularPromedio(0, [1, 2, 3]);
console.log("El promedio es " + totalNotas / notaParciales.length);
*/
//
/*
function calcularPromedio(notasParciales){
	let totalNotas = 0;
	for(let i=0; i < notasParciales.length; i++){
        totalNotas += notasParciales[i];
    } console.log("El promedio es " + totalNotas / notasParciales.length);
}
calcularPromedio([5, 3, 10, 2, 2, 3, 4]);
//AHI ANDUVO LA PUTA QUE LO PARIO

function calcularPromedio(notasParciales){
    let notasTotal = 0;
    for(let i = 0; i < notasParciales.length; i++){
        notasTotal = notasTotal + notasParciales[i];
    } console.log("Su promedio es de " + notasTotal / notasParciales.length)
}

calcularPromedio([100, 88, 40, 52])
*/
/*
    Iterando a traves de Arrays
    ===========================

    Ahora que conocemos los bucles, vamos a usar cada valor de mi lista de animales
    y expresar mi amor por cada uno ¿Cómo lo voy a hacer?

    Podemos usar un 'bucle for' para iterar a través de nuestro array y obtener cada valor
    de eso.

    Nota: i++ es otra forma de expresar i = i + 1.

    Ejemplo:

    const animales = ['gatos', 'perros', 'caballos'];

    for(let i = 0; i < animales.length; i++){
        console.log('Me gustan los ' + animales[i]); //animales[i] se lee "animales en i"
    }
*/

// TAREA: Probalo con tu comidasFavoritas array.
/*
const animales = ['gatos', 'perros', 'caballos'];

for (let i = 0; i < animales.length; i++){
    console.log("Me gustan los " + animales[i]);
}
*/



/*
    Bucles y Logica
    ===============
    
    Traigamos bucles junto con las declaraciones if / else que aprendimos en
    nivel 1, y hagamos algo interesante.


    Contemos de 10 a 0 e imprimamos todos los números. Pero cuando lleguemos al
    medio (5) imprimimos 'Estamos en el medio!'.

    Ejemplo:

    for (let i = 10; i >= 0; i = i - 1) {
        if (i === 5) {
            console.log('Estamos en el medio!');
        } else {
            console.log(i);
        }
    }
*/
/*
for (let i = 10; i >= 0; i -= 1) {
    if (i === 5) {
        console.log('Estamos en el medio!')
    } else { 
        console.log(i);
    }
}
*/

//ESTE EJERCICIO DE ABAJO SE LO TOMA A LA GENTE QUE TOMA EN LA EMPRESA, ES MUY IMPORTANTE.
// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.

// Cuenta del 1 al 50 e imprime los números:
//
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.

// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
//
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// % significa el resto de la división entre esos números. Si es multiplo el resto siempre va a ser 0.
// para sacar pares o impares, es si %2 te da 0 o 1.



for (let i = 1; i <= 50; i += 1) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    } else if (i%3 === 0){
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}
//SALIO PAPAAAAA, la condicion de los dos juntos tenía que ir primero porque si no entraba en if3 o if5

//Aca abajo ejemplos de los demás

for (let i = 1; i <= 50; i++){
    let mostrar = "";
        if (i % 3 === 0) {
            mostrar += "Fizz";
       }
        if (i % 5 === 0){
            mostrar += "Buzz";
       }
    console.log(mostrar || i);}
//este esta piola, concatena el string con dos if



//////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 2 de JavaScript Básico!            //
// Levántate, estira las piernas y celebra tu logro.                        //
// El siguiente paso será seguir las instrucciones en el archivo nivel3.js. //
//////////////////////////////////////////////////////////////////////////////
