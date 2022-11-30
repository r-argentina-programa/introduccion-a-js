const $botonSiguiente = document.querySelector('#siguiente-paso');

$botonSiguiente.onclick = function () {
	const cantidadDeFamiliares = document.querySelector('#cantidad-integrantes').value;
	const contenedor = document.querySelector('#integrantes');
	for (let i = 0; i < cantidadDeFamiliares; i++) {
		const div = document.createElement('div');
		const label = document.createElement('label');
		label.textContent = 'Salario familiar #' + (i + 1);
		const input = document.createElement('input');
		input.type = 'number';
		input.className = 'salario-integrante';
		div.appendChild(label);

		div.appendChild(input);
		contenedor.appendChild(div);
	}
};

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
	const $salariosIntegrantes = document.querySelectorAll('.salario-integrante');
	let salariosIntegrantes = [];
	for (let i = 0; i < $salariosIntegrantes.length; i++) {
		let elementoNodo = $salariosIntegrantes[i];
		const salario = Number(elementoNodo.value);
		salariosIntegrantes.push(salario);
	}

	const $salarioMayor = document.querySelector('#salario-mayor-anual');
	$salarioMayor.textContent = `${obtenerSalarioMayor(salariosIntegrantes)}`;
	const $salarioMenor = document.querySelector('#salario-menor-anual');
	$salarioMenor.textContent = `${obtenerSalarioMenor(salariosIntegrantes)}`;
	const $salarioAnualPromedio = document.querySelector('#promedio-salario-anual');
	$salarioAnualPromedio.textContent = `${calcularSalarioAnualPromedio(salariosIntegrantes)}`;
};
