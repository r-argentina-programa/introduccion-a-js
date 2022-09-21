//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
const $botonCrearInput = document.querySelector(`#agregar`);
$botonCrearInput.onclick = function() {
    crearInputHoras();
    mostrarBotonCalcular();
}

const $botonLimpiar = document.querySelector(`#limpiar`);
$botonLimpiar.onclick = function() {
    limpiarElementos();
}
const $botonCalcular = document.querySelector('#calcular');
$botonCalcular.onclick = function() {
    const $textoResultado = document.querySelector("#resultado");
    let resultado = 0;
    resultado = calcularTotalHoras(calcularHoras(),calcularMinutos(),calcularSegundos());
    $textoResultado.innerText = `El total de horas es: ${resultado}`;
}



function crearInputHoras() {
    const TEXTO_HORAS = "Horas: ";
    const TEXTO_MINUTOS = "Minutos: ";
    const TEXTO_SEGUNDOS = "Segundos: ";

    for (let i = 0; i < 3; i++) {
        const $nodoPadre = document.querySelector("body");
        const $labelHoras = document.createElement("label");
        const $inputHoras = document.createElement("input");
        const $br = document.createElement("br");
        
        if (i === 0 ) {
            
            $labelHoras.innerText = TEXTO_HORAS;
            $nodoPadre.appendChild($br);
            $nodoPadre.appendChild($labelHoras);
            $nodoPadre.appendChild($inputHoras);
            $inputHoras.setAttribute("id","hora");
            $inputHoras.setAttribute("class","horas");
            $labelHoras.setAttribute("class","horas");
            $br.setAttribute("class","horas");
        } else if (i === 1) {
            
            $labelHoras.innerText = TEXTO_MINUTOS;
            $nodoPadre.appendChild($labelHoras);
            $nodoPadre.appendChild($inputHoras);
            $inputHoras.setAttribute("id","minuto");
            $inputHoras.setAttribute("class","horas");
            $labelHoras.setAttribute("class","horas");
        } else {
            
            $labelHoras.innerText = TEXTO_SEGUNDOS;
            $nodoPadre.appendChild($labelHoras);
            $nodoPadre.appendChild($inputHoras);
            $inputHoras.setAttribute("id","segundo");
            $inputHoras.setAttribute("class","horas");
            $labelHoras.setAttribute("class","horas");
        }
    }
}
function limpiarElementos() {
    const $nodoPadre = document.querySelector("body");
    let $textoResultado = document.querySelector("#resultado");
    const $elementosEliminados = document.querySelectorAll(".horas");
    for (let i = 0; i < $elementosEliminados.length; i++) {
        $nodoPadre.removeChild($elementosEliminados[i]);
    }
    $textoResultado.innerText = "";
}

function mostrarBotonCalcular() {
    
}
function calcularHoras() {
    let totalHoras = 0;
    let $hora = document.querySelectorAll("#hora");
    for (let i = 0; i < $hora.length; i++) {
        totalHoras += Number(($hora[i]).value);
    }
    return totalHoras;
}
function calcularMinutos() {
    let totalMinutos = 0;
    let $minuto = document.querySelectorAll("#minuto");
    for (let i = 0; i < $minuto.length; i++) {
        totalMinutos += Number(($minuto[i]).value);
    }
    return totalMinutos / 60;
}
function calcularSegundos() {
    let totalSegundos = 0;
    let $segundo = document.querySelectorAll("#segundo");
    for (let i = 0; i < $segundo.length; i++) {
        totalSegundos += Number(($segundo[i]).value);
    }
    return totalSegundos / 3600;
}
function calcularTotalHoras(hora1,hora2,hora3) {
    let totalHoras = 0; 
    totalHoras = hora1 + hora2 + hora3
    return totalHoras.toFixed(2);
}
