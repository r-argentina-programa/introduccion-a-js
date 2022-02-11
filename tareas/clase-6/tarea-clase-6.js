/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

$siguientePaso = document.querySelector("#siguiente-paso");
$siguientePaso.onclick = function(){
    const cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;
    const integrantes = document.querySelector("#integrantes");
    mostrarBotonCalcular();
    mostrarBotonResetear();
    
    
    for(let i=0; i < cantidadIntegrantes; i++){
        crearIntegrantes(i);
    }

}

function mostrarBotonCalcular(){
    document.querySelector("#calcular").className= "";
}

function mostrarBotonResetear(){
    document.querySelector("#resetear").className= "";
}

function ocultarAnalisis(){
    document.querySelector("#analisis").className = "oculto";
}

function ocultarBotonCalcular(){
    document.querySelector("#calcular").className= "oculto";
}

function ocultarIntegrantes(){
    const cantidad= document.querySelectorAll(".integrante")
    for(let i=0; i < cantidad.length; i++){
        document.querySelector(".integrante").className= "oculto";
    }
}


$resetear = document.querySelector("#resetear");
$resetear.onclick = function(){
    ocultarAnalisis();
    ocultarBotonCalcular();
    ocultarIntegrantes();
}



function crearIntegrantes(indice){
    const $div = document.createElement("div");
    $div.className="integrante"

    const $label = document.createElement("label");
    $label.textContent = "La edad de tu integrante " + (indice + 1);

    const $input = document.createElement("input");
    $input.className= "edad-integrante";

    integrantes.appendChild($div);
    $div.appendChild($label);
    $div.appendChild($input);

}

const $calcular = document.querySelector("#calcular");
$calcular.onclick = function(){
    mostrarAnalisis();
    document.querySelector("#edad-mayor").textContent = calcularMayorEdad();
    document.querySelector("#edad-menor").textContent = calcularMenorEdad();
    document.querySelector("#edad-promedio").textContent = calcularPromedio();
}


function mostrarAnalisis(){
    document.querySelector("#analisis").className = "";
}



function calcularMayorEdad(){
    const edades = document.querySelectorAll(".edad-integrante");
    let edadMayor = 0;
    for(let i=0;i < edades.length;i++){
        if(i === 0){
            edadMayor = Number(edades[i].value);
        }
        else if(edades[i].value > edadMayor ){
            edadMayor = Number(edades[i].value);
        }
    }
    return edadMayor;
}

function calcularMenorEdad(){
    const edades = document.querySelectorAll(".edad-integrante");
    let edadMenor = 0;
    for(let i=0;i < edades.length;i++){
        if(i === 0){
            edadMenor = Number(edades[i].value);
        }
        else if(edades[i].value < edadMenor ){
            edadMenor = Number(edades[i].value);
        }
    }
    return edadMenor;
}

function calcularPromedio(){
    const edades = document.querySelectorAll(".edad-integrante");
    let sumaPromedio = 0;
    let cantidad = edades.length;
    for(let i=0; i < cantidad; i++){
        sumaPromedio += Number(edades[i].value);
    }
    return sumaPromedio / cantidad;
   
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
