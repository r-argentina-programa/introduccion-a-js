// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
// function numerosDeTresEnTres() {
// 	for (let i = 3; i < 22; i + 3) {
// 		console.log(i);
// 	}
// }

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
// function cuentaRegresivaDiezAUno() {
// 	let contador = 11;
// 	while (contador > 1) {
// 		contador--;
// 		console.log(contador);
// 	}
// }
// cuentaRegresivaDiezAUno();
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

// function fizzBuzz() {
// 	for (let i = 0; i <= 50; i++) {
// 		if (i % 15 === 0) {
// 			console.log('FizzBuzz');
// 		} else if (i % 3 === 0) {
// 			console.log('Fizz');
// 		}else if(i % 5 === 0){
//             console.log('Buzz');
//         }
//          else {
// 			console.log(i);
// 		}
// 	}
// }
// fizzBuzz();
// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

// function promedioArray(array){
//     let promedioMaximo= Math.max(...array)
//     let promedioMinimo= Math.min(...array)

//     let promedioTotal= (promedioMaximo + promedioMinimo) /2
//     console.log(promedioTotal)
// }

// function promedioArray(array){
// 	let acumulador=0;
// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		acumulador=element+acumulador;
// 	}
// 	let promedio = acumulador  / array.length;
// 	console.log(promedio);
// 	return promedio;
// }
//  promedioArray([10, 5, 4, 2, 8]);

// function promedioArray(array) {
// 	let acumulador = 0;
// 	let iterador = 0;
//     let posicion=0;
// 	while (iterador < array.length) {
//         posicion = array[iterador];
//         acumulador = acumulador + posicion;
// 		iterador+=1;
//         let promedio=acumulador /array.length;
//         console.log(promedio)
// 	}
// }
// promedioArray([10, 5, 4, 2, 8]);