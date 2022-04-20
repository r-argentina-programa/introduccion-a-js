function probarGetOldestMember () {
    console.assert(
        getOldestMember([5, 7, 80]) === 80,
        'Get Oldest Member no devolvió el miembro con mayor edad',
    );
};

function probarGetYoungestMember () {
    console.assert(
        getYoungestMember([5, 7, 80]) === 5,
        'Get Youngest Member no devolvió el miembro con menor edad',
    );
};

function probarGetAgeAverage () {
    console.assert(
        getAgeAverage([5, 7, 80]) == 31,
        'Get Age Average no devolvió el promedio entre las edades de los miembros',
    );
};

probarGetOldestMember();
probarGetYoungestMember();
probarGetAgeAverage();

function probarValidarCantidadDeMiembros () {
    console.assert(
        validarCantidadMiembros('') === 'This field cannot be empty',
        'Validar Cantidad Miembros no validó que el campo no estuviera vacío'
    );

    console.assert(
        validarCantidadMiembros('0') === 'This field cannot be equal to 0',
        'Validar Cantidad Miembros no validó que el campo no fuera igual a 0'
    );

    console.assert(
        validarCantidadMiembros('1.2') === 'This field cannot accept decimal numbers',
        'Validar Cantidad Miembros no validó que el campo no contuviera números decimales'
    );
   
    console.assert(
        validarCantidadMiembros('1,2') === 'This field cannot accept decimal numbers',
        'Validar Cantidad Miembros no validó que el campo no contuviera números decimales'
    );

    console.assert(
        validarCantidadMiembros('asa') === 'This field can only contain numbers',
        'Validar Cantidad Miembros no validó que el campo contuviera únicamente números'
    );

    console.assert(
        validarCantidadMiembros('20') === 'This field cannot contain numbers over 15',
        'Validar Cantidad Miembros no validó que el campo no contuviera números mayores a 15'
    );

    console.assert(
        validarCantidadMiembros('4') === '',
        'Validar Cantidad Miembros no validó un campo válido'
    );
};

function probarValidarEdadesDeMiembros () {

    console.assert(
        validarEdadesDeMiembros(0) === 'This field cannot be empty or equal to 0',
        'Validar Edad Miembros no validó que el campo no fuera igual a cero'
    );
    
    console.assert(
        validarEdadesDeMiembros('1.2') === 'This field cannot accept decimal numbers',
        'Validar Edad Miembros no validó que el campo no contuviera decimales'
    );
    
    console.assert(
        validarEdadesDeMiembros('asdas') === 'This field can only contain numbers',
        'Validar Edad Miembros no validó que el campo contuviera únicamente números'
    );

    console.assert(
        validarEdadesDeMiembros('200') === 'This field cannot contain numbers over 99',
        'Validar Edad Miembros no validó que el campo no contuviera números mayores a 99'
    );

    console.assert(
        validarEdadesDeMiembros('20') === '',
        'Validar Edad Miembros no validó un campo válido'
    );

};

probarValidarCantidadDeMiembros();
probarValidarEdadesDeMiembros();

