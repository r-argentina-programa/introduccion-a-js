const valorLista = document.querySelectorAll("li")

let arrayCargado = []
function numbersToArray(){
    for(let i = 0; i < valorLista.length; i++){
    arrayCargado.push(parseInt(valorLista[i].textContent))
}
    return arrayCargado;
}
numbersToArray()
console.log(arrayCargado)


function sumarInternosDelArray(){
    let sumaInterna = 0
    for (let i = 0; i < arrayCargado.length; i++){
        sumaInterna = sumaInterna + arrayCargado[i]
    }
    return sumaInterna;
}
sumarInternosDelArray()

const resultado = document.querySelector("#resultado")
const resultadoMenor = document.querySelector("#resultadoMenor")
const resultadoMayor = document.querySelector("#resultadoMayor")
const menorDelArray = Math.min(...arrayCargado)
const mayorDelArray = Math.max(...arrayCargado)

resultado.innerHTML = "El promedio de los números dentro del array es " + (sumarInternosDelArray()/arrayCargado.length).toFixed(2)
resultadoMenor.innerHTML = "El número menor dentro del array es: " + menorDelArray
resultadoMayor.innerHTML = "El número mayor dentro del array es: " + mayorDelArray



