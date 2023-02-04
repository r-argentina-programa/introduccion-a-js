// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function ejecutarTarea1() {
  const myName = "Nahuel";
  const otherName = "Rodrigo";

  function preguntarNombre() {
    const nombre = prompt("Ingrese su nombre");
    return nombre;
  }

  function changeFirstLetterToUpperCase(palabra) {
    const firstLetterUpperCase = palabra.charAt(0).toUpperCase();
    const lettersLowerCase = palabra.slice(1, palabra.length).toLowerCase();
    const wordComplete = firstLetterUpperCase + lettersLowerCase;
    return wordComplete;
  }

  function saludar(nameWithFirstLetterUpperCase, myName, otherName) {
    if (nameWithFirstLetterUpperCase == myName) {
      console.log(
        `Hola ${myName}! Yo también me llamo ${nameWithFirstLetterUpperCase} `
      );
    } else if (nameWithFirstLetterUpperCase == otherName) {
      console.log(
        `Hola ${nameWithFirstLetterUpperCase}! Te llamas igual que mi sobrino`
      );
    } else {
      console.log(`Hola ${nameWithFirstLetterUpperCase}!`);
    }
  }

  const name = preguntarNombre();
  const nameWithFirstLetterUpperCase = changeFirstLetterToUpperCase(name);
  saludar(nameWithFirstLetterUpperCase, myName, otherName);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function ejecutarTarea2() {
  const myAge = 22;

  function askAge() {
    const age = prompt("Ingrese edad");
    return Number(age);
  }
  const userAge = askAge();

  if (myAge > userAge) {
    console.log("Soy mayor que vos");
  } else if (myAge == userAge) {
    console.log("Tenemos la misma edad");
  } else {
    console.log("Sos mayor que yo");
  }
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function ejecutarTarea3() {
  function askAge() {
    const age = Number(prompt("Que edad tenes?"));
    return age;
  }

  function validateAge(age) {
    if (age > 18) {
      alert("Podes ingresar al bar");
    } else {
      alert("No podes ingresar al bar");
    }
  }

  function setWordWithUpperCase(word) {
    const firstLetter = word.slice(0, 1);
    const firstLetterInUpperCase = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1, word.length);
    const remainingLettersInLowerCase = remainingLetters.toLowerCase();

    return firstLetterInUpperCase + remainingLettersInLowerCase;
  }

  function main() {
    const documentValidation = prompt("Tenés documento?");
    let word = setWordWithUpperCase(documentValidation);

    if (word.includes("Si") || (word.includes("No") && word.length >= 3)) {
      const clippedWord = word.slice(0, 2);
      word = clippedWord;
    }

    if (word === "Si") {
      const age = askAge();

      if (isNaN(age)) {
        alert("No entendi tu respuesta");
      } else {
        validateAge(age);
      }
    } else if (word === "No") {
      alert("No podes entrar al bar sin documento");
    } else {
      alert("No entendi tu respuesta");
    }
  }
  main();
}

ejecutarTarea3();
