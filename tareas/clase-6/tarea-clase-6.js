/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/



function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes > 0) {
      mostrarBotonCalcular();
    } else {
        resetear()
    }
    
  
    for (let i = 0; i < cantidadIntegrantes; i++) {
      crearIntegrante(i);
    }
}
  
function crearIntegrante(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante #: ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}
  

function mostrarLabelsInputs(){
    document.querySelector(".oculto").className = "";
}

function mostrarBotonCalcular(){
     document.querySelector(".oculto").className = "";
}

function borrarLabelsInputsYBotones(){
    document.querySelector("").className = "oculto";
}

function mostrarBotonLimpiar(){
    document.querySelector("#limpiar").className = "";


}

function obtenerEdadesIntegrantes(){
    const $integrantes  = document.querySelectorAll(".integrantes input")
    let edades  = []
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push($integrantes[i].value);
      }
      return edades;

}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
  }

let $botonSiguiente = document.querySelector("#siguiente-paso")
$botonSiguiente.onclick = function(event){
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value)
    
    crearIntegrantes(cantidadIntegrantes);
    mostrarBotonLimpiar();

    event.preventDefault()

}


let $botonCalcular = document.querySelector("#calcular")
$botonCalcular.onclick = function(event){
    
let arr = obtenerEdadesIntegrantes()
mostrarEdad("mayor", mayorEdad(arr))
mostrarEdad("menor", menorEdad(arr))
mostrarEdad("promedio", promedio(arr))

event.preventDefault() 
}

let $botonLimpiar  = document.querySelector("#limpiar")
$botonLimpiar.onclick = function(event){
    borrarLabelsInputsYBotones();
    event.preventDefault()

}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
