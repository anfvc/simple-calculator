const display = document.querySelector(".display");
console.log(display);

function tapButton(character) {

  display.value += character

}

function clearDisplay() {
  display.value = "";
}

function total() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Syntax Error";
    display.value = "";
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
