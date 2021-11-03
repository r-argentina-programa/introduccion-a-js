$botonCalcular.onclick = function () {
    const $botonCalcular = document.querySelector("#boton-calcular");
    const $horasPorClase = document.querySelectorAll(".horas");
    const $minutosPorClase = document.querySelectorAll(".minutos");
    const $segundosPorClase = document.querySelectorAll(".segundos");
    const $textoResultadoTotal = document.querySelector("#resultado");


    let horasTotalesDeClase = 0;
    let minutosTotalesDeClase = 0;
    let segundosTotalesDeClase = 0;



    for (let i = 0; i < $horasPorClase.length; i++) {
        horasTotalesDeClase = horasTotalesDeClase + $horasPorClase[i].value;
    }

    for (let i = 0; i < $minutosPorClase.length; i++) {
        minutosTotalesDeClase = minutosTotalesDeClase + $minutosPorClase[i].value;
    }

    for (let i = 0; i < $segundosPorClase.length; i++) {
        segundosTotalesDeClase = segundosTotalesDeClase + $segundosPorClase[i].value;
    }

    $textoResultadoTotal.textContent = `El tiempo total de clase es de ${horasTotalesDeClase} horas, ${minutosTotalesDeClase} minutos y ${segundosTotalesDeClase} segundos.`;
}
