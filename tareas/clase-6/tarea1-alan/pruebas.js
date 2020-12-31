function testValidarEdades(){

    console.assert(
        validarEdades(-5) === "Las edades ingresadas no pueden tener valores negativos.",
        "Validar edades no valido que las edades no sean negativas." 
    );

    console.assert(
        validarEdades(0) === "Las edades ingresadas deben ser mayores a 0.",
        "Validar edades no valido que que las edades sean mayores a 0 "
    );

    console.assert(
        validarEdades("") === "Hay campos sin completar. Completelos e intentelo de nuevo.",
        "Validar edades no valido que los campos no esten vacios."
    );

    console.assert(
        validarEdades(24) === "",
        "Validar edades no funciono con una edad valida."
    );

}

function testValidarIntegrantes(){

    console.assert(
        validarIntegrantes(0) === "La cantidad de integrantes debe ser mayor a 0",
        "Validar integrantes no valido que los integrantes sean mayores a 0"
    );

    console.assert(
        validarIntegrantes(2) === "",
        "Validar integrantes no funciono con una cantidad valida de integrantes."
    )

}


testValidarEdades();
testValidarIntegrantes();
