/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let contador = 0;

document.querySelector("#add").onclick = function (event) {
    mostrarBotonAclaracion()
    createForm()
    mostrarBotonCalcular()
    mostrarBotonRemoverSueldos()
    event.preventDefault();
}

document.querySelector("#remove").onclick = function (event) {
    removeForm()
    ocultarBotonCalcular()
    ocultarBotonRemoverSueldos() 
    ocultarBotonAclaración ()
    event.preventDefault();
}

function createForm () {
    let $crearDiv = document.createElement("div");
    $crearDiv.className = "formulario"

    let $crearLabel = document.createElement("label");
    $crearLabel.textContent = "El salario anual del Familiar N " + (contador + 1);
    let $crearInput = document.createElement("input");
    $crearInput.type="number";
    /*let $crearEspacio = document.createElement("br"); (el div ya crea el espacio)*/

    $crearDiv.appendChild($crearLabel)
    $crearDiv.appendChild($crearInput)
    /*$crearDiv.appendChild($)*/

    let putNode = document.querySelector("#formularios"); 
    putNode.appendChild($crearDiv);

    contador++;
}

function mostrarBotonAclaracion () {
    document.querySelector("#aclaración").className = "";    
}

function ocultarBotonAclaración () {
    document.querySelector("#aclaración").className = "oculto";    
}


function removeForm () {
    let removerDiv = document.querySelectorAll(".formulario");
    if (contador !== 0) 
    for (let i = 0; i < removerDiv.length;i++) {
        removerDiv[i].remove()
    }
    contador = 0
}

function mostrarBotonCalcular () {
    document.querySelector("#resultado-final").className = "";
}

function ocultarBotonCalcular() {
    document.querySelector("#resultado-final").className = "oculto";
}

function mostrarBotonRemoverSueldos () {
    document.querySelector("#limpiar-input").className = "";
}

function ocultarBotonRemoverSueldos() {
    document.querySelector("#limpiar-input").className = "oculto";
}

document.querySelector("#resultado-final").onclick = function (event) {
    let sueldos = obtenerSueldos ()
    mostrarSueldos("mayor", mayorSalarioAnual(sueldos));
    mostrarSueldos("menor", menorSalarioAnual(sueldos));
    mostrarSueldos("promedio", promedioSalarioAnual(sueldos));
    mostrarSueldos("mensual", promedioSalarioMensual(sueldos));
    mostrarResultados()
    //faltan 4 funciones que den el mensaje final.
    
    event.preventDefault(); 
}

function obtenerSueldos () {
    let obtenerSueldos = document.querySelectorAll(".formulario input");
    let todosLosSueldos = [];
    for (let i = 0; i < obtenerSueldos.length;i++) {
        if (obtenerSueldos[i].value === "") {
            continue
        } else {
        todosLosSueldos.push(Number(obtenerSueldos[i].value));
        }
    }
    return todosLosSueldos
}

function mostrarSueldos(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}


function mostrarResultados () {
    document.querySelector("#mensaje-final").className = "";
}

function mayorSalarioAnual(sueldos) {
    sueldos = Math.max(...sueldos);
    return sueldos
}
function menorSalarioAnual(sueldos) {
    sueldos = Math.min(...sueldos);
    return sueldos
}
function promedioSalarioAnual(sueldos) {
    let contador = 0
    for (let i = 0; i < sueldos.length;i++) {
        contador = contador + sueldos[i]
    }
    return (contador / sueldos.length)
}

function promedioSalarioMensual (sueldos) {
    let contador = 0
    for (let i = 0; i < sueldos.length;i++) {
        contador = contador + sueldos[i]
    }
    contador = (contador / sueldos.length);
    let mesesEnAño = 12;
    return (contador / mesesEnAño)
}

//function promedioSalarioMensual(sueldos) {

//}


