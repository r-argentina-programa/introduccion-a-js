const $botonCalcular = document.querySelector("#boton-calcular");
const $botonLimpiar = document.querySelector("#boton-limpiar");


function nodeListToArray(nodeList) {
    const arrayNumeros = [];

    for (let i = 0; i < nodeList.length; i++) {
        arrayNumeros.push(Number((nodeList[i].value)))
    }

    return arrayNumeros;
}


function calcularPromedio(array) {
    let totalSuma = 0;

    for (let i = 0; i < array.length; i++) {
        totalSuma += array[i];
    };

    return totalSuma / array.length;
};


function calcularMayorNumero(array) {
    let mayorNumero = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayorNumero) {
            mayorNumero = array[i];
        };
    };

    return mayorNumero;
};


function calcularMenorNumero(array) {
    let menorNumero = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < menorNumero) {
            menorNumero = array[i];
        };
    };

    return menorNumero;
};


function calcularNumeroMasFrecuente(array) {
    let numeroMasFrecuente;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                numeroMasFrecuente = array[i];
            };
        };
    };

    return numeroMasFrecuente;
}


$botonCalcular.onclick = function () {
    const $numeros = document.querySelectorAll(".numeros");

    let numerosACalcular = nodeListToArray($numeros);

    console.log(numerosACalcular);

    document.querySelector("#promedio").textContent = `El promedio es ${calcularPromedio(numerosACalcular)}`;
    document.querySelector("#numero-pequenio").textContent = `El número más pequeño es ${calcularMenorNumero(numerosACalcular)}`;
    document.querySelector("#numero-grande").textContent = `El número más grande es ${calcularMayorNumero(numerosACalcular)}`;
    document.querySelector("#numero-frecuente").textContent = `El número más frecuente es ${calcularNumeroMasFrecuente(numerosACalcular)}`;

    return false;
};


$botonLimpiar.onclick = function () {
    document.querySelector("#promedio").textContent = "El promedio es...";
    document.querySelector("#numero-pequenio").textContent = "El número más pequeño es...";
    document.querySelector("#numero-grande").textContent = "El numero más grande es...";
    document.querySelector("#numero-frecuente").textContent = "El número más frecuente es...";
}