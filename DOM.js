let heading = document.querySelector("h1").innerText;
console.log(heading);

function updateDOM()
{
    console.log("Function Called");
    document.querySelector("#dh1").innerText = "DOM UPDATED";
    document.querySelector("#dh1").style.color = "red";
    }

function changeDOM()
{
    console.log("Function Called");
    document.querySelector("#dh1").innerText = "DOM CHANGED";
    document.querySelector("#dh1").style.color = "green";
}

