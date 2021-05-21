// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
/*
function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}

const anioActual = Number(prompt("Cuál es el año actual?"));
const anioNacimiento = Number(prompt("En qué año naciste?"));

console.log('Tenés ' + calcularEdad(anioActual, anioNacimiento) + ' años');

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularSalarioAnual(salarioMensual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    const cantidadSemanasEnUnAnio = 52;
    return salarioAnual / cantidadSemanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    const cantidadDiasEnUnAnio = 365;
    return salarioAnual / cantidadDiasEnUnAnio;
}

const salarioMensual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario anual es ' + calcularSalarioAnual(salarioMensual));

const salarioAnual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario mensual es ' + calcularSalarioMensual(salarioAnual));
console.log('Tu salario semanal es ' + calcularSalarioSemanal(salarioAnual));
console.log('Tu salario diario es ' + calcularSalarioDiario(salarioAnual));
*/



/*********Ejercicios realizados por mi desde esta linea hacia abajo.*/

// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

/*
function calcularEdad(anioActual, anioNacimiento){
    return anioActual - anioNacimiento;
};

const anioActual = Number(prompt('Ingrese el año actual'));
const anioNacimiento = Number(prompt('Ingrese su año de nacimiento'));


const edad = calcularEdad(anioActual, anioNacimiento)

console.log(`Usted tiene ${edad} años de edad.`)
*/

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularSalarioMensual(salarioAnual){
    const mesesEnUnAnio = 12
    return salarioAnual / mesesEnUnAnio;
}

function calcularSalarioAnual(salarioMensual){
    const mesesEnUnAnio = 12
    return salarioMensual * mesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual){
    const semanasEnUnAnio = 52;
    return salarioAnual / semanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual){
    const diasEnUnAnio = 365;
    return salarioAnual / 365;
}
function calcularSalarioPorHora(salarioAnual){
    const horasDiariasLaborales = 8;
    return calcularSalarioDiario(salarioAnual) / horasDiariasLaborales;
}

const salarioAnual = Number(prompt('Ingrese su salario anual'));
const salarioMensual = Number(prompt('Ingrese su salario mensual'));

const sueldoAnual = calcularSalarioAnual(salarioMensual);
const sueldoMensual = calcularSalarioMensual(salarioAnual);
const sueldoSemanal = calcularSalarioSemanal(salarioAnual);
const sueldoDiario = calcularSalarioDiario(salarioAnual);
const sueldoPorHora = calcularSalarioPorHora(sueldoAnual);


console.log(`Su salario anual es de $${sueldoAnual}.`);
console.log(`Su salario mensual es de $${sueldoAnual}.`);
console.log(`Su salario semanal es de $${sueldoSemanal}`);
console.log(`Su salario diario es de $${sueldoDiario}`);
console.log(`Su salario por hora es de $${sueldoPorHora}`);