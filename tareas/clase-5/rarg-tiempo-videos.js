

const $ingresar = document.querySelector("#ingresar");
const $calcularTiempo = document.querySelector("#calcular-tiempo-total");
let horas = 0;
let minutos = 0;
let segundos = 0;
let horasTotal = 0;
let minutosTotal = 0;
let segundosTotal = 0;
const nodoPagina = document.querySelector('div');


$ingresar.onclick = function () {
    horas = Number(document.querySelector("#horas").value);
    minutos = Number(document.querySelector("#minutos").value);
    segundos = Number(document.querySelector("#segundos").value);
    horasTotal += horas;
    minutosTotal += minutos;
    segundosTotal += segundos;

    if (segundosTotal >= 60) {
        minutosTotal++;
        segundosTotal -= 60;
    }

    if (minutosTotal >= 60) {
        horasTotal++;
        minutosTotal -= 60;
    }

    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode(`Ingresaste un tiempo de ${horas}:${minutos}:${segundos}`);
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);

    return horas, minutos, segundos;
}

$calcularTiempo.onclick = function () {
    horasTotal = (horasTotal < 10) ? "0" + horasTotal : horasTotal;
    minutosTotal = (minutosTotal < 10) ? "0" + minutosTotal : minutosTotal;
    segundosTotal = (segundosTotal < 10) ? "0" + segundosTotal : segundosTotal;
    let tiempoTotal = horasTotal + ":" + minutosTotal + ":" + segundosTotal;
    document.querySelector("#tiempo-total").value = tiempoTotal;
}