//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.





function convertirSegundosAMinutos($totalSeg){
   const resultadoMin = $totalSeg / 60;
   const resultadoSeg = $totalSeg % 60;
   return resultadoMin,resultadoSeg;
}

document.querySelector("#boton-calcular").onclick = function(){

let $segIngresados = document.querySelectorAll(".segundos-ingresados");
const $minIngresados = document.querySelectorAll(".minutos-ingresados");
const $hrsIngresadas = document.querySelectorAll(".horas-ingresadas");
    
let totalSeg;
let totalMin;
let totalHrs;

for(i = 0 ; i<$segIngresados.length ; i++){
    totalSeg = Number(totalSeg) + Number($segIngresados[i]).value;
}


        console.log(totalSeg);
       
    //console.log(convertirSegundosAMinutos($totalMin));
}

