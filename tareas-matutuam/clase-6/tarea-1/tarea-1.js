/*
Tarea 1:

- Preguntar cuánta gente hay en el grupo familiar
- Crear tantos inputs + labels como gente haya para completar la edad de cada integrante
- Al hacer click en "Calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar
- Punto Bonus: Crear un botón para empezar de nuevo el proceso, borrando los inputs ya creados
*/

const $botonEnviar = document.querySelector("#boton-enviar");
$botonEnviar.onclick = function(event) {
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);

    if (cantidadIntegrantes > 0) {
        crearIntegrantes(cantidadIntegrantes);
    }

    event.preventDefault();
}

const $botonCalcular = document.querySelector("#boton-calcular");
$botonCalcular.onclick = function(event) {
    const $integrantes = document.querySelectorAll("#integrante");
    const edadIntegrantes = retornarEdadIntegrantes($integrantes);

    console.log(edadIntegrantes);

    event.preventDefault();
}

function crearIntegrantes(cantidadIntegrantes) {

    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }
}

function crearIntegrante(i) {
    const $familiares = document.querySelector(".familiares");

    const $nuevoIntegrante = document.createElement("div");
    $nuevoIntegrante.className = `integrante-${i + 1}`;

    const $labelNuevo = document.createElement("label");
    $labelNuevo.textContent = `Integrante #${i + 1} - `;

    const $nuevoInput = document.createElement("input");
    $nuevoInput.id = `integrante`;
    $nuevoInput.type = "number";

    $labelNuevo.appendChild($nuevoInput)
    $nuevoIntegrante.appendChild($labelNuevo);
    $familiares.appendChild($nuevoIntegrante);
}

function retornarEdadIntegrantes($integrantes) {
    const edadIntegrantes = [];

    for (let i = 0; i < $integrantes.length; i++) {
        if (Number($integrantes[i].value) > 0) {
            edadIntegrantes.push(Number($integrantes[i].value));
        }
    }

    return edadIntegrantes;
}
