/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const NumeroDeFamiliares = Number (prompt('Cuanta gente hay en el grupo familiar?'));

for (let i = 1; i <=NumeroDeFamiliares; i++){
    const form = document.querySelector('form');
    const label = document.createElement('label')
    const input = document.createElement('input')
    input.type = 'number'
    input.class = 'edad'
    const edadIntegrante = document.createTextNode('Edad Integrante '  + i + ':')
    const bajarRenglon = document.createElement('br')


    label.appendChild(edadIntegrante)
    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(bajarRenglon)

}


const edadMaxima = Math.max()

const edadMinima = Math.min()

const botonCalcular = document.querySelector('button')







botonCalcular.onclick = function(){
    const edadesTodos = document.querySelector('#edad').value;
    console.log('click')
    console.log(edadesTodos)
}




let promedioEdad = 0

//function calcularPromedioEdad(){
//    for (let i = 0; )
//}





/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


