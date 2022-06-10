function compute() {
   var p = document.getElementById("principal").value;
   var r = document.getElementById('rate').value;
   var t = document.getElementById('years').value;
   var interest = p * r * t / 100;
   var year = new Date().getFullYear()+parseInt(t);

   if(p === 0 || p === '') {
        var text = document.getElementById('vP');
        text.innerHTML = "Enter a positive number";
        text.style.color = "red"
    } else{
        var computation =  `If you deposit <b>${p}</b>, <br> at an interest
        rate of <b>${r}</b>. <br> You will receive an amount of <b>${interest}</b>,<br> in the year ${year}.`;
        
        document.getElementById('result').innerHTML += interest;
        document.getElementById('result').style.color = 'green';
        document.getElementById('computation').innerHTML= computation;
    }
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

