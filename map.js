//Map Method//

const originalPrices = [150, 120, 231, 145, 252];

const discountPrices = originalPrices.map(
  (dcntprcs) => dcntprcs - (dcntprcs * 10) / 100,
);

console.log(discountPrices);
console.log(originalPrices);
