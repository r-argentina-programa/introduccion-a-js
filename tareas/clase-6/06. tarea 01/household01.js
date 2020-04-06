const $nextStepButton = document.getElementById('next-step');

const $clearFormButton = document.getElementById('clear-form');

const $goBackButton = document.getElementById('go-back');

const $calculateButton = document.getElementById('calculate');


$nextStepButton.onclick = function () {
    validarPrimerFormulario();
    return false;
}

$goBackButton.onclick = function() {
    location.reload();
}

$clearFormButton.onclick = function() {
    clearForm();
}

$calculateButton.onclick = function () {
  
    let array = HTMLCollectionIntoArray(document.getElementsByClassName('age'));
    
    if(validarSegundoFormulario(array) === ''){
        const oldest = getOldestMember(array);
        const youngest = getYoungestMember(array);
        const average = getAgeAverage(array);
        showResults(oldest, youngest, average);

        clearDataForNewCalculation(array);
    };

    return false;
}

