// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let i = 3; i <= 22; i += 3) {
	console.log(i);
}

//Ejercicios realizados por fabricio =======================================

function parte1() {
	for (let i = 3; i < 22; i += 3) {
		console.log(i);
	}
}
parte1();

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let contador = 10;
while (contador < 0) {
	contador -= 1;
}

//Ejercicios realizados por fabricio =======================================

function diezAUno() {
	let i = 11;
	while (i > 0) {
		i--; // i -= 1; i = i - 1;
		console.log(i);
	}
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

for (let i = 1; i <= 50; i++) {
	//FizzBuzz clasico
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}

//Ejercicios realizados por fabricio =======================================

//FizzBuzz clasico

function FizzBuzzClasico() {
	for (let i = 1; i <= 50; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}

function finzzBuzz() {
	for (let i = 0; i < i < 50; i++) {
		let texto = '';

		if (i % 3 === 0) {
			texto = 'Fizz';
		}
		if (i % 5 === 0) {
			texto += 'Buzz';
		}
		console.log(texto || i);
	}
}
finzzBuzz();

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

const notaParciales = [10, 4, 5, 6];

let totalNotas = 0; //los acumuladores siempre van afuera
for (let i = 0; i < notaParciales.length; i++) {
	totalNotas = totalNotas + notaParciales[i];
}
console.log('El promedio es ' + totalNotas / notaParciales.length);

/*  function calcularPromedio(numeros) {//Para que sea una funcion mas general
    let total = 0;
    for (i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }
    return total / numeros.length;
}
const numeros = [8, 6, 3, 9,5,6];
console.log(`El promedio es de ${calcularPromedio(numeros)}`); */

function calcularPromedio(numeros) {
	let total = 0;
	for (let i = 0; i < numeros.length; i++) {
		total = total + numeros[i];
	}
	return total / numeros.length;
}
const numeros = [10, 4, 9, 8, 7, 3, 2, 8];
console.log(`El promedio total es ${calcularPromedio(numeros)}`);

//Ejercicios realizados por fabricio =======================================

/// parametros por default en las funciones

function verificarEdadEntrada(edad = 18) {
	//esto es un parametro por default
	if (edad >= 18) {
		console.log('Bienvenido al bar');
	} else {
		console.log('Sos menor de edad');
	}
}

verificarEdadEntrada(17); // comno ven aca aparece un signo de ?. Esto  significa que es opcional
// por que si no le pasamos nada edad ya tiene algo , edad ya tiene el valor 18 y me va decir bienvenido al bar si le puysieramos 17 no nos dejarai entrar

/* Operador ternario
====================================================================

Operador ternario ?:

condición ? expr1 : expr2 

El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.

"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00")

edad >= 18 ? 

el signo de pregutna ? es como decir if = if(edad >= 18)
el signo de pregfunta lo que ahce es divide si estrue va elegir lo que esta a la izquierda de los dos puntos y si es false va elegir lo que esta a la derecha de estos dos puntos

*/

//En este caso podriamos hacer
//estructura del operador ternario (condicion) ? izq : der;

function verificarEdadEntrada(edad = 18) {
	edad >= 18 ? console.log('bienvenidos al bar!') : console.log('Sos menor de edad');
	//Estas lineas son equivalentes
	//Tambien le podes agragr otra condicion
	//edad >=18 ? console.log('bienvenidos al bar!') : (edad < 5) ? 'Vos estas loco' console.log('Sos menor de edad');
	// pero esto se vuelve complejo

	if (edad >= 18) {
		console.log('Bienvenidos al bar!');
	} else {
		console.log('Sos menor de edad');
	}
}
verificarEdadEntrada(17);

// TEMA ++variable o variable++

function testClase5() {
	let x = 0;
	let y = ++x; //tambien puede ser resta
	let z = x++; //Suma 1
	console.log(z);
}

testClase5();

// Tema Expresiones de funciones
/* en JavaScript cualquier cosa puede ser una variable
 ## tambien se dice que las funciones son ciudadanos de primera clase

*/

//por ejemplo

let x = 1;
let y = 'asd';

function test() {}
test();
//podemos hacer esto

// pero otra cosa mas que podes hacer es:

//Aca typeOf primero nos va decir que x es es number
// que y es uns string
// y type Of de z nos va decir que es una funcion
// entonces esto significa que podemos ejecutar esta funcion en realidad ejecutar la variable
//Por qu esta variable es de tipo funcion

let z = function (p1) {
	//Funcion anonima
	console.log(p1);
	console.log('Esta es la funcion z');
};
z(1);

//Se puede hacer un array de funciones anonima , exiten patrones de diseño para ello

// ejemplo

function sumar(n1, n2) {
	return n1 + n2;
}

function restar(n1, n2) {
	return n1 - n2;
}
/* 


const restar = function (n1,n2){
    return n1 -n2;

*/

//
//De donde viene la magia de la expresiones de funcion?
// es que yo las puedo asignar como variables o las puedo pasar como parametros

//Por ejemplo

function tareaOperador(functionOperador, n1, n2) {
	console.log(functionOperador(n1, n2));
}

tareaOperador(sumar, 1, 2);
