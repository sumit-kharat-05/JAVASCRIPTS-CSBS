//Arrow Function//

const add1 = () => {
  console.log(2 + 2);
};
add1();

const add2 = (a, b) => {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else {
    console.log("Invalid");
  }
};
console.log(add2(500, 500));

const square = (num) => num*num
    console.log(square(20));
