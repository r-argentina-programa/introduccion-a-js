/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la Edades de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.


Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// CREAR USUARIO
document.querySelector('#siguiente-paso').onclick = function (event) {

    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
    
    if (cantidadIntegrantes > 0){
        //resetearResultados();
        mostrarBotonCalcular();
        crearUsuario(cantidadIntegrantes);
    }
    
}


//EDADES MÁXIMA, MÍNIMA Y PROMEDIO GENERAL
document.querySelector('#calcular').onclick = function () {

    const calculos = document.querySelectorAll('#analisis > p');//Trae todo el 'div' análisis.
    const edades  = document.querySelectorAll(".edades");//Trae las edades de los ingresantes

    mostrarMayor(calculos,calcularMayorEdad);
    mostrarMenor(calculos,calcularMenorEdad);
    mostrarPromedio(calculos,calcularPromEdad);
    mostrarMayor("mayor",calcularMayorEdad(edades));
    mostrarMenor("menor",calcularMenorEdad(edades));
    mostrarPromedio("promedio",calcularPromEdad(edades));
    mostrarResultados();
    
   
    
    //calculos es un NodeList con los párrafos
    function mostrarMayor(texto,valor) { 
        document.querySelector(`#${texto}-edad`).textContent = valor;
    }

    function mostrarMenor(texto,valor){
        document.querySelector(`#${texto}-edad`).textContent = valor;
    }

    function mostrarPromedio(texto,valor){
        document.querySelector(`#${texto}-edad`).textContent = valor;
    }
 
    event.preventDefault();

}



document.querySelector('#resetear').onclick = resetear;



function resetear(){
    resetearResultados();
    limpiarLabels();
    limpiarInputs();
    ocultarBotonCalcular();
    limpiarResultados();
    

}

function resetearResultados(){
    const integrantes = document.querySelectorAll('.integrante');
    //console.log(integrantes);
    
    for(let i = 0; i < integrantes.length; i++){
        integrantes[i].remove();
    }  
} 

function limpiarLabels(){
    const labels = document.querySelectorAll('#integrantes > label');
    for(let i = 0; i < labels.length; i++){
        labels[i].remove();
    }
    
}

function limpiarInputs(){
    const inputs = document.querySelectorAll('#integrantes > input');
    for(let i = 0; i < inputs.length; i++){
        inputs[i].remove();
    }
}

function mostrarBotonCalcular(){
    document.querySelector('#calcular').className = "";
}

function ocultarBotonCalcular(){
    document.querySelector('#calcular').className = "oculto";
}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}

function limpiarResultados(){
    document.querySelector('#analisis').className = 'oculto';

}





function crearTag(tag,texto,nodoPadre){
    
    const $nodoPadre = document.querySelector(nodoPadre)
    const $elemento = document.createElement(tag);
    const nodoTexto = document.createTextNode(texto);
    
    $elemento.appendChild(nodoTexto);
    $nodoPadre.appendChild($elemento);

    return $nodoPadre;
}
/*
TAREA:
Crear una interfaz que permita: 
-   agregar ó quitar (botones agregar y quitar) inputs + labels
    para completar el salario anual de cada integrante de la familia que trabaje.

-   Al hacer click en "calcular", mostrar en un elemento pre-existente 
    * el mayor salario anual, 
    * menor salario anual, 
    * salario anual promedio y 
    * salario mensual promedio.

Punto bonus: 
-   si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
