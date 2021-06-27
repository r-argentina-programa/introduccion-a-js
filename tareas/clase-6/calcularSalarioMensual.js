function salarioMayor(salario) {
    let mayor = salario[0];
    for (let i = 1; i < salario.length; i++) {
        if (salario[i] > mayor) {
            mayor = salario[i];
        };
    };
    return mayor * 12;
};

function salarioMenor(salario) {
    let menor = salario[0];
    for (let i = 1; i < salario.length; i++) {
        if (salario[i] < menor) {
            menor = salario[i];
        };
    };
    return menor * 12;
};

function salarioPromedio(salario) {
    let acumulador = 0;

    for (let i = 0; i < salario.length; i++) {
        acumulador += salario[i];
    };

    return promedio = 12 * (acumulador / salario.length).toFixed(2);
};