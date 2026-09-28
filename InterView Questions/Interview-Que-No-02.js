//Que :- Capitalize Last Letter Of String

let str1 = "hello , sumit how are you";
console.log(str1.slice(0,str1.length - 1)+str1.charAt(str1.length-1).toUpperCase());