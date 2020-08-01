//TAREA4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $listadoDeNumeros = document.querySelectorAll("li");
let numeros = new Array;

for(let i = 0; i < $listadoDeNumeros.length ; i++){
    numeros.push(Number($listadoDeNumeros[i].innerText));
}

console.log(numeros);

function calcularPromedio(numeros){

    let suma = 0;
    let promedio = 0;   

    for(let i = 0; i < numeros.length ; i++){
        suma = suma + Number(numeros[i]);
    }

    promedio = suma / numeros.length;

    return promedio.toFixed(2);

}

function obtenerNumeroMenor(numeros){

    let numMenor = numeros[0];

    for(i = 0; i < numeros.length ; i++){

        if(numeros[i] <= numMenor ){
            numMenor = numeros[i];
        }
    }
    
    return numMenor;
}

function obtenerNumeroMayor(numeros){
    
    let numMayor = numeros[0];

    for(let i = 0; i < numeros.length; i++){

        if(numeros[i] >= numMayor){
            numMayor = numeros[i];
        }
    }

    return numMayor;
}

function obtenerNumeroMasFrecuente(numeros){

    let numMasFrecuente = numeros[0];
    let contadorFrecuencia = 0;

    for(let i = 0; i < numeros.length; i++){

        if(numMasFrecuente == numeros[i]){
            numMasFrecuente = numeros[i];
            contadorFrecuencia += contadorFrecuencia
        }
    }

    return numMasFrecuente;
}

console.log(`El promedio es ${calcularPromedio(numeros)}`);

console.log(`El numero menor es ${obtenerNumeroMenor(numeros)}`);

console.log(`El numero mayor es ${obtenerNumeroMayor(numeros)}`);

console.log(`El numero mas frecuente es ${obtenerNumeroMasFrecuente(numeros)}`);