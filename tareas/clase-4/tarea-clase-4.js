// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

// for (let index = 0; index < 24; index = index + 3) {
//   console.log(index);
// }

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//diez a uno.

// const nums = [];
// let contador = 11;
// while (contador > 0) {
//   contador = contador - 1;
//   nums.push(contador);
// }
// console.log(nums);

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

// for (let index = 1; index < 51; index++) {
//   const num = index;
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(num);
//   }
// }

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

// function calcularPromedio(arrayNums) {
//   let counter = 0;
//   for (let index = 0; index < arrayNums.length; index++) {
//     counter = arrayNums[index] + counter;
//   }
//   return counter / arrayNums.length;
// }

// const notas = [10, 5, 8, 9];
// const promedio = calcularPromedio(notas);
// console.log("El promedio es de: " + promedio);
