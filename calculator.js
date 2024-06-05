const display = document.querySelector(".display");
const total = document.querySelector(".total");
console.log(display);

function tapButton(character) {
  display.value += character;
}

function clearDisplay() {
  display.value = "";
  total.value = "";
}

function totalResult() {
  try {
    let operation = display.value;

    operation = operation.replace(/x/g, "*");
    operation = operation.replace(/÷/g, "/");
    operation = operation.replace(/,/g, ".");
    operation = operation.replace(/%/g, "/100");

    let finalTotal = eval(operation);

    if (typeof finalTotal === "number") {
      //Only leave 3 decimals if number is decimal
      if (finalTotal % 1 !== 0) {
        // Round the result to 3 decimal places
        finalTotal = parseFloat(finalTotal.toFixed(3));
      }
    }
    total.value = finalTotal;
    display.value = "";
  } catch (error) {
    total.value = "Syntax Error";
  }
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

console.log((89 * 100) / 100);
