function createMembers(numberOfMembers) {
    addMember(i, n);
    i += 1;
    n += 1;

}

function addMember (index, n) {
    const div = document.createElement('div');


    const label = document.createElement('label');
    label.textContent = 'Annual salary of member ' + index;

    const input = document.createElement('input');
    input.type = 'text'
    input.className = 'salary';
    input.classList.add('form-control');
    input.name = i;

    const br = document.createElement('br');

    div.appendChild(label)
    div.appendChild(input)

    

    const forErrors = document.createElement('div');
    forErrors.classList.add('error-hide');
    forErrors.setAttribute("id", `error-container${n}`);

    //div.appendChild(br);
    div.appendChild(forErrors);
    div.appendChild(br);


    $rowsManipulation.appendChild(div);
    //$rowsManipulation.appendChild(forErrors);


}

function removeDinamicallyAddedRows () {
    /*const lastDiv = document.getElementById(`error-container${n}`);
    const lastField = document.getElementById*/

    
    const lastChild = $rowsManipulation.lastChild;
    lastChild.remove();
    i = i - 1;
    n = i - 1;

}

function HTMLCollectionIntoArray (HTMLCollection) {
    let array = [];
    for (let i = 0; i < (HTMLCollection.length); i++) {
        let item = Number(HTMLCollection.item(i).value)
        array.push(item);
        /*if (HTMLCollection.item(i).value.length !== 0) {
            array.push(item);
        }    */   
    }
    
    return array;
}

function getHighestAnnualSalary (array) {
    const highest = Math.max.apply(Math, array);
    
    return highest;
}

function getLowestAnnualSalary (array) {
    const lowest = Math.min.apply(Math, array);
    return lowest;
}

function getAverage (array) {

    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[i]);
        arraySum += arrayItem;
    }

    average = Number((arraySum / array.length).toFixed(2));

    return average;
}

function getMonthlyAverage (array) {
    
    let monthlyArray = [];
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[i]);
        let monthlyArrayItem = arrayItem / 12;
        monthlyArray.push(monthlyArrayItem);
    }

    let monthlyArraySum = 0;
    for (let i = 0; i < monthlyArray.length;i++) {
        let monthlyArrayItem = Number(monthlyArray[i]);
        monthlyArraySum += monthlyArrayItem;
    }

    monthlyAverage = Number((monthlyArraySum / monthlyArray.length).toFixed(2));

    return monthlyAverage;
    
}

function showResults (highest, lowest, average, monthlyAverage) {
    document.getElementById('highest-annual-salary').value = highest;
    document.getElementById('lowest-annual-salary').value = lowest;
    document.getElementById('annual-salary-average').value = average;
    document.getElementById('monthly-salary-average').value = monthlyAverage;
}

function clearDataForNewCalculation () {
    annualSalaries = [];
}


// VALIDATION FUNCTIONS

function validarSalarioAnual(salarioAnual) {

    if(salarioAnual === 0){
        return 'This field cannot be empty or equal to 0';
    };

    const regexpDecimalEnglish = /^\d+\.\d{0,2}$/;
    if(regexpDecimalEnglish.test(salarioAnual)) {
        return 'This field cannot accept decimal numbers';
    };

    if(isNaN(salarioAnual)) {
        return 'This field can only contain numbers';
    };

    return '';
};
/*
function clearErrors() {
    document.querySelector('#errors').innerHTML = '';
}*/

function manejarErrores(errors, form) {
    const keys = Object.keys(errors);

    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errors[key];

        if(error){
            cantidadErrores ++;
            form[key].classList.add('is-invalid');
            form[key].classList.add('error');
            const $forErrors = document.getElementById('error-container' + key);
            console.log(key);
            console.log($forErrors);
            $forErrors.classList.remove('error-hide');
            $forErrors.classList.add('invalid-feedback');
            $forErrors.innerText = error;
            console.log(error);
        } else {
            form[key].classList.add('correct');
            form[key].classList.remove('is-invalid');
            const $forErrors = document.getElementById('error-container' + key);
            $forErrors.classList.add('error-hide');
            console.log($forErrors);
        };

        /*         if(error){
            cantidadErrores ++,
            form[key].classList.add('is-invalid');
            //console.log(form[key].classList);
            const $forErrors = document.getElementById('error-container' + key);
            $forErrors.classList.remove('error-hide');
            $forErrors.classList.add('invalid-feedback');
            $forErrors.innerText = error;
            //console.log($forErrors);
         
        } else {
           form[key].classList.add('correct');
           form[key].classList.remove('is-invalid');
           const $forErrors = document.getElementById('error-container' + key);
           $forErrors.classList.add('error-hide');
           console.log($forErrors);
        } */
    });

    return cantidadErrores;
/* function manejarErrores02(errors, form) {
    const keys = Object.keys(errors);


    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errors[key];

        if(error){
            cantidadErrores ++,
            form[key].classList.add('error');
            //console.log(error);
            const $errors = document.querySelector('#errors02');
            $errors.classList.remove('error-hide');
            const errorContainer = document.createElement('li');
            const space = document.createElement('br');
            errorContainer.innerText = error;
            $errors.appendChild(errorContainer);
            $errors.appendChild(space);
            //console.log($errors)
        } else {
           form[key].classList.add('correct');
           form[key].classList.remove('error');
        }
    });

    return cantidadErrores;
} */
}

function validarFormulario(array) {
    const $form = document.querySelector('#income-form');
   // clearErrors();
    let errorArray = [];
    for (let i = 0; i < array.length; i++) {
        errorArray.push(validarSalarioAnual(array[i]));
    };

    console.log(errorArray);
    console.log(array);

    const errors = Object.assign({}, errorArray);

    const success = manejarErrores(errors, $form) === 0;

    if(success){
        return '';
    };

};