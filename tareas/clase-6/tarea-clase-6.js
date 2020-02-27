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
        mostrarBotonCalcular()
        crearUsuario(cantidadIntegrantes);
    }
    
}

//EDADES MÁXIMA, MÍNIMA Y PROMEDIO GENERAL
document.querySelector('#calcular').onclick = function (event) {

    const calculos = document.querySelectorAll('#analisis > p');//Trae todo el 'div' análisis.
    const edades  = document.querySelectorAll(".edades");//Trae las edades de los ingresantes
    
    
    document.querySelector('#menor-edad').value = mostrarMenor(calculos,calcularMenorEdad);

    
    //mostrarMayor(calculos,calcularMayorEdad);
    //mostrarMenor(calculos,calcularMenorEdad);
    //mostrarPromedio(calculos,calcularPromEdad);
   
    
    function mostrarMayor(calculos, calcularMayorEdad) {//calculos es un NodeList con los párrafos
        
        for(let i = 0; i < calculos.length; i++){
            console.log(crearTag("p",calculos[i].innerText,"#mayor-edad"));

        }
        
        
        //const textoMayor = document.createTextNode(`${calculos[0].innerText}` + `${calcularMayorEdad(edades)}`)
        
    }

    function mostrarMenor(calculos,calcularMenorEdad){
        console.log(calculos[1].innerText + calcularMenorEdad(edades));
    }

    function mostrarPromedio(calculos,calcularPromEdad){
        console.log(calculos[2].innerText+calcularPromEdad(edades));
    }
    
    event.preventDefault();

}

document.querySelector('#resetear').onclick = resetear;

function resetear(){
    limpiarLabels();
    limpiarInputs();
    ocultarBotonCalcular();
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

/*
function mostrarBotonLimpiar(){
    document.querySelector('#resetear').className = "";
}
*/

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
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
