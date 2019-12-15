/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let contador = 0
$botonAgregar = document.querySelector('#agregar')

$botonAgregar.onclick = function(){
    crearIntegrante()
    mostrarCalcular()
    return false
}


$botonQuitar = document.querySelector('#quitar')

$botonQuitar.onclick = function(){
    if(contador === 0){
        alert('Ya no hay integrantes')
        return false
    }

    $integrantes = document.querySelectorAll('.integrante')
    indice = $integrantes.length-1
    $integrantes[indice].remove()
    contador--

    if(contador === 0){
        document.querySelector('#calcular').className = 'oculto'
    }

    return false
}

$botonCalcular = document.querySelector('#calcular')

$botonCalcular.onclick = function(){
    salarios = obtenerSalarios()

    document.querySelector('#mayor-anual').textContent = obtenerMayor(salarios)
    document.querySelector('#menor-anual').textContent = obtenerMenor(salarios)
    document.querySelector('#promedio-anual').textContent = calcularPromedio(salarios, 1)
    document.querySelector('#promedio-mensual').textContent = calcularPromedio(salarios, 12)

    document.querySelector('#resultados').className = ''


    return false
}

function calcularPromedio(salarios, x){
    acumulador = 0

    for(let i=0; i<salarios.length; i++){
        acumulador += salarios[i]
    }
    
    return acumulador/(salarios.length*x)

}




function obtenerMenor(salarios){
    menor = salarios[0]
    for(let i=1; i<salarios.length; i++){
        if (salarios[i] < menor){
            menor = salarios[i]
        }
    }

    return menor
}




function obtenerMayor(salarios){
    mayor = salarios[0]
    for(let i=1; i<salarios.length; i++){
        if (salarios[i] > mayor){
            mayor = salarios[i]
        }
    }

    return mayor
}


function obtenerSalarios(){
    $integrantes = document.querySelectorAll('.integrante input')
    salarios = []

    for(let i=0; i<$integrantes.length; i++){
        if($integrantes[i].value === ""){
            continue
        }
        salarios.push(Number($integrantes[i].value))
    }

    return salarios
}

function crearIntegrante(){
    contador++
    $label = document.createElement('label')
    $label.textContent = 'Edad #' + contador
    $input = document.createElement('input')
    $div = document.createElement('div')
    $div.className = 'integrante'

    $div.appendChild($label)
    $div.appendChild($input)

    $integrantes = document.querySelector('#integrantes')
    $integrantes.appendChild($div)

    
}

function mostrarCalcular(){
    document.querySelector('#calcular').className = ''
}