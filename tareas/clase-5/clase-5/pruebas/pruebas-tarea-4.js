function probarObtenerArrayNumeros() {
    console.assert(
        obtenerArrayNumeros(['4', '5', '6']) === [4, 5, 6], 'obtenerArrayNumeros no obtuvo un array de numeros a partir de un nodeList de strings'
    );
}

function probarCalcularPromedio() {
    console.assert(
        calcularPromedio([2, 4, 6]) === 4, 'calcularPromedio no obtuvo el promedio de un array de numeros'
    );
}

function probarCalcularMasFrecuente() {
    console.assert(
        calcularMasFrecuente([2, 2, 3, 4]) === 2, 'calcularMasFrecuente no obtuvo el valor mas frecuente de un array de numeros'
    );
}

function probarObtenerKeyPorValue() {
    console.assert(
        obtenerKeyPorValue({2:3, 3:1, 4:5}, 1) === 3, 'obtenerKeyPorValue no obtuvo la key adecuada entrega cierto valor'
    );
}

probarObtenerArrayNumeros();
probarCalcularPromedio();
probarCalcularMasFrecuente();
probarObtenerKeyPorValue();