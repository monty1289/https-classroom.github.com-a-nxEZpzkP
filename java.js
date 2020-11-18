/*text fetch from link*/

fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
    .then(
        res => {
            return res.json();
        }
    ).then(data => {
        let para = document.getElementById("ranPara");
        para.innerHTML = data;

    });

/*function to make login*/

$(document).ready(function () {


    $('#Loginbu').click(function () {
        event.preventDefault();
        let Validusername = $('#logname').val() === 'user';
        let ValidPassword = $('#logpass').val() === 'P@ssw0rd123';



        if (Validusername === true && ValidPassword === true) {
            window.location = "index.html";
        }
        else {
            alert("wrong.")
        }
    });
});