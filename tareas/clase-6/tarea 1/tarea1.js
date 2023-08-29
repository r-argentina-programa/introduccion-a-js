/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#enviar-cantidad-integrantes").onclick = function () {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value)

    if (cantidadIntegrantes <= 0) return false;

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    mostrarControles();
    ocultarResultados();

    $cantidadIntegrantes.value = "";
    return false;
}

document.querySelector("#procesar-edades").onclick = function () {
    const $edadesIntegrantes = document.querySelectorAll(".edad-integrante");
    if (validarInputsEdadesUsuario($edadesIntegrantes)) return false;

    const edadesIntegrantes = [];
    for (let i = 0; i < $edadesIntegrantes.length; i++) {
        edadesIntegrantes.push(Number($edadesIntegrantes[i].value));
    }

    const edadMayor = dameEdadMayor(edadesIntegrantes);
    const edadMenor = dameEdadMenor(edadesIntegrantes);
    const edadPromedio = dameEdadPromedio(edadesIntegrantes);

    document.querySelector("#edad-mayor").textContent = edadMayor;
    document.querySelector("#edad-menor").textContent = edadMenor;
    document.querySelector("#edad-promedio").textContent = edadPromedio;
    mostrarResultados();

    return false;
}

document.querySelector("#borrar").onclick = function () {
    resetear();
}

function crearIntegrantes(cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }
}

function crearIntegrante(indice) {
    const $div = document.createElement("div");
    $div.className = "integrante";

    const $h3 = document.createElement("h3");
    $h3.className = "h3";
    $h3.textContent = `Integrante #${indice + 1}:`

    const $label = document.createElement("label");
    $label.className = "label";
    $label.htmlFor = `edad-integrante-${indice + 1}`;
    $label.textContent = "Edad: ";

    const $input = document.createElement("input");
    $input.type = "number";
    $input.id = `edad-integrante-${indice + 1}`;
    $input.className = "input edad-integrante";
    $input.placeholder = "25...";


    $div.appendChild($h3);
    $div.appendChild($label);
    $div.appendChild($input);

    const $contenedorIntegrantes = document.querySelector(".integrantes");
    $contenedorIntegrantes.appendChild($div);
}

function borrarIntegrantesAnteriores() {
    const $integrantesAnteriores = document.querySelectorAll(".integrante")

    for (let i = 0; i < $integrantesAnteriores.length; i++) {
        $integrantesAnteriores[i].remove();
    }
}

function mostrarControles() {
    const $divControles = document.querySelector(".controles");
    $divControles.classList.remove("hidden");
}
function ocultarControles() {
    const $divControles = document.querySelector(".controles");
    $divControles.classList.add("hidden");
}

// Recibe un NodeList de inputs de edades y devuelve true si alguna de las edades es inválida
function validarInputsEdadesUsuario(inputsEdades) {
    let tieneInputsInvalidos = false;
    for (let i = 0; i < inputsEdades.length; i++) {
        if (inputsEdades[i].value <= 0) tieneInputsInvalidos = true;
    }

    return tieneInputsInvalidos;
}

function dameEdadMayor(edades) {
    let edadMayor = 0;

    for (let i = 0; i < edades.length; i++) {
        edades[i] >= edadMayor ? edadMayor = edades[i] : "";
    }

    return edadMayor;
}

function dameEdadMenor(edades) {
    let edadMenor = edades[0];

    for (let i = 0; i < edades.length; i++) {
        edades[i] <= edadMenor ? edadMenor = edades[i] : "";
    }

    return edadMenor;
}

function dameEdadPromedio(edades) {
    let totalEdades = 0;

    for (let i = 0; i < edades.length; i++) {
        totalEdades += edades[i];
    }

    return totalEdades / edades.length;
}

function mostrarResultados() {
    document.querySelector(".resultados").classList.remove("hidden");
}

function ocultarResultados() {
    document.querySelector(".resultados").classList.add("hidden");
}

function resetear() {
    borrarIntegrantesAnteriores();
    ocultarControles();
    ocultarResultados();
}
