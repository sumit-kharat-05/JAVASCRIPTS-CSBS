//Break Continue//

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

let i = 0;
while (i < 10) {
  i++;
  if (i == 5) {
    continue;
  }
  if (i == 8) {
    break;
  }
  console.log(i);
}
