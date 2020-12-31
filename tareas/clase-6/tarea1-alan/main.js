/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#boton-agregar-integrantes").onclick = function(event){

     const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;
  
     if($cantidadIntegrantes > 0){

          borrarIntegrantesAnteriores();
          mostrarBotonCalcular();
          mostrarBotonReiniciar();
         
          for(let i = 1; i <= $cantidadIntegrantes; i++){
               crearIntegrantes(i);
          }

     }

     event.preventDefault();

}

document.querySelector("#reiniciar").onclick = function(){
     reiniciar();
}

document.querySelector("#calcular").onclick = function(){

 const edades = obtenerEdades();

     document.querySelector("#resultado-mayor-edad").innerText = obtenerMayorEdad(edades);
     document.querySelector("#resultado-menor-edad").innerText = obtenerMenorEdad(edades);
     document.querySelector("#resultado-edad-promedio").innerText = obtenerEdadPromedio(edades);
     
}

function crearIntegrantes(indice){

     const $contenedor = document.createElement("div");
     $contenedor.className = "integrantes"

     const $label = document.createElement("label");
     $label.textContent = "Integrante N°" + indice;

     const $input = document.createElement("input");
     $input.className = "edad-integrante"
     $input.type = "number";

     // Estos limites no los uso ya que la consigna pide testear con funciones o regular expressions.
     //$input.min = 0;
     //$input.max = 99;

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
     document.querySelector("#exito").className = "oculto";
}

function mostrarResultados(){
     document.querySelector("#resultado").className = "";
}

function ocultarErrores(){
     document.querySelector("#mostrar-errores").className = "oculto";
}

function mostrarErrores(){
     document.querySelector("#mostrar-errores").className = "";
}

function reiniciar(){
     ocultarBotonCalcular();
     ocultarBotonReiniciar();
     ocultarResultados();
     ocultarErrores();
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

// Validaciones y control de errores

function validarFormulario(event){

     const integrantes = Number($formulario["cantidad-integrantes"].value);
     const edades = obtenerEdades();
     
     const errorIntegrantes = validarIntegrantes(integrantes);
     const errorEdades = validarEdades(edades);
     
     const errores = {

          integrantes : errorIntegrantes,
          edades : errorEdades
          
     };

    const formularioExitoso = controladorDeErrores(errores);

     if(formularioExitoso === 0){

          document.querySelector("#exito").className = "";
          mostrarResultados();

     }else{

          document.querySelector("#exito").className = "oculto";

     }

     event.preventDefault();

}

function controladorDeErrores(errores){

     const keys = Object.keys(errores)
     const $errores = document.querySelector("#mostrar-errores");
     $errores.innerHTML = "";
     let contadorError = 0;

     keys.forEach(function(key) {
          const error = errores[key]
          mostrarErrores();
          

         if(error){
               ocultarResultados();
               const contenedorError = document.createElement("li");
               contenedorError.innerText = error;
               $errores.appendChild(contenedorError);

               contadorError++
         }
         
     });

     return contadorError;

};

function validarEdades(edades){
     
     for(let i = 0; i < edades.length; i++){
          
          if(edades[i] < 0 ){
               return "Las edades ingresadas no pueden tener valores negativos.";
          }

          if(edades[i] === 0){
               return "Las edades ingresadas deben ser mayores a 0.";
          }

          if(edades[i] === ""){
               return "Hay campos sin completar. Completelos e intentelo de nuevo."
          }

          if(edades[i] > 99){
               return "Solo se permiten edades entre 1 y 99."
          };

     }
          
     return "";

}

function validarIntegrantes(integrantes){

     if(integrantes <= 0){

          return "La cantidad de integrantes debe ser mayor a 0.";
     }

     return "";

}

const $formulario = document.querySelector("#calculador-edades");
$formulario.onsubmit = validarFormulario;
