/*
const numerosObtenidos = document.querySelectorAll('li');
const listaNumeros = [];

for(let i = 0; i < numerosObtenidos.length; i++){
    listaNumeros.push((numerosObtenidos[i]).value);
}

console.log(listaNumeros);
*/

const listaNumeros = [1, 2, 2, 3, 4, 5];

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
