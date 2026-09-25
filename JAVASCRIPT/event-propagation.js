//Event Propagation//

document.getElementById("Outer").addEventListener("click", () => {
  console.log("Outer Div Clicked");
});

document.getElementById("Inner").addEventListener("click", () => {
  console.log("Inner Div Clicked");
});

document.getElementById("bt1").addEventListener("click", () => {
  console.log("Button Clicked");
});
