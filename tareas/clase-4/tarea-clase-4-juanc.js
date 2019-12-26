// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for(i=3; i<22; i=i+3){
    console.log(i);
}


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let variable = 10;
while(variable){
    console.log(variable);
    variable--;
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


console.log('Ejercicio FizzBuzz');
for(i=1; i<=50; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('FizzBuzz');
    }else if(i%3 === 0){
        console.log('Fizz');
    }else if(i%5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}
//--------------------------------------------
console.log('FizzBuzz con sólo dos if');
let palabra;
let palabra1;
let palabra2;

for(let i=1; i<=50; i++){
    palabra = i;
    palabra1 = '';
    palabra2 = '';

    if(i%3 === 0){
        palabra1 = 'Fizz';
        palabra = '';
    }
    if(i%5 === 0){
        palabra2 = 'Buzz';
        palabra = '';
    }
    console.log(palabra+palabra1+palabra2);
}

//------------------------------------------
//resolucion

function fizzBuzz(){
    for(let i=1; i<=50; i++){
        let texto = '';
        
        if(i%3 === 0){
            texto = 'Fizz';
        }

        if(i%5 === 0){
            texto += 'Buzz';
        }

        console.log(texto || i);
    }
}
console.log(fizzBuzz());
// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

numero = [3, 5, 4, 7, 8, 14, 4];

function calcularPromedio(array){
    let sumatoria = 0;
    for(let i=0; i<array.length; i++){
        sumatoria = sumatoria + array[i];
    }
    return sumatoria/array.length;
}

console.log('calcular promedio');
console.log(numero);
console.log(calcularPromedio(numero));