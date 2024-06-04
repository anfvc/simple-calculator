const display = document.querySelector(".display");
console.log(display);

function tapButton(character) {

  if (display.value === "0") {
    display.value = character
  } else {
    display.value += character;

  }

}

function clearDisplay() {
  display.value = "0";
}

function total() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Syntax Error";
  }
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

display.addEventListener("input", () => {
  if (display.value === "0") {
    display.value = "";
  }
})
