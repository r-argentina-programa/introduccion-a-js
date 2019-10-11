document.querySelector("#calcular-salario-mensual").onclick = function(e) {
	e.preventDefault();
	const salarioMensual = document.querySelector("#salarioMensual").value;
	const salarioAnual = calcularSalarioAnual(salarioMensual);
	document.querySelector("#salarioAnual").value = salarioAnual;
};

function calcularSalarioAnual(salarioMensual) {
	return salarioMensual * 12;
}
