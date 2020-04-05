function hideFirstForm (){
    document.getElementById('number-of-members').style.display = 'none';
}

function showSecondForm () {
    document.getElementById('reveal-after').style.display = 'inline';
}

function createARowForEachMember () {
    const numberOfFamilyMembers = Number(document.getElementById('family-members').value);
    const $forRows = document.getElementById('add-rows');

    for (let i = 0; i < numberOfFamilyMembers; i++) {
        let index = i + 1;
        const label = document.createElement('label');
        label.textContent = 'Member ' + index; 
        $forRows.appendChild(label);

        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'age';
        input.name = i;
        li.appendChild(input);
        $forRows.appendChild(li);
    }

}

function HTMLCollectionIntoArray(HTMLCollection) {
    let array = [];
for (let i = 0; i < (HTMLCollection.length); i++) {
    let item = Number(HTMLCollection.item(i).value)
    array.push(item);
}

    return array;
}

function getOldestMember(array) {
    const oldest = Math.max.apply(Math, array);
    return oldest;
}

function getYoungestMember(array) {
    const youngest = Math.min.apply(Math, array);
    return youngest;
}

function getAgeAverage(array) {
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[i]);
        arraySum += arrayItem;
    }

    average = (arraySum / array.length).toFixed(0);

    return average;

}

function showResults(oldest, youngest, average) {
    document.getElementById('oldest-member').value = oldest;
    document.getElementById('youngest-member').value = youngest;
    document.getElementById('age-average').value = average;
}

function clearDataForNewCalculation (array) {
    array = [];
}


// VALIDATION FUNCTIONS:

function validarCantidadMiembros (cantidad) {
    if(cantidad.trim().length === 0){
        return 'This field cannot be empty';
    };

    if(cantidad === '0'){
        return 'This field cannot be equal to 0';
    };

    const regexpDecimalEnglish = /^\d+\.\d{0,2}$/;
    if(regexpDecimalEnglish.test(cantidad)) {
        return 'This field cannot accept decimal numbers';
    };

    const regexpDecimalEsp = /^\d+\,\d{0,2}$/;
    if(regexpDecimalEsp.test(cantidad)) {
        return 'This field cannot accept decimal numbers';
    };

    if(!/^[0-9]*$/.test(cantidad)) {
        return 'This field can only contain numbers';
    };

    if(cantidad > 15) {
        return 'This field cannot contain numbers over 15';
    };

    return '';
};

function validarEdadesDeMiembros (edad) {
    
    if(edad === 0){
        return 'This field cannot be empty or equal to 0';
    };

    const regexpDecimalEnglish = /^\d+\.\d{0,2}$/;
    if(regexpDecimalEnglish.test(edad)) {
        return 'This field cannot accept decimal numbers';
    };

    if(isNaN(edad)) {
        return 'This field can only contain numbers';
    };

    if(edad > 99) {
        return 'This field cannot contain numbers over 99';
    };
    
    return '';

};

function validarPrimerFormulario () {
    const $form = document.querySelector('#number-of-members');
    clearErrors('01');
    let cantidad = $form.members.value;

    const errorCantidad = validarCantidadMiembros(cantidad);
    const errors = {
        members: errorCantidad
    };

    const success = manejarErrores(errors, $form) === 0;

    if(success){
        hideFirstForm();
        showSecondForm();
        createARowForEachMember();
    }

};

function manejarErrores(errors, form) {
    const keys = Object.keys(errors);


    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errors[key];

        if(error){
            cantidadErrores ++,
            form[key].classList.add('error');
            //console.log(error);
            const $errors = document.querySelector('#errors01');
            $errors.classList.remove('error-hide');
            $errors.innerHTML = error;
            form.style.height = '250px';
        } else {
            form[key].className = '';
        }
    });

    return cantidadErrores;
}

function manejarErrores02(errors, form) {
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
}

function clearErrors(formnumber) {
    document.querySelector(`#errors${formnumber}`).innerHTML = '';
}

function validarSegundoFormulario (array) {
    const $form = document.querySelector('#family-ages');
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
    }
};