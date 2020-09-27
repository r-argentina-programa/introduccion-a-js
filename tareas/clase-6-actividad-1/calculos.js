function obtenerNumeroMayor(numeros) {
    let numeroMayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMayor < numeros[i]) {
            numeroMayor = numeros[i];
        }
    }
    return numeroMayor;
}

function obtenerNumeroMenor(numeros){
    let numeroMenor = numeros[0]
    for(let i=0 ; i<numeros.length;i++){
        if (numeroMenor >numeros[i]){
            numeroMenor = numeros[i]
        }
    }
    return numeroMenor;
}

function obtenerPromedio(numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    return acumulador / numeros.length;
}

