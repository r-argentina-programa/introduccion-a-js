
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let horas = 0,
    minutos = 0,
    segundos = 0;

//ingresa los valores y los guarda en variables cuando haga click en Ingresar y limpia los campos una vez ingresados
document.querySelector('#ingresarTiempo').onclick = function() {
    horas += Number(document.querySelector('#horasVideo').value);
    document.querySelector('#horasVideo').value = '';
    minutos += Number(document.querySelector('#minutosVideo').value);
    document.querySelector('#minutosVideo').value = '';
    segundos += Number(document.querySelector('#segundosVideo').value);
    document.querySelector('#segundosVideo').value = '';


    return false;
}

//devuelve los valores en el strong cuando se haga click en calcular mediante el calculo de una funcion x.
document.querySelector('#mostrarResultado').onclick = function () {
    document.querySelector('#resultado').textContent = calculoTiempo(horas, minutos, segundos);
    return false;
}

function calculoTiempo(horas, minutos, segundos) {
    while (segundos >= 60) {
        minutos++;
        segundos -= 60;
    }
    while (minutos >= 60) {
        horas++;
        minutos -= 60;
    }
    return ('El total de tiempo es: ' + horas +'hs '+ minutos + 'min ' + segundos + 's ');
}
