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

    for (i= 0; i < cantidadIntegrantes.length; i++){
        let div = document.createElement('div');
        let label = document.createElement('label');
        label.textContent = 'Edad del integrante nro';

        div.appendChild(label);
        divFamilia.appendChild(div);
    }





    return false
}
