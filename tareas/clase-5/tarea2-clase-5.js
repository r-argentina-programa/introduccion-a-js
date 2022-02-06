
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#calcular-tiempo-total").onclick = function(){
    const $hora = Number(document.querySelector("#hora").value);
    const $minutos = Number(document.querySelector("#minutos").value);
    const $segundos = Number(document.querySelector("#segundos").value);
    document.querySelector("#calcular-hora").innerText = calcularHoraTotal($hora,$minutos,$segundos);
    document.querySelector("#calcular-minutos").innerText = calcularMinutosTotal($hora,$minutos,$segundos);
    document.querySelector("#calcular-segundos").innerText = calcularSegundosTotal($hora,$minutos,$segundos);
  
    return false;
  }
  
  function calcularHoraTotal(hora,minutos,segundos){
     let horaCalculada = hora;
     let minutosCalculada = minutos / 60;
     let segundosCalculada = segundos / 3600;
     return horaCalculada + minutosCalculada + segundosCalculada;
  }
  function calcularMinutosTotal(hora,minutos,segundos){
    let horaCalculada = hora * 60;
    let minutosCalculada = minutos;
    let segundosCalculada = segundos / 60;
    return horaCalculada + minutosCalculada + segundosCalculada;
  }
  function calcularSegundosTotal(hora,minutos,segundos){
    let horaCalculada = hora * 3600;
    let minutosCalculada = minutos * 60;
    let segundosCalculada = segundos;
    return horaCalculada + minutosCalculada + segundosCalculada;
  }
  
  
