function obtenerEdadMayorEdad(edadesIntegrantes) {
    let mayorEdad = edadesIntegrantes[0];
    for (let i = 0; i < edadesIntegrantes.length; i++) {
        if (edadesIntegrantes[i] > mayorEdad) {
            mayorEdad = edadesIntegrantes[i];
        }
    }
    return mayorEdad;
}

function obtenerEdadMenorEdad(edadesIntegrantes) {
    let edadMinima = edadesIntegrantes[0];
    for (let i = 0; i < edadesIntegrantes.length; i++) {
        if (edadesIntegrantes[i] < edadMinima) {
            edadMinima = edadesIntegrantes[i];
        }
    }
    return edadMinima;
}

function calcularPromedio(edadesIntegrantes) {
    let resultado = 0;
    for (let i = 0; i < edadesIntegrantes.length; i++) {
        resultado = resultado + edadesIntegrantes[i];
    }
    return resultado / edadesIntegrantes.length;
}
