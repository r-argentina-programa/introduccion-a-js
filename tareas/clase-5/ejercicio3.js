
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let arregloLi = [];
const $elemntosLi = document.querySelectorAll('li');

for (let i = 0; i < $elemntosLi.length; i++) {
    let valorEnLi = Number($elemntosLi[i].textContent); 
    arregloLi.push(valorEnLi);
}

function promedio (arregloLi) {
    let n = 0;
    for(let i = 0; i < arregloLi.length; i++) {
        n += arregloLi[i];
    }
    return(n/arregloLi.length);
}
document.querySelector('#resultadoPromedio').textContent += promedio(arregloLi);

function encuentraGrande(arregloLi) {
    let n = 0;
    for(let i=0; i < arregloLi.length; i++) {
        if (arregloLi[i] > n) {
            n = arregloLi[i];
            i++;
        } else {
            i++;
        }
    }
    return n;
}
document.querySelector('#numeroMas').textContent += encuentraGrande(arregloLi);

function encuentraChico(arregloLi) {
    let m = Number.MAX_VALUE;
    for(let i=0; i < arregloLi.length; i++) {
        if (arregloLi[i] < m) {
            m = arregloLi[i];
            i++;
        } else {
            i++;
        }
    }
    return m;
}
document.querySelector('#numeroMenos').textContent += encuentraChico(arregloLi);

function masRepetido(arregloLi) {
    let contRepeticiones = 0;
    let elementoRepetido;
    let frecuencia = 1;
    for(let i=0; i < arregloLi.length; i++) {
        for(let j=0; j<arregloLi.length; j++) {
            if(arregloLi[j]===arregloLi[i]) {
                contRepeticiones++;
            }
            if(contRepeticiones>frecuencia) {
                frecuencia = contRepeticiones;
                elementoRepetido = arregloLi[i];
            }
        }
        contRepeticiones = 0;
    }
    return elementoRepetido;
}
document.querySelector('#masRepetido').textContent += masRepetido(arregloLi);