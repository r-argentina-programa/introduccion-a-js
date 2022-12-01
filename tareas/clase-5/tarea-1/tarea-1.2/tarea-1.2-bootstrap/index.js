function calcularSalarioAnual(salarioMensual) {
	const MESES_EN_EL_ANIO = 12;
	return salarioMensual * MESES_EN_EL_ANIO;
}
function validarSalarioMensual(salarioMensual) {
	if (salarioMensual.length === 0) {
		return 'El campo Salario Mensual no puede estar vacio';
	}
	if (!/^[0-9]+$/.test(salarioMensual)) {
		return 'El campo Salario Mensual solo acepta numeros';
	}
	return '';
}

const $calcularSalarioAnual = document.querySelector('#calcular-salario-anual-usuario');
$calcularSalarioAnual.onclick = function (event) {
	event.preventDefault();

	const salarioMensual = Number(document.querySelector('#salario-mensual-usuario').value);

	const salarioAnual = calcularSalarioAnual(salarioMensual);

	document.querySelector('#salario-anual-usuario').value = salarioAnual;
};

function validarFormulario(event) {
	event.preventDefault();
	const $form = document.querySelector('#calculadora-salario-anual');

	const salarioMensualUsuario = $form['salario-mensual-usuario'].value;
	console.log(salarioMensualUsuario);
}
