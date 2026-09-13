function StoreData() {
  let localData = localStorage.getItem("userName");
  document.querySelector("#head1").innerHTML = localData;
}

StoreData();
function showData() {
  let data = document.querySelector("#user-name").value;
  localStorage.setItem("user-Name", data);
  console.log(data);
  document.querySelector("#head1").innerHTML = data;
}
