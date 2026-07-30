//Bind//

let usrDtls = {
  Name: "Sumit",
  Age: 20,
  print: function () {
    console.log("My Name Is " + this.Name + "Age Is " + this.Age);
  },
};
usrDtls.print();
const newobj = usrDtls.print;
newobj.bind(usrDtls)();
