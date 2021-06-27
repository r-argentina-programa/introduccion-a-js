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

function calcular() {
    const operador = prompt('Ingrese su operador "+", "-", "/", "*"', '+');
    const numero1 = 10;
    const numero2 = 5;
    let resultado;

    if (operador === "+") {
        return sumar(numero1, numero2);
    } else if (operador === "-") {
        return restar(numero1, numero2);
    } else if (operador === "/") {
        return dividir(numero1, numero2);
    } else if (operador === "*") {
        return multiplicar(numero1, numero2);
    } else {
        alert(`No entendi tu operador "${operador}"`);
        calcular();
    };

    function sumar(numero1, numero2, resultado) {
        resultado = numero1 + numero2;
        console.log(`${numero1} + ${numero2} = ${resultado}`);
    };

    function restar(numero1, numero2, resultado) {
        resultado = numero1 - numero2;
        console.log(`${numero1} - ${numero2} = ${resultado}`);
    };

    function dividir(numero1, numero2, resultado) {
        resultado = numero1 / numero2;
        console.log(`${numero1} / ${numero2} = ${resultado}`);
    };

    function multiplicar(numero1, numero2, resultado) {
        resultado = numero1 * numero2;
        console.log(`${numero1} * ${numero2} = ${resultado}`);
    };
};

//calcular();

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

/* function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

const operador = prompt('Ingrese + o -');
const numero1 = 1;
const numero2 = 2;

let resultado;
if (operador === '+') {
    resultado = sumar(numero1, numero2);
} else {
    resultado = restar(numero1, numero2);
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
console.log(
    `
                El resultado de $ { numero1 }
                $ { operador }
                $ { numero2 }
                es $ { resultado }
                `
); */