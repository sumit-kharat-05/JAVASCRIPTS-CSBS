//Event Loop//

console.log("start");

setTimeout(() => {
    console.log("TimeOut");
}, 0);
Promise.resolve().then((resolve)=>{
    console.log('Promise');
})
console.log('End');
