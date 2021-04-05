
function calcularSegundos(){
    const totalSegundos = document.querySelectorAll(".segundos")
    return acumularElementos(totalSegundos)
}

function calcularMinutos(){
    const totalMinutos = document.querySelectorAll(".minutos")
    return acumularElementos(totalMinutos)
}

function calcularHoras(){
    const totalHoras = document.querySelectorAll(".horas")
    return acumularElementos(totalHoras)
}


function acumularElementos(elementos){
    let sumaElementos = 0
    for (i = 0; i < elementos.length; i++){
        sumaElementos += Number(elementos[i].value)
    }
    return sumaElementos
}

function mostrarTiempoTotal(){
    document.querySelector("div").className = " "
}

const botonCalcular = document.querySelector("#calcular")

botonCalcular.onclick = function(){

    

    mostrarTiempoTotal()

    const sumaSegundos = calcularSegundos()
    const sumaMinutos = calcularMinutos()
    const sumaHoras = calcularHoras()

    const minutosEnterosDeSegundos = Math.floor(sumaSegundos/ 60)
    const segundosDefinitivos = sumaSegundos % 60

    const totalMinutos    = sumaMinutos + minutosEnterosDeSegundos
    const horasEnterasDeMinutos  = Math.floor(totalMinutos / 60)
    const minutosDefinitivos  = totalMinutos % 60

    const horasDefinitivas  = horasEnterasDeMinutos + sumaHoras
    
    document.querySelector("#horas-totales").innerText = "Las horas totales son " +  horasDefinitivas
    document.querySelector("#minutos-totales").innerText = "Los minutos totales son " + minutosDefinitivos
    document.querySelector("#segundos-totales").innerText = "Los segundos totales son " + segundosDefinitivos


}


