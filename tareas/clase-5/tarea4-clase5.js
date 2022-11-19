const numerosLista = document.querySelectorAll("li");
let numeros = [];
numeros = numeros.sort(function(a, b){return a - b});
let sumaTotal = 0;
let promedio = document.querySelector("#promedio");
let menorNumero = document.querySelector("#menor-numero");
let mayorNumero = document.querySelector("#mayor-numero");
let masFrecuente = document.querySelector("#mas-repetido");
const arrNumerosOrdenados = [];

for (let i = 0; i < numerosLista.length ; i++){
    numeros.push(Number(numerosLista[i].innerText));
}


function calcularPromedio(array){
    for(let i = 0; i < array.length; i++){
        sumaTotal += array[i];
    }

    let resultado = sumaTotal / array.length;
    promedio.innerText = `El promedio de los numeros de la lista es igual a ${resultado}`;

}

function numeroMayor(array){
    let numero = 0;
    for(let i = 0; i < array.length ; i++){
        if (array[i] > numero){
            numero = array[i];
        }
    }
    mayorNumero.innerText = `El mayor número de la lista es ${numero}`;
}

function numeroMenor(array){
    let numero = 50000;
    for(let i = 0; i < array.length ; i++){
        if (array[i] < numero){
            numero = array[i];
        }
    }
    menorNumero.innerText = `El menor número de la lista es ${numero}`;
}

function ordenarLista(array){
    const listaOrdenada = array.sort(function(a, b){return a - b});

        for( let i = 0 ; i < listaOrdenada.length; i++){
            if (listaOrdenada[i] == listaOrdenada[i+1]){
                arrNumerosOrdenados.push(listaOrdenada[i]);
            }
        }    
}

function numeroMasRepetido(array){
        let contadorRepeticion = 2;
        let numerosSinRepetir = [];
        let cantidadRepeticiones = [];
        let mayorFrecuencia = 0;

        for( i = 0 ; i < array.length ; i++){
            if (array[i] === array[i + 1]){
                contadorRepeticion++;
            }
            else {
                cantidadRepeticiones.push(contadorRepeticion);
                numerosSinRepetir.push(array[i]);
                contadorRepeticion = 2;
            }
        }
        
        for(let i = 0 ; i < cantidadRepeticiones.length ; i++){
            if (cantidadRepeticiones[i] < cantidadRepeticiones[i+1]){
                mayorFrecuencia = cantidadRepeticiones[i+1];
            }
        }

        function indexMax(array) {
            if (array === 0) {
                return -1;
            }
        
            let max = array[0];
            let maxIndex = 0;
        
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) {
                    maxIndex = i;
                    max = array[i];
                }
            }
        
            return maxIndex;
        }
    let index = indexMax(cantidadRepeticiones);


    console.log(numerosSinRepetir);
    console.log(cantidadRepeticiones);
    console.log(index);

    masFrecuente.innerText = `El número más repetido, con un total de ${cantidadRepeticiones[index]} apariciones es ${numerosSinRepetir[index]} `


}

calcularPromedio(numeros);
numeroMayor(numeros);
numeroMenor(numeros);
ordenarLista(numeros);
numeroMasRepetido(arrNumerosOrdenados)
