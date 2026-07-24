//Objects//

let userDetails = {
  Name: "sumit",
  Age: "20",
  Email: "sumitkharat686@gmail.com",
  MobNo: "9307818336",
  City: "Nagpur",
  Address: {
    Pincode: "443201",
    HouseNo: "15",
  },
};

console.log(userDetails.Name);
console.log(userDetails["Name"]);

userDetails.College = "GHRCEMN";
console.log(userDetails);

delete userDetails.College;
console.log(userDetails);

console.log(userDetails.Address);
