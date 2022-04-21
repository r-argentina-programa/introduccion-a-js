const $botonCalcular = document.querySelector("#boton-calcular");
const $horasPorClase = document.querySelectorAll(".horas");
const $minutosPorClase = document.querySelectorAll(".minutos");
const $segundosPorClase = document.querySelectorAll(".segundos");
const $textoResultadoTotal = document.querySelector("#resultado");



$botonCalcular.onclick = function () {
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
