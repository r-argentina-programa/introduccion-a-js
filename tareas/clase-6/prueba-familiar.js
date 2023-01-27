

function probarValidarCantidadIntegrantes() {

    console.assert(
        validarCantidadIntegrantesFamilia('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );



};


probarValidarCantidadIntegrantes();