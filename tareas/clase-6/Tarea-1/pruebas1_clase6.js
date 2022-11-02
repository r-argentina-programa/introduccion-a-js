function probarValidarNumeroDeFamiliares() {
    console.assert(
        validarNumeroDeFamiliares(0) === 'El campo numero de familiares no puede ser menor o igual a 0 ni vacio',
        'La función validarNumeroDeFamiliares no validó que el numero de familiares no sea menor o igual a 0 ni vacio'
    )

    console.assert(
        validarNumeroDeFamiliares(4) === '',
        'La función validarNumeroDeFamiliares no funcionó con un parametro válido'
    )
}

function probarValidarEdades() {
    console.assert(
        validarEdades([1, 3, 4, 5, 0, 0, 0]) === 'El campo edad no puede ser menor o igual a 0 ni vacio',
        'La funcion validarEdades no validó que el campo edad no sea menor o igual a 0 ni vacio'
    )

    console.assert(
        validarEdades([20, 50, 84, 100]) === '',
        'La función validarEdades no funcionó con un parametro válido'
    )
}

probarValidarNumeroDeFamiliares()
probarValidarEdades()