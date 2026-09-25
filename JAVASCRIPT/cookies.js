function expiryCookies()
{
    const date = new Date();
    date.setDate(date.getDate()+1);
    document.cookies=`name=sumit;expires=${date.toUTCString()}`;
}

function displayCookies()
{
    console.log(document.cookie);
}

function setCookies(theme) {
  document.cookie = "theme="+theme;
  handleTheme() ;
}

function handleTheme() {
  if (document.cookie.includes("theme=dark")) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}

