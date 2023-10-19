//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const $numbers = document.querySelectorAll('li');
const numbers = convertValuesToNumbers($numbers);
const histogram = createHistogram(numbers);

document.querySelector("#avarage").innerText = `El promedio es de ${getAvarage(numbers)}`;
document.querySelector("#smaller").innerText = `El numero mas chico es ${getSmaller(numbers)}`;
document.querySelector("#bigger").innerText = `El numero mas grande es ${getBigger(numbers)}`;
document.querySelector("#most-frequent").innerText = `El numero mas frecuente es ${getMostFrequent(histogram)}`;


function convertValuesToNumbers(array){
    const numbers = [];
    for(let i = 0;i<array.length;i++){
        numbers.push(Number(array[i].innerText))
    }
    return numbers
}

function getAvarage(numbers){
    const sum = numbers.reduce((accumulator, currentValue) => {return accumulator + currentValue})
    return sum / numbers.length
}

function getSmaller(numbers){
    return Math.min(...numbers)
}

function getBigger(numbers){
    return Math.max(...numbers)
}

function createHistogram(array){
    const histogram = {};
    for(let i = 0;i<array.length;i++){
        if(histogram[array[i]]){
            histogram[array[i]] += 1;
        }
        else{
            histogram[array[i]] = 1;
        }
        
    }
    return histogram
}

function getMostFrequent(histogram){
    let highestValue = -Infinity;
    let highestKey = null;

    for(const key in histogram){
        if(histogram[key] > highestValue){
            highestValue = histogram[key];
            highestKey = key
        }
    }

    return highestKey
}
