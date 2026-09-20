async function apiCall() {
    const controller = new AbortController();
    const signal = controller.signal
  const url1 = "https://jsonplaceholder.typicode.com/posts";
  let response = await fetch(url1,{
    signal
  });
  response = await response.json();
  console.log(response);
}
function abortapiCall() {
    controller.abort();
}
