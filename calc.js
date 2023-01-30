import { UI } from "/ui.js";

const calculator = {
  a: "",
  b: "",
  storedValue: "",
  result: "",
  checkValue: 0,
  operation: "",
  pendingOperation: "",
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

for (let key in UI.NUMBER) {
  UI.NUMBER[key].addEventListener("click", (e) => {
    addValueToDisplay(e.target.textContent);
  });
}

function addValueToDisplay(number) {
  calculator.storedValue += number;
  UI.DISPLAY.textContent = calculator.storedValue;
  if (calculator.operation == "") {
    calculator.a += number;
    calculator.a = Number(calculator.a);
    console.log(`first number: ${calculator.a}`);
  } else if (calculator.operation !== "") {
    calculator.b += number;
    calculator.b = Number(calculator.b);
    console.log(`second number: ${calculator.b}`);
  } else {
  }
}

UI.OPERATORS.forEach(function (e) {
  e.addEventListener("click", function () {
    UI.DISPLAY.textContent = "0";
    calculator.storedValue = "";
    if (calculator.operation == "") {
      calculator.operation = e.id;
      operate(calculator.operation);
    } else if (calculator.operation !== "") {
      calculator.pendingOperation = e.id;
      operate(calculator.pendingOperation);
    } else {
    }
  });
});

//ПРИ НАЖАТИИ НА - ДОЛЖЕН СЧИТАТЬ МНЕ РЕЗУЛЬТАТ +
//Extract the code that calculates and displays the result into a separate function.
//Then you can call it from both the equals event listener and the event listener for
//all the operator buttons.

const operate = (operation, a, b) => {
  console.log(`current operation: ${operation}`);
  a = calculator.a;
  console.log(`value of a: ${a}`);
  b = calculator.b;
  console.log(`value of b: ${b}`);
  if (typeof a == "number" && typeof b == "number") {
    console.log("operation running...");
    switch (operation) {
      case "divide":
        calculator.result = divide(a, b);
        break;
      case "multiply":
        calculator.result = multiply(a, b);
        break;
      case "subtract":
        calculator.result = subtract(a, b);
        break;
      case "add":
        calculator.result = add(a, b);
        break;
    }
    console.log(`last calculation result: ${calculator.result}`);
    UI.DISPLAY.textContent = calculator.result;
  } else {
  }

  UI.CLEAR.addEventListener("click", () => {
    a = "";
    console.log(`a: ${a}`);
    b = "";
    console.log(`b: ${b}`);
    UI.DISPLAY.textContent = "0";
    result = "";
    console.log(`result: ${result}`);
  });
  UI.EQUALS.addEventListener("click", () => {
    if (typeof a == "number" && typeof b == "number") {
      switch (operator) {
        case "divide":
          result = divide(a, b);
          console.log(result);
          break;
        case "multiply":
          result = multiply(a, b);
          console.log(result);
          break;
        case "subtract":
          result = subtract(a, b);
          console.log(result);
          break;
        case "add":
          result = add(a, b);
          console.log(result);
          break;
      }
      UI.DISPLAY.textContent = result;
    }
  });
};
