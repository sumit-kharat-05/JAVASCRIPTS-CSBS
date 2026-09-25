async function apiCalling() {
  try {
    const url2 = "https://jsonplaceholder.typicode.com/posts/1";
    let response1 = await fetch(url2);
    response1 = await response1.json();
    console.log(response1);
    // alert("First Api Call Done");
  } catch (error) {
    console.log(error.message);
    // alert(error.message + " First Api Please Try Again Some Time");
  }

  try {
    const url3 = "https://jsonplaceholder.typicode.com/posts";
    let response2 = await fetch(url3);
    response1 = await response2.json();
    console.log(response2);
    // alert("Second Api Call Done");
  } catch (error) {
    console.log(error.message);
    // alert(error.message + " Second Api Please Try Again Some Time");
  }
}
apiCalling();
