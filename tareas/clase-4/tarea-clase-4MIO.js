//Link original y créditos a: https://github.com/CodeGuppyPrograms/CodingChallenges

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/
//Desafío de programación #1: Imprimí los números del 1 al 10
/*
for (let i = 1; i <= 10; i++) {
	console.log(i);
}
*/
/*
for (let i = 1; i <= 100; i++) {
	if (i % 2 != 0) {
		console.log(i);
	}
}
*/
/*
let y;
for (i = 1; i <= 10; i++) {
	console.log(i * 7);
}                                   // desafio 3
*/
/*
for (let i = 1; i <= 10; i++) {
	console.log(
		i * 1 &&
		i * 2 && //TAREA MAL HECHA
			i * 3 &&
			i * 4 &&
			i * 5 &&
			i * 6 &&
			i * 7 &&
			i * 8 &&
			i * 9 &&
			i * 10
	);
}
*/
/*
function calcularTablas(tablaDel){

}

let i;
let y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 1; i <= y.length; i++) {
	console.log(i * y[i]);

	if (i === 10) {
		let i = 1;
	}
}
*/
/*
for (let i = 1; i <= 10; i++) {
	for (let y = 1; y <= 10; y++) {
		console.log(i * y);
	}
}
*/

//Desafio 5
/*
let contador = 0;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
	contador = numeros[i] + contador;
}
console.log(contador);
*/
/*
function sumarArray() {
	let suma =
		numeros[0] +
		numeros[1] +
		numeros[2] +
		numeros[3] +
		numeros[4] +
		numeros[5] +
		numeros[6] +
		numeros[7] +
		numeros[8] +
		numeros[9];
	console.log(suma);
}
sumarArray();
*/
//3628800
//Desafío de programación #6: Calcula 10!
/*

let contador = 1;
for (let i = 1; i <= 10; i++) {
	contador = i * contador;
}
console.log(contador);
*/

//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
/*
let contador = 0;
for (let i = 10; i >= 10 && i < 30; i++) {
	if (i % 2 != 0) {
		contador = i + contador;
	}
	console.log(contador);
}
*/
/*
let contador = 0;
for (let i = 10; i <= 30; i++) {
	if (i % 2 != 0) {
		contador = i + contador;
	}
}
console.log(contador);
*/
//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
/*
let gradosC = prompt("Cuantos grados Celsius hacen?");
function celsiusAFarenheit(gradosC) {
	return console.log(Number(gradosC * 1.8 + 32));
}
celsiusAFarenheit(gradosC);
*/
//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
/*
let gradosF = prompt("Cuantos grados Fahrenheit hacen?");
function fahrenheitACelsius(gradosF) {
	return console.log(Number((gradosF - 32) / 1.8));
}
fahrenheitACelsius(gradosF);
*/
//Desafío de programación #10: Calcula la suma de todos los números en un array de números
/*

let arrayNumeros = [100, 20, 200];
let acumulador = 0;
for (let i = 0; i < arrayNumeros.length; i++) {
	acumulador = arrayNumeros[i] + acumulador;
}
console.log(Number(acumulador));
*/
//Desafío de programación #11: Calcula el promedio de todos los números en un array de números.
/*

let arrayNumeros = [100, 20, 200];
let acumulador = 0;
let promedio = 0;
for (i = 0; i < arrayNumeros.length; i++) {
	acumulador = arrayNumeros[i] + acumulador;
	promedio = acumulador / arrayNumeros.length;
}
console.log(promedio);
*/
//
//Desafío de programación #12: Crea una función que reciba un array de números
//Y devuelva un array conteniendo solo los números positivos.
/*
let arrayNumeros = [10, -10, 5, -5];

function devolverNumerosPositivos(arrayNumeros) {
	for (let i = 0; i < arrayNumeros.length; i++) {
		if (arrayNumeros[i] >= 1) {
			console.log(arrayNumeros[i]);
		}
	}
}
devolverNumerosPositivos(arrayNumeros);
*/
//Desafío de programación #13: Encontrar el número de mayor valor en un arreglo(array) de números.
/*
let mayorNumeroArray = 0;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 27, 10];
for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] > mayorNumeroArray) {
		mayorNumeroArray = numeros[i];
	}
}
console.log(mayorNumeroArray);
*/
//Desafío de programación #14: Mostrar en pantalla(imprimir) los 10 primeros numeros
//De la sucesión de Fibonacci sin utilizar recursividad.

let numerosFibonacci = [];
let contadorFibonacci1 = 0;
let contadorFibonacci2 = 1;

for (let i = 0; i <= 10; i++) {
	numerosFibonacci.push(contadorFibonacci1 + contadorFibonacci2);
	contadorFibonacci1 = numerosFibonacci[i];
}
console.log(numerosFibonacci);
/*
 Desafío de programación #1: Imprimí los números del 1 al 10
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100
 Desafío de programación #3: Imprimí la tabla de multiplicación del 7
 Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 10
 Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10.
 Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
 Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
 Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
 Desafío de programación #10: Calcula la suma de todos los números en un array de números
 Desafío de programación #11: Calcula el promedio de todos los números en un array de números.
 Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos.
 Desafío de programación #13: Encontrar el número de mayor valor en un arreglo(array) de números.
 Desafío de programación #14: Mostrar en pantalla(imprimir) los 10 primeros numeros de la sucesión de Fibonacci sin utilizar recursividad.
 Desafío de programación #15: Crear una función que encuentre el elemento n en la sucesión de Fibonacci utilizando recursividad. 
 (Nota #15, no estoy seguro de la traducción, favor de revisar.)
 Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
 Desafío de programación #16: Crear una función que retorne un valor booleano si un número es primo.
 Desafío de programación #17: Calcular la suma de los dígitos de un número entero positivo.
 Desafío de programación #18: Mostrar en pantalla (imprimir) los primeros 100 números primos.
 Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
 Desafío de programación #19: Crear una función que retorne un arreglo(array) con los primeros números primos que son mayores a un número en particular.
 (Nota #19, no estoy seguro de la traducción, favor de revisar).
 Desafío de programación #20: Rotar un arreglo(array) una posición, hacia la izquierda.
 Coding challenge #20: Rotate an array to the left 1 position
 Desafío de programación #21: Rotar un arreglo(array) una posición, hacia la derecha.
 Coding challenge #21: Rotate an array to the right 1 position
 (Nota #20 y Nota #21, no estoy seguro de la traducción, favor de revisar).
 Desafío de programación #22: Revertir un arreglo(array).
 Desafío de programación #23: Revertir una cadena de cáracteres (string).
 Desafío de programación #24: Crear una función que combine dos arrays (arreglos) y retorne el resultado en un nuevo array.
 Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
 Desafío de programación #25: Crear una función que reciba dos arreglos(arrays) como argumento y retorne un arreglo(array) compuesto por todos los números que se encuentren:
 en el primer arreglo(array) o en el segundo arreglo(array) pero no en ambos.
 Desafío de programación #26: Crear una función que reciba dos arreglos(arrays) y que retorne un arreglo que contenga los elementos del primer arreglo(array) pero no los del segundo arreglo(array).
 Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
 Desafío de programación #27: Crear una función que reciba un arreglo(array) de números como argumento y retorne un nuevo array(arreglo) con los elementos distintos.
 (Nota #27, no estoy seguro de la traducción, favor de revisar).
Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
Desafío de programación #28: Calcular la suma de los 100 primeros números primos.
Desafío de programación #29: Mostrar en pantalla (print/imprimir) la distancia que existe entre los 100 primeros números primos.
Desafío de programación #30: Crear una función que sume dos números positivos de tamaño indefinido.
Los números son recibidos como una cadena de caracteres(string) y el resultado deberia ser también una cadena de caracteres(string).
Desafío de programación #31: Crear una función que retorne el número de palabras en un texto.
Desafío de programación #32: Crear una función que convertirá en mayúscula la primera letra de cada palabra en un texto.
Desafío de programación #33: Calcular la suma de los números recibidos de una cadena de cáracteres(string) separados por comas.
Desafío de programación #34: Crear una función que retorne un arreglo(array) con palabras dentro de un texto.
Desafío de programación #35: Crear una función que convierta un texto CSV a un array(arreglo) bi-dimensional.
Desafío de programación #36: Crear una función que convierta una cadena de caracteres(string) a un array(arreglo) de caracteres.
Desafío de programación #37: Crear una función que convierta una cadena de caracteres(string) a un array que contenga el código ASCII de cada caracter.
Desafío de programación #38: Crear una función que convierta un arreglo que contiene códigos ASCII a una cadena de caracteres(string).
Desafío de programación #30: Implementar el cifrado César.
Desafío de programación #40: Implementar el algoritmo: ordenamiento de burbuja(bubble sort), en un arreglo(array) de números.
Coding challenge #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #41: Crear una función para calcular la distancia entre dos puntos definidos por sus coordenadas x,y.
Desafío de programación #42: Crear una función que retorne un valor booleano el cual indica si 2 circulos definidos por un centro y un radio se intersectan.
Coding challenge 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44: Crear una función que convierta una cadena de caracteres(string) de números binarios a un número.
Coding challenge #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Coding challenge #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Coding challenge #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Coding challenge #47. Deep copy a jagged array with numbers or other arrays in a new array
Coding challenge #48. Create a function to return the longest word(s) in a string
Coding challenge #49. Shuffle an array of strings
Coding challenge #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Coding challenge #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Coding challenge #52. Calculate Fibonacci(500) with high precision (all decimals)
Coding challenge #53. Calculate 70! with high precision (all decimals)
 */
