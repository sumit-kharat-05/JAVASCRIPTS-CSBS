//Objects Methods//

let userDetails1 = {
  Name: "sumit kharat",
  Age: "20",
  City: "Nagpur",
  Email: "sumitkharat@gmail.com",
  PhoneNo: "123456789",
  greet: function () {
    return "Hello " + this.Name + ", How Are You ?";
  },
  join: function (from) {
    return "Hello " + this.Name + " How Are You ? This Is From " + from;
  },
};
console.log(userDetails1);
console.log(userDetails1.greet());
console.log(userDetails1.join("Girlfriend"));
