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
