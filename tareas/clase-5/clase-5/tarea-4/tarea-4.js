//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

document.querySelector('#boton-agregar').onclick = function(event) {
    agregarNumero();

    event.preventDefault();
}

document.querySelector('#boton-calcular').onclick = function(event) {
    const arrayNumeros = obtenerArrayNumeros();
    const numeroMenor = Math.min.apply(null, arrayNumeros);
    const numeroMayor = Math.max.apply(null, arrayNumeros);

    mostrarPromedio('promedio', calcularPromedio(arrayNumeros));
    mostrarMenor('menor', numeroMenor);
    mostrarMayor('mayor', numeroMayor);
    mostrarMasFrecuente('frecuente', calcularMasFrecuente(arrayNumeros));
    mostrarResultados();
    mostrarBotonReseteo();

    event.preventDefault();
}

document.querySelector('#boton-reset').onclick = function(event) {
    borrarValores();
    ocultarBotonReseteo();
    ocultarResultados();
    
    event.preventDefault();
}

function agregarNumero() {
    const $input = document.querySelector('#numero');
    const $listaNumeros = document.querySelector('#lista-numeros');
    const $numero = document.createElement('li');
    $numero.innerText = $input.value;
    $listaNumeros.appendChild($numero);
}

function obtenerArrayNumeros() {
    const arrayNumeros = [];
    document.querySelectorAll('li').forEach(function(numero) {
        arrayNumeros.push(Number(numero.innerText))
    });
    
    return arrayNumeros;
}

function calcularPromedio(array) {
    let sumaNumeros = 0;
    array.forEach(function(numero) {
        sumaNumeros += numero;
    })
    const promedioNumeros = (sumaNumeros / array.length).toFixed(2);

    return promedioNumeros;
}

function calcularMasFrecuente(array) {
    let numerosYFrecuencias = {};

    array.forEach(function(numero){
        numerosYFrecuencias[numero] = (numerosYFrecuencias[numero] || 0) + 1;
    });

    const mayorFrecuencia = Math.max.apply(null, Object.values(numerosYFrecuencias));
    const valorMasFrecuente = obtenerKeyPorValue(numerosYFrecuencias, mayorFrecuencia);

    return valorMasFrecuente;
}

function obtenerKeyPorValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function mostrarResultados() {
    document.querySelector('#resultados').className = '';
}

function ocultarResultados() {
    document.querySelector('#resultados').className = 'oculto';
}

function mostrarBotonReseteo() {
    document.querySelector('#boton-reset').className = '';
}

function ocultarBotonReseteo() {
    document.querySelector('#boton-reset').className = 'oculto';
}

function mostrarPromedio(tipo, valor) {
    document.querySelector(`#numero-${tipo}`).textContent = valor;
}

function mostrarMenor(tipo, valor) {
    document.querySelector(`#numero-${tipo}`).textContent = valor;
}

function mostrarMayor(tipo, valor) {
    document.querySelector(`#numero-${tipo}`).textContent = valor;
}

function mostrarMasFrecuente(tipo, valor) {
    document.querySelector(`#numero-${tipo}`).textContent = valor;
}

function borrarValores() {
    const $listaNumeros = document.querySelectorAll('li');
    $listaNumeros.forEach(function(numero) {
        $listaNumeros[numero].remove();
    });
}
