//Throttling//

let div1 = document.getElementsByClassName("d1");
function handleScroll(div1)
{
    console.log("Scroll event fired");
}
let lastCall = 0;
function handleScroll()
{
    let now = Date.now();
    if(now - lastCall >= 2000)
    {
        console.log("Scroll event fired");
        lastCall = now;
    }
    
}