//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/* const $botonVideo = document.querySelector("#agregar-video");
$botonVideo.onclick = function() {
    const nodoHeader = document.querySelector("header");
    const nuevoDiv = document.createElement("div");
    const nuevoInputHoras = document.createElement("input");
    const nuevoInputMinutos = document.createElement("input");
    const nuevoInputSegundos = document.createElement("input");
    nuevoDiv.appendChild(nuevoInputHoras);
    nuevoDiv.appendChild(nuevoInputMinutos);
    nuevoDiv.appendChild(nuevoInputSegundos);
    nodoHeader.appendChild(nuevoDiv);
    nuevoInputHoras.type = "number";
    nuevoInputHoras.id = "horas-video";
    nuevoInputHoras.placeholder = "Agregar horas";
    nuevoInputMinutos.type = "number";
    nuevoInputMinutos.id = "minutos-video";
    nuevoInputMinutos.placeholder = "Agregar Minutos";
    nuevoInputSegundos.type = "number";
    nuevoInputSegundos.id = "segundos-video";
    nuevoInputSegundos.placeholder = "Agregar segundos";
} */

/* let arrayHoras = [];
let arrayMinutos = [];
let arraySegundos = [];
const $botonAgregarVideo = document.querySelector("#agregar-video");
$botonAgregarVideo.onclick = function() {
    const agregarHoras = Number(document.querySelector("#horas-video").value);
    const agregarMinutos = Number(document.querySelector("#minutos-video").value);
    const agregarSegundos = Number(document.querySelector("#segundos-video").value);
    arrayHoras = agregarHoras;
    arrayMinutos = agregarMinutos;
    arraySegundos = agregarSegundos;
    return false;
}; */

let $horasVideo = document.querySelector("#horas-video");
let $minutosVideo = document.querySelector("#minutos-video");
let $segundosVideo = document.querySelector("#segundos-video");

const arrayHoras = [];
const arrayMinutos = [];
const arraySegundos = [];

let $botonAgregarVideo = document.querySelector("#agregar-video");
$botonAgregarVideo.onclick = function() {
    let horasVideo = Number($horasVideo.value);
    let minutosVideo = Number($minutosVideo.value);
    let segundosVideo = Number($segundosVideo.value);

    arrayHoras.push(horasVideo);
    arrayMinutos.push(minutosVideo);
    arraySegundos.push(segundosVideo);

    borrarValores();

    return arrayHoras, arrayMinutos, arraySegundos;
};

let $botonTiempoTotal = document.querySelector("#calcular-total");
$botonTiempoTotal.onclick = function() {
    calcularTotalHoras(arrayHoras);
    calcularTotalMinutos(arrayMinutos);
    calcularTotalSegundos(arraySegundos)

    let $botonResultado = document.querySelector("#resultado");
    $botonResultado.value = `Cantidad total de tiempo: ${sumaTotalHoras} horas, ${sumaTotalMinutos} minutos y ${sumaTotalSegundos} segundos.`;
}

function borrarValores() {
    $horasVideo.value = null;
    $minutosVideo.value = null;
    $segundosVideo.value = null;
}

function calcularTotalHoras(arrayHoras) {
    sumaTotalHoras = 0;
    for (let i = 0; i < arrayHoras.length; i++) {
        sumaTotalHoras += arrayHoras[i];
    };

    return sumaTotalHoras;
}

function calcularTotalMinutos(arrayMinutos) {
    const minutosPorHora = 60;
    sumaTotalMinutos = 0;

    for (let i = 0; i < arrayMinutos.length; i++) {
        sumaTotalMinutos += arrayMinutos[i];
    }

    if (sumaTotalMinutos >= minutosPorHora) {
        sumaTotalHoras += (sumaTotalMinutos - (sumaTotalMinutos % minutosPorHora)) / minutosPorHora;
        sumaTotalMinutos = sumaTotalMinutos % minutosPorHora;
    }

    return sumaTotalMinutos;
}

function calcularTotalSegundos(arraySegundos) {
    const segundosPorMinuto = 60;
    sumaTotalSegundos = 0;

    for (let i = 0; i < arraySegundos.length; i++) {
        sumaTotalSegundos += arraySegundos[i];
    }

    if (sumaTotalSegundos >= segundosPorMinuto) {
        sumaTotalMinutos += (sumaTotalSegundos - (sumaTotalSegundos % segundosPorMinuto)) / segundosPorMinuto;
        sumaTotalSegundos = sumaTotalSegundos % segundosPorMinuto;
    }

    return sumaTotalSegundos;
}
