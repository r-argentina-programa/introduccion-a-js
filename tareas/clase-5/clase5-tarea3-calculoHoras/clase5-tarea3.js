//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



const $calculoHoras = document.querySelector('#calculo-tiempo-total');

$calculoHoras.onclick = function(){
    let horasArray = document.getElementsByClassName('tiempo-horas');
    let totalHoras = 0;
    for (let i = 0; i<horasArray.length; i++) {
        if (parseInt(horasArray[i].value))
            totalHoras += (parseInt(horasArray[i].value));
    }
    document.querySelector('#resultado').innerText = totalHoras + " horas";
}
