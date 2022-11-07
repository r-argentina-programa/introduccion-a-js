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

    return sumatoriaDeSalarios / arraySalarios.length

     
}

function obtenerSalarioMensualPromedio(arraySalarios) {
    let salariosMensuales = []

    for (let i = 0; i < arraySalarios.length; i++) {
        let mesesEnUnAnio = 12
        salariosMensuales.push(arraySalarios[i]/mesesEnUnAnio)
    }

    return obtenerPromedio(salariosMensuales)
}