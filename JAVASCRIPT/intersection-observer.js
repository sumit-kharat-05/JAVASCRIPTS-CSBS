const target = document.getElementById("dv3");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
    })
})
observer.observe(target);