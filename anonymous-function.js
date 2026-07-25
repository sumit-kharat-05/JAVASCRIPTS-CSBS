//Anonymous Function//

const add = function(a,b)
{
    return a+b
}
const sub = function(a,b)
{
    return a-b
}

function operation(fun)
{
    let a=10;
    let b=20;
    console.log(fun(a,b));
}
operation(add);
operation(sub);