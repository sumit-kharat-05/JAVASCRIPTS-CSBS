//data-types Primitive//

let age = 20;                     
let name = "sumit Kharat";
let isStudent = true;
let marks;
let phone = null;
let bigNumber = 12356586314632596332233;
// let id1 = symobol ("id1");


console.log(age);
console.log(name);
console.log(isStudent);
console.log(marks);
console.log(phone);
console.log(bigNumber);


console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(isStudent));
console.log(typeof(marks));
console.log(typeof(phone));
console.log(typeof(bigNumber));

//data-types Non Premitive//

let student = {
    name: "SUMIT KHARAT",
    age:'20',
    city:"Nagpur"
}
console.log(student);
console.log(typeof(student));

let subjects = ["Math","English","Science"];

console.log(subjects);
console.log(typeof(subjects));

function greet()
{
    console.log("Hello JS");
}
console.log(typeof(greet));
