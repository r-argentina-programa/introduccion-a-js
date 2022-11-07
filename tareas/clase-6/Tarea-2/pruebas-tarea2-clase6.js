function probarValidarSalarios() {
    console.assert(
        validarSalarios([10000, 50000, 0, 50000, 0, 6000]) === 'El campo salario no puede ser menor o igual a 0 ni vacio',
        'La función validarSalarios no validó que el campo salario no sea menor o igual a 0 ni vacio'
    )

    console.assert(
        validarSalarios([50000, 20000, 60000, 10000]) === '',
        'La función validarSalarios no funcionó con un parametro válido'
    )
}

probarValidarSalarios()