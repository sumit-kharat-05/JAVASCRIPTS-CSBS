// Que :- How To Make Immutable Object In JavaScript ?

var userss = {name:"Sumit"};Object.freeze(userss);
console.log(userss);
userss.name="Kharat";
console.log(userss);

