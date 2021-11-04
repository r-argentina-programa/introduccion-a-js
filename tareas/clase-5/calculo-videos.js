const $botonCalcular = document.querySelector("#boton-calcular");
const $botonAgregarClase = document.querySelector("#boton-agregar-clase");

function agregarClase(numeroDeClase) {
    const $formClases = document.querySelector("#form-clases");

    const $h4 = document.createElement("h4");
    $h4.textContent = `Clase ${numeroDeClase}`;

    const $div = document.createElement("div");
    $div.id = `video ${numeroDeClase}`;

    const $inputHoras = document.createElement("input");
    $inputHoras.type = "number"
    $inputHoras.placeholder = "Ingrese las horas de video";
    $inputHoras.className = "horas";

    const $inputMinutos = document.createElement("input");
    $inputMinutos.type = "number";
    $inputMinutos.placeholder = "Ingrese los minutos de video";
    $inputMinutos.className = "minutos";

    const $inputSegundos = document.createElement("input");
    $inputSegundos.type = "number";
    $inputSegundos.placeholder = "Ingrese los segundos de video";
    $inputSegundos.className = "segundos";

    $formClases.appendChild($h4);
    $formClases.appendChild($div);
    $div.appendChild($inputHoras);
    $div.appendChild($inputMinutos);
    $div.appendChild($inputSegundos);
};


$botonAgregarClase.onclick = function () {
    const numeroDeClase = Number(prompt("Ingrese el número de clase (en números)"));

    agregarClase(numeroDeClase);

    return false;
}

$botonCalcular.onclick = function () {
    const $horasPorClase = document.querySelectorAll(".horas");
    const $minutosPorClase = document.querySelectorAll(".minutos");
    const $segundosPorClase = document.querySelectorAll(".segundos");
    const $textoResultadoTotal = document.querySelector("#resultado");

    let horasTotalesDeClase = 0;
    let minutosTotalesDeClase = 0;
    let segundosTotalesDeClase = 0;

    for (let i = 0; i < $horasPorClase.length; i++) {
        horasTotalesDeClase += Number($horasPorClase[i].value);
    }

    for (let i = 0; i < $minutosPorClase.length; i++) {
        minutosTotalesDeClase += Number($minutosPorClase[i].value);
    }

    for (let i = 0; i < $segundosPorClase.length; i++) {
        segundosTotalesDeClase += Number($segundosPorClase[i].value);
    }

    $textoResultadoTotal.textContent = `El tiempo total de clase es de ${horasTotalesDeClase} horas, ${minutosTotalesDeClase} minutos y ${segundosTotalesDeClase} segundos.`;
}