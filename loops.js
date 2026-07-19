//Loops//
//For Loop//

for (let i = 0; i <= 10; i++) {
  console.log(i);

  if (i % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

//Reverse Printing//

for (let a = 10; a >= 0; a--) {
  console.log(a);
}

//Table Printing//

for (t = 1; t <= 10; t++) {
  console.log(t * 2);
}

//While Loop//

let battery = 0;
while (battery <= 100) {
  console.log(`Charging ... ${battery} %`);
  battery += 2;
}
console.log("Charging Completed .. !");

//Reverse While Loop//

let r = 10;
while (r > 0) {
  r--;
  console.log(r);
}

//Do While Loop//

let attempts = 1;
do {
  console.log("Enter Your Pin");
  attempts++;
} while (attempts <= 3);

console.log("3 Attempts Is Completed");

let d = 10;
do {
  d--;
  console.log(d);
} while (d > 0);
