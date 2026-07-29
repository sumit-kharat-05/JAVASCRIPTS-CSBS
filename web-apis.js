//Web API'S//


function showToast(message)
{
    let toast = document.createElement("div");
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(()=>toast.remove(),3000);
}
