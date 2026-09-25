//Constructor//

function Car(Brand, Model) {
  this.Brand = Brand;
  this.Model = Model;
}

let Car1 = new Car("BMW", "X5");
let Car2 = new Car("Audi", "A6");

console.log(Car1.Brand + " " + Car1.Model);
console.log(Car2.Brand + " " + Car2.Model);
