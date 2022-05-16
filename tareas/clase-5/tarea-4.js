const $botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function(){
    const listaNumeros = [];

    console.log(document.querySelectorAll('li').length);

    for(let i = 0; i < (document.querySelectorAll('li').length); i++){
        listaNumeros.push(Number(document.querySelectorAll('li')[i].textContent));
    }

    const numeroPromedio = obtenerPromedio(listaNumeros);
    const numeroPequenio = obtenerNumeroPequenio(listaNumeros);
    const numeroGrande = obtenerNumeroGrande(listaNumeros);
    const numeroFrecuente = obtenerNumeroFrecuente(listaNumeros);

    document.querySelector('#promedio').value = numeroPromedio;
    document.querySelector('#numero-pequeño').value = numeroPequenio;
    document.querySelector('#numero-grande').value = numeroGrande;
    document.querySelector('#numero-frecuente').value = numeroFrecuente;

    return false;
}

function obtenerPromedio(listaNumeros){
    let sumaNumeros = 0;
    for(let i = 0; i < listaNumeros.length; i++){
        sumaNumeros = sumaNumeros + listaNumeros[i];
    }
    return sumaNumeros / listaNumeros.length;
}

function obtenerNumeroPequenio(listaNumeros){
    let numeroMenor = listaNumeros[0];
    for(let i = 0; i < listaNumeros.length; i++){
        let numeroCualquiera = listaNumeros[i];
        if(numeroCualquiera < numeroMenor){
            numeroMenor = numeroCualquiera;
        }
    }
    return numeroMenor;
}

function obtenerNumeroGrande(listaNumeros){
    let numeroGrande = listaNumeros[0];
    for(let i = 0; i < listaNumeros.length; i++){
        let numeroCualquiera = listaNumeros[i];
        if(numeroCualquiera > numeroGrande){
            numeroGrande = numeroCualquiera;
        }
    }
    return numeroGrande;
}

function obtenerNumeroFrecuente(listaNumeros){
    let numeroFrecuente = 0;
    for(let i = 0; i < listaNumeros.length; i++){
        for( let j = i + 1; j < listaNumeros.length; j++){
            if(listaNumeros[i] === listaNumeros[j]){
                numeroFrecuente = listaNumeros[i];
            }
        }
    }
    return numeroFrecuente;
}
