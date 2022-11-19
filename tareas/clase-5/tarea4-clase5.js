const numerosLista = document.querySelectorAll("li");
const numeros = [];
let sumaTotal = 0;

for (let i = 0; i < numerosLista.length ; i++){
    numeros.push(Number(numerosLista[i].innerText));
}


function calcularPromedio(array){
    for(let i = 0; i < array.length; i++){
        sumaTotal += array[i];
    }

    let resultado = sumaTotal / array.length;
    console.log(resultado);
}

calcularPromedio(numeros);