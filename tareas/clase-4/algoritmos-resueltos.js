// Desafìo de programación  #2: Imprimí los números impares del 1 al 100

function desafio2() {
  for (let num = 1; num < 101; num++) {
    if (num % 3 == 0 || num == 1) {
      console.log(num);
    }
  }
}

// Desafío de programación #3: Imprimí la tabla de multiplicación del 7

function desafio3() {
  for (let index = 1; index <= 10; index++) {
    const num = index * 7;
    console.log(num);
  }
}

// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

function desafio4() {
  console.log("Tabla del 1");
  for (let index = 1; index < 11; index++) {
    console.log(`1 * ${index} = ${1 * index}`);
  }
  console.log("-----------");
  console.log("Tabla del 2");
  for (let index = 1; index < 11; index++) {
    console.log(`2 * ${index} = ${2 * index}`);
  }
  console.log("-----------");
  console.log("Tabla del 3");
  for (let index = 1; index < 11; index++) {
    console.log(`3 * ${index} = ${3 * index}`);
  }
}

// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.

function desafio5() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = 0;
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    result = result + num;
  }
  console.log(result);
}

// Desafío de programación #6: Calcula 10! (10 factorial)
