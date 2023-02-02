import { UI } from "/ui.js";

const calculator = {
  a: "",
  b: "",
  storedValue: "",
  result: "",
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

// 1) нужно чтобы нажатие несколько раз оператора (без введения цифр)
// не выводило 0 ЗАПИСЫВАЕТСЯ КУЧА ВСЕГО В Б, проверка нужна
// 2) разобраться с двойными нулями DONE!
// 3) разобраться с оператором EQUALS (он просто
// путает операции и берет pending operation как
// running

function addValueToDisplay(number) {
  if (number == "0" && UI.DISPLAY.textContent[0] == "0") {
    console.log(UI.DISPLAY.textContent[0]);
    console.log("oops");
  } else {
    if (calculator.storedValue == "0") {
      calculator.storedValue = "";
      UI.DISPLAY.textContent = "0";
    } else {
    }
    console.log(calculator.storedValue);
    calculator.storedValue += number;
    UI.DISPLAY.textContent = calculator.storedValue;
    if (calculator.operation == "") {
      calculator.a += number;
      calculator.a = Number(calculator.a);
    } else if (calculator.operation !== "") {
      calculator.b += number;
      calculator.b = Number(calculator.b);
    } else {
    }
  }
}

UI.OPERATORS.forEach(function (e) {
  e.addEventListener("click", function () {
    UI.DISPLAY.textContent = "0";
    calculator.storedValue = "";
    console.log(UI.DISPLAY.textContent);
    console.log(calculator.storedValue);
    if (calculator.operation == "") {
      calculator.operation = e.id;
      operate(calculator.operation);
    } else if (calculator.operation !== "") {
      calculator.pendingOperation = e.id;
      console.log(`pending operation: ${calculator.pendingOperation}`);
      operate(calculator.operation);
    } else {
    }
  });
});

const operate = (operation, a, b) => {
  console.log(`running operation: ${operation}`);
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
    console.log(`calculation result: ${calculator.result}`);
    UI.DISPLAY.textContent = calculator.result;
    calculator.a = calculator.result;
    calculator.b = "";
    calculator.operation = calculator.pendingOperation;
  } else {
  }
};

UI.CLEAR.addEventListener("click", () => {
  console.log(`ALL VALUES ERASED`);
  UI.DISPLAY.textContent = "0";
  for (let key in calculator) {
    calculator[key] = "";
  }
  console.log(JSON.stringify(calculator));
});

UI.EQUALS.addEventListener("click", () => {
  let a;
  let b;
  a = Number(calculator.a);
  console.log(`value of a: ${a}`);
  calculator.b = UI.DISPLAY.textContent;
  b = Number(calculator.b);
  console.log(`value of b: ${b}`);
  if (typeof a == "number" && typeof b == "number") {
    console.log("operation running...");
    switch (calculator.operation) {
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
    console.log(`calculation result: ${calculator.result}`);
    UI.DISPLAY.textContent = calculator.result;
    calculator.a = calculator.result;
    calculator.b = "";
  } else {
  }
});
