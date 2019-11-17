//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let sumaNumeros = 0;
let promedioNumeros;
let $numeros = document.querySelectorAll("li");
const $resultadoPromedio = document.querySelector(".promedio");
const $numeroMasPequeno = document.querySelector(".numero_pequeno")
const $numeroMasAlto = document.querySelector(".numero_alto");
const $numeroQueSeRepite = document.querySelector(".numero_repite");
let numerosIngresados = [];
let numeroSumando;

function obtenerNumeros($numeros) {
    for (i = 0; i < $numeros.length; i++) {
        numerosIngresados.push(Number($numeros[i].textContent));
    }
    return numerosIngresados;
}

numerosIngresados = obtenerNumeros($numeros);

function calcularPromedio(numerosIngresados) {
    for (i = 0; i < numerosIngresados.length; i++) {
        numeroSumando = numerosIngresados[i];
        sumaNumeros = sumaNumeros + numeroSumando;
    }
    promedioNumeros = sumaNumeros / $numeros.length;

    return promedioNumeros;
}

function calcularNumeroMasPequeno(numerosIngresados) {
    let numeroMasPequeno = 0;
    for (i = 0; i < numerosIngresados.length; i++) {
        let numeroAComparar = numerosIngresados[i];
        if (numeroMasPequeno > numeroAComparar) {
            numeroMasPequeno = numeroAComparar;
        }
    }
    return numeroMasPequeno;
}

function calcularNumeroMasAlto(numerosIngresados) {
    let numeroMasAlto = 0;
    for (i = 0; i < numerosIngresados.length; i++) {
        let numeroAComparar = numerosIngresados[i];
        if (numeroMasAlto < numeroAComparar) {
            numeroMasAlto = numeroAComparar;
        }
    }
    return numeroMasAlto;
}

function calcularNumeroRepetido(numerosIngresados) {
    let contador = 0;
    let iterTemporal = 1;
    let numerosMasRepetidos = [];

    for (i = 0; i < numerosIngresados.length; i++) {
        const numeroYaExiste = numerosMasRepetidos.includes(numerosIngresados[i]);
        for (j = 0; j < numerosIngresados.length; j++) {
            if (numerosIngresados[i] === numerosIngresados[j]) {
                contador = contador + 1;
            }
        }
        if (contador > iterTemporal) {
            iterTemporal = contador;
            numerosMasRepetidos = [numerosIngresados[i]];
        } else if (contador === iterTemporal && !numeroYaExiste) {
            otroNumeroQueSeRepite = numerosIngresados[i];
            numerosMasRepetidos.push(otroNumeroQueSeRepite);

        }

        contador = 0;
    }
    
    return numerosMasRepetidos;
}

$resultadoPromedio.innerText = `El promedio es ${calcularPromedio(numerosIngresados)}`;
$numeroMasPequeno.innerText = `El numero más pequeño es ${calcularNumeroMasPequeno(numerosIngresados)}`;
$numeroMasAlto.innerText = `El número más alto es ${calcularNumeroMasAlto(numerosIngresados)}`;
$numeroQueSeRepite.innerText = `El numero que más se repite es/son ${calcularNumeroRepetido(numerosIngresados)}`;
