//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function() {
    mostrarTextoResultados(calcularPromedio(obtenerArray()),calcularMenor(obtenerArray()),calcularMayor(obtenerArray()),calcularMasFrecuente(obtenerArray())); 
}
const ARRAY_NUEVO = [];

function obtenerArray() {
    const $obtenerLista = document.querySelectorAll('.numero');
    for (let i = 0; i < $obtenerLista.length; i++) {
        ARRAY_NUEVO.push(Number($obtenerLista[i].textContent));
    }
    return (ARRAY_NUEVO);
}

function calcularPromedio(array) {
    let resultadoPromedio;
    let sumaTotalArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumaTotalArray += array[i];
    }
    return (`El promedio es: ${resultadoPromedio = sumaTotalArray / array.length}`);
}

function calcularMenor(array) {
    let auxiliar = array[0];
    let menor;
    for (let i = 0; i < array.length; i++) {
        if(auxiliar < array[i]) {
            menor = auxiliar;
        } else {
            auxiliar = array[i];
            menor = array[i];
        }
    }
    return (`el menor es: ${menor}`);
}

function calcularMayor(array) {
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if(mayor < array[i]) {
            mayor = array[i];
        } 
    }
    return (`el mayor es: ${mayor}`);
}

function calcularMasFrecuente(array) {
    let contadorRepetidos = 0;
    let primerElemento = array[0];
    let posicionRepetido;
    let masFrecuente = 0;
    for (let i = 0; i < array.length; i++) {
        if (primerElemento === array[0]) {
            contadorRepetidos++
            posicionRepetido = i;
        }
    }
    let masRepetido = 0;
    let posicionMasrepetido = 0;
    if (masRepetido < contadorRepetidos) {
        masRepetido = contadorRepetidos
        posicionMasrepetido = posicionRepetido;
    }

    masFrecuente = array[posicionMasrepetido];
    return (`el mas frecuente es: ${masFrecuente}`);
}
function mostrarTextoResultados(promedio,menor,mayor,frecuente) {
    let $textoPromedio = document.querySelector('#promedio');
    let $textoMenor = document.querySelector('#menor');
    let $textoMayor = document.querySelector('#mayor');
    let $textoFrecuente = document.querySelector('#frecuente');
    $textoPromedio.textContent = promedio;
    $textoMenor.textContent = menor;
    $textoMayor.textContent = mayor;
    $textoFrecuente.textContent = frecuente;
}