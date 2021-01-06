function compute()
{
    var principal = Number(document.getElementById("principal").value);
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("year").value);
    var yr = Number(new Date().getFullYear());
    if(principal == 0 || principal < 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        yr = yr + years;
        var interest = Number(principal*years*rate/100);
        var res = document.getElementById("result");
        res.innerHTML = "<br><br>If you deposit "+"<span class='highlight'>" +principal+ "</span>" + ", <br>at an interest rate of " + "<span class='highlight'>" + rate + "%</span>" + ". <br>You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" +", <br>in the year " + "<span class='highlight'>" + yr + "</span>";

    }
}
function calculaterate()
{
    var r = document.getElementById("rate");
    var rt = document.getElementById("irate");
    rt.innerHTML = r.value;

}