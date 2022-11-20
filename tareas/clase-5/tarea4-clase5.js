const $NUMEROS_LISTA = document.querySelectorAll("li");
const $NUMERO_MENOR = document.querySelector("#menor-numero");
const $NUMERO_MAYOR = document.querySelector("#mayor-numero");
const $PROMEDIO = document.querySelector("#promedio");
const $MAS_REPETIDO = document.querySelector("#mas-repetido");
const arrayNumerosLista = [];


for (let i = 0 ; i < $NUMEROS_LISTA.length ; i ++){
        arrayNumerosLista.push($NUMEROS_LISTA[i].innerText);
        arrayNumerosLista.sort(function(a, b){return a - b})
}

$NUMERO_MAYOR.innerText = `El mayor número en la lista es ${arrayNumerosLista.at(-1)}`;
$NUMERO_MENOR.innerText = `El menor número en la lista es ${arrayNumerosLista[0]}`;
$PROMEDIO.innerText = `El promedio de los numeros de la lista es ${encontrarPromedio(arrayNumerosLista)}`;
$MAS_REPETIDO.innerText = `El numero mas repetido es ${encontrarNumeroMasRepetido(arrayNumerosLista)}`;

function encontrarPromedio(arrayNumeros){
    let sumaTotal = 0;

    for (let i = 0 ; i < arrayNumeros.length ; i++){
        sumaTotal += Number(arrayNumeros[i]);
    }
    let resultado = sumaTotal / arrayNumeros.length;

    return resultado;
}

function encontrarNumeroMasRepetido(arrayNumeros){
    numeroMasFrecuente = arrayNumeros[0];
    for (let i = 0 ; i < arrayNumeros ; i++){
        frecuenciaLocal = 0 ;
        for (let j = 0 ; j < arrayNumeros ; j++){
            if (numeros[i === numeros[j]]){
                frecuenciaLocal++
            }
        }
        if (frecuenciaLocal > frecuencia){
            numeroMasFrecuente = i;
            frecuencia = frecuenciaLocal;
        }
    }

    return numeroMasFrecuente;
    
}
