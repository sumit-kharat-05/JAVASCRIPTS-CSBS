let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");

let submit = document.querySelector("#sbmt");
submit.disabled="true";

submit.addEventListener("click", function (event) {
    event.preventDefault();
  console.log("Form Submitted");
});

firstName.addEventListener("input",checkInputValue);
lastName.addEventListener("input",checkInputValue);
email.addEventListener("input",checkInputValue);
password.addEventListener("input",checkInputValue);

function checkInputValue() {
    if(firstName.value && lastName.value && email.value && password.value){
        submit.disabled = false;
    }
    else
    {
        submit.disabled = true;
    }
}