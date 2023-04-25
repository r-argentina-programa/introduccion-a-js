/*
Tarea 3:
========

- Por cada clase de r/Argentina-Programa existentes debemos pedir horas, minutos y segundos
- Al apretar el botón "Calcular Tiempo Total", debe mostrar el tiempo total de los vídeos
*/

const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function(event) {
    ocultarResultado();

    const $horas = document.querySelectorAll(".hora");
    const $minutos = document.querySelectorAll(".minuto");
    const $segundos = document.querySelectorAll(".segundo");

    let horas = obtenerHoras($horas);
    let minutos = obtenerMinutos($minutos);
    let segundos = obtenerSegundos($segundos);

    while (segundos >= 60) {
        segundos -= 60;
        minutos++
    }

    while (minutos >= 60) {
        minutos -= 60;
        horas++
    }

    document.querySelector("#hora").textContent = horas;
    document.querySelector("#minuto").textContent = minutos;
    document.querySelector("#segundo").textContent = segundos;

    mostrarResultado();

    event.preventDefault();
}

function obtenerHoras($horas) {
    let horas = 0;

    for (let i = 0; i < $horas.length; i++) {
        horas += Number($horas[i].value);
    }

    return horas;
}

function obtenerMinutos($minutos) {
    let minutos = 0;

    for (let i = 0; i < $minutos.length; i++) {
        minutos += Number($minutos[i].value);
    }

    return minutos;
}

function obtenerSegundos($segundos) {
    let segundos = 0;

    for (let i = 0; i < $segundos.length; i++) {
        segundos += Number($segundos[i].value);
    }

    return segundos;
}

function mostrarResultado() {
    document.querySelector("p").className = "";
}

function ocultarResultado() {
    document.querySelector("p").className = "oculto";
}
