//Promises//

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Code Executed Successfully");
//   }, 2000);
// });
// promise.then((result)=>{
//   console.log(result);

// })

let loginButton = document.getElementById("btn2");
function userLogin() {
  let name = "SUMIT";
  let email = "sumit@gmail.com";

  const userLogin = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ login: true });
    }, 3000);
  });
  return userLogin;
}

function userToken() {
  const userToken = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ token: "ghedy562r8u3p9ibvhfe51r26t6152yuhjljild" });
    }, 2000);
  });
  return userToken;
}

function handleLogin(loginButton) {
  const loginPromise = userLogin();
  const tokenPromise = userToken();
  // Promise.all([loginPromise,tokenPromise]).then((result)=>{
  //     console.log(result);
  // })
  //   Promise.race([loginPromise, tokenPromise]).then((result) => {
  //     //Race Means That Promise Are Required Less Time They Are Execute
  //     console.log(result);
  //   });
  Promise.allSettled([loginPromise, tokenPromise]).then((result) => {
    console.log(result);
  });
}
