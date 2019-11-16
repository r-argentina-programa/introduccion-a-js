/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/


let $botonOk = document.querySelector('#boton-ok');
let divFamilia = document.querySelector('#div-familia');
$botonOk.onclick = function(){

    let cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
    console.log(cantidadIntegrantes);

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
    $botonCalcular.innerHTML = 'calcular';
    $botonCalcular.id = 'boton-calcular';
    divFamilia.appendChild($botonCalcular);

    
    
    $botonCalcular.onclick = function(){
        edadesFamilia = document.querySelectorAll('div > input');
        let arrayEdadesFamilia = [];
        let menor;
        let mayor = Math.max.apply(arrayEdadesFamilia)
        let promedio;
        for (let i = 0; i < edadesFamilia.length; i++){
            arrayEdadesFamilia.push(edadesFamilia[i].value);
        }

        
        let pResultados = document.createElement('p');
        pResultados.textContent = `El mayor es ${mayor}`;
        divFamilia.appendChild(pResultados);

        
    }

    return false
}
