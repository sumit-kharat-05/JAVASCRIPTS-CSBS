//Array//

let arr1 = ["html", "css", "tailwind css", "js", "react js"];
let arr2 = [100, 200, 300, 400, 500];
let arr3 = [45, 78, 78, 9, 23, 45, 85, 21, 10, 20, 45];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
console.log("Array Length =", arr1.length);
console.log("Push Element =", arr1.push("vue js"));
console.log(arr1);
console.log("Pop Element =", arr1.pop("vue js"));
console.log(arr1);
console.log("Add Element At 0th Index =", arr1.unshift("http"));
console.log(arr1);
console.log("Remove Element At 0th Index =", arr1.shift("http"));
console.log(arr1);
console.log("Convert Array To String =", arr2.toString());
console.log(arr2);
console.log("Connect Two Arrays =", arr1.concat(arr2));
console.log("Return Splice Elements =", arr1.slice(1, 2));
console.log(arr1);
console.log("Return Specific Elements =", arr1.splice(1, 3));
console.log(arr1);
console.log("Check This Elements Are Include Or Not =", arr1.includes("html"));
console.log("Check Index Of Element =", arr1.indexOf("react js"));
console.log("Reverse Array =", arr1.reverse());
console.log(arr1);
console.log("Sorted Array =", arr3.sort());
console.log(arr3);

// function returnPosition() {
//   let pos = event.target.value;
//   arr1.splice(1, 4);
//   console.log(arr1);
// }
// function deleteItems(event) {
//   let pos = event.target.value;
//   if (pos > arr1.length - 1) {
//     alert("InValid");
//   } else {
//     arr1.splice(pos,1);
//     console.log(arr1);
//   }
// }

let users = [
  "linux",
  "shell scripting",
  "networking",
  "git-github",
  "docker",
  "ias",
  "cicd",
];
console.log(users);

function addElement() {
  let pos = document.getElementById("pos").value;
  let val = document.getElementById("value").value;
  if (pos && val) {
      users.splice(pos, 0, val);
      console.log(users);
  }
  let list = document.getElementById('list');
  list.innerHTML = "";
  for(user of users)
  {
    list.innerHTML += "<li>"+users+"</li>"
  }
  
}
