/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la Edades de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor Edades, la menor Edades y el promedio del grupo familiar.


Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// CREAR USUARIO
document.querySelector('#siguiente-paso').onclick = function (event) {
    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
    crearUsuario(cantidadIntegrantes);
}

//EDADES MÁXIMA, MÍNIMA Y PROMEDIO GENERAL
document.querySelector('#calcular').onclick = function () {

    /*---SEGUIR DESDE ACÁ---*/
    
    const $calculos = document.querySelectorAll('#analisis');
    const $mayor_edad = document.querySelector('#mayor-edad');
    $mayor_edad.textContent = (mayorEdad());
    $calculos.appendChild($mayor_edad);
    
    //textos[0].textContent + (mayorEdad());
      
        //console.log(textos[1].textContent + (menorEdad()));
        //console.log(textos[2].textContent + (promEdad()));   
    
   //LA PARTE DE ARRIBA FUNCIONA PERO NO MUESTRA EL TEXTO EN EL FORMULARIO
   
   
   //Qué elemento quiero crear? Para qué serviría?
   

   
   //Es crear un elemento la única forma de mostrar el texto de cada párrafo + el resultado de cada cálculo?
   

   


    event.preventDefault();

}

    
   
   


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
