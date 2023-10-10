function validateName(name) {
  if (name.length === 0) {
    return "El campo 'nombre' debe tener al menos 1 caracter";
  }

  if (name.length >= 50) {
    return "El campo 'nombre' debe tener menos de 50 caracteres";
  }
  if (/^[\s]+$/.test(name)) {
    return "El campo 'nombre' no puede tener solo espacios vacios";
  }
  if (!/^[a-z\s]+$/i.test(name)) {
    return "El campo 'nombre' solo debe contener letras";
  }
  return "";
}

function validateCity(city) {
  if (!city) {
    return "El campo 'ciudad' deberia tener al menos 1 caracter";
  }
  return "";
}

function validateGiftDescription(giftDescription) {
  if (!giftDescription) {
    return "El campo 'descripcion' deberia tener al menos 1 caracter";
  } else if (giftDescription.length >= 100) {
    return "El campo 'descripcion' deberia tener menos de 100 caracteres";
  } else if (/^[\s]+$/.test(giftDescription)) {
    return "El campo 'descripcion' no puede tener solo espacios vacios";
  } else if (!/^[\w\s]+$/i.test(giftDescription)) {
    return "El campo 'descripcion' solo debe contener letras o numeros";
  }
  return "";
}

const $form = document.querySelector("#letter-to-santa");

$form.onsubmit = validateForm;

function validateForm(event) {
  // removePreviousErrors();

  const name = $form.name.value;
  const city = $form.city.value;
  const giftDescription = $form["gift-description"].value;
  saveInLocalStorage(giftDescription);

  const errorName = validateName(name);
  const errorCity = validateCity(city);
  const errorGiftDescription = validateGiftDescription(giftDescription);

  const errors = {
    name: errorName,
    city: errorCity,
    "gift-description": errorGiftDescription,
  };

  const isSuccess = handleErrors(errors) === 0;

  if (isSuccess) {
    $form.className = "hidden";
    document.querySelector("#success").className = "";
    setTimeout(() => {
      window.location.href = "wishlist.html";
    }, 5000);
  }

  event.preventDefault();
}

function handleErrors(errors) {
  const keys = Object.keys(errors);
  let errorCounter = 0;

  keys.forEach((key) => {
    const error = errors[key];

    if (error) {
      errorCounter++;

      if (!document.querySelector(`#${key}-error`)) {
        $form[key].className = "error";

        const $errorsList = document.querySelector("#errors");
        const $li = document.createElement("li");

        $li.innerText = error;
        $li.id = `${key}-error`;

        $errorsList.appendChild($li);
      }
    } else {
      $form[key].className = "";

      if (document.querySelector(`#${key}-error`)) {
        document.querySelector(`#${key}-error`).remove();
      }
    }
  });
  return errorCounter;
}

function removePreviousErrors() {
  const $errores = document.querySelectorAll("#error");
  for (error of $errores) {
    error.remove();
  }
}


function saveInLocalStorage(giftDescription){
  const gifts = {gifts: giftDescription}
  localStorage.setItem("gifts", JSON.stringify(gifts))
}