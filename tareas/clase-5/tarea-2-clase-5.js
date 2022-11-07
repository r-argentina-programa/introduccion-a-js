//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



const $horasVideo = document.querySelector("#horas");
const $minutosVideo = document.querySelector("#minutos");
const $segundosVideo = document.querySelector("#segundos");

const $botonAgregar = document.querySelector("#boton-agregar");
const $botonCalcularTotal = document.querySelector("#boton-calcular-total");

let $subtitulo = document.querySelector("h2")
let $mensajeInicial = document.querySelector("#mensaje-inicial");

let segundosTotales = 0
let minutosTotales = 0
let horasTotales = 0


$botonAgregar.onclick = function() {
    $subtitulo.innerText = "Ingrese el tiempo de un video"
    $subtitulo.style.color = "black"
    $mensajeInicial.innerText = ""   
 
    if ($segundosVideo.value <= 59) {
         segundosTotales = segundosTotales + Number($segundosVideo.value) 
         
     } else if ($segundosVideo.value > 59) {
         $subtitulo.style.color = "red"
         $subtitulo.innerText = "Ingresar un número válido menor a 60 minutos/segundos"
         return;
     }
 
     if ($minutosVideo.value <= 59) {
         minutosTotales = minutosTotales + Number($minutosVideo.value)
 
     } else if ($minutosVideo.value > 59) {
             $subtitulo.style.color = "red"
             $subtitulo.innerText = "Ingresar un número válido menor a 60 minutos/segundos"
             return;
         }    
 
     horasTotales = horasTotales + Number($horasVideo.value|| "")
     
     
     let $logDeVideosAgregados = document.createElement("p");
     $logDeVideosAgregados.innerText = `Acabas de agregar un vídeo de 
     ${$horasVideo.value} horas, ${$minutosVideo.value} minutos y ${$segundosVideo.value} segundos`;
 
     document.body.appendChild($logDeVideosAgregados)   
     
 }
 
 $botonCalcularTotal.onclick =function(){
     const $mensajeAlerta = document.querySelector("strong");
 
     document.body.appendChild($mensajeAlerta);

     if(segundosTotales >= 60) {
        minutosTotales = minutosTotales + Math.trunc(segundosTotales/60)
        segundosTotales = segundosTotales %60;
     }

     if(minutosTotales >= 60) {
        horasTotales= horasTotales + Math.trunc(minutosTotales/60)
        minutosTotales = minutosTotales %60;
     }

     $mensajeAlerta.innerText = `El total de tiempo de los videos que agregaste es 
     de ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos`
     
 }
 