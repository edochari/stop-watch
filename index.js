const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('Reset');
const timer=document.getElementById('timer');

let min=0;
let hr=0;
let sec=0;
let boolean_stopTime=false;
const startTime=()=>{
if(boolean_stopTime==true)
{
 boolean_stopTime=false;
}
startTimer();
}

const startTimer=()=>{
    if(boolean_stopTime==false)
    {
    sec=parseInt(sec);
    min=parseInt(min);
    hr=parseInt(hr);

    sec=sec+1;

    if(sec==60)
    {
        min=min+1;
        sec=0;
    }

    if(min==60)
    {
        hr=hr+1;
        min=0;
        sec=0;
    }

    if (sec < 10 || sec == 0) {
        sec = '0' + sec;
    }

    if (min < 10 || min == 0) {
        min = '0' + min;
    }
    
    if (hr < 10 || hr == 0) {
        hr = '0' + hr;
    }
    timer.innerHTML=hr+':'+min+':'+sec;
    setTimeout("startTimer()",1000);
    }
}
const stopTime=()=>{
    if(boolean_stopTime==false)
    {
     boolean_stopTime=true;
    }
}


// This function resets the time
const resetTime=()=>{
sec=0;
min=0;
hr=0;
timer.innerHTML="00:00:00";
}




start.addEventListener('click',startTime);
stop.addEventListener('click',stopTime);
reset.addEventListener('click',resetTime);