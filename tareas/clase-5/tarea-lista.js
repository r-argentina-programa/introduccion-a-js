

const arrayDeLista = [];

const $items = document.querySelectorAll('li');
for (let i = 0; i < $items.length; i++) {
    arrayDeLista.push(Number($items[i].innerText));
}

function promedio(listaNumeros) {

    let resultado = 0

    for (let i = 0; i < listaNumeros.length; i++) {
        resultado += listaNumeros[i];
    }
    return resultado / listaNumeros.length;
}

function maximo(listaNumeros) {
    let resultado = listaNumeros[0];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > resultado) {
            resultado = listaNumeros[i];
        }
    }
    return resultado
}

function minimo(listaNumeros) {
    let resultado = listaNumeros[0];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] < resultado) {
            resultado = listaNumeros[i];
        }
    }
    return resultado
}

function moda(listaNumeros) {

    let resultado = null
    let cantidadRepeticionesResultado = 0;

    for (let i = 0; i < listaNumeros.length; i++) {

        let pivot = listaNumeros[i];

        let cantidadRepeticionesPivot = 0;

        for (let j = i; j < listaNumeros.length; j++) {

                if (listaNumeros[j] == pivot) {

                cantidadRepeticionesPivot++;
                
            }
        } if (cantidadRepeticionesPivot > cantidadRepeticionesResultado) {
            
            resultado = pivot;
            
            cantidadRepeticionesResultado = cantidadRepeticionesPivot;
        }



    }


    return resultado;

}

document.querySelector("#promedio").innerText = `El promedio es ${promedio(arrayDeLista)}`
document.querySelector("#maximo").innerText = `El número más grande es ${maximo(arrayDeLista)}`
document.querySelector("#minimo").innerText = `El número más pequeño es ${minimo(arrayDeLista)}`
document.querySelector("#moda").innerText = `El número más frecuente es ${moda(arrayDeLista)}`