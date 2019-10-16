/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//Crear inputs y labels

function crearEntrada(param) {
    $formularioGrupoFamiliar = document.querySelector('#formularioGrupoFamiliar')

    $label = document.createElement("label")
    $label.textContent = `Edad del familiar ${param}: `

    $input = document.createElement("input")
    $input.type = "number"
    $input.className = "inputEdad"

    $labelSalario = document.createElement("label");
    $labelSalario.className = "labelSalario"


    nuevoParrafo = document.createElement("p")

    nuevoParrafo.appendChild($label)
    nuevoParrafo.appendChild($input)
    nuevoParrafo.appendChild($labelSalario)

    $formularioGrupoFamiliar.appendChild(nuevoParrafo)
}

function generarFormulario() {
    let grupoFamiliar = prompt("Cuantas personas tiene tu grupo familiar?")
    let i;
    for (i = 1; i <= grupoFamiliar; i++) {
        crearEntrada(i)
    }
}

//Recopilacion de datos del formulario en arrays



generarArrays = function () {
    arrayInputEdad = document.querySelectorAll(".inputEdad")
    arrayInputEdad = arrayEnNumericos(arrayInputEdad)

    $mostrarEdadMayor = document.querySelector("#mayorEdad")
    $mostrarEdadMayor.value = calcularMayor(arrayInputEdad)

    $mostrarEdadMenor = document.querySelector("#menorEdad")
    $mostrarEdadMenor.value = calcularMenor(arrayInputEdad)

    $mostrarEdadPromedio = document.querySelector("#promedioEdad")
    $mostrarEdadPromedio.value = calcularPromedio(arrayInputEdad)

    arrayInputSalarios = document.querySelectorAll(".inputSalario")
    if (arrayInputSalarios.length !== 0){
        arrayInputSalarios = arrayEnNumericos(arrayInputSalarios)

        $mostrarSalarioMayor = document.querySelector("#mayorSalario")
        $mostrarSalarioMayor.value = calcularMayor(arrayInputSalarios) * 12

        $mostrarSalarioMenor = document.querySelector("#menorSalario")
        $mostrarSalarioMenor.value = calcularMenor(arrayInputSalarios) * 12

        $mostrarSalarioAnualPromedio = document.querySelector("#salarioAnualPromedio")
        $mostrarSalarioAnualPromedio.value = calcularPromedio(arrayInputSalarios) * 12

        $mostrarSalarioMensualPromedio = document.querySelector("#salarioMensualPromedio")
        $mostrarSalarioMensualPromedio.value = calcularPromedio(arrayInputSalarios)
    }

}

//convierte todos los elementos del array en valores numericos
function arrayEnNumericos(array) {
    let i;
    let placeholder;
    let dummyArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].value !== '') {
            placeholder = array[i].value
            dummyArray.push(Number(placeholder))
        }
    }
    return dummyArray
}

function calcularMayor(array) {
    let i;
    let placeholder = array[0];
    for (i = 0; i < array.length; i++) {
        array[i] > placeholder ? placeholder = array[i] : ''
    }
    return placeholder
}

function calcularMenor(array) {
    let i;
    let placeholder = array[0]
    for (i = 0; i < array.length; i++) {
        placeholder < array[i] ? '' : placeholder = array[i]
    }
    return placeholder
}

function calcularPromedio(array) {
    let i;
    let placeholder = 0;
    for (i = 0; i < array.length; i++) {
        placeholder = placeholder + array[i]
    }
    return placeholder / array.length
}



clean = function () {
    $mostrarEdadMayor = document.querySelector("#mayorEdad")
    $mostrarEdadMayor.value = "Mayor edad del grupo"

    $mostrarEdadMenor = document.querySelector("#menorEdad")
    $mostrarEdadMenor.value = "Menor edad del grupo"

    $mostrarEdadPromedio = document.querySelector("#promedioEdad")
    $mostrarEdadPromedio.value = "Promedio edad del grupo"

    $mayorSalario = document.querySelector("#mayorSalario")
    if ($mayorSalario !== null){
    $mayorSalario.value = "Mayor salario anual"

    $menorSalario = document.querySelector("#menorSalario")
    $menorSalario.value = "Menor salario anual"

    $salarioAnualPromedio = document.querySelector("#salarioAnualPromedio")
    $salarioAnualPromedio.value = "Salario anual promedio"

    $salarioMensualPromedio = document.querySelector("#salarioMensualPromedio")
    $salarioMensualPromedio.value = "Salario mensual promedio"
    }
    else {}
}

clear = function () {
    $formularioGrupoFamiliar.innerHTML = ''

    $mostrarEdadMayor = document.querySelector("#mayorEdad")
    $mostrarEdadMayor.value = "Mayor edad del grupo"

    $mostrarEdadMenor = document.querySelector("#menorEdad")
    $mostrarEdadMenor.value = "Menor edad del grupo"

    $mostrarEdadPromedio = document.querySelector("#promedioEdad")
    $mostrarEdadPromedio.value = "Promedio edad del grupo"

    $parrafoBotonSalarios = document.querySelector("#parrafoBotonSalarios")
    $parrafoBotonSalarios.removeChild($parrafoExtra)

    $botonSalarios.disabled = false
    generarFormulario()
}

//Agregamos los salarios
agregarCalculoSalarios = function(){
    $labelSalario = document.querySelectorAll(".labelSalario")
    agregaLabels($labelSalario)
    agregaSalarios($labelSalario)
    agregaCalculos()
}

function agregaLabels(array){
    let i;
    for (i = 0; i < array.length; i++){
        array[i].textContent = "  Salario mensual: "
    }
    
}

function agregaSalarios(array){
    let i;
    for (i = 0; i < array.length; i++){
        $inputSalario = document.createElement("input")
        $inputSalario.type = "number"
        $inputSalario.className = "inputSalario"
    
        array[i].appendChild($inputSalario)
    }
}

function agregaCalculos(){
    $mayorSalario = document.createElement("input")
    $mayorSalario.type = "text"
    $mayorSalario.id = "mayorSalario"
    $mayorSalario.disabled = "true"
    $mayorSalario.value = "Mayor salario anual"

    $menorSalario = document.createElement("input");
    $menorSalario.type = "text"
    $menorSalario.id = "menorSalario"
    $menorSalario.disabled = "true"
    $menorSalario.value = "Menor salario anual"

    $salarioAnualPromedio = document.createElement("input");
    $salarioAnualPromedio.type = "text"
    $salarioAnualPromedio.id = "salarioAnualPromedio"
    $salarioAnualPromedio.disabled = "true"
    $salarioAnualPromedio.value = "Salario anual promedio"

    $salarioMensualPromedio = document.createElement("input");
    $salarioMensualPromedio.type = "text"
    $salarioMensualPromedio.id = "salarioMensualPromedio"
    $salarioMensualPromedio.disabled = "true"
    $salarioMensualPromedio.value = "Salario mensual promedio"

    $parrafoExtra = document.createElement("p")
    $parrafoBotonSalarios = document.querySelector("#parrafoBotonSalarios")

    $parrafoExtra.appendChild($mayorSalario)
    $parrafoExtra.appendChild($menorSalario)
    $parrafoExtra.appendChild($salarioAnualPromedio)
    $parrafoExtra.appendChild($salarioMensualPromedio)

    $parrafoBotonSalarios.appendChild($parrafoExtra)

    $botonSalarios.disabled = "true"
}

$botonCalcular = document.querySelector("#calcular")
$botonCalcular.onclick = generarArrays

$botonClean = document.querySelector("#botonClean")
$botonClean.onclick = clean

$botonClear = document.querySelector("#botonClear")
$botonClear.onclick = clear

$botonSalarios = document.querySelector("#botonSalarios")
$botonSalarios.onclick = agregarCalculoSalarios






generarFormulario()








/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante
de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, 
salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/