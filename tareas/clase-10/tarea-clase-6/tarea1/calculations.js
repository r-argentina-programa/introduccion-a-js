function calculateGreatestAge(arrayAges) {
  let numGreatest = 0;
  for (let index = 0; index < arrayAges.length; index++) {
    if (arrayAges[index] > numGreatest) {
      numGreatest = arrayAges[index];
    }
  }
  return numGreatest;
}

function calculateLowestAge(arrayAges) {
  let numLowest = 300;
  for (let index = 0; index < arrayAges.length; index++) {
    if (arrayAges[index] < numLowest) {
      numLowest = arrayAges[index];
    }
  }
  return numLowest;
}

function calculateAverageOfAges(arrayAges) {
  let sumOfAges = 0;
  for (let index = 0; index < arrayAges.length; index++) {
    sumOfAges = arrayAges[index] + sumOfAges;
  }
  return sumOfAges / arrayAges.length;
}

function validateAges(agesArray) {
  let counter = 0;
  for (let index = 0; index < agesArray.length; index++) {
    if (agesArray[index] != 0) {
      counter = counter + 1;
    }
  }
  if (counter == 0) {
    return 0;
  } else {
    return 1;
  }
}
