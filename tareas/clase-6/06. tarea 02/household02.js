/*TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el
salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual,
salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $addRowsButton = document.getElementById('add-rows-button')
const $removeRowsButton = document.getElementById('remove-rows-button')
const $rowsManipulation = document.getElementById('add-rows');


let i = 2;
$addRowsButton.onclick = function () {
    const numberOfMembers = 1;
    createMembers(numberOfMembers);
    return false;
}

$removeRowsButton.onclick = function () {
    removeDinamicallyAddedRows();
    return false;
}

const $calculateButton = document.getElementById('calculate-button')


$calculateButton.onclick = function() {
    let annualSalaries = HTMLCollectionIntoArray(document.getElementsByClassName('salary'));
    
    if(validarFormulario(annualSalaries) === ''){
        const highest = getHighestAnnualSalary(annualSalaries);
        const lowest = getLowestAnnualSalary(annualSalaries);
        const average = getAverage(annualSalaries);
        const monthlyAverage = getMonthlyAverage(annualSalaries);
    
        showResults (highest, lowest, average, monthlyAverage);
    
        clearDataForNewCalculation();
    }

    return false;

};

