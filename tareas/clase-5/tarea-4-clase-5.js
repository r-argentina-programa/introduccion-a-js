const $botonCalcular = document.querySelector("#boton-calcular");
$botonCalcular.onclick = function() {
    let hrs = document.querySelectorAll(".hours");
    let mins = document.querySelectorAll(".minutes");
    let secs = document.querySelectorAll(".seconds");
    let totalSecs = sumNodeList(secs);
    let totalMins = sumNodeList(mins);
    let totalHrs = sumNodeList(hrs);
    let finalSecs = totalSecs%60;
    let finalMins = (totalMins + parseInt(totalSecs/60))%60;
    let finalHrs = totalHrs + parseInt(totalMins/60); 
    finalSecs = (finalSecs>9 ? finalSecs : "0"+finalSecs);
    finalMins = (finalMins>9 ? finalMins : "0"+finalMins);
    let totalTime = ` ${finalHrs}:${finalMins}:${finalSecs}`;
    document.querySelector("strong").innerText += totalTime;
    return false;
}

function sumNodeList(nodelist) {
    let total = 0;
    for (let i=0;i<nodelist.length;i++){
        total += Number(nodelist[i].value)
    }
    return total;
}
