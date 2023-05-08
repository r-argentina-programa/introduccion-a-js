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

const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function(event) {
    const $salariosIntengrantes = document.querySelectorAll("#integrante");
    const salariosIntegrantes = obtenerSalariosIntegrantes($salariosIntengrantes);

    document.querySelector("#mayor-salario").textContent = calcularMayorSalario(salariosIntegrantes);
    document.querySelector("#menor-salario").textContent = calcularMenorSalario(salariosIntegrantes);
    document.querySelector("#salario-promedio").textContent = calcularSalarioPromedio(salariosIntegrantes);

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

function obtenerSalariosIntegrantes($salariosIntengrantes) {
    const salariosIntegrantes = [];

    for (let i = 0; i < $salariosIntengrantes.length; i++) {
        if (Number($salariosIntengrantes[i].value) > 0) {
            salariosIntegrantes.push(Number($salariosIntengrantes[i].value));
        }
    }

    return salariosIntegrantes;
}

function calcularMayorSalario(salariosIntegrantes) {
    let salarioMayor = salariosIntegrantes[0];

    for (let i = 0; i < salariosIntegrantes.length; i++) {
        let salarioComparar = salariosIntegrantes[i];

        if (salarioComparar > salarioMayor) {
            salarioMayor = salarioComparar;
        }
    }

    return salarioMayor;
}

function calcularMenorSalario(salariosIntegrantes) {
    let salarioMenor = salariosIntegrantes[0];

    for (let i = 0; i < salariosIntegrantes.length; i++) {
        let salarioComparar = salariosIntegrantes[i];

        if (salarioComparar < salarioMenor) {
            salarioMenor = salarioComparar;
        }
    }

    return salarioMenor;
}

function calcularSalarioPromedio(salariosIntegrantes) {
    let sumaSalarios = 0;

    for (let i = 0; i < salariosIntegrantes.length; i++) {
        sumaSalarios += salariosIntegrantes[i];
    }

    return Math.round(sumaSalarios / salariosIntegrantes.length);
}
