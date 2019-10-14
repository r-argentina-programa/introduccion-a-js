//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."



function calcularPromedio (numerosArray){
    let contador = 0;
    for (let i= 0; i<numerosArray.length; i++) {
        contador += numerosArray[i]
    } return contador / numerosArray.length;
}

function calcularNumeroMenor (numerosArray) {
    let numeroMenor = 0;
    for (let i=0; i<numerosArray.length; i++) {
        if (numeroMenor<numerosArray[i]){
            numeroMenor = numerosArray[i];
        }
    } return numeroMenor;

}

function calcularNumeroMayor (numerosArray) {
    let numeroMayor = 0;
    for (let i = 0; i < numerosArray.length; i++){
        if (numeroMayor > numerosArray[i]) {
            numeroMayor = numerosArray [i];
        }
    } return numeroMayor
}

function calcularModa (numerosArray) {

}

