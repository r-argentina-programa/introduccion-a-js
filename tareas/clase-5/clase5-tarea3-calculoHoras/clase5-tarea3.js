//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/*

EN EL .HTML HACER:







EN EL .JS HACER:











*/

/*
Ejemplo para sumar horas:

var totalH;
var totalM;

addTimes = function(timeMap) {

    // First simply adding all of it together, total hours and total minutes
    for (var x in timeMap) {
        totalH += parseInt(timeMap[x].hour, 10);
        totalM += parseInt(timeMap[x].minutes, 10);
    }

    // If the minutes exceed 60
    if (totalM >= 60) {
        // Divide minutes by 60 and add result to hours
        totalH += Math.floor(totalM / 60);
        // Add remainder of totalM / 60 to minutes
        totalM = totalM % 60;
    }

    return totalH + "h" + totalM;
}
*/