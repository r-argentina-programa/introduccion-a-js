function probarValidarSalarioMensual() {
	console.assert(
		validarSalarioMensual('') === 'El campo Salario Mensual no puede estar vacio',
		'validar salario mensual no valido que salario mensual no sea vacio',
	);
	console.assert(
		validarSalarioMensual('efasfasgaseda') === 'El campo Salario Mensual solo acepta numeros',
		'validar salario mensual no valido que el campo solo acepte numeros',
	);
	console.assert(
		validarSalarioMensual('1000000') === '',
		'validar salario mensual fallo con un numero valido',
	);
}

function probarFunctionCalcularSalarioAnual() {
	console.assert(
		calcularSalarioAnual(1, 12) === 12,
		'El calculo de la función calcularSalarioAnual no dio 12',
	);
}

probarValidarSalarioMensual();
probarFunctionCalcularSalarioAnual();

function probarValidarFuncionCalcularSalarioMensual() {
	console.assert(
		calcularSalarioMensual(12, 12) === 1,
		'El calculo de la funcion calcularSalarioMensual no dio 1',
	);
}
