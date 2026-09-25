//Fetch API'S//

// const url = 'https://dummyjson.com/products';
// const apiResult = fetch(url);
// console.log(apiResult);
// apiResult.then((response)=>{
//     response.json().then((result)=>{
//         console.log(result);
//     })
// });

async function productApiHandling() {
  let url = "https://dummyjson.com/products";
  let apiFetch = await fetch(url);
  apiFetch = await apiFetch.json();
  console.log(apiFetch);
}
productApiHandling();
