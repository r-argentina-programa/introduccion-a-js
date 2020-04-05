function createMembers(numberOfMembers) {
    addMember(i);
    i += 1;

}

function addMember (index) {
    const div = document.createElement('div');


    const label = document.createElement('label');
    label.textContent = 'Annual salary of member ' + index;

    const input = document.createElement('input');
    input.type = 'text'
    input.className = 'salary';

    div.appendChild(label)
    div.appendChild(input)

    $rowsManipulation.appendChild(div);

}

function removeDinamicallyAddedRows () {
    const lastChild = $rowsManipulation.lastChild;
    lastChild.remove();
    i = i - 1;

}

function HTMLCollectionIntoArray (HTMLCollection) {
    let array = [];
    for (let i = 0; i < (HTMLCollection.length); i++) {
        let item = Number(HTMLCollection.item(i).value)
        if (HTMLCollection.item(i).value.length !== 0) {
            array.push(item);
        }       
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

function clearErrors() {
    document.querySelector('#errors').innerHTML = '';
}

function manejarErrores(errors, form) {
    const keys = Object.keys(errors);

    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errors[key];

        if(error){
            cantidadErrores ++;
            form[key].classList.add('error');
            const $errors = document.querySelector('#errors');
            $errors.classList.remove('error-hide');
            const errorContainer = document.createElement('li');
            const space = document.createElement('br');
            errorContainer.innerText = error;
            $errors.appendChild(errorContainer);
            $errors.appendChild(space);
        } else {
            form[key].classList.add('correct');
            form[key].classList.remove('error');
        };
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
    clearErrors();
    let errorArray = [];
    for (let i = 0; i < array.length; i++) {
        errorArray.push(validarSalarioAnual(array[i]));
    };

    const errors = Object.assign({}, errorArray);

    const success = manejarErrores(errors, $form) === 0;

    if(success){
        return '';
    };

/*     const $form = document.querySelector('#family-ages');
    clearErrors('02');
    let errorArray = [];
    //console.log(array);
    for (let i = 0; i < array.length; i++) {
        errorArray.push(validarEdadesDeMiembros(array[i]));
    };

    const errors = Object.assign({}, errorArray);

    //console.log(errors);

    const success = manejarErrores02(errors, $form) === 0;

    if(success){
        return '';
    } */
};

