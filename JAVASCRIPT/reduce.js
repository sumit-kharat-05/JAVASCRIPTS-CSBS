//Reduce Method//

let cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 500 },
  { item: "Keyboard", price: 1500 },
];

let totalPrice = cart.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(totalPrice); // 52000
