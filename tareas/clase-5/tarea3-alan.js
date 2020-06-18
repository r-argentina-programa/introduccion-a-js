//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const title = document.querySelector("h1");
title.style.backgroundColor =  "red";
title.style.fontSize = "60px";


/*
document.querySelector("#add-lengh").onclick = function(){

let $seconds = document.querySelector("#seconds-lengh").value;
let $minutes = document.querySelector("#minutes-lengh").value;
let $hours = document.querySelector("#hours-lengh").value;


return false;
}
*/



function secondsToMinutes(){
    let $seconds = 7800;
    let  min = Number(Math.floor($seconds / 60));
    let  sec = Number(Math.floor($seconds % 60));
    
console.log(`Usted ingreso ${$seconds} segundos. La duracion del video es de ${min} minutos ${sec} segundos.`);

return false;
}


function minutesToHours(){
    let hr = Number(Math.floor($minutes / 60));
    return hr;
}
secondsToMinutes();