/*
Tarea 1:

- Preguntar cuánta gente hay en el grupo familiar
- Crear tantos inputs + labels como gente haya para completar la edad de cada integrante
- Al hacer click en "Calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar
- Punto Bonus: Crear un botón para empezar de nuevo el proceso, borrando los inputs ya creados
*/

const $botonEnviar = document.querySelector("#boton-enviar");
$botonEnviar.onclick = function(event) {
    mostrarFamiliares();
    mostrarBotonCalcular();
    mostrarBotonResetear();

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

    document.querySelector("#edad-mayor").textContent = calcularEdadMayor(edadIntegrantes);
    document.querySelector("#edad-menor").textContent = calcularEdadMenor(edadIntegrantes);
    document.querySelector("#edad-promedio").textContent = calcularPromedioEdad(edadIntegrantes);
    mostrarResultados();

    event.preventDefault();
}

const $botonResetear = document.querySelector("#boton-resetear");
$botonResetear.onclick = function (event) {
    const $integrantes = document.querySelectorAll("#integrante");
    eliminarIntegrantes($integrantes);
    ocultarResultados();
    ocultarBotonCalcular();
    ocultarBotonRestear();

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
    $labelNuevo.textContent = `Edad Integrante #${i + 1} - `;

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

function calcularEdadMayor(edadIntegrantes) {
    let edadMayor = edadIntegrantes[0];

    for (let i = 0; i < edadIntegrantes.length; i++) {
        let edadComparar = edadIntegrantes[i];

        if (edadComparar > edadMayor) {
            edadMayor = edadComparar;
        }
    }

    return edadMayor;
}

function calcularEdadMenor(edadIntegrantes) {
    let edadMenor = edadIntegrantes[0];

    for (let i = 0; i < edadIntegrantes.length; i++) {
        let edadComparar = edadIntegrantes[i];

        if (edadComparar < edadMenor) {
            edadMenor = edadComparar;
        }
    }

    return edadMenor;
}

function calcularPromedioEdad(edadIntegrantes) {
    let sumaEdades = 0;

    for (let i = 0; i < edadIntegrantes.length; i++) {
        sumaEdades += edadIntegrantes[i];
    }

    return Math.round(sumaEdades / edadIntegrantes.length);
}

function eliminarIntegrantes($integrantes) {
    for (let i = 0; i < $integrantes.length; i++) {
        let $integrante = document.querySelector(`.integrante-${i + 1}`);

        $integrante.remove();
    }
}

function mostrarResultados() {
    document.querySelector("#resultados").classList = "";
}

function mostrarFamiliares() {
    document.querySelector(".familiares").classList = "familiares";
}

function mostrarBotonCalcular() {
    document.querySelector("#boton-calcular").classList = "";
}

function mostrarBotonResetear() {
    document.querySelector("#boton-resetear").classList = "";
}

function ocultarResultados() {
    document.querySelector("#resultados").classList = "oculto";
}

function ocultarFamiliares() {
    document.querySelector(".familiares").classList = "familiares oculto";
}

function ocultarBotonCalcular() {
    document.querySelector("#boton-calcular").classList = "oculto";
}

function ocultarBotonRestear() {
    document.querySelector("#boton-resetear").classList = "oculto";
}
