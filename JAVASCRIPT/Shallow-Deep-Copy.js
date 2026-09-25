// let obj = {
//   name: "Sumit",
//   address: {
//     City: "Nagpur",
//     State: "Maharashtra",
//   },
// };

// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "Mumbai";

// console.log("Object Is", obj);
// console.log("User Is", user);

let obj = {
  name: "Sumit",
  address: {
    City: "Nagpur",
    State: "Maharashtra",
  },
};

let user = _.cloneDeep(obj);
user.address.city = "Mumbai";

console.log("Object Is", obj);
console.log("User Is", user);
