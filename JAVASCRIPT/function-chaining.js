//Function Chaining//

let fnctn = {
  val: 0,
  add(a) {
    this.val += a;
    console.log(this.val);
    return this;
  },
  sub(a) {
    this.val -= a;
    console.log(this.val);
    return this;
  },
  mul(a) {
    this.val *= a;
    console.log(this.val);
    return this;
  },
  div(a) {
    this.val /= a;
    console.log(this.val);
    return this;
  },
};
fnctn.add(100).sub(50).mul(10).div(5);