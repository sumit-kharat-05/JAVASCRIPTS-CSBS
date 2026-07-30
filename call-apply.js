//Call Apply//

let usr = {
  Name: "Sumit",
  Age: "20",
};
let usr1 = {
  Name: "Jayash",
  Age: "20",
};
let usr2 = {
  Name: "Rohit",
  Age: "20",
};
function details() {
  console.log("My Name is " + this.Name + " Age Is " + this.Age);
}

details.call(usr);
