const $botonCalcular = document.querySelector("#boton-calcular");


//promedio
function calcularPromedio(array) {
    let totalSuma = 0;

    for (let i = 0; i < array.length; i++) {
        totalSuma += Number(array[i].value);
    };

    return totalSuma / array.length;
}


//numero más grande
function calcularMayorNumero(array) {
    let numeroMayor = Number(array[0].value);

    for (let i = 0; i < array.length; i++) {
        if (Number(array[i].value) > numeroMayor) {
            numeroMayor = Number(array[i].value);
        };
    };

    return numeroMayor;
}


//numero más pequeño
function calcularMenorNumero(array) {
    let numeroMenor = Number(array[0].value);

    for (let i = 0; i < array.length; i++) {
        if (Number(array[i].value) < numeroMenor) {
            numeroMenor = Number(array[i].value)
        };
    };

    return numeroMenor;
}


//numero más frecuente
function calcularNumeroMasFrecuente(array) {
    let numeroMasFrecuente;



}



$botonCalcular.onclick = function () {
    const $numeros = document.querySelectorAll(".numeros");


    document.querySelector("#promedio").textContent = `El promedio es ${calcularPromedio($numeros)}`;
    document.querySelector("#numero-pequenio").textContent = `El número más pequeño es ${calcularMenorNumero($numeros)}`;
    document.querySelector("#numero-grande").textContent = `El número más grande es ${calcularMayorNumero($numeros)}`;
    //document.querySelector("#numero-frecuente").textContent = `El número más frecuente es ${calcularNumeroMasFrecuente($numeros)}`;

    return false;
};

