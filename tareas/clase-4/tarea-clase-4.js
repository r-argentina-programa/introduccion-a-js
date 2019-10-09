// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
function parte1() {
  for (let i = 3; i <= 22; i = i + 3) {
    console.log(i);
  }
}
parte1();

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de diez a uno.

// let num = 0;
// while (num < 10) {
//   num += 1;
//   console.log(num); //print numbers from 1 to 10
// }

// let num = 11;
// while (num > 1) {
//   num -= 1;
//   console.log(num); // print numbers 10 to 1
// }

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

//function fizzBuzz() {
//   for (let i = 1; i <= 50; i++) {
//     //si el numero es multiplo de 3 imprime 'Fizz'
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i + ' FizzBuzz');
//       //si el numero es multiplo de 5 imprime 'Buzz'
//     } else if (i % 3 === 0) {
//       console.log(i + ' Fizz');
//     } else if (i % 5 === 0) {
//       console.log(i + ' Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();

function fizzBuzz2() {
  for (let i = 1; i <= 50; i++) {
    let texto = '';
    //si el numero es multiplo de 3 imprime 'Fizz'
    if (i % 3 === 0) {
      texto = 'Fizz';
    }
    if (i % 5 === 0) {
      texto += 'Buzz';
    }
    console.log(texto || i);
  }
}

fizzBuzz2();

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])
function calcularPromedio(arr) {
  let sumaTotal = 0;
  let promedio;
  //iterar por cada uno de los valores
  for (let i = 0; i < arr.length; i++) {
    //sumar los valores y almacenar este resultado
    sumaTotal = sumaTotal + arr[i] / arr.length;
  }

  // promedio = sumaTotal / arr.length;

  //dividir la sumaTotal por la cantidad total de valores en el arreglo
  console.log(sumaTotal);
}
calcularPromedio([2, 2, 2]);

// parametros por default
function verificaEdadEntrada(edad = 18) {
  if (edad >= 18) {
    console.log('bienvenido al bar!');
  } else {
    console.log('Eres menor de edad');
  }
}

verificaEdadEntrada(17);
