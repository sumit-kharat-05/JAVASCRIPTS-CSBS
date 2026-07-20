//Input Field Events//

function hndlInputField(event) {
  //   console.log(event.target.name);
  //   if (event.target.name === "age" && event.target.value <= 18) {
  //     alert("Age Is Not Valid");
  //   } else if (event.target.name === "age") {
  //     alert("Age Is Valid");
  //   }
}
function hndlHandledKeyUp() {
  let hndlInputField = document.getElementById("i1");
  console.log("Key Up");
}
function hndlHandledKeyDown() {
  let hndlInputField = document.getElementById("i1");
  console.log("Key Down");
}
function hndlKeyPress() {
  let hndlInputField = document.getElementById("i1");
  console.log("Key Pressed");
}
function hndlFocus() {
  let hndlInputField = document.getElementById("i1");
  console.log("Start Typing ... ");
}
function hndlBlur() {
  console.log(event.target.name);

  if (event.target.name === "age" && event.target.value <= 18) {
    alert("Age Is Not Valid");
  } else if (event.target.name === "age") {
    alert("Age Is Valid");
  }
}
