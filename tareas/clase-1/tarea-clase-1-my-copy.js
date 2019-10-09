// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
// function calcularEdad(anioActual, anioNacimiento) {
//   return anioActual - anioNacimiento;
// }

// const anioActual = Number(prompt('Cuál es el año actual?'));
// const anioNacimiento = Number(prompt('En qué año naciste?'));

// console.log('Tenés ' + calcularEdad(anioActual, anioNacimiento) + ' años');

// // Preguntar el salario anual y calcular el salario mensual
// // Preguntar el salario mensual y calcular el anual
// // diario... semanal, por hora. etc.

// function calcularSalarioAnual(salarioMensual) {
//   const cantidadMesesEnUnAnio = 12;
//   return salarioMensual * cantidadMesesEnUnAnio;
// }

// function calcularSalarioMensual(salarioAnual) {
//   const cantidadMesesEnUnAnio = 12;
//   return salarioAnual / cantidadMesesEnUnAnio;
// }

// function calcularSalarioSemanal(salarioAnual) {
//   const cantidadSemanasEnUnAnio = 52;
//   return salarioAnual / cantidadSemanasEnUnAnio;
// }

// function calcularSalarioDiario(salarioAnual) {
//   const cantidadDiasEnUnAnio = 365;
//   return salarioAnual / cantidadDiasEnUnAnio;
// }

// const salarioMensual = Number(prompt('Cuál es tu salario mensual?'));
// console.log('Tu salario anual es ' + calcularSalarioAnual(salarioMensual));

// const salarioAnual = Number(prompt('Cuál es tu salario mensual?'));
// console.log('Tu salario mensual es ' + calcularSalarioMensual(salarioAnual));
// console.log('Tu salario semanal es ' + calcularSalarioSemanal(salarioAnual));
// console.log('Tu salario diario es ' + calcularSalarioDiario(salarioAnual));

/// SCOPE
/// si tengo que depender de una variable global es mejor hacerla parte del parametro de la funcion

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

//JS traduce linea 53 y 54 asi
/*
var mensaje;
console.log(mensaje);
mensaje = 'hola, mundo'
*/

// Y con let?
// console.log(mensaje); //error
// let mensaje = 'Hola, mundo';

// let mensaje = 'Hola, mundo';
// console.log(mensaje); //funciona, let soluciona las inconsistencias que var ocaciona

// function hoisting

/*
pruebaHoisting(); //funcionaya que js en la ejecucion le hace hoisting a la function(la iza)
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/

// function calcularMesesVividos(mesesVividos) {
//   // este mesesViivido es LOCAL diferente del mesesVividos de la linea 125 que es Global de la FUNCTION
//   console.log('mesesVividos vale ' + mesesVividos);
//   console.log('anioNacimiento vale ' + anioNacimiento);
//   console.log('mesNacimiento vale ' + mesNacimiento);
//   return (2019 - anioNacimiento) * 12 + mesNacimiento;
// }
// let mesesVividos; // undefined
// let anioNacimiento = Number(prompt('En que anio naciste?')); //un numero
// let mesNacimiento = Number(prompt('En que mes naciste?')); //un numero

// console.log('Tienes ' + calcularMesesVividos(mesesVividos) + ' meses vividos');
//este codigo funciona porque la funcion es ejecutada despues que las variables son declaradas

// REFACTORING THIS FUNCTION
function calcularMesesVividos(anioNacimiento, mesNacimiento) {
  //hago esas variables globales parametros de la funcion para tener el control
  return (2019 - anioNacimiento) * 12 + mesNacimiento;
}

let anioNacimiento = Number(prompt('En que anio naciste?')); //un numero
let mesNacimiento = Number(prompt('En que mes naciste?')); //un numero

console.log(
  'Tienes ' +
    calcularMesesVividos(anioNacimiento, mesNacimiento) +
    ' meses vividos'
);
