//Debounce//

let inptfld = document.getElementById("i1");
let Timer;

function callApi(inptfld)
{
    console.log("API Call");
}

function handleSearch(inptfld)
{
    clearTimeout(Timer);
}

Timer = setTimeout(() => {
    callApi();
}, 2000);