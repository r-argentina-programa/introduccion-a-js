//botones
const $botonCalcular = document.querySelector("#boton-calcular");
const $botonLimpiar = document.querySelector("#boton-limpiar");

//NodeList a array
function NodeListToArray(NodeList) {
    const arrayNumeros = [];

    for (let i = 0; i < NodeList.length; i++) {
        arrayNumeros.push(Number((NodeList[i].value)))
    }

    return arrayNumeros;
}

//promedio
function calcularPromedio(array) {
    let totalSuma = 0;

    for (let i = 0; i < array.length; i++) {
        totalSuma += array[i];
    };

    return totalSuma / array.length;
};

//numero más grande
function calcularMayorNumero(array) {
    let mayorNumero = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayorNumero) {
            mayorNumero = array[i];
        };
    };

    return mayorNumero;
};

//numero más pequeño
function calcularMenorNumero(array) {
    let menorNumero = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < menorNumero) {
            menorNumero = array[i];
        };
    };

    return menorNumero;
};

//numero más frecuente


//ejecución

$botonCalcular.onclick = function () {
    const $numeros = document.querySelectorAll(".numeros");

    let numerosACalcular = NodeListToArray($numeros);

    console.log(numerosACalcular);

    document.querySelector("#promedio").textContent = `El promedio es ${calcularPromedio(numerosACalcular)}`;
    document.querySelector("#numero-pequenio").textContent = `El número más pequeño es ${calcularMenorNumero(numerosACalcular)}`;
    document.querySelector("#numero-grande").textContent = `El número más grande es ${calcularMayorNumero(numerosACalcular)}`;
    //document.querySelector("#numero-frecuente").textContent = `El número más frecuente es ${calcularNumeroMasFrecuente(numerosACalcular)}`;

    return false;
};


$botonLimpiar.onclick = function(){
document.querySelector("#promedio").textContent = "El promedio es...";
document.querySelector("#numero-pequenio").textContent = "El número más pequeño es...";
document.querySelector("#numero-grande").textContent = "El numero más grande es...";
}