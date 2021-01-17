function probarValidarSalario(){

    console.assert(
        validarSalario("0") === "Los salarios deben ser mayores a 0.",
        "validar-Salario no valido que los salarios sean mayores a 0. "
    );

    console.assert(
        validarSalario("-1") === "Los salarios no pueden tener valores negativos.",
        "validar-Salario no valido que los salarios no tengan valores negativos."
    );

    console.assert(
        validarSalario("") === "Los campos de salario no pueden quedar vacios.",
        "validar-Salario no valido que los salarios no esten vacios."
    );

    console.assert(
        validarSalario("100000") === "",
        "validar-Salario no funciono con un valor valido."
    );


};

probarValidarSalario();
