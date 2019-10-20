function crearEntrada(indice) {
    $formularioGrupoFamiliar = document.querySelector('#formulario-grupo-familiar')

    $label = document.createElement("label")
    $label.textContent = `Edad del familiar ${indice}: `

    $input = document.createElement("input")
    $input.type = "number"
    $input.className = "input-edad"

    $labelSalario = document.createElement("label");
    $labelSalario.className = "label-salario"


    $nuevoParrafo = document.createElement("p")

    $nuevoParrafo.appendChild($label)
    $nuevoParrafo.appendChild($input)
    $nuevoParrafo.appendChild($labelSalario)

    $formularioGrupoFamiliar.appendChild($nuevoParrafo)
}

function generarFormulario() {
    let grupoFamiliar = prompt("Cuantas personas tiene tu grupo familiar?")
    let i;
    for (i = 1; i <= grupoFamiliar; i++) {
        crearEntrada(i)
    }
}

let recopilarDatosUsuario = function () {
    arrayInputEdad = document.querySelectorAll(".input-edad")
    arrayInputEdad = valoresArrayANumeros(arrayInputEdad)

    $mostrarEdadMayor = document.querySelector("#mayor-edad")
    $mostrarEdadMayor.value = buscarValorMayor(arrayInputEdad)

    $mostrarEdadMenor = document.querySelector("#menor-edad")
    $mostrarEdadMenor.value = buscarValorMenor(arrayInputEdad)

    $mostrarEdadPromedio = document.querySelector("#promedio-edad")
    $mostrarEdadPromedio.value = determinarValorPromedio(arrayInputEdad)

    arrayInputSalarios = document.querySelectorAll(".input-salario")
    if (arrayInputSalarios.length !== 0) {
        arrayInputSalarios = valoresArrayANumeros(arrayInputSalarios)

        $mostrarSalarioMayor = document.querySelector("#salario-anual-mayor")
        $mostrarSalarioMayor.value = buscarValorMayor(arrayInputSalarios) * 12

        $mostrarSalarioMenor = document.querySelector("#salario-anual-menor")
        $mostrarSalarioMenor.value = buscarValorMenor(arrayInputSalarios) * 12

        $mostrarSalarioAnualPromedio = document.querySelector("#salario-anual-promedio")
        $mostrarSalarioAnualPromedio.value = determinarValorPromedio(arrayInputSalarios) * 12

        $mostrarSalarioMensualPromedio = document.querySelector("#salario-mensual-promedio")
        $mostrarSalarioMensualPromedio.value = determinarValorPromedio(arrayInputSalarios)
    }

}

function valoresArrayANumeros(array) {
    let i;
    let temp;
    let tempArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].value !== '') {
            temp = array[i].value
            tempArray.push(Number(temp))
        }
    }
    return tempArray
}

function buscarValorMayor(array) {
    let i;
    let temp = array[0];
    for (i = 0; i < array.length; i++) {
        array[i] > temp ? temp = array[i] : ''
    }
    return temp
}

function buscarValorMenor(array) {
    let i;
    let temp = array[0]
    for (i = 0; i < array.length; i++) {
        temp < array[i] ? '' : temp = array[i]
    }
    return temp
}

function determinarValorPromedio(array) {
    let i;
    let temp = 0;
    for (i = 0; i < array.length; i++) {
        temp = temp + array[i]
    }
    if ((temp % array.length) !== 0) {
        return (temp / array.length).toFixed(2)
    }
    else {
        return (temp / array.length)
    }
}

let limpiarFormulario = function () {
    $mostrarEdadMayor = document.querySelector("#mayor-edad")
    $mostrarEdadMayor.value = "Mayor edad del grupo"

    $mostrarEdadMenor = document.querySelector("#menor-edad")
    $mostrarEdadMenor.value = "Menor edad del grupo"

    $mostrarEdadPromedio = document.querySelector("#promedio-edad")
    $mostrarEdadPromedio.value = "Promedio edad del grupo"

    $salarioAnualMayor = document.querySelector("#salario-anual-mayor")

    if ($salarioAnualMayor !== null) {
        $salarioAnualMayor.value = "Mayor salario anual"

        $salarioAnualMenor = document.querySelector("#salario-anual-menor")
        $salarioAnualMenor.value = "Menor salario anual"

        $salarioAnualPromedio = document.querySelector("#salario-anual-promedio")
        $salarioAnualPromedio.value = "Salario anual promedio"

        $salarioMensualPromedio = document.querySelector("#salario-mensual-promedio")
        $salarioMensualPromedio.value = "Salario mensual promedio"
    }
}

let empezarDeNuevo = function () {
    $formularioGrupoFamiliar.innerHTML = ''

    $mostrarEdadMayor = document.querySelector("#mayor-edad")
    $mostrarEdadMayor.value = "Mayor edad del grupo"

    $mostrarEdadMenor = document.querySelector("#menor-edad")
    $mostrarEdadMenor.value = "Menor edad del grupo"

    $mostrarEdadPromedio = document.querySelector("#promedio-edad")
    $mostrarEdadPromedio.value = "Promedio edad del grupo"

    $parrafoBotonSalarios = document.querySelector("#parrafo-boton-salarios")
    $parrafoBotonSalarios.removeChild($parrafoExtra)

    $botonSalarios.disabled = false
    generarFormulario()
}

agregarCalculoSalarios = function () {
    $labelSalario = document.querySelectorAll(".label-salario")
    agregaLabels($labelSalario)
    agregaSalarios($labelSalario)
    agregaCalculos()
}

function agregaLabels(array) {
    let i;
    for (i = 0; i < array.length; i++) {
        array[i].textContent = "  Salario mensual: "
    }

}

function agregaSalarios(array) {
    let i;
    for (i = 0; i < array.length; i++) {
        $inputSalario = document.createElement("input")
        $inputSalario.type = "number"
        $inputSalario.className = "input-salario"

        array[i].appendChild($inputSalario)
    }
}

function agregaCalculos() {
    $salarioAnualMayor = document.createElement("input")
    $salarioAnualMayor.type = "text"
    $salarioAnualMayor.id = "salario-anual-mayor"
    $salarioAnualMayor.disabled = "true"
    $salarioAnualMayor.value = "Mayor salario anual"

    $salarioAnualMenor = document.createElement("input");
    $salarioAnualMenor.type = "text"
    $salarioAnualMenor.id = "salario-anual-menor"
    $salarioAnualMenor.disabled = "true"
    $salarioAnualMenor.value = "Menor salario anual"

    $salarioAnualPromedio = document.createElement("input");
    $salarioAnualPromedio.type = "text"
    $salarioAnualPromedio.id = "salario-anual-promedio"
    $salarioAnualPromedio.disabled = "true"
    $salarioAnualPromedio.value = "Salario anual promedio"

    $salarioMensualPromedio = document.createElement("input");
    $salarioMensualPromedio.type = "text"
    $salarioMensualPromedio.id = "salario-mensual-promedio"
    $salarioMensualPromedio.disabled = "true"
    $salarioMensualPromedio.value = "Salario mensual promedio"

    $parrafoExtra = document.createElement("p")
    $parrafoBotonSalarios = document.querySelector("#parrafo-boton-salarios")

    $parrafoExtra.appendChild($salarioAnualMayor)
    $parrafoExtra.appendChild($salarioAnualMenor)
    $parrafoExtra.appendChild($salarioAnualPromedio)
    $parrafoExtra.appendChild($salarioMensualPromedio)

    $parrafoBotonSalarios.appendChild($parrafoExtra)

    $botonSalarios.disabled = "true"
}

$botonCalcular = document.querySelector("#calcular")
$botonCalcular.onclick = recopilarDatosUsuario

$botonLimpiarFormulario = document.querySelector("#boton-limpiar-formulario")
$botonLimpiarFormulario.onclick = limpiarFormulario

$botonEmpezarDeNuevo = document.querySelector("#boton-empezar-de-nuevo")
$botonEmpezarDeNuevo.onclick = empezarDeNuevo

$botonSalarios = document.querySelector("#boton-salarios")
$botonSalarios.onclick = agregarCalculoSalarios

generarFormulario()
