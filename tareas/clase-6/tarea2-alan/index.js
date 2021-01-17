/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#agregar-integrante").onclick = function(){
    
    const indice = obtenerIndice();

    crearIntegrante(indice);
    mostrarBotonCalcular();
    mostrarBotonReiniciar();
}

function crearIntegrante(indice){

    const $contenedorIntegrante = document.createElement("div");
    $contenedorIntegrante.className = "integrante";

    const $etiquetaIntegrante = document.createElement("label");
    $etiquetaIntegrante.innerText = `Integrante N°${indice}`;

    const $inputIntegrante = document.createElement("input");
    $inputIntegrante.className = "salarioIntegrante";
    $inputIntegrante.type = "number";
    $inputIntegrante.min = 0;
    $inputIntegrante.defaultValue = 0;
    
    const $contenedorIntegrantes = document.querySelector("#integrantes");    
   
    $contenedorIntegrante.appendChild($etiquetaIntegrante);
    $contenedorIntegrante.appendChild($inputIntegrante);
    $contenedorIntegrantes.appendChild($contenedorIntegrante);

}

document.querySelector("#borrar-integrante").onclick = borrarIntegrante;
function borrarIntegrante(){
    
    let $integrantes = document.querySelectorAll(".integrante");
    
    if($integrantes.length > 0){
        document.querySelector("#integrantes").lastChild.remove();
    }
    
    if($integrantes.length === 1){
        reiniciar();
    }

}

function borrarTodosLosIntegrantes(){
   let $integrantes = document.querySelectorAll(".integrante");

    for(let i = 0; i < $integrantes.length; i++){
        
        $integrantes[i].remove();
     }
}

document.querySelector("#boton-calcular").onclick = function(){

    validarFormulario();

    const salarios = obtenerSalarios();
    const salariosAnuales = obtenerSalarioAnual(salarios);
    
   
   document.querySelector("#mayor-salario-anual").innerText = obtenerSalarioAnualMayor(salariosAnuales);
   document.querySelector("#menor-salario-anual").innerText = obtenerSalarioAnualMenor(salariosAnuales);
   document.querySelector("#salario-anual-promedio").innerText = obtenerSalarioAnualPromedio(salariosAnuales);
   document.querySelector("#salario-mensual-promedio").innerText = obtenerSalarioMensualPromedio(salarios);

}

document.querySelector("#boton-reiniciar").onclick = reiniciar;
function reiniciar(){
    borrarTodosLosIntegrantes();
    ocultarResultados();
    ocultarBotonReiniciar();
    ocultarBotonCalcular();
    ocultarErrores();
}


function obtenerIndice(){
    let $indice = document.querySelectorAll(".integrante");
    indice = $indice.length;
    
    return indice + 1;
}

// Obtener salarios mensuales y anuales

function obtenerSalarios(){
    const $salarioIntegrante = document.querySelectorAll(".salarioIntegrante");
    const salarios = [];

    for(let i = 0; i < $salarioIntegrante.length; i++){

        if($salarioIntegrante[i].value === 0 || $salarioIntegrante[i].value === ""){
            continue;
        }

       salarios.push(Number($salarioIntegrante[i].value));
        
    }

    return salarios;

}

function obtenerSalarioAnual(salarios){
    const MESES_EN_EL_AÑO = 12;
    const salariosAnuales = [];
    
    for(let i = 0; i < salarios.length ; i++){
    
        let salarioAnual = salarios[i] * MESES_EN_EL_AÑO;
        salariosAnuales.push(salarioAnual);
    } 
    
    return salariosAnuales;
}
    
// Ocultar y/o mostrar botones e información

function mostrarBotonCalcular(){
    document.querySelector("#boton-calcular").className = "";
}

function mostrarBotonReiniciar(){
    document.querySelector("#boton-reiniciar").className = "";
}

function mostrarResultados(){
    document.querySelector("#resultados").className = "";
}

function ocultarResultados(){
    document.querySelector("#resultados").className = "oculto";
}

function ocultarBotonReiniciar(){
    document.querySelector("#boton-reiniciar").className = "oculto";
}

function ocultarBotonCalcular(){
    document.querySelector("#boton-calcular").className = "oculto";
}

function ocultarErrores(){
    document.querySelector("#mensaje-error").className = "oculto";
}

function mostrarErrores(){
    document.querySelector("#mensaje-error").className = "";
}

//Validaciones

function validarFormulario(){

    const salarios = obtenerSalarios();

    const errorSalarios = validarSalario(salarios);

    const errores = {

        salarios : errorSalarios

    };

   const formularioExitoso = manejarErrores(errores);

   if(formularioExitoso === 0){
       mostrarResultados();
   }

};


function validarSalario(salarios){

    for(let i = 0; i < salarios.length; i++){

        if(salarios[i] === 0){

            return "Los salarios deben ser mayores a 0."
        }

        if(salarios[i] < 0){

            return "Los salarios no pueden tener valores negativos."

        }

        if(salarios[i] === ""){

            return "Los campos de salario no pueden quedar vacios."
        }

    }

    return "";

}

function manejarErrores(errores){



    const keys = Object.keys(errores)
    const $errores = document.querySelector("#mensaje-error");
    $errores.innerHTML = "";
    let contadorError = 0;

    keys.forEach(function(key)  {
        const error = errores[key];
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

const $formulario = document.querySelector("#calculadora-sueldos");
$formulario.onsubmit = validarFormulario;
