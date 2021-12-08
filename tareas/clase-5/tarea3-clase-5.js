document.querySelector("#siguiente-paso").onclick = function() {
    cantidadClases = Number(document.querySelector("#cantidad-clases").value)

    borrarInputsAnteriores()
    crearInputsClases(cantidadClases)

    return false
}


document.querySelector("#calcular").onclick = function() {
    let horasParcial = Number(obtenerHoras())
    let minutosParcial = Number(obtenerMinutos())
    let segundosParcial = Number(obtenerSegundos())
    const horasTotal = horasParcial + Math.floor(minutosParcial / 60) + Math.floor(segundosParcial / 3600)
    const minutosTotal = minutosParcial % 60
    const segundosTotal = segundosParcial % 60

    mostrarResultados(horasTotal, minutosTotal, segundosTotal)
    mostrarElemento("#resultado")
    return false
}



function crearInputsClases(cantidadClases) {

    if (cantidadClases > 0) {
        mostrarElemento("#calcular")
    }

    for (let i = 0; i < cantidadClases; i++) {
        crearInput(i)
    }
}


function crearInput(indice) {
    const $div = document.createElement("div")
    $div.className = "clases"

    const $label = document.createElement("label")
    $label.textContent = "Ingrese horas clase" + (indice + 1)
    const $inputHoras = document.createElement("input")
    $inputHoras.className = "input-hora"
    const $inputMinutos = document.createElement("input")
    $inputMinutos.className = "input-minutos"
    const $inputSegundos = document.createElement("input")
    $inputSegundos.className = "input-segundos"

    $div.appendChild($label)
    $div.appendChild($inputHoras)
    $div.appendChild($inputMinutos)
    $div.appendChild($inputSegundos)

    const $placeholder = document.querySelector("#placeholder")
    $placeholder.appendChild($div)


}

function borrarInputsAnteriores() {
    const $inputAnteriores = document.querySelectorAll(".clases")
    for (let i = 0; i < $inputAnteriores.length; i++) {
        $inputAnteriores[i].remove()
    }
}


function obtenerHoras() {
    const $inputsHora = document.querySelectorAll(".input-hora")
    let horasParcial = 0
    for (let i = 0; i < $inputsHora.length; i++) {

        horasParcial += Number($inputsHora[i].value)
    }

    return horasParcial

}

function obtenerMinutos() {
    const $inputMinutos = document.querySelectorAll(".input-minutos")
    let minutosParcial = 0

    for (let i = 0; i < $inputMinutos.length; i++) {
        minutosParcial += Number($inputMinutos[i].value)
    }
    return minutosParcial
}

function obtenerSegundos() {
    const $inputSegundos = document.querySelectorAll(".input-segundos")
    let segundosParcial = 0

    for (let i = 0; i < $inputSegundos.length; i++) {
        segundosParcial += Number($inputSegundos[i].value)
    }
    return segundosParcial
}



function mostrarElemento(elemento) {
   document.querySelector(`${elemento}`).className = ""
}



function mostrarResultados(horas, minutos, segundos) {
    const $resultado = document.querySelector("#resultado-final")
    $resultado.textContent = ( horas + " Horas " + minutos + " Minutos " + segundos + " segundos ")

}