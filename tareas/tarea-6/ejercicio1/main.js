/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
document.querySelector("#submit-cantidad-familiares").onclick = function(e) {
	e.preventDefault();
	const cantidadFamiliares = Number(document.querySelector("#cantidad-familiares").value);
	if (cantidadFamiliares === 0) {
		return false;
	}
	agregarElementos(cantidadFamiliares);
};

/* 
Tomar valor de familiares
generar n cantidad de elementos (función)
*deshabilitar primera etapa
*habilitar 2da etapa
completar campos
calcular
mostrar resultados en #output
*/
