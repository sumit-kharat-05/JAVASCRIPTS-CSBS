//Array Objects//

let usrDetails = [
  { Name: "SUMIT KHARAT", Age: "20", City: "Nagpur" },
  { Name: "ROHIT CHAUDHARI", Age: "21", City: "Nagpur" },
  { Name: "OM WAGH", Age: "20", City: "Nagpur" },
  { Name: "JAYASH GARAD", Age: "20", City: "Nagpur" },
];
console.log(usrDetails);
let list = document.getElementById("user-list");
list.innerHTML = " ";
for (user of usrDetails) {
  list.innerHTML +=
    "<li>Hello ,User Name Is <b> " +
    user.Name + 
    " </b> User Age Is <b>" +
    user.Age +
    "</b> User City Is <b> " +
    user.City + 
    "</b> </li>";
//   console.log(user.Name);
//   console.log(user.Age);
//   console.log(user.City);
}
