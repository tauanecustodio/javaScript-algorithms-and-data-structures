const decimalNumber = document.getElementById('number');
const converterForm = document.getElementById('converter-form');
const output = document.getElementById('output');

const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
];

function validateInput(number) {
  if(number === '' || isNaN(number)) {
    return "Please enter a valid number";
  } else if(number < 1) {
    return "Please enter a number greater than or equal to 1";
  } else if(number > 3999) {
    return "Please enter a number less than or equal to 3999";
  }
  return true;
}

function decimalConverter(e) {
  e.preventDefault();
  output.classList.remove('error', 'hide');

  let decimalValue = parseInt(decimalNumber.value, 10);
  const error = validateInput(decimalNumber.value);

  if(error !== true) {
    output.classList.remove('hide');
    output.classList.add('error');
    output.innerHTML = error;
    return;
  }

  let result = '';
  
  for (const { value, symbol } of romanNumerals) {
    while (decimalValue >= value) {
      result += symbol;
      decimalValue -= value;
    }
  }

  output.innerHTML = result;
}

converterForm.addEventListener('submit', decimalConverter);