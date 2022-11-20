
function encontrarNumeroMayor(arrayNumeros){
    let numeroMayor = 0;
    for(let i = 0 ; i < arrayNumerosLista.length ; i++){
        if(Number(arrayNumeros[i]) > numeroMayor){
            numeroMayor = arrayNumeros[i];
        }
    }
    
    $NUMERO_MAYOR.innerText = `El mayor número en la lista es ${numeroMayor}`;
}

function encontrarNumeroMenor(arrayNumeros){
    let numeroMenor = arrayNumeros[0];
    for(let i = 0 ; i < arrayNumerosLista.length ; i++){
        if(Number(arrayNumeros[i]) < numeroMenor){
            numeroMenor = arrayNumeros[i];
        }
    }
    
    $NUMERO_MENOR.innerText = `El menor número en la lista es ${numeroMenor}`;
}