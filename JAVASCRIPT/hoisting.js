//Hoisting//

fruit();
function fruit()
{
    console.log("Fruits");
}


fruits();
let fruits = function fruit()
{
    console.log("Fruit")
}