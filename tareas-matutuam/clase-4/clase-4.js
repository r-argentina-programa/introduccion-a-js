// Tarea 1: Registrar los números del 10 al 1 usando un "While"

/*
let i = 11;

while (i > 1) {
  i -= 1;
  console.log(i);
}
*/

// Tarea 2: Imprimí cada 3er número del 3 al 22 usando un "For"

/*
for (let i = 3; i < 22; i += 3) {
  console.log(i);
}
*/

// Tarea 3: Hacer una función que se llame calcularPromedio y tome cómo parámetro un "Array"

/*
function calcularPromedio(array) {
  let sumaElementos = 0;

  for (let i = 0; i < array.length; i++) {
    sumaElementos += array[i];
  }

  return sumaElementos / array.length;
}

const promedio = calcularPromedio([2, 4, 6 ,8]);

console.log(`Promedio es ${promedio}`);
*/

// Tarea 4: FizzBuzz

/*
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i);
  }
}
*/

/*
function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    let texto = "";

    if (i % 3 === 0) {
      texto = "Fizz";
    }

    if (i % 5 === 0) {
      texto += "Buzz";
    }

    console.log(texto || i);
  }
}
*/

// fizzBuzz();

// Desafío 1: Imprimí los números del 1 al 10

/*
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/

// Desafío 2: Imprimí los números impares del 1 al 100

/*
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
*/

// Desafío 3: Imprimí la tabla de multiplicación del 7

/*
function multiplicar(numeroUno, numeroDos) {
  return numeroUno * numeroDos;
}
*/

/*
for (let i = 0; i <= 10; i++) {
  let resultado = multiplicar(7, i);

  console.log(`7 x ${i} = ${resultado}`);
}
*/

// Desafío 4: Imprimí todas las tablas de multiplicación del 1 al 9

/*
for (let i = 1; i <= 9; i++) {
  for (let x = 1; x <= 10; x++) {
    let resultado = multiplicar(i, x);

    console.log(`${i} x ${x} = ${resultado}`);
  }
}
*/

// Desafío 5: Calcular el resultado de la suma de los números del 1 al 10 en un Array

// const numeros = [1, 2, 3, 4 ,5 ,6, 7, 8, 9, 10];
// let resultado = 0;

/*
for (let i = 0; i < numeros.length; i++) {
  resultado += numeros[i];
}
*/

// console.log(resultado);

// Desafío 6: Calcular 10!

// let x = 10;

/*
for (let y = 9; y >= 1; y--) {
  x = x * y;
}
*/

// console.log(x);

// Desafío 7: Calcular lasuma de todos los números impares mayores que 10 y menores que 30

// let resultado = 0;

/*
for (let i = 10; i <= 30; i++) {
  if (i % 2 != 0) {
    resultado += i;
  }
}
*/

// console.log(resultado);

// Desafío 8: Crear una función que convierta de Celsius a Fahrenheit

/*
function convertirCelsiusAFahrenheit(gradoCelsius) {
  return Math.round((gradoCelsius * 1.8) + 32);
}
*/

// gradoCelsius = Number(prompt("Ingresar una 'Temperatura en Celsius': "));
// gradoFahrenheitConvertido = convertirCelsiusAFahrenheit(gradoCelsius);

// console.log(`${gradoCelsius}°C a °F es ${gradoFahrenheitConvertido}°F`);

// Desafío 9: Crear una función que convierta de Fahrenheit a Celsius

/*
function convertirFahrenheitACelsius(gradoFahrenheit) {
  return Math.round((gradoFahrenheit - 32) / 1.8);
}
*/

// gradoFahrenheit = Number(prompt("Ingresar una 'Temperatura en Fahrenheit': "));
// gradoCelsiusConvertido = convertirFahrenheitACelsius(gradoFahrenheit);

// console.log(`${gradoFahrenheit}°F a °C es ${gradoCelsiusConvertido}°C`);

// Desafío 10: Calcular la suma de todos los números en un Array de números

// const arrayNumeros = [2, 4, 6 , 8];
// let resultado = 0;

/*
for (let i = 0; i < arrayNumeros.length; i++) {
  resultado += arrayNumeros[i];
}
*/

// console.log(resultado);

// Desafío 11: Crear una función que reciba un Array de número y devuelva un Array conteniendo solo los números positivos

/*
function retornarNumerosPositivos(arrayNumeros) {
  const numerosPositivos = [];

  for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > 0) {
      numerosPositivos.push(arrayNumeros[i]);
    }
  }

  return numerosPositivos;
}
*/

// const numerosPositivos = retornarNumerosPositivos([-7, 3, 8, -2]);

// console.log(numerosPositivos);

// Desafío 12: Encontrar el número más grande en un Array de números

/*
function encontrarNumeroMayor(arrayNumeros) {
  let numeroMayor = arrayNumeros[0];

  for (let i = 0; i < arrayNumeros.length; i++) {
    let numeroComparar = arrayNumeros[i];

    if (numeroComparar > numeroMayor) {
      numeroMayor = numeroComparar;
    }
  }

  return numeroMayor;
}
*/

// const numeroMayor = encontrarNumeroMayor([-3, 1, 0, 8, 23, 48, 13, 20]);

// console.log(numeroMayor);

// Desafío 13: Imprimí los primeros 10 dígitos de Fibonacci sin recursión

// let a = 0;
// let b = 1;
// let suma;

// console.log(a);
// console.log(b);

/*
for (let i = 0; i < 8; i++) {
  suma = a + b;
  a = b;
  b = suma;

  console.log(suma);
}
*/

// Desafío 14: Crear una función que encuentre el número N° de Fibonacci usando recursión

// let i = 0;
// let a = 0;
// let b = 1;
// let suma;
// const fibonacci = [0, 1];

/*
function calcularFibonacci(a, b) {
  i++;

  suma = a + b;
  a = b;
  b = suma;
  console.log(fibonacci);
  fibonacci.push(suma);

  if (i < 10) {
    calcularFibonacci(a, b);
  }
}
*/

// calcularFibonacci(a, b);

// console.log(`La longitud del Fibonacci ha sido de ${fibonacci.length}`);

// Desafío 15: Crear una función que dado un número retorne un Boolean dependiendo si es primo o no

/*
function evaluarSiEsPrimo(numero) {
  let i = numero;
  let contador = 0;

  for (i; i >= 1; i--) {
    if (numero % i === 0) {
      contador++;
    }
  }

  if (contador === 2) {
    return true;
  } else if (contador >= 3) {
    return false;
  }
}
*/

// const numero = Number(prompt("Ingresar 'Número': "));

/*
if (numero === 0 || numero === 1) {
  console.log(`${numero} es Primo = Ni Primo Ni Compuesto`);
} else if (numero > 1) {
  const numeroEsPrimo = evaluarSiEsPrimo(numero);
  console.log(`${numero} es Primo = ${numeroEsPrimo}`);
} else {
  console.log("No entendí el número ingresado");
}
*/

// Desafío 16: Calcular la suma de los dígitos positivos de un número entero positivo

/*
function calcularSumaDigitosPositivos(numero) {
  const arrayNumeros = Array.from(String(numero), Number);
  let suma = 0;

  for (let i = 0; i < arrayNumeros.length; i++) {
    suma += arrayNumeros[i];
  }

  return suma;
}
*/

// const numero = Number(prompt("Ingresar 'Número': "));

/*
if (numero > 0) {
  const sumaDigitosPositivos = calcularSumaDigitosPositivos(numero);
  console.log(`El número inicial es ${numero} y al sumar todos los dígitos es ${sumaDigitosPositivos}`);
} else if (numero < 1) {
  console.log("Debe ingresar un número entero positivo");
} else {
  console.log("No entendí su respuesta");
}
*/
