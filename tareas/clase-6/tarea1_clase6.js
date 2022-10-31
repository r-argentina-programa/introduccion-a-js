const botonAceptar = document.querySelector("#aceptar")
const botonLimpiar = document.querySelector("#limpiar")
const botonCalcular = document.querySelector("#calcular")

const divIntegrantes = document.querySelector("#integrantes")
const resultados = document.querySelector("#resultados")

const erroresFamiliares = document.querySelector("#errores-numero-familiares")
const erroresEdades = document.querySelector("#errores-integrantes")
let inputIntegrantes = document.querySelector("#numero-de-familiares")

botonAceptar.onclick = function () {
    let numeroDeFamiliares = Number(inputIntegrantes.value)
    let errorFamiliares = validarNumeroDeFamiliares(numeroDeFamiliares)
    console.log(numeroDeFamiliares)

    if (errorFamiliares) {
        mostrarElemento(erroresFamiliares)
        inputIntegrantes.className = "error"
    } else {
        inputIntegrantes.className = ""
        erroresFamiliares.textContent = ""
        agregarTodosLosIntegrantes(numeroDeFamiliares)
        deshabilitarBoton("#aceptar")
        mostrarElemento(botonCalcular)
        mostrarElemento(botonLimpiar)
    }

}

botonCalcular.onclick = function () {
    let listaEdades = document.querySelectorAll("#integrantes input")
    let errorEdades = validarEdades(listaEdades)

    if (errorEdades) {
        mostrarElemento(erroresEdades)
    } else {

        ocultarElemento(erroresEdades)

        let arrayEdades = obtenerArrayEdades(listaEdades)


        let mayorEdad = obtenerMayorEdad(arrayEdades)
        let menorEdad = obtenerMenorEdad(arrayEdades)
        let promedio = obtenerPromedio(arrayEdades)

        mostrarResultados(mayorEdad, menorEdad, promedio)
    }

}

botonLimpiar.onclick = function () {
    let numeroDeFamiliares = Number(inputIntegrantes.value)
    removerIntegrantes(numeroDeFamiliares)
    habilitarBoton("#aceptar")
    resultados.textContent = ""
    ocultarElemento(botonLimpiar)
    ocultarElemento(botonCalcular)

}

function validarEdades(nodeEdades) {
    let contadorErrores = 0

    nodeEdades.forEach(function (edad) {
        if ((Number(edad.value)) <= 0) {
            edad.className = "error"
            contadorErrores++
        } else {
            edad.className = ""
        }
    })
    return contadorErrores
}

function validarNumeroDeFamiliares(numeroDeFamiliares) {
    if (numeroDeFamiliares <= 0) {
        return 'El campo numero de familiares no puede ser menor o igual a 0 ni vacio'
    } else {
        return ''
    }
}

function mostrarElemento(elemento) {
    elemento.className = ""
}

function ocultarElemento(elemento) {
    elemento.className = "ocultar"
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
