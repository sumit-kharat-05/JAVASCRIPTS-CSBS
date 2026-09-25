//Lexical Scope//

let a1 = 100;

function outer() {
  let b = 200;
  console.log(a1, b);

  function inner() {
    let c = 300;
    console.log(a1, b, c);
  }
  inner();
}
outer();