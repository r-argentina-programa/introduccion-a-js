/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let edades = [];

document.querySelector("#calcular-total-familiares").onclick = function () {
    let cantidadFamiliares = Number(document.querySelector("#total-familiares").value);
    obtenerEdades()
    crearFamiliares(cantidadFamiliares);
    mostrarBotonCalcular()
    return false;
}

function crearFamiliares (cantidadFamiliares) {
    let contador = 0
    while (cantidadFamiliares > contador) {
        let $dondePonerElNodo = document.querySelector("#integrantes-familia");
        let $crearDiv = document.createElement("div");
        $crearDiv.id = "integrante";
        $dondePonerElNodo.appendChild($crearDiv);
        
        let $crearLabel = document.createElement("label");
        $crearLabel.textContent = "Edad del familiar  " + (contador + 1) + " ";
        let $crearInput = document.createElement("input");
        $crearInput.type="number";
        $crearInput.className="edad-integrante";
        let $crearEspacio = document.createElement("br");

        $crearDiv.appendChild($crearLabel);
        $crearDiv.appendChild($crearInput);
        $crearDiv.appendChild($crearEspacio);
    
        contador++;
    }
}

function mostrarBotonCalcular () {
     document.querySelector("#mensaje-final").className = "";
}
     

document.querySelector("#mensaje-final").onclick = function () {
    obtenerEdades();
    edadMayorMensaje();
    edadMenorMensaje();
    obtenerPromedioMensaje();
    mostrarBotonEmpezar();
}

function obtenerEdades () {
    let edadesTemporales = document.querySelectorAll(".edad-integrante");
    for (let i = 0; i < edadesTemporales.length;i++) {
        edades.push(Number(document.querySelectorAll(".edad-integrante")[i].value))
    }
    return edades
}    

function edadMayorMensaje () {
    let edadMayor = Math.max(...edades);
    document.querySelector("#mayor-edad").value = "El mayor de edad posee " + edadMayor + " años";  
}

function edadMenorMensaje () {
    let edadMenor = Math.min(...edades);
    document.querySelector("#menor-edad").value = "El menor de edad posee " + edadMenor + " años";   
}

function obtenerPromedioMensaje () {
    let edadPromedio = 0;
    for (let i = 0; i < edades.length;i++)  {
        edadPromedio = edadPromedio + edades[i];
    }
    edadPromedio = edadPromedio / edades.length
    document.querySelector("#promedio-edad").value = "La edad promedio es " + edadPromedio + " años";  
}

function mostrarBotonEmpezar () {
    document.querySelector("#remover-valores").className = "";   
}

document.querySelector("#remover-valores").onclick = function () { 
    let borrarIntegrante = document.querySelectorAll("#integrante")
    for (let i = 0; i < edades.length;i++) {
        borrarIntegrante[i].remove();
    }
    edades = []; // el fin de esto, es que, dado que es un array global, no se acumule en la memoria y se resetee.
    document.querySelector("#mayor-edad").value = "";
    document.querySelector("#menor-edad").value = "";
    document.querySelector("#promedio-edad").value = "";
    ocultarBotonCalcular()
    ocultarBotonEmpezar()

    return false;
}

function ocultarBotonCalcular () {
    document.querySelector("#mensaje-final").className = "oculto";
}

function ocultarBotonEmpezar() {
    document.querySelector("#remover-valores").className = "oculto";   
}


/*
function crearFamiliares (cantidadFamiliares) {
    while (cantidadFamiliares > contador) {
        
        let $crearDiv = document.createElement("div");
        $crearDiv.id = "integrante";
        //let $ponerNodo = document.querySelector(".integrante");

        let $crearLabel = document.createElement("label");
        $crearLabel.textContent = "Edad del familiar  " + (contador + 1) + " ";
        let $crearInput = document.createElement("input");
        $crearInput.type="number";
        $crearInput.id="edadIntegrante";
        let $crearEspacio = document.createElement("br");

        $crearDiv.appendChild($crearLabel);
        $crearDiv.appendChild($crearInput);
        $crearDiv.appendChild($crearEspacio);

        let $integrante = document.querySelector("#integrantesFamilia");
        $integrante.appendChild($crearDiv);

        contador++;
    }
}
*/
/*
Deje esto por:
1) Estoy creando constantes divs


function producirIntegrante (cantidadFamiliares) {
    while (cantidadFamiliares > contador) {
        let $dondePonerElNodo = document.querySelector("#integrantesFamilia");
        let $crearDiv = document.createElement("div");
        $crearDiv.id = "integrante";
        $dondePonerElNodo.appendChild($crearDiv);
        
        const $crearLabel = document.createElement("label");
        $crearLabel.textContent = "Familiar número " + (contador + 1) +" ";
        const $crearInput = document.createElement("input");
        $crearInput.type = "number";
        const $espacio = document.createElement("br");
   
        document.querySelector("#integrante").appendChild($crearLabel)
        document.querySelector("#integrante").appendChild($crearInput)
        document.querySelector("#integrante").appendChild($espacio)
        
        contador++;
}
};


document.querySelector("#mensajeFinal").onclick = function () {
    edades.push(document.querySelector("#integrante").innerText);
    console.log(edades);
    return false;

}

*/