//Function Closure//

function bankAccount() {
  let balance = 10000;

  function checkBalance() {
    console.log("Balance :", balance);
  }
  return checkBalance;
}

let account = bankAccount();
account();
