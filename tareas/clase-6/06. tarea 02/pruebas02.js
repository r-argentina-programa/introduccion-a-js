function probarGetHighestAnnualSalary () {
    console.assert(
        getHighestAnnualSalary([5, 7, 80]) === 80,
        'Get Highest Annual Salary no devolvió el mayor salario anual',
    );
};

function probarGetLowestAnnualSalary () {
    console.assert(
        getLowestAnnualSalary([5, 7, 80]) === 5,
        'Get Lowest Annual Salary no devolvió el menor salario anual',
    );
};

function probarGetAverage () {
    console.assert(
        getAverage([5, 7, 80]) === 30.67,
        'Get Average no devolvió el promedio entre los salarios anuales',
    );
};

function probarGetMonthlyAverage () {
    console.assert(
        getMonthlyAverage([5, 7, 80]) === 2.56,
        'Get Montly Average no devolvió el promedio entre los salarios mensuales',
    );
};

probarGetHighestAnnualSalary();
probarGetLowestAnnualSalary();
probarGetAverage();
probarGetMonthlyAverage();

function probarValidarSalarioAnual () {
    console.assert(
        validarSalarioAnual(0) === 'This field cannot be empty or equal to 0',
        'Validar Salario Anual no validó que el campo no estuviera vacío o fuera igual a 0'
    );

    console.assert(
        validarSalarioAnual(1.6) === 'This field cannot accept decimal numbers',
        'Validar Salario Anual no validó que el campo no contuviera números decimales'
    );

    console.assert(
        validarSalarioAnual('asdas') === 'This field can only contain numbers',
        'Validar Salario Anual no validó que el campo contuviera únicamente números'
    );

    console.assert(
        validarSalarioAnual(10000) === '',
        'Validar Salario Anual no validó un campo válido'
    );
};

probarValidarSalarioAnual();


