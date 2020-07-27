//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#boton-calcular").onclick = function(){

    let $segIngresados = document.querySelectorAll(".segundos-ingresados");
        const $minIngresados = document.querySelectorAll(".minutos-ingresados");
            const $hrsIngresadas = document.querySelectorAll(".horas-ingresadas");
  
    let segAcumulados = 0;
    let minAcumulados = 0; 
    let hrsAcumuladas = 0;

    let minConvertidos = 0;
    let hrsConvertidas = 0;

    let totalSeg = 0;
    let totalMin = 0;
    let totalHrs = 0;

    for(let i = 0 ; i < $segIngresados.length ; i++){
        segAcumulados = segAcumulados + Number($segIngresados[i].value);       
    }
       
    for(let i = 0; i < $minIngresados.length ; i++){
        minAcumulados = minAcumulados + Number($minIngresados[i].value);
    }

    for(let i = 0; i < $hrsIngresadas.length ; i++){
        hrsAcumuladas = hrsAcumuladas + Number($hrsIngresadas[i].value);
    }

      
    minConvertidos = segAcumulados / 60;
        minConvertidos = parseInt(minConvertidos); 

    
    hrsConvertidas = (minAcumulados + minConvertidos) / 60;
        hrsConvertidas = parseInt(hrsConvertidas)

            

    totalSeg = segAcumulados % 60;

    totalMin = (minConvertidos + minAcumulados) % 60;

    totalHrs = hrsConvertidas + hrsAcumuladas;


    console.log(`Los segundos totales son ${totalSeg}
                los minutos totales son ${totalMin}
                 y las horas totales son ${totalHrs}`);

}