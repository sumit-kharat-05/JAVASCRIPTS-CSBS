//Input Field Style//

document.getElementById("usrName").style.color = "red";

function updtStyle() {
  let inptEl = document.getElementById("usrName").style;
  inptEl.color = "orange";
  inptEl.width = "200px";
  inptEl.height = "50px";
} 
function hndlRange(event) {
    console.log(event.target.value);
    let width = event.target.value+"px"
    let inptEl = document.getElementById("usrName").style.width=width;
}
