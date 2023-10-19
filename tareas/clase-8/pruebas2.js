function testValidateSalaries(){
    console.assert(validateSalaries([-1,2,4,-8]) === "Ingrese salarios positivos y distinto de 0",
    "Validar salarios fallo en validar un array de salarios con valores negativos")

    console.assert(validateSalaries([1,2,6,7,0,343,0]) === "Ingrese salarios positivos y distinto de 0",
    "Validar salarios fallo en validar un array de salarios con uno o mas ceros")

    console.assert(validateSalaries([4,5,32,4]) === "",
    "Validar salarios fallo en validar un array valido de salarios")
}

testValidateSalaries();