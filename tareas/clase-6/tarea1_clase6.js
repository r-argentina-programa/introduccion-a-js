const botonAceptar = document.querySelector("#aceptar")
const botonLimpiar = document.querySelector("#limpiar")
const botonCalcular = document.querySelector("#calcular")
const divIntegrantes = document.querySelector("#integrantes")
const resultados = document.querySelector("#resultados")
let numeroDeFamiliares = Number(document.querySelector("#numero-de-familiares").value)

botonAceptar.onclick = function () {
    numeroDeFamiliares = Number(document.querySelector("#numero-de-familiares").value)
    agregarTodosLosIntegrantes(numeroDeFamiliares)
    deshabilitarBoton("#aceptar")
    mostrarBoton(botonCalcular)
    mostrarBoton(botonLimpiar)


}

botonCalcular.onclick = function () {
    let listaEdades = document.querySelectorAll("#integrantes input")
    let arrayEdades = obtenerArrayEdades(listaEdades)

    let mayorEdad = obtenerMayorEdad(arrayEdades)
    let menorEdad = obtenerMenorEdad(arrayEdades)
    let promedio = obtenerPromedio(arrayEdades)

    mostrarResultados(mayorEdad, menorEdad, promedio)


}

botonLimpiar.onclick = function () {
    removerIntegrantes(numeroDeFamiliares)
    habilitarBoton("#aceptar")
    resultados.textContent = ""
    ocultarBoton(botonLimpiar)
    ocultarBoton(botonCalcular)

}

function mostrarBoton(boton) {
    boton.className = "mostrar"
}

function ocultarBoton(boton) {
    boton.className = "ocultar"
}

function habilitarBoton(id) {
    document.querySelector(id).disabled = false
}

function deshabilitarBoton(id) {
    document.querySelector(id).disabled = true
}

function removerIntegrantes(n) {
    for (let i = 1; i <= n; i++) {
        let integrante = document.querySelector("#integrante-" + i)
        integrante.remove()

    }
}

function mostrarResultados(mayor, menor, promedio) {
    resultados.textContent = "La mayor edad es " + mayor + ", la menor edad es " + menor
        + ", y el promedio de edades es " + promedio
}



function obtenerArrayEdades(nodeList) {
    let arrayEdades = []

    for (let i = 0; i < nodeList.length; i++) {
        arrayEdades.push(Number(nodeList[i].value))
    }

    return arrayEdades
}

function agregarTodosLosIntegrantes(numeroDeFamiliares) {
    for (let id = 1; id <= numeroDeFamiliares; id++) {
        agregarIntegrante(id)
        agregarLabelIntegrante(id)
        agregarInputIntegrante(id)
    }
}

function agregarIntegrante(id) {
    divIntegrantes.appendChild(crearIntegrante(id))
}

function crearIntegrante(id) {
    let divIntegrante = document.createElement("div")
    divIntegrante.id = "integrante-" + id

    return divIntegrante
}

function crearLabelIntegrante(id) {
    let labelIntegrante = document.createElement("label")
    labelIntegrante.id = "label-" + id
    labelIntegrante.textContent = "Edad de Integrante N° " + id

    return labelIntegrante
}

function crearInputIntegrante(id) {
    let inputIntegrante = document.createElement("input")
    inputIntegrante.id = "input-" + id
    inputIntegrante.type = "number"

    return inputIntegrante
}

function agregarLabelIntegrante(id) {
    let integrante = document.querySelector("#integrante-" + id)
    integrante.appendChild(crearLabelIntegrante(id))
}

function agregarInputIntegrante(id) {
    let integrante = document.querySelector("#integrante-" + id)
    integrante.appendChild(crearInputIntegrante(id))

}