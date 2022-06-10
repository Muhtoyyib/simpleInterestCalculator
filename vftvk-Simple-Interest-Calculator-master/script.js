function compute() {
   var p = document.getElementById("principal").value;
   var r = document.getElementById('rate').value;
   var t = document.getElementById('years').value;
   var interest = p * r * t / 100;
   var year = new Date().getFullYear()+parseInt(t);

   document.getElementById('result').innerHTML= interest;
   document.getElementById('computation').innerHTML= `If you deposit <b>${p}</b>, <br> at an interest
   rate of <b>${r}</b>. <br> You will receive an amount of <b>${interest}</b>,<br> in the year ${year}.`;

   if(p === 0 || p === ''){
       var text = document.getElementById('vP');
       text.innerHTML = "Enter a positive number";
       text.style.color = "red";
   }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

