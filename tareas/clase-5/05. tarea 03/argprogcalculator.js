// TERCERA TAREA
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $calculateButton = document.querySelector('#calculate-button');

let hoursSum;
let minutesSum;
let secondsSum;


function sumHours () {
    hoursSum = 0;
    let n = 0;
    for (let i = 0; i < (document.getElementsByClassName('hours').length); i++) {
        let hoursClass = Number(document.getElementsByClassName('hours').item(n).value)
        hoursSum += hoursClass
        n += 1


    };
};

function sumMinutes () {
    minutesSum = 0;
    let n = 0;
    for (let i = 0; i < (document.getElementsByClassName('minutes').length); i++) {
        let minutesClass = Number(document.getElementsByClassName('minutes').item(n).value)
        minutesSum += minutesClass
        n += 1
        

    }
};

function sumSeconds () {
    secondsSum = 0;
    let n = 0;
    for (let i = 0; i < (document.getElementsByClassName('seconds').length);i++) {
        let secondsClass = Number(document.getElementsByClassName('seconds').item(n).value)
        secondsSum += secondsClass
        n += 1
    }
}

function moreSecondsThanSixty () {
while (secondsSum >= 60) {
    secondsSum -= 60;
    minutesSum+=1;
};
};

function moreMinutesThanSixty () {
while (minutesSum >= 60) {
    minutesSum -= 60;
    hoursSum += 1;
};
};

function showResult () {
    const result = `${hoursSum} : ${minutesSum} : ${secondsSum}`
    document.getElementById('total-time').innerHTML = result;
 //   document.getElementById('total-time').replaceWith(result)
}


$calculateButton.onclick = function() {
    document.querySelector('#reveal-result').style.display = 'block';
    sumHours();
    sumMinutes();
    sumSeconds();
    moreSecondsThanSixty();
    moreMinutesThanSixty();
    showResult();
    console.log(`${hoursSum} : ${minutesSum} : ${secondsSum}`)
    return false;
}