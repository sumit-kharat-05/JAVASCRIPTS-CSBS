// Que :-What will be the output of the following code?

// const obj = {
//     value: 42,
//     getValue: () => {
//         return this.value;
//     }
// };
// console.log(obj.getValue());



const obj2 = {
    value: 42,
    getValue: () => {
        return this.value;
    }
};
console.log(obj2.getValue());