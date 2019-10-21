// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
/*

let i;
for (i = 3; i <= 22; i = i = i + 3) {
    console.log('Hola' + i)
}
*/
function parte1() {
    for (let i = 3; i <= 22; i += 3) {
        console.log(i)
    }
}

//parte1()



// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
/*
let numero = 10

while (numero > 0){
    numero -= 1
}
*/
// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10 % 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16 % 4 = 0 - en 16 tenemos 4 * 4
// 19 % 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

/*
let i;
for (i = 0; i <= 50; i++) {
    if (0 === i % 5 && 0 === i % 3) {
        console.log('FizzBuzz')
    } else if (0 === i % 3) {
        console.log('fizz')
    } else if (0 === i % 5) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}
*/

//https://docs.google.com/document/d/129UMg-5TyfgdmbyTC9IAB9owHGmk5EuoK_6Dj20e5dI/edit
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator

//OPERADOR TERNARIO

//(condicion) ? (si es true) : (si es false)
//ES LO MISMO QUE EL IF ELSE // SOLO RECOMENDADO PARA 2 VALORES

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function testClase5(){
    let x = 0
    let y = ++x
    let z = x++
    console.log(z)
}

testClase5()