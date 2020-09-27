function probarValidarForm1() {
    console.assert(
        validarCantidadIntegrantes('11') === 'El campo cantidad de integrantes debe ser menor a 10',
    'La funcion validar cantidad de integrantes no validó que el el campo cantidad de integrantes debe ser menor a 10'

    );
    console.assert(
        validarCantidadIntegrantes('0') === 'El campo cantidad de integrantes no debe ser 0' , 
        'La funcion validar cantidad de integrantes no valido que el campo cantidad de integrantes no debe estar vacío'
    );
    console.assert(
        validarCantidadIntegrantes('ee') === 'El campo cantidad de integrantes deben ser solo números',
        'La funcion validar cantidad de integrantes no validó que el campo cantidad de integrantes deben ser solo letras'

    );
    
}