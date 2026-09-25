//Evenet Delegation//

let div2 = document.getElementById("parent");
div2.addEventListener("click", function(event) {
    if(event.target.classList.contains("bt"))
    {
        console.log(event.target.innerText + " is clicked");
    }
});