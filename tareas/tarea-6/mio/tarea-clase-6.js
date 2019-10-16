/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


function crearFormularioFamiliar(cantidadFamiliares) {

    let nuevosFormulariosFamiliares = [];
const $documentBody = document.querySelector("body");

    for (let i = 0; i < cantidadFamiliares; i++) {

        nuevosFormulariosFamiliares[i] = document.createElement("div"); //por cada familiar hago un elemento de array y le appendeo un label y un input
        
        let nuevoLabel = document.createElement("label");
        let nuevoInput = document.createElement("input");
        

        nuevoLabel.setAttribute("for", `edad-familiar-${i}`);
        nuevoLabel.innerHTML = `Ingrese la edad del familiar n°${i + 1}: ` //le pongo (i + 1 para que muestre algo con sentido en la pantalla)

        nuevoInput.setAttribute("id", `edad-familiar-${i}`);
        nuevoInput.setAttribute("type", "number");

        nuevosFormulariosFamiliares[i].appendChild(nuevoLabel);
        nuevosFormulariosFamiliares[i].appendChild(nuevoInput);

        $documentBody.appendChild(nuevosFormulariosFamiliares[i]);

        }
    return nuevosFormulariosFamiliares;    
}

const botonIngresarCantidadFamiliares = document.querySelector("#boton-ingresar-cantidad-familiares")

botonIngresarCantidadFamiliares.onclick = function () {

    const $cantidadFamiliares = document.querySelector("#numero-personas-grupo-familiar").value;

    const conjuntosFormulariosFamiliares = crearFormularioFamiliar($cantidadFamiliares);


return false;
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
