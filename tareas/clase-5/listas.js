const listaNumeros = document.querySelectorAll("li")
const array = []
for (i = 0; i < listaNumeros.length; i++){
    array.push(Number(listaNumeros[i].innerText));

}

function sacarPromedio(array){
    let sumaNumeros = 0
    for(i = 0; i < array.length; i++){
        sumaNumeros += array[i]
    }
    return sumaNumeros / array.length
}

const promedio = sacarPromedio(array)
document.querySelector("#promedio").textContent = `El promedio es ${promedio}` 

function sacarMenor(array){
    let numeroMenor = array[0]
    for(i = 0; i < array.length; i++){
        if (numeroMenor  > array[i]){
            numeroMenor  = array[i]
        }
    }
    return numeroMenor

}

const numeroMenor = sacarMenor(array)
document.querySelector("#mas-pequeño").innerText = "El numero mas pequeño es " + numeroMenor


function sacarMayor(array){
    let numeroMayor = array[0]
    for(i = 0; i < array.length; i++){
        if (numeroMayor  < array[i]){
            numeroMayor  = array[i]
        }
    }
    return numeroMayor

}

const numeroMayor = sacarMayor(array)
document.querySelector("#mas-grande").innerText = "El numero mas grande es " + numeroMayor

function masFrecuente(array){
    const tempArray = array.sort();
    let duplicados = []
    for (i = 0; i < array.length; i++){
        if (tempArray[i] === tempArray[i+1]){
            duplicados.push(tempArray[i]);
        }
    } return Number(duplicados)
}


const $masFrecuente = masFrecuente(array)
document.querySelector("#mas-frecuente").innerText = "El numero mas frecuente es " + $masFrecuente



