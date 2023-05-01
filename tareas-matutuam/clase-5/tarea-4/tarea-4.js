/*
Tarea 4:
========

- Crear una lista de <ol> y <li> que contenga números
- Convertir esos número a un array y:
    1 - Calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
    2 - Obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
    3 - Obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
    4 - Obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
*/

const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function(event) {
    const $li = document.querySelectorAll("li");
    const arrayNumeros = obtenerValoresLista($li);
    console.log(arrayNumeros);

    document.querySelector("#promedio").innerText = calcularPromedio(arrayNumeros);
    document.querySelector("#numero-mayor").innerText = calcularNumeroMayor(arrayNumeros);
    document.querySelector("#numero-menor").innerText = calcularNumeroMenor(arrayNumeros);
    document.querySelector("#numero-frecuente").innerText = calcularNumeroFrecuente(arrayNumeros);

    event.preventDefault();
}

function obtenerValoresLista(lista) {
    const arrayNumeros = [];

    for (let i = 0; i < lista.length; i++) {
        arrayNumeros.push(Number(lista[i].innerText));
    }

    return arrayNumeros;
}

function calcularPromedio(array) {
    let sumaNumeros = 0;

    for (let i = 0; i < array.length; i++) {
        sumaNumeros += array[i];
    }

    return sumaNumeros / array.length;
}

function calcularNumeroMayor(array) {
    let numeroMayor = array[0];

    for (let i = 0; i < array.length; i++) {
        let numeroAComparar = array[i];

        if (numeroAComparar > numeroMayor) {
            numeroMayor = numeroAComparar;
        }
    }

    return numeroMayor;
}

function calcularNumeroMenor(array) {
    let numeroMenor = array[0];

    for (let i = 0; i < array.length; i++) {
        let numeroAComparar = array[i];

        if (numeroAComparar < numeroMenor) {
            numeroMenor = numeroAComparar;
        }
    }

    return numeroMenor;
}

function calcularNumeroFrecuente(array) {
    let repeticion = 0;
    let mayorRepeticion = -999;
    let numeroFrecuente = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            repeticion++;
        } else {
            if (repeticion > mayorRepeticion) {
                mayorRepeticion = repeticion;
                numeroFrecuente = array[i];
            }
        }
    }

    return numeroFrecuente;
}
