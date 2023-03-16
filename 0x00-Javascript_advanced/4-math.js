function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  }
}

function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// Example usage:
console.log(addBy100(20)); // Displays 120
console.log(addBy1000(20)); // Displays 1020
console.log(divideBy10(20)); // Displays 2
console.log(divideBy100(20)); // Displays 0.2
