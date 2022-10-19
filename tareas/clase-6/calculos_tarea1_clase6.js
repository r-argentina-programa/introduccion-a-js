function obtenerMayorEdad(arrayEdades) {

    let mayorEdad = arrayEdades[0]

    for (let i = 0; i < arrayEdades.length; i++) {
        if (mayorEdad < arrayEdades[i]) {
            mayorEdad = arrayEdades[i]
        }
    }

    return mayorEdad
}

function obtenerMenorEdad(arrayEdades) {
    let menorEdad = arrayEdades[0]

    for (let i = 0; i < arrayEdades.length; i++) {
        if (menorEdad > arrayEdades[i]) {
            menorEdad = arrayEdades[i]
        }
    }

    return menorEdad
}

function obtenerPromedio(arrayEdades) {
    let sumatoriaDeEdades = 0

    for (let i = 0; i < arrayEdades.length; i++) {
        sumatoriaDeEdades += arrayEdades[i]
    }

    let promedio = sumatoriaDeEdades / arrayEdades.length

    return promedio
}