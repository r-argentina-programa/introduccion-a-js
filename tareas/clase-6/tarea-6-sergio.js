/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

function calcularMayor(array){
    let contenedor = array[0];
    for (i = 0; i < array.length; i++){
        if (contenedor < array[i]){
            contenedor = array[i];
        }
    }
    return contenedor;
}

function calcularMenor(array){
    let contenedor = array[0];
    for (i = 0; i < array.length; i++){
        if (contenedor > array[i]){
            contenedor = array[i];
        }
    }
    return contenedor
}

function calcularPromedio(array){
    let contenedor = 0;
    for (i = 0; i < array.length; i++){
        contenedor = contenedor + array[i];
        
    }
    let prom = (contenedor / array.length);
    return prom;
}

let $botonOk = document.querySelector('#boton-ok');
let divFamilia = document.querySelector('#div-familia');
$botonOk.onclick = function(){

    let cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
    

    for (i= 0; i < cantidadIntegrantes; i++){
        let div = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');
        label.textContent = 'Edad del integrante nro ' + (i+1);

        div.appendChild(label);
        div.appendChild(input);
        divFamilia.appendChild(div);
    }

    let $botonCalcular = document.createElement('button');
    $botonCalcular.innerHTML = 'Calcular';
    $botonCalcular.id = 'boton-calcular';
    divFamilia.appendChild($botonCalcular);

    let $botonReiniciar = document.createElement('button');
    $botonReiniciar.innerHTML = 'Reiniciar';
    $botonReiniciar.id = 'boton-reiniciar';
    divFamilia.appendChild($botonReiniciar);

    $botonReiniciar.onclick = function(){
        location.reload();
    }

    
    
    $botonCalcular.onclick = function(){
        edadesFamilia = document.querySelectorAll('div > input');
        let arrayEdadesFamilia = [];
    
        for (let i = 0; i < edadesFamilia.length; i++){
            arrayEdadesFamilia.push(Number(edadesFamilia[i].value));
        }

        let menor = calcularMenor(arrayEdadesFamilia);
        let mayor = calcularMayor(arrayEdadesFamilia);
        let promedio = calcularPromedio(arrayEdadesFamilia);
        console.log(promedio);
        
        let pResultados = document.createElement('p');
        
        pResultados.textContent = `El mayor es ${mayor}, el menor es ${menor} y el promedio es ${promedio}`;
        divFamilia.appendChild(pResultados);

        

        
    }

    return false
}
