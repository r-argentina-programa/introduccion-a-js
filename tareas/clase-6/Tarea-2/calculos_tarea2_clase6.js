function obtenerMayorSalario(arraySalarios) {

    let mayorSalario = arraySalarios[0]

    for (let i = 0; i < arraySalarios.length; i++) {
        if (mayorSalario < arraySalarios[i]) {
            mayorSalario = arraySalarios[i]
        }
    }

    return mayorSalario
}

function obtenerMenorSalario(arraySalarios) {
    let menorSalario = arraySalarios[0]

    for (let i = 0; i < arraySalarios.length; i++) {
        if (menorSalario > arraySalarios[i]) {
            menorSalario = arraySalarios[i]
        }
    }

    return menorSalario
}

function obtenerPromedio(arraySalarios) {
    let sumatoriaDeSalarios = 0

    for (let i = 0; i < arraySalarios.length; i++) {
        sumatoriaDeSalarios += arraySalarios[i]
    }

    let promedio = Math.round(sumatoriaDeSalarios / arraySalarios.length)

    return promedio
}

function obtenerSalarioMensualPromedio(arraySalarios) {
    let arraySalariosMensuales = []

    for (let i = 0; i < arraySalarios.length; i++) {
        let mesesEnUnAnio = 12
        arraySalariosMensuales.push(arraySalarios[i]/mesesEnUnAnio)
    }

    return obtenerPromedio(arraySalariosMensuales)
}