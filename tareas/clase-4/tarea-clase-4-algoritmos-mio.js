//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

*/
/* console.log("Ejercicio 1");
for (i = 1; i <= 10; i++) {
  console.log(i);
} */
/*


Resultado: 10 9 8 7 6 5 4 3 2 1

Desafìo de programación  #2: Imprimí los números impares del 1 al 100

*/
/* console.log("Ejercicio 2");
for (i = 1; i <= 100; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
} */

/*

1 3 5 ... 99

Desafío de programación #3: Imprimí la tabla de multiplicación del 7

7x0 = 0
7x1 = 7
...
7x9 = 63


*/
/* console.log("Ejercicio 3");
for (i = 7; i <= 70; i += 7) {
	console.log(i);
} */
/*


Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81


*/
/* console.log("Ejercicio 4");
let valorDeTabla = 1;
for (i = 1; i <= 9; i++) {
	console.log(`Tabla del ${valorDeTabla}`);
	for (j = valorDeTabla; j <= 10 * valorDeTabla; j += valorDeTabla) {
		console.log(j);
	}
	valorDeTabla += 1;
} */
/*



Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle


*/
/* console.log("Ejercicio 5");
const arrayBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumatoriaValoresArray = 0;

for (i = 0; i < arrayBase.length; i++) {
	sumatoriaValoresArray += arrayBase[i];
}
console.log(sumatoriaValoresArray); */

/*



Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1


*/
/* console.log("Ejercicio 6");
let resultado = 1;
for (i = 10; i >= 1; i--) {
	resultado = resultado * i;
}
console.log(resultado); */
/*


Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

*/
/* console.log("Ejercicio 7");
let sumatoriaTotal = 0;
for (i = 10; i <= 30; i++) {
	if (i % 2 === 1) {
		sumatoriaTotal += i;
	}
}
console.log(sumatoriaTotal); */
/*

Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

*/
/* console.log("Ejercicio 8 - Celcius a Farenheit");
const gradosAConvertir = prompt("Ingresá los grados en Celcius para convertir a Farenheit");

function celciusToFarenheit(degreesToConvert) {
	let convertedValue = (degreesToConvert * 9) / 5 + 32;
	return convertedValue;
}

console.log(celciusToFarenheit(gradosAConvertir)); */

/*

Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

*/
/* console.log("Ejercicio 9 - Farenheit a Celcius");

function celciusToCelcius(degreesToConvert) {
	let convertedValue = ((degreesToConvert - 32) * 5) / 9;
	return convertedValue;
}
30
const gradosAConvertir = prompt("Ingresá los grados en Farenheit para convertir a Celcius");
console.log(celciusToCelcius(gradosAConvertir)); */
/*


Desafío de programación #10: Calcula la suma de todos los números en un array de números

*/
/* 
console.log("Ejercicio 11");
const arrayBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumatoriaNumerosArray = 0;
for (i = 0; i < arrayBase.length; i++) {
	sumatoriaNumerosArray += arrayBase[i];
}
console.log(sumatoriaNumerosArray); */

/*


Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/
/* console.log("Ejercicio 11");
const arrayBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function obtenerPromedio(arrayNumeros) {
	let sumaTotal = 0;
	for (i = 0; i < arrayBase.length; i++) {
		sumaTotal += arrayBase[i];
	}
	return sumaTotal / arrayNumeros.length;
}
console.log(`El promedio del array es ${obtenerPromedio(arrayBase)}`); */
/*

Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

*/

/* console.log("Ejercicio 12");
function filtroArrayNumerosPositivos(arrayInicial) {
	arrayOutput = [];
	for (i = 0; i < arrayInicial.length; i++) {
		if (arrayInicial[i] > 0) {
			arrayOutput.push(arrayInicial[i]);
		}
	}
	return arrayOutput;
}
const arrayPrueba = [-5, 5, 10, -987, 4566, 1, 6, -6, 4];
console.log(filtroArrayNumerosPositivos(arrayPrueba)); */
/*

Desafío de programación #13: Find the maximum number in an array of numbers
*/
/* console.log("Ejercicio 13");
const arrayPrueba1 = [1, 54, 4, 6, 78, 9, 456, 4968, 43, 5651];
const arrayPrueba = [-1, -456, -106, -890];
let numeroMayor = arrayPrueba[0];
for (i = 0; i < arrayPrueba.length; i++) {
	if (arrayPrueba[i] > numeroMayor) {
		numeroMayor = arrayPrueba[i];
	}
}
console.log(`El número más grande del array es ${numeroMayor}`); */
/*

Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

*/

/* console.log("Ejercicio 14");
function obtenerValorSecuenciaFibonacci(valorDeSecuencia) {
	let secuenciaOutput = [0];
	let valorActual = 1;
	if (valorDeSecuencia === 0) {
		return secuenciaOutput;
	} else if (valorDeSecuencia > 0) {
		for (i = 1; i <= valorDeSecuencia; i++) {
			secuenciaOutput.push(valorActual);
			valorActual += secuenciaOutput[i - 1];
		}
	}
	return secuenciaOutput;
}
console.log(obtenerValorSecuenciaFibonacci(prompt("Ingresa el valor de la secuencia que quieras obtener"))); */

/*


Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/

/* console.log("Ejercicio 15");
function obtenerValorSecuenciaFbionacciRecursivo(valorDeSecuencia) {
	if (valorDeSecuencia < 2) {
		return valorDeSecuencia;
	}
	return (
		obtenerValorSecuenciaFbionacciRecursivo(valorDeSecuencia - 1) +
		obtenerValorSecuenciaFbionacciRecursivo(valorDeSecuencia - 2)
	);
}
const valorSecuenciaUsuario = prompt("Ingresa el valor de la serie a obtener");
console.log(obtenerValorSecuenciaFbionacciRecursivo(valorSecuenciaUsuario)); */

/*
Desafío de programación #16: Create una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
Ejemplo:
   1 NO es primo porque tiene 2 divisores enteros (1, -1)
   2 es primo porque sólo puede dividirse por (1,-1,2,-2)
   3 es primo porque sólo puede dividirse por (1,-1,3,-3)
   4 NO es primo porque se puede dividir por (1,-1,2,-2,4,-4)
   5 es primo porque sólo puede dividirse por (1,-1,5,-5)
   6 NO es primo porque se puede dividir por (1,-1,2,-2,3,-3,6,-6)
   ... y así

*/

/* console.log("Ejercicio 16");
function esNumeroPrimo(inputUsuario) {
	let divisibilidad = 0;
	for (i = 1; i <= inputUsuario; i++) {
		if (inputUsuario % i === 0) {
			divisibilidad++;
		}
	}
	if (divisibilidad != 2) {
		return false;
	} else {
		return true;
	}
}
console.log(esNumeroPrimo(prompt("Ingresá un número para ver si es primo"))); */

/*

Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10

*/

/* console.log("Ejercicio 17");
function sumaDigitosNumero(numeroInicial) {
	let counter = 0;
	for (i = 0; i < numeroInicial.length; i++) {
		counter += Number(numeroInicial[i]);
	}
	return counter;
}
console.log(
	`La suma de los dígitos ingresados es ${sumaDigitosNumero(
		prompt("Ingresá un Número para obtener la suma de sus dígitos")
	)}`
); */

/*


Desafío de programación #18: Imprimir los primeros 100 números primos
 
*/
/* console.log("Ejercicio 18");
function getPrimeNumbers(numberOfPrimeNumbers) {
	let primeNumberCounter = 0;
	let primerNumberArray = [];
	let counter = 0;

	while (primeNumberCounter < numberOfPrimeNumbers) {
		counter++;
		let isDivisible = 0;

		for (i = 1; i <= counter; i++) {
			if (counter % i === 0) {
				isDivisible++;
			}
		}
		if (isDivisible === 2) {
			primerNumberArray.push(counter);
			primeNumberCounter++;
		}
	}
	return primerNumberArray;
}
console.log(getPrimeNumbers(prompt("Ingresa la cantidad de numeros primos a obtener"))); */
/*


Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

*/
/* console.log("Ejercico 19");
function getPrimeNumbers(numberOfPrimeNumbers, primeNumbersBiggerThan) {
	let primeNumberCounter = 0;
	let primerNumberArray = [];
	let counter = 0;

	while (primeNumberCounter < numberOfPrimeNumbers) {
		counter++;
		let isDivisible = 0;

		for (i = 1; i <= counter; i++) {
			if (counter % i === 0) {
				isDivisible++;
			}
		}
		if (isDivisible === 2 && counter > primeNumbersBiggerThan) {
			primerNumberArray.push(counter);
			primeNumberCounter++;
		}
	}
	return primerNumberArray;
}

const numberOfPrimeNumbers = prompt("Cuántos números primos querés obtener?");
const primeNumbersBiggerThan = prompt("Los números primos tienen que ser mayores a cuánto?");

console.log(getPrimeNumbers(numberOfPrimeNumbers, primeNumbersBiggerThan)); */
/*


Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
  */
/* console.log("Ejercicio 20");
function arrayRotation(inputArray, positionsToRotate) {
	for (i = 0; i < positionsToRotate; i++) {
		const tempValue = inputArray[0];
		inputArray.splice(0, 1);
		inputArray.push(tempValue);
	}
	return inputArray;
}
let inputArray = ["Perro", "Gato", 732, 1992, "Saavedra"];
const positionsToRotate = prompt("How many positions do you want to rotate the array?");
console.log(arrayRotation(inputArray, positionsToRotate)); */
/*

Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

*/
/* console.log("Ejercicio 21");
function inverseArrayRotation(inputArray, positionsToRotate) {
	for (i = 0; i < positionsToRotate; i++) {
		const tempValue = inputArray.pop();
		inputArray.splice(0, 0, tempValue);
	}
	return inputArray;
}
let inputArray = [2, 3, 4, 1];
const positionsToRotate = prompt("How many positions do you want to rotate the array?");
console.log(inverseArrayRotation(inputArray, positionsToRotate)); */
/*

Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/
/* console.log("Ejercicio 22");
function invertArray(inputArray) {
	inputArray.reverse();
	return inputArray;
}
const arrayPrueba = [6, 5, 4, 3, 2, 1];
console.log(invertArray(arrayPrueba)); */
/*

Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"

Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

*/
/* console.log("Ejercicio 24");
function invertString(inputString) {
	let outputString = "";
	for (i = inputString.length - 1; 0 <= i; i--) {
		outputString += inputString[i];
	}
	return outputString;
}
console.log(invertString(prompt("Ingresá el texto que quieras invertir"))); */

/*


Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

*/
/* console.log("Ejercicio 25");
function symmetricDifference(array1, array2) {
	let outputArray = [];
	for (i = 0; i < array1.length; i++) {
		if (!array2.includes(array1[i])) {
			outputArray.push(array1[i]);
		}
	}
	for (i = 0; i < array2.length; i++) {
		if (!array1.includes(array1[i])) {
			outputArray.push(array1[i]);
		}
	}
	return outputArray;
}
let array1 = [1, 2, 3, 10, 5, 3, 14];
let array2 = [1, 4, 5, 6, 14];
let arrayOutput = symmetricDifference(array1, array2);
console.log(arrayOutput); */
/*

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

  */
/* 
console.log("Ejercicio 25");
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4];

function restaArrays(array1, array2) {
	let outputArray = [];
	for (let valor of array1) {
		if (!array2.includes(valor)) {
			outputArray.push(valor);
		}
	}
	return outputArray;
}
console.log(restaArrays(array1, array2)); */

/*

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

*/

/* console.log("Ejercicio 27");

let arrayPrueba = [1, 2, 3, 4, 5, 4, 3, 2, 1, 0];

function removerRepetidosArray(array) {
	let arrayOutput = [];
	for (let i = 0; i < array.length; i++) {
		if (!estaEnArray(array[i], arrayOutput)) {
			arrayOutput.push(array[i]);
		}
	}
	return arrayOutput;
}
function estaEnArray(valor, array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === valor) {
			return true;
		}
	}
	return false;
}
console.log(removerRepetidosArray(arrayPrueba)); */

/*

==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers

*/

/* console.log("Ejercicio 28");

function obtenerNumerosPrimos(cantidadNumerosPrimos) {
	let cantidadNumerosPrimosObtenidos = 0;
	let arrayNumerosPrimos = [];
	let contador = 0;

	while (cantidadNumerosPrimosObtenidos < cantidadNumerosPrimos) {
		contador++;
		let esDivisible = 0;

		for (i = 1; i <= contador; i++) {
			if (contador % i === 0) {
				esDivisible++;
			}
		}
		if (esDivisible === 2) {
			arrayNumerosPrimos.push(contador);
			cantidadNumerosPrimosObtenidos++;
		}
	}
	return arrayNumerosPrimos;
}
function sumaValoresArray(inputArray) {
	let totalSum = 0;
	for (let arrayValue of inputArray) {
		totalSum += arrayValue;
	}
	return totalSum;
}

let cantidadNumerosPrimos = obtenerNumerosPrimos(prompt("Cuántos números primos querés?"));
console.log(sumaValoresArray(cantidadNumerosPrimos)); */

/*


Desafío de programación #29: Print the distance between the first 100 prime numbers

*/
/* console.log("Ejercicio 29");
function printDistances(n) {
	var lastPrime = 2;
	var i = lastPrime + 1;
	var foundPrimes = 1;

	while (foundPrimes < n) {
		if (isPrime(i)) {
			console.log(i - lastPrime, "\t", i, " - ", lastPrime);
			foundPrimes++;
			lastPrime = i;
		}
		i++;
	}
}

// Returns true if number n is prime
function isPrime(n) {
	if (n < 2) return false;
	if (n == 2) return true;
	var maxDiv = Math.sqrt(n);
	for (var i = 2; i <= maxDiv; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}
console.log(printDistances(prompt("Ingresa numero para verificar si es primo"))); */

/*


Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
*/
/* console.log("Ejercicio 30");
function addStringNumbers(string1, string2) {
	let outputString = Number(string1) + Number(string2);
	return outputString.toString();
}

const stringNumber1 = "30";
const stringNumber2 = "1330";
console.log(addStringNumbers(stringNumber1, stringNumber2)); */

/*
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
*/
/* console.log("Ejercicio 30");
function wordCounter(originalText) {
	wordCounter = 0;
	wasSeparator = true;
	for (let character of originalText) {
		if (isSeparator(character)) {
			wasSeparator = true;
			continue;
		}
		if (wasSeparator) {
			wordCounter++;
			wasSeparator = false;
		}
	}
	return wordCounter;
}
function isSeparator(character) {
	var separatorList = [" ", "\t", "\r", "\n", ",", ";", ".", "?", "¿", "!", "¡", ":"];
	return separatorList.includes(character);
}
const text =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt facilis in dolorum assumenda culpa? Perspiciatis fugit, blanditiis a inventore molestias corporis praesentium et non itaque nesciunt harum animi eos cumque, expedita dolor earum consectetur? Alias rem ea repellat consequuntur!";
console.log(wordCounter(text)); */

/*
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
*/
/* console.log("Ejercicio 32");
function wordCapitalizer(originalText) {
	let outputText = "";
	wasSeparator = true;

	for (let character of originalText) {
		if (isSeparator(character)) {
			outputText += character;
			wasSeparator = true;
			continue;
		}
		if (wasSeparator) {
			outputText += character.toUpperCase();
			wasSeparator = false;
		} else if (!wasSeparator) {
			outputText += character;
		}
	}
	return outputText;
}
function isSeparator(character) {
	var separatorList = [" ", "\t", "\r", "\n", ",", ";", ".", "?", "¿", "!", "¡", ":"];
	return separatorList.includes(character);
}

const text =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt facilis in dolorum assumenda culpa? Perspiciatis fugit, blanditiis a inventore molestias corporis praesentium et non itaque nesciunt harum animi eos cumque, expedita dolor earum consectetur? Alias rem ea repellat consequuntur!";
console.log(wordCapitalizer(text)); */

/*
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
*/
/* console.log("Ejercicio 33");
function sumOfNumsInCSS(inputString) {
	const newArray = inputString.split(",");
	let sum = 0;
	for (let i = 0; i < newArray.length; i++) {
		sum += Number(newArray[i]);
	}
	return sum;
}
const testString = "1,56,489,18,165,89,198,189,186";
console.log(sumOfNumsInCSS(testString)); */
/*
Desafío de programación #34. Create a function that will return an array with words inside a text

Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */
