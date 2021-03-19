//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcularTiempo = document.querySelector("#calcular-tiempo");


$botonCalcularTiempo.onclick = function() {

    // carga de arrays con todos los inputs.

    let arraySegundos = [];
    let $arraySegundos = document.getElementsByClassName("segundos");

    for (i=0; i<$arraySegundos.length; i++) {
        let campoSegundos = $arraySegundos[i];
        arraySegundos.push(Number(campoSegundos.value));
    }

    let arrayMinutos = [];
    let $arrayMinutos = document.getElementsByClassName("minutos");

    for (i=0; i<$arraySegundos.length; i++) {
        let campoMinutos = $arraySegundos[i];
        arrayMinutos.push(Number(campoMinutos.value));
    }

    let arrayHoras = [];
    let $arrayHoras = document.getElementsByClassName("horas");

    for (i=0; i<$arrayHoras.length; i++) {
        let campoHoras = $arrayHoras[i];
        arrayHoras.push(Number(campoHoras.value));
    }

    // cálculo de tiempo total

    let totalHoras = 0;
    for (i=0; i<arrayHoras.length; i++) {
        totalHoras+= arrayHoras[i];
    }

    let totalMinutos = 0;
    for (i=0; i<arrayMinutos.length; i++) {
        totalMinutos+= arrayMinutos[i];
    }

    let totalSegundos = 0;
    for (i=0; i<arrayMinutos.length; i++) {
        totalSegundos+= arraySegundos[i];
    }

    // transformar resultados totales

    let divisionSegundos, enteroSegundos, decimalSegundos;
    let divisionMinutos, decimalMinutos;
    let enteroMinutos = 0;
    let segundosActual, minutosActual, horasActual;

    if (totalSegundos >= 60) {
        divisionSegundos = totalSegundos / 60;
        enteroSegundos = Math.floor(divisionSegundos);
        decimalSegundos = divisionSegundos - enteroSegundos;
        segundosActual = Math.round(decimalSegundos * 60);
    } else {
        segundosActual = Number(totalSegundos);
    }

    if (totalMinutos >= 60) {
        divisionMinutos = (totalMinutos + enteroSegundos) / 60;
        enteroMinutos = Math.floor(divisionMinutos);
        decimalMinutos = divisionMinutos - enteroMinutos;
        minutosActual = Math.round(decimalMinutos * 60);
    } else {
        minutosActual = Number(totalMinutos);
    }

    horasActual = totalHoras + enteroMinutos;

    console.log(horasActual);
    console.log(minutosActual);
    console.log(segundosActual);
}
