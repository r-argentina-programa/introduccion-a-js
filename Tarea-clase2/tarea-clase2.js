//TAREA 1 - CLASE2

// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//


// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

let primerNumero = Number(prompt('Ingrese el primer numero'));
let segundoNumero = Number(prompt('Ingrese el segundo numero'))
let operador = String(prompt('Ingrese el operador de suma o resta'));

function sumar(primerNumero,segundoNumero){
    return console.log("El resultado de la suma es " + (primerNumero+segundoNumero));
} 

function restar(primerNumero,segundoNumero){
    return console.log("El resultado de la resta es " + (primerNumero-segundoNumero));
}
if(operador === '+'){
        sumar(primerNumero,segundoNumero)}
else if (operador === '-') { 
     restar(primerNumero,segundoNumero)

}
else{
    alert("No seleccionaste el operador correcto (+ o -)")
}





