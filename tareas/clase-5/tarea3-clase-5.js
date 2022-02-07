//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."




// El parametro selector es la etiqueta, Ej: "li"
function armarArray(selector){
    let listaOrdenada = document.querySelectorAll(selector);
    let nuevoArray =[];
    let numero=0;
    for(let i=0;i < listaOrdenada.length; i++){
        numero = Number(listaOrdenada[i].innerText);
        nuevoArray.push(numero);
    }
    return nuevoArray;
}

console.log(armarArray("li"));