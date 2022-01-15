//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

//Poner todo en un array.

let lista = document.querySelectorAll("li");
let iniciador = [];
for (let i = 0; i <lista.length; i++) {
    iniciador.push(lista[i].innerText);     
};
//pasar el array, que es un String, a un Number
let arrayNumeros = iniciador.map(function (item) {
    return parseInt(item);
});
//Obtener el promedio.
let contador = 0
for (let i = 0; i < arrayNumeros.length;i++) {
    contador = contador + arrayNumeros[i];
} 

contador = contador / arrayNumeros.length;
contador = contador.toFixed(0); //sacar los decimales infinitos, podría usar el Math.max o min, supongo que debería ser min.
document.querySelector("#promedio").value = contador
// obtener el número más pequeño y más grande del array.
let numeroMayor = Math.max(...iniciador);
document.querySelector("#numeroMayor").value = numeroMayor
document.querySelector("#numeroMenor").value = Math.min(...iniciador)

// Obtener el número más repetido
let arrayDenumerosMasRepetidos = [];
let numeroMasRepetido = 0; //element
let contadorDeRepetición = 0; //count
for (let i = 0; i < arrayNumeros.length;i++) {
        let numeroActual = arrayNumeros[i] //tempElement
        let contadorTemporal = 0; //tempCount
    for (let j = i + 1; j <arrayNumeros.length; j++)
    if (arrayNumeros[i] === arrayNumeros[j]) {
        arrayDenumerosMasRepetidos.push(arrayNumeros[i]); 
        contadorTemporal++;
        if (contadorTemporal > contadorDeRepetición) {
            numeroMasRepetido = numeroActual; //element = tempElement
            contadorDeRepetición = contadorTemporal  // count = TempCount
        }

    }

}

document.querySelector("#numeroRepetido").value = numeroMasRepetido;

let arrayDeRepetidos = arrayDenumerosMasRepetidos;
for (let i = 0; i < arrayDeRepetidos.length;i++) { 
    for (let j= 0; j < arrayDeRepetidos.length;j++)
    if (i !== j) {
    if (arrayDeRepetidos[i] === arrayDeRepetidos[j]) {
        arrayDeRepetidos.splice(j,1);
    }
    }
}

document.querySelector("#numeroMasRepetidos").value = arrayDeRepetidos;


/*
otra forma
let arrayAuxiliar = []
for (let i = 0; i < arrayDeRepetidos;i++) {
    for (let j = 0; i < arrayDeRepetidos;j++) {
        if (arrayDeRepetidos[i] === arrayDeRepetidos[j] && !arrayAuxiliar.include(arrayDeRepetidos[i])) {
            arrayAuxiliar.push(arrayDeRepetidos[i])
        }
    }
}
console.log(arrayAuxiliar)
*/

// como funciona: el arrayNumeros, es un array en Number. Como todo ciclo, podemos decir que toma el indice 0, 
//el cual es 1. Cuando toma ese primer valor, lo que hace es iniciar otro ciclo, 
//donde siempre se va a comparar un indice más que I (porque si no, te da que siempre hay repetidos, por eso es I + 1
//por que al comienzo J va a ser el indice 1, y luego se va a sumar el indice en el cual este el ciclo de I)
// EJ: Tomo el indice 0, que es 1 y lo comparo con el array de J es === que 2/7/6/8/10/3/5/7/9/4/8/4/7/11 
//(va a ir por todo el array). Cuando llega al final, el indice de I aumenta un lugar (va a ser 2/dos) y 
// compara otra vez del 7/7/6/8/10/3/5/7/9/4/8/4/7/11. Cuando llega el I, al 7, en un momento va a decir que
// el valor del array de I es igual al de J, entonces va a entrar al IF, toma ese número y lo va a poner dentro de un array
// y además va a subir el contadoTemporal en 1, y como ese ese IF es V, también entra en otro, donde si el contadorTemporal
// es mayor a 1, entonces el númeroMasRepetido va a ser igual al número del Array en I actual.
// Esto quiere decir: Si un número se repite muchas veces, esto aumenta el contadorTemporal, en este caso
// el 7 se repite 3 veces, por lo que el contador temporal es 3, por eso cuando llega al 4 no hay nada! porque en 
// el caso de 4, el contadorTemporal es 2, y 2 no es mayor que 7, por lo tanto el número más repetido no va a ser 4
//pero el 4 SI va a ser un número repetido

/* //si yo quiero saber cuales son los números más repetidos hago esto

for (let i = 0; i < arrayDenumerosMasRepetidos.length;i++) { 
    for (let j= 0; j < arrayDenumerosMasRepetidos.length;j++)
    if (i !== j) {
    if (arrayDenumerosMasRepetidos[i] === arrayDenumerosMasRepetidos[j]) {
        arrayDenumerosMasRepetidos.splice(j,1);
    }
    }
}

console.log(arrayDenumerosMasRepetidos);
*/


//busquedas@rapipago.com.ar
/* (otra forma de sacar maximo y minimo, porque parece que los Math pueden tirar error)
let contadorMaximo = 0;
for (let i = 0; i < arrayNumeros.length;i++) {
    if (arrayNumeros[i]> contadorMaximo) {
        contadorMaximo = iniciador[i];
    }
}

let array = [“Gato”,”Perro”,”Loro”];
let nuevoArray = array.map(function animals, index, arrayNombre) {
    console.log(ArrayNombre)
    return index + ": " + "! " + this.name;
}, {
    name: "Yaco"
    age = 23
}) ;

console.log(nuevoArray), y el resultado es que me va a decir 0: Gato! Luego 1:Perro! Luego 2:Loro!

let contadorMinimo = 0; 
for (let i = 0; i < arrayNumeros.length;i++) {
    if (arrayNumeros[i] < contadorMaximo) {
        contadorMaximo = iniciador[i];
    }
}
console.log(contadorMinimo)
*/ 