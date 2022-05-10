const $botonIngresar = document.querySelector('#ingresar');

const listaNumeros = []

$botonIngresar.onclick = function(){
    listaNumeros.push(document.querySelector('#numero-1').value);
    listaNumeros.push(document.querySelector('#numero-2').value);
    listaNumeros.push(document.querySelector('#numero-3').value);
    listaNumeros.push(document.querySelector('#numero-4').value);
    listaNumeros.push(document.querySelector('#numero-5').value);
    listaNumeros.push(document.querySelector('#numero-6').value);

    calcularPromedio(listaNumeros);
    obtenerNumeroPequenio(listaNumeros);
    obtenerNumeroGrande(listaNumeros);
    obtenerNumeroFrecuente(listaNumeros);

    return false;
}

function calcularPromedio(listaNumeros){
    let sumaNumeros = 0;
    for(let i = 0; i < listaNumeros.length; i++){
        sumaNumeros = sumaNumeros + listaNumeros[i];
    }
    return sumaNumeros / listaNumeros.length;
}

function obtenerNumeroPequenio(listaNumeros){

}

function obtenerNumeroGrande(){

}

function obtenerNumeroFrecuente(){

}

/*
const pruebaLista = [-7, 42, 32, 4];
let numeroMenor = 0
numeroMenor = pruebaLista[0];

for(let i = 0; i < pruebaLista.length; i++){
    if(pruebaLista[i] < numeroMenor){
        numeroMenor = i;
    }
}

console.log(numeroMenor);
*/
