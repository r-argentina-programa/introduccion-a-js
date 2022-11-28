/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados 
(investigar cómo en MDN).
*/

const personasEnGrupoFamiliar = Number(prompt("Cuantas personas tiene tu grupo familiar?"))

const $formulario = document.querySelector("form")


for (let i=1; i<=personasEnGrupoFamiliar; i++ ) {
    let $etiqueta = document.createElement("label")
    $etiqueta.textContent = `Ingresar edad de persona N°${i}`

    $formulario.appendChild($etiqueta)

    let $input = document.createElement("input")
    $input.id = `input${i}`
    $formulario.appendChild ($input)
    

    $formulario.appendChild (document.createElement("div"))

   }

$botonCalcular = document.createElement("button")
$botonCalcular.textContent = "Calcular"

$formulario.appendChild($botonCalcular)

$botonReset = document.createElement("button")
$botonReset.type = "reset"
$botonReset.id = "reset"
$botonReset.textContent ="Limpiar formulario"

$formulario.appendChild($botonReset) 


$botonCalcular.onclick = function(){
    let $edadPersona = 0
    let arrayEdades = []

    for (let i=1; i<=personasEnGrupoFamiliar; i++ ){

        let inputId = `input${i}`
        
        $edadPersona = document.getElementById(inputId).value
        
        arrayEdades.push(Number($edadPersona))
        }    
    
    


    $textoPromedio = document.createElement("p")
    $textoPromedio.textContent = `El promedio de edades ingresadas es de ${calcularPromedio(arrayEdades)}`

    $formulario.appendChild($textoPromedio)

    $textoMayor = document.createElement("p")
    $textoMayor.textContent = `El integrante del grupo familiar más grande tiene ${calcularMayorNumero(arrayEdades)}`

    $formulario.appendChild($textoMayor)

    $textoMenor = document.createElement("p")
    $textoMenor.textContent = `El integrante del grupo familiar más chico tiene ${calcularMenorNumero(arrayEdades)}`

    $formulario.appendChild($textoMenor)

return false;


}



function calcularMenorNumero (array) {
    let acumulador = array[0];
    for  (i=0; i<array.length ; i++) {

        if (array[i] < acumulador) {
            acumulador = array[i]
        }
    }
    return acumulador
}

function calcularMayorNumero (array){
    let acumulador = array[0];
    for  (i=0; i<array.length ; i++) {
        if (array[i] > acumulador) {
            acumulador = array[i]
        }
    }
    return acumulador
}

function calcularPromedio (array){
    
    let acumulador = 0

    for (i=0 ; i< array.length ; i++){
        acumulador = acumulador + array[i]
    }
    
    return acumulador / array.length
}