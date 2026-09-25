//Input Field//

function getValue() {
  let input = document.getElementById("name").value;
  console.log(input);
}
function setValue() {
  let setvl = "SUMIT KHARAT";
  document.getElementById("name").value = setvl;
}
function removeValue() {
 
  document.getElementById("name").value = "";
}
function copyValue() {
  let cpvl = document.getElementById("who").value
  document.getElementById("name").value = cpvl;
}

function checkPin()
{
    let pin  = document.getElementById("pin").value;
    if(pin === "12345")
    {
        alert("PIN CORRECT");
    }
    else
    {
        alert("PIN INCORRECT");
        document.getElementById("pin").value ="";
    }
}

// function checkPin() {

//     let pin = document.getElementById("pin").value;

//     if(pin == "1234"){
//         alert("Correct PIN");
//     }
//     else{
//         alert("Wrong PIN");
//         document.getElementById("pin").value = "";
//     }
// }