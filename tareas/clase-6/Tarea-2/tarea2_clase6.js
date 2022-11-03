const botonAgregar = document.querySelector("#agregar")
const botonQuitar = document.querySelector("#quitar")
const botonCalcular = document.querySelector("#calcular")
const divIntegrantes = document.querySelector("#integrantes")
const resultados = document.querySelector("#resultados")
const botonLimpiar = document.querySelector("#limpiar")

let numeroIntegrantes = 0


botonAgregar.onclick = function () {
    agregarIntegrante()
    agregarLabelIntegrante(numeroIntegrantes)
    agregarInputIntegrante(numeroIntegrantes)
    mostrarBoton(botonQuitar)
    mostrarBoton(botonCalcular)

}

botonQuitar.onclick = function () {
    removerIntegrante()

    if (numeroIntegrantes === 0) {
        ocultarBoton(botonCalcular)
        ocultarBoton(botonQuitar)
    }
}

botonCalcular.onclick = function () {

    let listaSalarios = document.querySelectorAll("#integrantes input")
    marcarErroresEnSalarios(listaSalarios)
    let arraySalarios = crearArraySalarios(listaSalarios)
    let errorSalarios = validarSalarios(arraySalarios)



    if (errorSalarios) {
        mostrarElemento($erroresSalarios)
        resultados.textContent = ''
    } else {
        ocultarElemento($erroresSalarios)
        let mayorSalario = obtenerMayorSalario(arraySalarios)
        let menorSalario = obtenerMenorSalario(arraySalarios)
        let promedio = obtenerPromedio(arraySalarios)
        let salarioMensualPromedio = obtenerSalarioMensualPromedio(arraySalarios)

        mostrarResultados(mayorSalario, menorSalario, promedio, salarioMensualPromedio)

        mostrarBoton(botonLimpiar)

    } else {
        alert("Ingrese al menos 2 valores")
    }

}

botonLimpiar.onclick = function() {
    resultados.textContent = ""

    for (let i = numeroIntegrantes; i >= 1; i--) {
        removerIntegrante()
    }

    ocultarBoton(botonLimpiar)
    ocultarBoton(botonCalcular)
    ocultarBoton(botonQuitar)
function validarSalarios(arraySalarios) {
    let contadorErrores = 0

    arraySalarios.forEach(function (salario) {
        if (salario <= 0) {
            contadorErrores++
        }
    })

    if (contadorErrores) {
        return 'El campo salario no puede ser menor o igual a 0 ni vacio'
    } else {
        return ''
    }
}

function crearArraySalarios(listaSalarios) {
    let arraySalarios = []

    listaSalarios.forEach(function (salario) {
        let valorSalario = Number(salario.value)
        arraySalarios.push(valorSalario)
    })

    return arraySalarios
}

function marcarErroresEnSalarios(inputsSalarios) {
    inputsSalarios.forEach(function (input) {
        if (input.value <= 0 || input.value === null) {
            input.className = "error"
        } else {
            input.className = ''
        }
    })
}

function mostrarResultados(mayor, menor, promedioA, promedioM) {
    resultados.textContent = "El mayor salario es $" + mayor + " el menor salario es $"
        + menor + " el salario anual promedio es $" + promedioA + " el salario mensual promedio es $"
        + promedioM
}

function mostrarBoton(boton) {
    boton.className = "mostrar"
}

function ocultarBoton(boton) {
    boton.className = "ocultar"
}

function removerIntegrante() {
    let integrante = document.querySelector("#integrante-" + numeroIntegrantes)
    integrante.remove()
    numeroIntegrantes--
}

function agregarIntegrante() {
    divIntegrantes.appendChild(crearIntegrante())
}

function crearIntegrante() {

    numeroIntegrantes++
    let divIntegrante = document.createElement("div")
    divIntegrante.id = "integrante-" + numeroIntegrantes

    return divIntegrante
}

function crearLabelIntegrante(id) {
    let labelIntegrante = document.createElement("label")
    labelIntegrante.id = "label-" + id
    labelIntegrante.textContent = "Salario de integrante N° " + id

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