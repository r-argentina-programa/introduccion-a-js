//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1


for ( let i = 10; i >= 1; i--) {
  console.log(i);
}
*/

/*
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99


for (let i = 1; i <= 100; i += 2) {
  console.log(i)
}

//Otra forma puede ser
//Dividendo %2, si es par da 0 y si es impar da 1

for (let i = 1; i <= 100; i++) {
  if (i% 2 === 1) {
    console.log(i);
  }
}
*/

/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63


//La mas simple es:
for (let i = 1; i <= 10; i++) {
  console.log(7 * i);
}

//Otra puede ser
for (let i = 1; i <= 10; i++) {
  let multiplicador = 7
  console.log(multiplicador * i);
}

//Tambien una function

function tablaDeNumero(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * numero);
  }
}

tablaDeNumero(8) // ahi imprime la lista

for(var i = 1; i <= 10; i++)
{
    var row = "7 * " + i + " = " + 7 * i;
    println(row);
}

//Probar con un while?

*/
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
/*
//esto de aca abajo fue el primer intento. Basicamente hice un while funcionar como un for jajaja pero anduvo!
for (let numeroMultiplicado = 1; numeroMultiplicado < 10; numeroMultiplicado++) {
  let multiplicador = 0;
  while (multiplicador < 10) {
    let resultado = numeroMultiplicado * multiplicador;  
    console.log(`${numeroMultiplicado}` + "x" + `${multiplicador}` + " = " + `${resultado}` );
    multiplicador += 1;
  }
}

//Aca abajo la versión con dos "for" que segun fabricio seria lo normal a hacer.
for (let numeroMultiplicado = 1; numeroMultiplicado < 10; numeroMultiplicado++) {
  for (let multiplicador = 0; multiplicador < 10; multiplicador++) {
    let resultado = numeroMultiplicado * multiplicador;  
    console.log(`${numeroMultiplicado}` + "x" + `${multiplicador}` + " = " + `${resultado}` );
  }
}
*/
/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
*/
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let contador = 0

for (let i = 0; i < numeros.length; i++) {
  resultado = contador += numeros[i]
}

console.log(resultado)
//aca si pones numeros.length solo tira NaN. A lo que el index es de 0 a 9 la flashea, ACORDARSE ESO. 10 NO ESTA. Poner < y no <=
//atento al debugger cuando pasan esas cosas
*/
/*
Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1


let resultado = 1;

for (let i = 10; i > 0; i--) {
  resultado *= i;
} console.log(resultado)
*/
/*
//DESAFIO 10.5 (? que lo tiraron ahi en slack
// Se animan a hacer un programa que al final imprima el
// 1. Salario bruto anual
// 2. Salario neto anual
// 3. Salario neto mensual
// Sabiendo que de aportes se quita 8% y si el salario anual supera los 720k pesos se descuenta 20% de impuestos a las ganancias?


const sueldoMensualCliente = prompt("Cual es su sueldo?")
const mesesDelAño = 12
const retencionesMensuales = 8
const impuestoGanancias = 20

const salarioBrutoAnual = sueldoMensualCliente * mesesDelAño

let = salarioNetoMensual = sueldoMensualCliente - (sueldoMensualCliente / 100 * retencionesMensuales)

let salarioNetoAnual = salarioNetoMensual * mesesDelAño

if (salarioBrutoAnual > 720000) {
  salarioNetoMensual = (salarioBrutoAnual - (salarioBrutoAnual / 100 * 20)) / 12
}

console.log("Su salario bruto anual es " + salarioBrutoAnual + " pesos")
console.log("Su salario neto anual es " + salarioNetoAnual + " pesos")
console.log("Su salario neto mensual es " + salarioNetoMensual + " pesos")
*/
/*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30


let resultado = 0

for (let i = 10; i < 30; i++) {
  if (i % 2 === 1) {
    resultado += i;
  }
} console.log(resultado)

*/
/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit


//INFO:
// °C to °F	Multiply by 9, then divide by 5, then add 32

function gradosCelsiusAFahrenheit (gradosCelsius) {
  gradosFahrenheit = gradosCelsius * 9/5 + 32;
  console.log(`${gradosCelsius}` + "°C son " + `${gradosFahrenheit}` + "°F")
}

gradosCelsiusaFahrenheit(100)


*/
/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

// °F to °C	Deduct 32, then multiply by 5, then divide by 9


function gradosFahrenheitACelsius (gradosFahrenheit) {
  gradosCelsius = (gradosFahrenheit - 32) * 5 / 9 ;
  console.log(`${gradosFahrenheit}` + " °F son " + `${gradosCelsius}` + "°C")
} 

gradosFahrenheitACelsius(180)
*/
/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números


let numeros = [10, 5, 1, 5];
let resultado = 0;

for (let i = 0; i < numeros.length; i++) {
  resultado += numeros[i]
} console.log(resultado)
*/
/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)


function calculoPromedio (valores) {
  let resultado = 0;
  for (let i = 0; i < valores.length; i++) {
    resultado += valores[i];
  } console.log(resultado/valores.length);
  
}

calculoPromedio([7, 7.5, 10, 6])

//Recordar que las variables tienen que estar declaradas adentro de la funcion y no adentro de for.
*/

/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos


function numerosPositivos (valores) {
  let arrayPositivo = [];
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 0) {
    arrayPositivo.push(valores[i]); 
    } 
  } console.log(arrayPositivo);
}

numerosPositivos([1, 2, 3, -4, 5, -6, -7, 8, -9, 10, 11, -12, -13, 14, 15])
*/

/*
Desafío de programación #13: Find the maximum number in an array of numbers


// La clave está en que la variable se vaya transformando en el numero mas grande.
function encontrarMayorNumero (numeros) {
    let numeroMayor = numeros[0]; //acá no poner 0 solo porque si no no sirve si son todos negativos. Mas vale arrancar con un numero del mismo array.
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
      }
    } console.log("El mayor número es " +  `${numeroMayor}`)
}

encontrarMayorNumero ([-1, -2, -3, -4, -5]);
*/

/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55


//fibonacci es la suma de los dos numeros anteriores.


function numerosFibonacci (n1, n2) {
    for (let i = 0; i < 10; i++) {
      resultado = n1 + n2;
      n1 += 1
      n2 += 2
    } console.log(resultado)
}

numerosFibonacci(0, 1) //NO ESTA TERMINADO ESTE! HACERLO BIEN!


*/
/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/
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
/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
*/
/*
Desafío de programación #18: Imprimir los primeros 100 números primos
*/
/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
*/
/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
*/
/*
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
*/
/*
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/
/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/
/*
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

*/
/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]
*/
/*
Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/
/*
Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
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
