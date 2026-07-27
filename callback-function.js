//callback Function//

function callCustomer() {
  console.log("Your Food Is Ready ... !");
}
function prepareFood(callback) {
  console.log("Prepare The Food ... !");

  callback();
}
prepareFood(callCustomer);
