function compute() {
   var p = document.getElementById("principal").value;
   var r = document.getElementById('rate').value;
   var t = document.getElementById('years').value;
   var interest = p * r * t / 100;
   var year = new Date().getFullYear()+parseInt(t);

   if(p == 0 || p === '' || p < 0) {
      //  var text = document.getElementById('vP');
        //text.innerHTML = "Enter a positive number";
        //text.style.color = "red";
        alert('Enter a positive number')
    }else{
        
        var computation =  `<b style="color: black;">If</b> you deposit <b style="color: red;">${p}</b>, <br> <b style="color: black;">at</b> an interest
        rate of <b style="color: red;">${r}</b>. <br> <b style="color: black;">You</b> will receive an amount of <b style="color: red;">${interest}</b>,<br> <b style="color: black;">in</b> the year <b style="color: red;">${year}</b>.`;

        document.getElementById('result').innerHTML += interest;
        document.getElementById('result').style.color = 'green';
        document.getElementById('computation').innerHTML= computation;
    }
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + '%';
}

