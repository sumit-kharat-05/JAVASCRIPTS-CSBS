//Arrow In This//


let userData = {
   userName:'SUMIT',
   Age:'20',
print:function(){
setTimeout(() => {
    console.log(this.userName);
}, 0);
}
}
userData.print();