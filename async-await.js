//Async-Await//

const loginPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ login: "true", name: "Sumit Kharat" });
  }, 2000);
});
const tokenPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ token: "nhjgjugie7d87y9hb4kjnljwdvh" });
  }, 4000);
});
async function handleLoginPromise() {
  const loginResult = await loginPromise;
  const tokenResult = await tokenPromise;
  console.log(loginResult, tokenResult);
}
handleLoginPromise();
