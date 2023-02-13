const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".display .input");
const displayOutput = document.querySelector(".display .output");

let input = "";

for (let key of keys) {
  // getting value of dataset from HTML
  const value = key.dataset.key;

  // Calculator Logic
  key.addEventListener("click", () => {
    // clear function
    if (value == "clear") {
      input = "";
      displayInput.innerHTML = "";
      displayOutput.innerHTML = "";
    }
    // backspace function
    else if (value == "backspace") {
      input = input.slice(0, -1);
      displayInput.innerHTML = ClearInput(input);
    } else if (value == "=") {
    }
  });
}
