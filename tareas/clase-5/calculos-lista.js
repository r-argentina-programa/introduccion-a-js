const $botonCalcular = document.querySelector("#boton-calcular");


//promedio
function calcularPromedio(array) {
    let totalSuma = 0;

    for (let i = 0; i < array.length; i++) {
        totalSuma += array[i];
    };

    return totalSuma / array.length;
}


//numero más grande
function calcularMayorNumero(array) {
    let numeroMayor = 0;

    for (let i = 0; i < array.length; i++) {
        let numeroMayor = array[0];

        if (array[i] > numeroMayor) {
            numeroMayor = array[i];
        };
    };

    return numeroMayor;
}


//numero más pequeño
function calcularMenorNumero(array) {
    let numeroMenor = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < numeroMenor) {
            numeroMenor = array[i]
        };
    };

    return numeroMenor;
}


//numero más frecuente
function calcularNumeroMasFrecuente(array) {
    let numeroMasFrecuente;
    

   
}



/*$botonCalcular.onclick = function(){
    const $numeros = document.querySelectorAll(".numeros").value;

    document.querySelector("#promedio").textContent = `El promedio es ${calcularPromedio($numeros)}`;

    return false
}
*/

$botonCalcular.onclick = function(){
    const $numeros = Number(document.querySelectorAll(".numeros").value);

    document.querySelector("#promedio").textContent = `El promedio es ${calcularPromedio($numeros)}`;

    return false;
}
