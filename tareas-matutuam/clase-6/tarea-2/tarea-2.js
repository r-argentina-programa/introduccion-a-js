/*
Tarea 2:
========

- Crear una interfaz que permite agregar/quitar input + label para completar el salario anual de cada integrante
- Al hacer click en "Calcular", mostrar en un elemento pre-existenet el mayor salario anual, el menor salario anual y el salario promedio anual
- Punto Bonus: Si hay inputs vacíos, ignorarlos en el cálculo
*/

let contadorClicks = 0;

const $botonAgregar = document.querySelector("#boton-agregar");

$botonAgregar.onclick = function(event) {
    contadorClicks++;

    agregarIntegrante(contadorClicks);

    event.preventDefault();
}

const $botonQuitar = document.querySelector("#boton-quitar");

$botonQuitar.onclick = function(event) {
    quitarIntegrante(contadorClicks);
    
    contadorClicks--;

    event.preventDefault();
}

function agregarIntegrante() {
    const $integrantes = document.querySelector(".integrantes");

    const $nuevoIntegrante = document.createElement("div");
    $nuevoIntegrante.className = `integrante-${contadorClicks}`;

    const $labelNuevo = document.createElement("label");
    $labelNuevo.textContent = `Integrante #${contadorClicks}`;

    const $nuevoInput = document.createElement("input");
    $nuevoInput.id = `integrante`;
    $nuevoInput.type = "number";

    $labelNuevo.appendChild($nuevoInput);
    $nuevoIntegrante.appendChild($labelNuevo);
    $integrantes.appendChild($nuevoIntegrante);
}

function quitarIntegrante() {
    if (contadorClicks > 0) {
        for (let i = contadorClicks; i >= contadorClicks; i--) {
            document.querySelector(`.integrante-${contadorClicks}`).remove();
        }
    }
}
