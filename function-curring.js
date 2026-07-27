//Function Curring//

function add3(a){
    return function(b)
    {
        return a+b;
    }
}
let currcout = add3(10);

let btns = document.getElementById("btn1");

function curringValue(btns)
{
console.log(currcout(170));

}