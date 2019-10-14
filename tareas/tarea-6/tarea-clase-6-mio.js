/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#cantidad-integrantes-boton").onclick = function(){

const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value)
document.querySelector("#cantidad-integrantes").disabled = true
if (document.querySelector("#cajas")==null){
let cajas = document.createElement("div")
    cajas.id ="cajas"
    document.querySelector("#form").appendChild(cajas)
let inputs= new Array(cantidadIntegrantes)
let labels = new Array(cantidadIntegrantes)
if (cantidadIntegrantes != null){
for(let i=0;i<cantidadIntegrantes;i++){
    inputs[i]= document.createElement("input")
    inputs[i].type ="number"
    inputs[i].id ="integrante"+String(i)
    inputs[i].name ="integrante"+String(i)
    labels[i]= document.createElement("label")
    labels[i].for=inputs[i].id
    labels[i].textContent = "Edad de familiar "+String(i+1)
    labels[i].style.fontFamily = "Calibri"
    labels[i].style.fontColor = "white"
    cajas.appendChild(labels[i])
    cajas.appendChild(inputs[i])
    cajas.appendChild(document.createElement("br"))
   
}

}

crearElementoInput ("submit","#form","boton-mayor","Mayor edad")
crearElementoInput ("submit","#form","boton-menor","Menor edad")
crearElementoInput ("submit","#form","boton-promedio","Promedio edad")
}
document.querySelector("#boton-mayor").onclick = function(){

    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value)
    let inputsEdad = new Array(cantidadIntegrantes)
    for(let i=0;i<cantidadIntegrantes;i++){
    inputsEdad[i] = Number(document.querySelector("#integrante"+String(i)).value)
    }
    let maxEdad = Math.max.apply(Math,inputsEdad)
    let count = 0
    for(let i=0;i<cantidadIntegrantes;i++){
        if(inputsEdad[i] == maxEdad){
            count +=1
        }
    }
        
        
    
    if (count > 1 ) {
        document.querySelector("#resultado").innerText ="no hay solo un mayor"

}
    else{
        document.querySelector("#resultado").innerText ="La mayor edad es: "+maxEdad
}


    return false
 
}
document.querySelector("#boton-menor").onclick = function(){

    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value)
    let inputsEdad = new Array(cantidadIntegrantes)
    for(let i=0;i<cantidadIntegrantes;i++){
    inputsEdad[i] = Number(document.querySelector("#integrante"+String(i)).value)
    }
    let minEdad = Math.min.apply(Math,inputsEdad)
    let count = 0
    for(let i=0;i<cantidadIntegrantes;i++){
        if(inputsEdad[i] == minEdad){
            count +=1
        }
    }
        
    if (count > 1 ) {
        document.querySelector("#resultado").innerText ="no hay solo un menor"

}
    else{
        document.querySelector("#resultado").innerText ="La menor edad es: "+minEdad
}

    console.log(minEdad)

    return false
    
    
}

document.querySelector("#boton-promedio").onclick = function(){
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value)
    let inputsEdad = new Array(cantidadIntegrantes)
    for(let i=0;i<cantidadIntegrantes;i++){
    inputsEdad[i] = Number(document.querySelector("#integrante"+String(i)).value)
    }
    let promedio = promedioArreglo(inputsEdad)
    document.querySelector("#resultado").innerText ="El promedio es: "+promedio

return false
}

return false
}

document.querySelector("#reset").onclick = function(){
    
    document.querySelector("#form").removeChild(document.querySelector("#cajas"))
    document.querySelector("#form").removeChild(document.querySelector("#boton-mayor"))
    document.querySelector("#form").removeChild(document.querySelector("#boton-menor"))
    document.querySelector("#form").removeChild(document.querySelector("#boton-promedio"))
    document.querySelector("#cantidad-integrantes").disabled=false
    document.querySelector("#resultado").innerText =""
    return false
}

  

document.querySelector("#boton-agregar").onclick = function(){
    let inputSalario=[]
    let br=[]
   
    form2 =document.querySelector("#form2")
     let cajacreada = document.createElement("input")
     let brcreado = document.createElement("br")
     br.id="brsalario"
    cajacreada.type = "number"
    cajacreada.id = "inputsalario"
    cajacreada.placeholder= "ingresar sueldo"
    inputSalario.push(cajacreada)
    br.push(brcreado)
    cajacreada.value="ingrese sueldo anual"
    form2.appendChild(inputSalario[inputSalario.length-1])
    form2.appendChild(br[br.length-1])
    
    return false
}
document.querySelector("#boton-quitar").onclick = function(){
    let form2 = document.querySelector("#form2")
    let nodes = form2.childNodes
    let tamaño = nodes.length
    if(tamaño>=8){
    form2.removeChild(nodes[tamaño-1])
    form2.removeChild(nodes[tamaño-2])
}
    return false
}

document.querySelector("#calcular-salario").onclick = function(){
  let form2 =document.querySelector("#form2")
  let montos = document.querySelectorAll("#inputsalario")
  let resultado = document.querySelector("#resultadosueldo")
  let salarios= []

  for(let i=0;i<montos.length;i++){
      salarios[i]= Number(montos[i].value)
  }

  let minSalario = Math.min.apply(Math,salarios)
  let maxSalario = Math.max.apply(Math,salarios)
  let salarioAnualprom = promedioArreglo(salarios)
  let salarioMensualprom = salarioAnualprom/12

  resultado.style.fontFamily= "Calibri"
  resultado.textContent = `El salario maximo es: ${maxSalario} el salario minimo es: ${minSalario} el promedio anual: ${salarioAnualprom} y el mensual: ${salarioMensualprom}`
  resultado.style.color= "white"
  


    return false
}



function promedioArreglo(arreglo){
    let total =0
    for(i=0;i<arreglo.length;i++){
       total += arreglo[i]
    }
    return total/arreglo.length
}

function crearElementoInput (tipo,parent,id,value){
    
    let elementoInput = document.createElement("input")
    elementoInput.type= tipo
    elementoInput.id= id
    elementoInput.value = value
    document.querySelector(parent).appendChild(elementoInput)

}


