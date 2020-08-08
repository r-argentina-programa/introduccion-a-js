/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/




document.querySelector("#boton-agregar-integrantes").onclick = function(){

     const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;
  
     if($cantidadIntegrantes > 0){
          borrarIntegrantesAnteriores();
          mostrarBotonCalcular();
          mostrarBotonReiniciar();
         
          for(let i = 1; i <= $cantidadIntegrantes; i++){
               crearIntegrantes(i);
          }

     }

}

document.querySelector("#reiniciar").onclick = function(){
     reiniciar();
}

document.querySelector("#calcular").onclick = function(){

 const edades = obtenerEdades();
 
     document.querySelector("#resultado-mayor-edad").innerText = obtenerMayorEdad(edades);
     document.querySelector("#resultado-menor-edad").innerText = obtenerMenorEdad(edades);
     document.querySelector("#resultado-edad-promedio").innerText = obtenerEdadPromedio(edades);
     mostrarResultados();
}

function crearIntegrantes(indice){

     const $contenedor = document.createElement("div");
     $contenedor.className = "integrantes"

     const $label = document.createElement("label");
     $label.textContent = "Integrante N°" + indice;

     const $input = document.createElement("input");
     $input.className = "edad-integrante"
     $input.type = "number";
     
     const $integrantes = document.querySelector("#integrantes");

     $contenedor.appendChild($label);
     $contenedor.appendChild($input);
     $integrantes.appendChild($contenedor);
}

function borrarIntegrantesAnteriores(){

     let $integrantes = document.querySelectorAll(".integrantes");

     for(let i = 0; i < $integrantes.length; i++){
          $integrantes[i].remove();
     }

}

function ocultarBotonCalcular(){
     document.querySelector("#calcular").className = "oculto";
}

function mostrarBotonCalcular(){
     document.querySelector("#calcular").className = "";
}

function ocultarBotonReiniciar(){
    document.querySelector("#reiniciar").className = "oculto"; 
}

function mostrarBotonReiniciar(){
     document.querySelector("#reiniciar").className = "";
}

function ocultarResultados(){
     document.querySelector("#resultado").className = "oculto";
}

function mostrarResultados(){
     document.querySelector("#resultado").className = "";
}

function reiniciar(){
     ocultarBotonCalcular();
     ocultarBotonReiniciar();
     ocultarResultados();
     borrarIntegrantesAnteriores();

}

function obtenerEdades(){
     const $edadIntegrante = document.querySelectorAll(".edad-integrante");
     const edades = []

     for(let i = 0; i < $edadIntegrante.length; i++){
          edades.push(Number($edadIntegrante[i].value));
     } 
     return edades;    
}

function obtenerMayorEdad(edades){

     let mayorEdad = edades[0];

     for(let i = 0; i < edades.length; i++){

          if(edades[i] > mayorEdad){
               mayorEdad = edades[i]
          }

     }

     return mayorEdad;
}

function obtenerMenorEdad(edades){
     let menorEdad = edades[0];

     for(let i = 0; i < edades.length; i++){

          if(edades[i] < menorEdad){
               menorEdad = edades[i];
          }
     }

 return menorEdad;
}

function obtenerEdadPromedio(edades){
     let contenedor = 0;

     for(let i = 0; i < edades.length; i++){
          contenedor += edades[i];
     }

 return (contenedor / edades.length).toFixed(2);
}
