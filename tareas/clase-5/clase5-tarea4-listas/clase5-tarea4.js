//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."



function calcularPromedio (numerosArray){
    let contador = 0;
    for (let i= 0; i<numerosArray.length; i++) {
        contador += numerosArray[i]
    } 
    return contador / numerosArray.length;
}

function calcularNumeroMenor (numerosArray) {
    let numeroMenor = 0;
    for (let i=0; i<numerosArray.length; i++) {
        if (numerosArray[i] < numeroMenor){
            numeroMenor = numerosArray[i];
        }
    } 
    return numeroMenor;
}

function calcularNumeroMayor (numerosArray) {
    let numeroMayor = 0;
    for (let i = 0; i < numerosArray.length; i++){
        if (numerosArray[i] > numeroMayor) {
            numeroMayor = numerosArray [i];
        }
    } 
    return numeroMayor
}

function calcularModa (numerosArray) {
    let moda = 0;
      for(let i = 0; i < numerosArray.length; i++){
        for(let j = 0; j < i; j++){
           if(numerosArray[j] === numerosArray[i]){
               moda = numerosArray[j];
           }
        }
      }
      return moda;
} //ACA LA MODA ESTA MAL, si pones 1,1,1,1,2,2 te da 2. Ver hacer algo con este tipo de objetos { a: 12 }
/* PROBAR CON ESTA DE ACA ABAJO QUE ONDA
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; //array
var mf = 1; //default maximum frequency
var m = 0;  //counter
var item;  //to store item with maximum frequency
for (var i=0; i<arr1.length; i++)    //select element (current element)
{
        for (var j=i; j<arr1.length; j++)   //loop through next elements in array to compare calculate frequency of current element
        {
                if (arr1[i] == arr1[j])    //see if element occurs again in the array
                 m++;   //increment counter if it does
                if (mf<m)   //compare current items frequency with maximum frequency
                {
                  mf=m;      //if m>mf store m in mf for upcoming elements
                  item = arr1[i];   // store the current element.
                }
        }
        m=0;   // make counter 0 for next element.
}
*/

const $calculoTotal = document.querySelector('#calculo-total');

$calculoTotal.onclick = function(){
   
    const numerosLista = document.querySelectorAll("li");
    const numerosArray = [];
    for(let i = 0; i < numerosLista.length; i++){
      numerosArray.push(Number(numerosLista[i].textContent));
    }
    let resultadoPromedio = calcularPromedio(numerosArray);
    let resultadoNumeroMayor = calcularNumeroMayor(numerosArray);
    let resultadoNumeroMenor = calcularNumeroMenor(numerosArray);
    let resultadoModa = calcularModa(numerosArray);
    
    document.querySelector('#resultado-promedio').textContent = "El promedio es " + resultadoPromedio;
    document.querySelector('#resultado-minimo').textContent = "El número más pequeño es " + resultadoNumeroMenor;
    document.querySelector('#resultado-mayor').textContent = "El número más grande es " + resultadoNumeroMayor;
    document.querySelector('#resultado-moda').textContent = "El número más frecuente es " + resultadoModa;

    return false;
}
