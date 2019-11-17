//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let sumaNumeros = 0;
let promedioNumeros;
let arrayNumbers = document.querySelectorAll("li");
let resultadoPromedio = document.querySelector(".promedio");
let numeroMasPequeno = document.querySelector(".numero_pequeno")
let numeroMasAlto = document.querySelector(".numero_alto");
let numeroQueSeRepite = document.querySelector(".numero_repite");
let numeroMasRepetido = [];

function calcularPromedio() {
    for (i = 0; i < arrayNumbers.length; i++) {
        sumaNumeros = sumaNumeros + Number(arrayNumbers[i].textContent);
    }
    promedioNumeros = sumaNumeros / arrayNumbers.length;

    return promedioNumeros;
}

function calcularNumeroMasPequeno() {
    let numeroMasPequeno = 0;
    for (i = 0; i < arrayNumbers.length; i++) {
        if (numeroMasPequeno > Number(arrayNumbers[i].textContent)) {
            numeroMasPequeno = Number(arrayNumbers[i].textContent)
        }
    }
    return numeroMasPequeno;
}

function calcularNumeroMasAlto() {
    let numeroMasAlto = 0;
    for (i = 0; i < arrayNumbers.length; i++) {
        if (numeroMasAlto < Number(arrayNumbers[i].textContent)) {
            numeroMasAlto = Number(arrayNumbers[i].textContent)
        }
    }
    return numeroMasAlto;
}

function calcularNumeroRepetido() {
    let contador = 0;
    let iterTemporal = 1;

    for (i = 0; i < arrayNumbers.length; i++) {
        for (j = 0; j < arrayNumbers.length; j++) {
            if (arrayNumbers[i].textContent === arrayNumbers[j].textContent) {
                contador = contador + 1;
            }
        }
        if (contador > iterTemporal) {
            iterTemporal = contador;
            numeroMasRepetido = [arrayNumbers[i].textContent];
        } else if (contador === iterTemporal && numeroMasRepetido.includes(arrayNumbers[i].textContent) === false) {
            otroNumeroQueSeRepite = arrayNumbers[i].textContent;
            numeroMasRepetido.push(`${otroNumeroQueSeRepite}`);

        }

        contador = 0;
    }
    return numeroMasRepetido;
}

resultadoPromedio.innerText = `El promedio es ${calcularPromedio()}`;
numeroMasPequeno.innerText = `El numero más pequeño es ${calcularNumeroMasPequeno()}`;
numeroMasAlto.innerText = `El número más alto es ${calcularNumeroMasAlto()}`;
numeroQueSeRepite.innerText = `El numero que más se repite es/son ${calcularNumeroRepetido()}`;