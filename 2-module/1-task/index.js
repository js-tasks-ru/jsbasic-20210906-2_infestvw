function sumSalary(salaries) {
  // ваш код...
  let result = 0;

  for (let key in salaries) {
    let isSalary = typeof salaries[key] === 'number' && Number.isFinite(salaries[key]);

    if (isSalary) {
      result = result + salaries[key];
    }
  } return result;
}
