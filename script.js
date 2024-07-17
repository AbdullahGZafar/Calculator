const allNumberButtons = document.querySelector(".number-buttons-container");
const allOperatorButtons = document.querySelector(".operator-buttons-container");

//all number buttons can be accessed with number[x]; 0 is at index 0, 1 at 1, etc.
const number = Array.from(document.querySelectorAll(".number-buttons"));

const plusButton = querySelector("#+");
const minusButton = querySelector("#-");
const multiplyButton = querySelector("#x");
const divideButton = querySelector("#/");
const factorialButton = querySelector("#!");
const squareRootButton = querySelector("#√");
const equalsButton = querySelector("#=");

function add() {
  const result = Array.from(arguments).reduce(function (total, sum) {
    return total + sum;
  }, 0);
  return result;
}

function subtract() {
 const result = Array.from(arguments).reduce(function (total, sum) {
    return total - sum;
  });
  return result;
}

function multiply() {
  const result = Array.from(arguments).reduce(function (total, product) {
    return total * product;
  }, 1);
return result;
}

function divide() {
const result = Array.from(arguments).reduce(function (total, product) {
    return total / product;
  });
  return result;
}

function factorial(num) {
    let factArray = [];
  for (let i = num; i > 1; i--){
    factArray.push(i);
  }
  const result = factArray.reduce(function(total, product){
    return total*product;
  }, 1);
  return result;
}

function power(num, pow) {
      return num**pow;
}

function operate(Num1, Num2) {}
