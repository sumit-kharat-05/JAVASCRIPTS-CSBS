//rest operator
function fruitss(...allFruits)
{
    console.log(allFruits);
    
}
fruitss("Apple","Mango","Banana","Guava","Grapes");

//spread operator

let userr1 = [10,20,30,40,50];
let userr2 = [60,70,80,90,100];
let combinedData = [...userr1,...userr2];
console.log(combinedData);