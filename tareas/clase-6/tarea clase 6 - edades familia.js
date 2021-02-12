
const $formulario = document.querySelector("#formulario")
const $botonAceptar = document.querySelector("#botonAceptar")

function createDiv() {
    let createDiv = document.createElement("div")
    $formulario.appendChild(createDiv)
}

let botonAceptarApretado

$botonAceptar.onclick = function() {
    if (botonAceptarApretado != 0) {
        const numeroFamiliar = Number(document.querySelector("#numeroFamiliar").value)
        for (let i = 1; i <= numeroFamiliar; i++) {
            let createLabel = document.createElement("label")
            createLabel.textContent = `Ingresá la edad del familiar numero ${i} `
            $formulario.appendChild(createLabel)
            let createInput = document.createElement("input")
            createInput.type = "number"
            createInput.id = `nro${i}`
            createInput.className = "integrantes"
            $formulario.appendChild(createInput)
            createDiv()
        }
        botonAceptarApretado = 0
        $botonCalcular.type = "button"; $botonCalcular.textContent = "Calcular promedio de edades, mayor y menor"
        $formulario.appendChild($botonCalcular)
    }
    return false
}



function calcularMayor(x) {
    let mayor = Number(x[0].value)
    for (let i = 0; i < x.length; i++) {
        mayor = Number(x[i].value) > mayor ? Number(x[i].value) : mayor
    }
    return mayor
}

function calcularMenor(x) {
    let menor = Number(x[0].value)
    for (let i = 0; i < x.length; i++) {
        menor = Number(x[i].value) < menor ? Number(x[i].value) : menor
    }
    return menor
}

function calcularPromedio(x) {
    let sumaEdades = 0
    for (let i = 0; i < x.length; i++) {
        sumaEdades += Number(x[i].value)
    }
    return sumaEdades / x.length
}

const $botonCalcular = document.createElement("button")
const botonReset = document.createElement("button")


$botonCalcular.onclick = function() {
    const $conjuntoDeEdades = document.querySelectorAll(".integrantes")
    createDiv()
    document.querySelector("#masViejo").textContent = `El más grande de tu
    familia tiene ${calcularMayor($conjuntoDeEdades)} años`
    createDiv()
    document.querySelector("#masJoven").textContent = `El más joven de tu 
    familia tiene ${calcularMenor($conjuntoDeEdades)} años`
    createDiv()
    document.querySelector("#promedio").textContent = `El promedio de edades en tu
    familia es de ${calcularPromedio($conjuntoDeEdades)} años` 
    if (botonReset.type != "reset") { botonReset.type = "reset"; botonReset.textContent = "Volver a ingresar edades"
    $formulario.appendChild(botonReset) } 
    
}




