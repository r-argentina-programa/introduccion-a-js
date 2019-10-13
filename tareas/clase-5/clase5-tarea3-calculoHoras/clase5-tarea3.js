//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


function calcularDuracion(horasArray, minutosArray, segundosArray) {
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos= 0;
    for (let i = 0; i<horasArray.length; i++) {
        if (parseInt(horasArray[i].value)) {
            resultadoHoras = totalHoras += (parseInt(horasArray[i].value));
        }
    } 
    for (let i = 0; i<minutosArray.length; i++) {
        if (parseInt(minutosArray[i].value)) {
            resultadoMinutos = totalMinutos += (parseInt(minutosArray[i].value));
        }
    } 
    if (resultadoMinutos >= 60) {
        resultadoHoras += Math.floor(resultadoMinutos/60);
        resultadoMinutos = resultadoMinutos % 60;
    } 
    for (let i = 0; i<segundosArray.length; i++) {
        if (parseInt(segundosArray[i].value)) {
            resultadoSegundos = totalSegundos += (parseInt(segundosArray[i].value));
        }
    } 
    if (resultadoSegundos >= 60) {
            resultadoMinutos += Math.floor(resultadoSegundos/60);
            resultadoSegundos = resultadoSegundos % 60;
    } 
    return "Tiempo total: " + resultadoHoras + " horas, " + resultadoMinutos + " minutos, " + resultadoSegundos + " segundos."
}


const $calculoHoras = document.querySelector('#calculo-tiempo-total');

$calculoHoras.onclick = function(){
    let horasArray = document.getElementsByClassName('tiempo-horas');
    let minutosArray = document.getElementsByClassName('tiempo-minutos');
    let segundosArray = document.getElementsByClassName('tiempo-segundos');
    resultadoTotal = calcularDuracion(horasArray, minutosArray, segundosArray);

    document.querySelector('strong').innerText = resultadoTotal;
   
    return false;
}

