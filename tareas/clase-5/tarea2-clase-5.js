
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

 document.querySelector("#calcular-tiempo-total").onclick= function(){
   let hora = document.querySelectorAll(".hora");
   let minutos = document.querySelectorAll(".minutos");
   let segundos = document.querySelectorAll(".segundos");
   let horaResultado = 0;
   let minutosResultado= 0;
   let segundosResultado= 0;

    for(let i=0;i < hora.length;i++){
      horaResultado += Number(hora[i].value);
    }
    for(let i=0;i < minutos.length;i++){
      
      if(minutosResultado < 60){
        minutosResultado += Number(minutos[i].value);
      }else{
        horaResultado += 1;
        minutosResultado += Number(minutos[i].value);
        minutosResultado -= 60;
      }
    }
    for(let i=0;i < segundos.length;i++){
     
      if(segundosResultado < 60){
        segundosResultado += Number(segundos[i].value);
        
    }else{
        minutosResultado += 1;
        segundosResultado += Number(segundos[i].value);
        segundosResultado -= 60;
    }
    }

    document.querySelector("#resultado-tiempo-total").innerText = `El tiempo total de las clases es : ${horaResultado} : ${minutosResultado} : ${segundosResultado}`;

 }
