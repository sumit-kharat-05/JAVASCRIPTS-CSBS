let userInput = document.getElementById("user");
userInput.addEventListener("input", checkValidation);

function checkValidation(event) {
  let val = event.target.value;
  let inputEl = document.getElementById("userMsg");
  inputEl.style.display = "block";

  if (val.length < 4) {
    inputEl.textContent = "Min Length Is 4";
  } else if (val.length > 12) {
    inputEl.textContent = "Max Length Is 12";
  } else {
    inputEl.textContent = "";
    inputEl.style.display = "none";
  }
}