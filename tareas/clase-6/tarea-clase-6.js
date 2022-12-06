/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const calculateAgeButton = document.querySelector('#calculator-button');
const buttonFamily = document.querySelector('#button-members');
const calculateWageButton = document.querySelector('#wages-calculator-button');
const terminatorButton = document.querySelector('#terminator-button');

calculateWageButton.onclick = function CalculateWages() {
	const $higerWage = document.querySelector('#higher-wage');
	const $averageWage = document.querySelector('#average-wage');
	const $lowerWage = document.querySelector('#lowest-wage');

	const familyWages = WagesStore();
	const resultHigher = higherWage(familyWages);
	const resultLower = lowerWage(familyWages);
	const resultAverage = averageWage(familyWages);

	$higerWage.innerText = resultHigher;
	$averageWage.innerText = resultAverage;
	$lowerWage.innerText = resultLower;
};

calculateAgeButton.onclick = function Calculate() {
	const $higerAge = document.querySelector('#higher-number');
	const $averageAge = document.querySelector('#average-number');
	const $lowerAge = document.querySelector('#lowest-number');

	const familyAges = AgesStore();
	const resultHigher = higherAge(familyAges);
	const resultLower = lowerAge(familyAges);
	const resultAverage = averageAge(familyAges);

	$higerAge.innerText = resultHigher;
	$averageAge.innerText = resultAverage;
	$lowerAge.innerText = resultLower;
};

buttonFamily.onclick = function createMultiplesInputs() {
	const howManyMembers = Number(
		document.querySelector('#members-family').value
	);
	for (let i = 0; i < howManyMembers; i++) {
		createInputs();
		createLabel();
		createInputsWages();
		createLabelWages();
	}
};

function createInputs() {
	let createInputs = document.createElement('input');
	createInputs.setAttribute('class', 'input-ages');
	document.body.appendChild(createInputs);
}
function createLabel() {
	let createLabel = document.createElement('label');
	createLabel.innerText = 'write their ages';
	document.body.appendChild(createLabel);
}
function createLabelWages() {
	let createLabel = document.createElement('label');
	createLabel.innerText = 'write their wages';
	document.body.appendChild(createLabel);
}
function createInputsWages() {
	let createInputs = document.createElement('input');
	createInputs.setAttribute('class', 'input-wages');
	document.body.appendChild(createInputs);
}

function AgesStore() {
	const $getTheirAges = document.querySelectorAll('.input-ages');
	const store = [];
	for (let i = 0; i < $getTheirAges.length; i++) {
		store.push(Number($getTheirAges[i].value));
	}
	return store;
}
function WagesStore() {
	const $getTheirWages = document.querySelectorAll('.input-wages');
	const storeWages = [];
	for (let i = 0; i < $getTheirWages.length; i++) {
		storeWages.push(Number($getTheirWages[i].value));
	}
	return storeWages;
}
function higherWage(familyWages) {
	let higher = 0;
	for (let i = 0; i < familyWages.length; i++) {
		if (higher < familyWages[i]) {
			higher = familyWages[i];
		}
		return higher;
	}
}

function lowerWage(familyWages) {
	let lowest = familyWages[0];
	for (let i = 0; i < familyWages.length; i++) {
		if (lowest < familyWages[i]) {
			lowest = familyWages[i];
		}
		return lowest;
	}
}
function averageWage(familyWages) {
	let totalWages = 0;
	let averageFamilyWage = familyWages[0];
	for (let i = 0; i < familyWages.length; i++) {
		totalWages += familyWages[i];
		averageFamilyWage = totalWages / familyWages.length;
	}
	return averageFamilyWage;
}

function higherAge(familyAges) {
	let oldest = 0;
	for (let i = 0; i < familyAges.length; i++) {
		if (oldest < familyAges[i]) {
			oldest = familyAges[i];
		}
		return oldest;
	}
}
function lowerAge(familyAges) {
	let younger = familyAges[0];
	for (let i = 0; i < familyAges.length; i++) {
		if (younger < familyAges[i]) {
			younger = familyAges[i];
		}
		return younger;
	}
}
function averageAge(familyAges) {
	let totalAge = 0;
	let averageFamilyAge = familyAges[0];
	for (let i = 0; i < familyAges.length; i++) {
		totalAge += familyAges[i];
		averageFamilyAge = totalAge / familyAges.length;
	}
	return averageFamilyAge;
}
terminatorButton.onclick = function callEreasers() {
	ereaseLabels();
	ereaseButtons();
};

function ereaseLabels() {
	let elementLabel = document.querySelectorAll('label');

	for (let i = 0; i < elementLabel.length; i++) {
		elementLabel[i].remove();
	}
	return false;
}
function ereaseButtons() {
	let elementButton = document.querySelectorAll('button');

	for (let i = 0; i < elementButton.length; i++) {
		elementButton[i].remove();
	}
	return false;
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
