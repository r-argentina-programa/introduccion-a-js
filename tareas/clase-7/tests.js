function testValidateName(){

    console.assert(
        validateName('') === "El campo 'nombre' debe tener al menos 1 caracter",
        "Validar nombre no valido que el nombre no sea vacio"
    )
    
    console.assert(
        validateName('adiadiuabdabd baibdabdnbaduadanbdadbadbabidbaidbawduiawdi') === "El campo 'nombre' debe tener menos de 50 caracteres",
        "Validar nombre no valido que el nombre sea menor a 50 caracateres"
    )

    console.assert(
        validateName('Sebastian') === "",
        "Validar nombre fallo con un nombre valido"
    )
    console.assert(
        validateName("   ") === "El campo 'nombre' no puede tener solo espacios vacios",
        "Validar nombre no valido el caso solo espacios vacios"
    )
}

function testValidateCity(){

    console.assert(
        validateCity('') === "El campo 'ciudad' deberia tener al menos 1 caracter",
        "Validar ciudad no valido que la ciudad no sea vacio"
    )
    console.assert(
        validateCity('Formosa') === "",
        "Validar ciudad fallo con una ciudad valida"
    )
}

function testValidateGiftDescription(){

    console.assert(
        validateGiftDescription('') === "El campo 'descripcion' deberia tener al menos 1 caracter",
        "Validar descripcion regalo no valido que la descripcion no sea vacio"
    )
    console.assert(
        validateGiftDescription("djiabdiawjbdbawidbawdnadoanwdoiwadnwaudawduiadiauwbdbawiudbaduiadbiuabwdiuadwauidibaduiawduiadaiudabdbawiudwb") === "El campo 'descripcion' deberia tener menos de 100 caracteres",
        "Validar descripcion regalo no valido que la descripcion tenga menos de 100 caracteres"
    )
    console.assert(
        validateGiftDescription("/|%%$#@") === "El campo 'descripcion' solo debe contener letras o numeros",
        "Validar descripcion regalo no valido que la descripcion sea solo letras y numeros"
    )
    console.assert(
        validateGiftDescription("2 bicis rojas") === "",
        "Validar descripcion regalo no valido una descripcion valida"
    )
    console.assert(
        validateGiftDescription("   ") === "El campo 'descripcion' no puede tener solo espacios vacios",
        "Validate descripcion regalo no valido el caso solo espacios vacios"
    )
}

testValidateName();
testValidateCity();
testValidateGiftDescription();