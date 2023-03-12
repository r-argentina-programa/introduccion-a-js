function calculateHigherAnnualSalary(salariesArray) {
  let higherSalary = salariesArray[0];
  for (let index = 0; index < salariesArray.length; index++) {
    const actualSalary = salariesArray[index];
    if (actualSalary > higherSalary) {
      higherSalary = actualSalary;
    }
  }
  return higherSalary;
}

function calculateLowerAnnualSalary(salariesArray) {
  let lowerSalary = salariesArray[0];
  for (let index = 0; index < salariesArray.length; index++) {
    const actualSalary = salariesArray[index];
    if (actualSalary < lowerSalary) {
      lowerSalary = actualSalary;
    }
  }
  return lowerSalary;
}

function calculateAverageAnnualSalary(salariesArray) {
  let sumOfSalaries = 0;
  for (let index = 0; index < salariesArray.length; index++) {
    const actualSalary = salariesArray[index];
    sumOfSalaries = sumOfSalaries + actualSalary;
  }
  return sumOfSalaries / salariesArray.length;
}

function calculateAverageMonthlySalary(averageAnnualSalary) {
  return averageAnnualSalary / 12;
}
