// CUARTA TAREA
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $addGradeButton = document.querySelector('#add-grade');
const $averageButton = document.querySelector('#average-button');
const $lowestButton = document.querySelector('#lowest-button');
const $highestButton = document.querySelector('#highest-button');
const $frequentButton = document.querySelector('#frequent-button');

$addGradeButton.onclick = function() {
let tag = document.createElement("li")
let text = document.createElement("input")
text.setAttribute("type","number")
text.setAttribute("class","grades")
tag.appendChild(text)
const div = document.getElementById('add-rows');
div.appendChild(tag);
};
/*

1) First, create a div section and add some text to it using <p> tags. 

2) Create an element <p> using document.createElement("p").

3) Create a text, using document.createTextNode(), so as to insert it in the above-created element("p").

4) Using appendChild() try to append the created element, along with text, to the existing div tag.

Thus a new element is created(<p>) and appended to the existing element(<div>).
<li>
<input type="number" class="grades" name="grade05">
</li>
*/

let array = [];
let average;
let min;
let max;
let mostFrequent;

function HTMLCollectionToArray () {
    let n = 0;
    for (let i = 0; i < (document.getElementsByClassName('grades').length); i++) {
        let item = Number(document.getElementsByClassName('grades').item(n).value)
        array.push(item);
        n += 1
    };
};

function calculateAverage () {
    let arraySum = 0;
    let n = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[n]);
        arraySum += arrayItem;
        n += 1
    }

    average = arraySum / array.length

    return average;
};

function lowestGrade () {
    min = Math.min.apply(Math, array);

    return min;
};

function highestGrade () {
    max = Math.max.apply(Math, array);

    return max;
};

function frequentGrade () {
    let times = 1;
    let m = 0;
    let item;
    for (let i=0; i < array.length; i++)
    {
            for (let j=i; j < array.length; j++)
            {
                    if (array[i] == array[j])
                     m++;
                    if (times<m)
                    {
                      times=m; 
                      item = array[i];
                    }
            }
            m=0;
    }

    mostFrequent = item;

    return mostFrequent;
};


$averageButton.onclick = function() {
    document.querySelector('#reveal-average').style.display = 'block';
    document.querySelector('#reveal-lowest').style.display = 'none';
    document.querySelector('#reveal-highest').style.display = 'none';
    document.querySelector('#reveal-frequent').style.display = 'none';
    HTMLCollectionToArray();
    calculateAverage();

   
    document.getElementById('averageText').innerHTML = average

    return false;
};

$lowestButton.onclick = function() {
    document.querySelector('#reveal-lowest').style.display = 'block';
    document.querySelector('#reveal-average').style.display = 'none';
    document.querySelector('#reveal-highest').style.display = 'none';
    document.querySelector('#reveal-frequent').style.display = 'none';
    HTMLCollectionToArray();
    lowestGrade();

    console.log(min);

    document.getElementById('lowestText').innerHTML = min

    return false;
};

$highestButton.onclick = function() {
    document.querySelector('#reveal-highest').style.display = 'block';
    document.querySelector('#reveal-lowest').style.display = 'none';
    document.querySelector('#reveal-average').style.display = 'none';
    document.querySelector('#reveal-frequent').style.display = 'none';
    HTMLCollectionToArray();
    highestGrade();

    document.getElementById('highestText').innerHTML = max

    return false;
};

$frequentButton.onclick = function() {
    document.querySelector('#reveal-frequent').style.display = 'block';
    document.querySelector('#reveal-lowest').style.display = 'none';
    document.querySelector('#reveal-highest').style.display = 'none';
    document.querySelector('#reveal-average').style.display = 'none';
    HTMLCollectionToArray();
    frequentGrade();

    document.getElementById('frequentText').innerHTML = mostFrequent

    return false;
};