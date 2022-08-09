//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $botonCalcularPromedio = document.querySelector("#boton-calcular-promedio");

$botonCalcularPromedio.onclick = function(){
    let nodelistDeLi = document.querySelectorAll("li");
    let arrayDeNumeros = convertirNodelistArray(nodelistDeLi);
    let promedioListaNumeros = calcularPromedio(arrayDeNumeros);
    let frasePromedio = `El promedio es ${promedioListaNumeros}.`;
    document.querySelector("#promedio-lista").innerText = frasePromedio;
    let numeroMenor = encontrarNumeroMenor(arrayDeNumeros);
    let fraseNumeroMenor = `El número más pequeño es ${numeroMenor}.`;
    document.querySelector("#numero-menor-lista").innerText = fraseNumeroMenor;
    let numeroMayor = encontrarNumeroMayor(arrayDeNumeros);
    let fraseNumeroMayor = `El número más grande es ${numeroMayor}.`;
    document.querySelector("#numero-mayor-lista").innerText = fraseNumeroMayor;
    let numeroFrecuente = encontrarNumeroFrecuente(arrayDeNumeros);
    let fraseNumeroFrecuente = `El número que más se repite es ${numeroFrecuente}.`;
    document.querySelector("#numero-mas-frecuente").innerText = fraseNumeroFrecuente;
    return false;
}

function convertirNodelistArray(nodelist){
    let array = [];
    for(let i=0;i<nodelist.length;i++){
        array.push(Number(nodelist[i].innerText));
    }
    return array;
}

function calcularPromedio(array) {
    let suma = 0;
    for(let i=0;i<array.length;i++){
        suma += array[i];
    }
    return suma / array.length;
}

function encontrarNumeroMayor(array){
    let numeroMayor = array[0];
    for(let i=0;i<array.length;i++){
        array[i]>numeroMayor ? (numeroMayor = array[i]) : "";
    }
    return numeroMayor;
}

function encontrarNumeroMenor(array){
    let numeroMenor = array[0];
    for(let i=0;i<array.length;i++){
        array[i]<numeroMenor ? (numeroMenor = array[i]) : "";
    }
    return numeroMenor;
}

function encontrarNumeroFrecuente(array){
    let numeroFrecuente = { numero:array[0], vecesQueAparece:0 };
    for(let i=0;i<array.length;i++){
        let candidato = { numero:array[i], vecesQueAparece:0 }
        for(let j=0;j<array.length;j++){
            array[i]===array[j] ? (candidato.vecesQueAparece += 1) : "" ;  
        }
        candidato.vecesQueAparece > numeroFrecuente.vecesQueAparece ? (numeroFrecuente = candidato) : "" ;
    }
    return numeroFrecuente.numero;
}
