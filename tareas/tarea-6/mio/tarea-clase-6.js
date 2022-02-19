/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//aquí declaro las funciones mayor, menor, moda y promedio

function promedio(listaNumeros) {

    let resultado = 0

    for (let i = 0; i < listaNumeros.length; i++) {
        resultado += listaNumeros[i];
    }
    return resultado / listaNumeros.length;
}

function maximo(listaNumeros) {
    let resultado = listaNumeros[0];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > resultado) {
            resultado = listaNumeros[i];
        }
    }
    return resultado
}

function minimo(listaNumeros) {
    let resultado = listaNumeros[0];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] < resultado) {
            resultado = listaNumeros[i];
        }
    }
    return resultado
}

function moda(listaNumeros) {

    let resultado = null
    let cantidadRepeticionesResultado = 0;

    for (let i = 0; i < listaNumeros.length; i++) {

        let pivot = listaNumeros[i];

        let cantidadRepeticionesPivot = 0;

        for (let j = i; j < listaNumeros.length; j++) {

            if (listaNumeros[j] == pivot) {

                cantidadRepeticionesPivot++;

            }
        } if (cantidadRepeticionesPivot > cantidadRepeticionesResultado) {

            resultado = pivot;

            cantidadRepeticionesResultado = cantidadRepeticionesPivot;
        }



    }


    return resultado;

}

function escribirCalculosEdadesEnElementoPrecreado(listaEdades) {

    resultado = document.querySelector("#resultado");
    resultado.value = `La menor edad es ${minimo(listaEdades)}, la mayor edad es ${maximo(listaEdades)} y el promedio de las edades del grupo familiar es ${promedio(listaEdades)}`
}


function crearFormulariosFamiliares(cantidadFamiliares) {

    let nuevosFormulariosFamiliares = [];
    const $documentBody = document.querySelector("body");
    const nuevaDivisionFormulario = document.createElement("div");
    const nuevoFormulario = document.createElement("form");
    const nuevoBotonEdadesFamiliares = document.createElement("button");

    nuevaDivisionFormulario.class = "form";
    nuevaDivisionFormulario.appendChild(nuevoFormulario);
    nuevoFormulario.appendChild(nuevoBotonEdadesFamiliares);

    for (let i = 0; i < cantidadFamiliares; i++) {

        nuevosFormulariosFamiliares[i] = document.createElement("div"); //por cada familiar hago un elemento de array y le appendeo un label y un input

        let nuevoLabel = document.createElement("label");
        let nuevoInput = document.createElement("input");


        nuevoLabel.setAttribute("for", `edad-familiar-${i}`);
        nuevoLabel.innerHTML = `Ingrese la edad del familiar n°${i + 1}: ` //le pongo (i + 1 para que muestre algo con sentido en la pantalla)

        nuevoInput.setAttribute("id", `edad-familiar-${i}`);
        nuevoInput.setAttribute("type", "number");
        nuevoInput.setAttribute("class", "edad");                //les pongo class = "edad" para poder llamarlos en el onclick del nuevo botón.

        nuevosFormulariosFamiliares[i].appendChild(nuevoLabel);
        nuevosFormulariosFamiliares[i].appendChild(nuevoInput);

        nuevoFormulario.appendChild(nuevosFormulariosFamiliares[i]);


    }


    nuevoBotonEdadesFamiliares.id = "boton-procesar-edades-familiares"
    nuevoBotonEdadesFamiliares.innerHTML = "Calcular";
    nuevoBotonEdadesFamiliares.onclick = function () {

        const $edadesFamiliares = document.querySelectorAll(".edad");
        const arrayDeLista = []

        for (let i = 0; i < $edadesFamiliares.length; i++) {
            
                arrayDeLista.push(Number($edadesFamiliares[i].value));  //qué hago con los inputs vacíos?? me los cuenta como 0
            
        }

        escribirCalculosEdadesEnElementoPrecreado(arrayDeLista);

        return false;
    }
    $documentBody.appendChild(nuevoFormulario);

    return nuevoFormulario;
}


//aquí empezaría el cuerpo del script (?)

const botonIngresarCantidadFamiliares = document.querySelector("#boton-ingresar-cantidad-familiares")

botonIngresarCantidadFamiliares.onclick = function () {

    const $cantidadFamiliares = document.querySelector("#numero-personas-grupo-familiar").value;
    const conjuntosFormulariosFamiliares = crearFormulariosFamiliares($cantidadFamiliares);


    return false;
}

const botonEmpezarDeNuevo = document.querySelector("#boton-empezar-de-nuevo")
botonEmpezarDeNuevo.onclick = function () {

    document.location.reload(true);

}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

