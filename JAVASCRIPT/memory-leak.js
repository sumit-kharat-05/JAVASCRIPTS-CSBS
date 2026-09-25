let usrDtls1 = [];

function addUser() {
  if (usrDtls1 > 5) {
    usrDtls1.shift();
  }
  usrDtls1.push({ name: "Sumit" });
}
setInterval(addUser, 1000);
