//Getter Setter//

let car = {
  _speed: 0,

  get speed() {
    return this._speed + " km/h";
  },

  set speed(value) {
    if (value > 180) {
      console.log("Speed limiter engaged! Max 180 km/h");
      this._speed = 180;
      return;
    }
    if (value < 0) {
      console.log("Speed cannot be negative");
      return;
    }
    this._speed = value;
  }
};

car.speed = 250; // "Speed limiter engaged! Max 180 km/h"
console.log(car.speed); // "180 km/h" — capped automatically

car.speed = 80;
console.log(car.speed); // "80 km/h"
