//TAREA 4:

//En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function crearFormClaseN(n) {
    let finalHTMLInForm = "";
    for(let i=1;i<=n;i++){
        finalHTMLInForm += `<label>Clase ${i}:</label>
        <input type="number" class="hours" /> 
        <input type="number" class="minutes" />
        <input type="number" class="seconds" /> <br/>`;  
    }
    document.querySelector("form").innerHTML += finalHTMLInForm;
}
function modificarParrafo(n) {
    document.querySelector("p").innerText = `Inserte las duraciones de las primeras ${n} clases:`;
}
function crearBotonCalcular() {
    let HTMLInForm = '<input id="boton-calcular-tiempo-videos" type="submit" value="Calcular tiempo total"/>';
    document.querySelector("form").innerHTML += HTMLInForm;
}
let numeroClases = prompt("¿Cuántas clases hubo hasta el momento?",5);
crearFormClaseN(numeroClases);
modificarParrafo(numeroClases);
crearBotonCalcular();

const $botonCalcularTiempoVideos = document.querySelector("#boton-calcular-tiempo-videos");
const SEGUNDOS_EN_UN_MINUTO = 60;
const MINUTOS_EN_UNA_HORA = 60; 
$botonCalcularTiempoVideos.onclick = function() {
    let hrs = document.querySelectorAll(".hours");
    let mins = document.querySelectorAll(".minutes");
    let secs = document.querySelectorAll(".seconds");
    let totalTimeOfVideo = createStringTotalTime();
    function createStringTotalTime() {
        let totalSecsOfVideo = sumNodeList(secs);
        let totalMinsOfVideo = sumNodeList(mins);
        let totalHrsOfVideo = sumNodeList(hrs);
        let finalSecsOfVideo = totalSecsOfVideo%SEGUNDOS_EN_UN_MINUTO;
        finalSecsOfVideo>9 ? "" : finalSecsOfVideo = "0"+finalSecsOfVideo;
        let finalMinsOfVideo = (totalMinsOfVideo + parseInt(totalSecsOfVideo/SEGUNDOS_EN_UN_MINUTO))%MINUTOS_EN_UNA_HORA;
        finalMinsOfVideo>9 ? "" : finalMinsOfVideo = "0"+finalMinsOfVideo;
        let finalHrsOfVideo = totalHrsOfVideo + parseInt(totalMinsOfVideo/MINUTOS_EN_UNA_HORA); 
        return ` ${finalHrsOfVideo}:${finalMinsOfVideo}:${finalSecsOfVideo}`;
    }
    document.querySelector("strong").innerText += totalTimeOfVideo;
    return false;
}

function sumNodeList(nodelist) {
    let sumOfAllNodes = 0;
    for (let i=0;i<nodelist.length;i++){
        sumOfAllNodes += Number(nodelist[i].value);
    }
    return sumOfAllNodes;
}
