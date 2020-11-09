fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
.then(
    res=>{
        return res.json();
    }
).then(data=>{
    let para = document.getElementById("ranPara");
    para.innerHTML=data;

});