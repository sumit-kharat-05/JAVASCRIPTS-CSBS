//Objects UI//

let userDetails2 = {
  Name: "sumit",
  Age: "20",
  Email: "sumitkharat686@gmail.com",
  MobNo: "9307818336",
  City: "Nagpur",
};

function displayObjectsData() {
  let ulEl = document.getElementById("user-UI");
  ulEl.innerHTML = "";
  for (let key in userDetails2) {
    ulEl.innerHTML += " <li> " + key + " Is " + userDetails2[key] + " </li> ";
  }
}


function addObjects()
{
    let key = document.getElementById('key').value;
    let vl = document.getElementById('vl').value;
    console.log(key,vl);
    userDetails2[key]=vl;
    console.log(userDetails2);
    displayObjectsData();

}

displayObjectsData();