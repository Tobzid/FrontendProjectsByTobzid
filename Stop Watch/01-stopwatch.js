const starStopBtn = document.querySelector('.starStopBtn');
const resetBtn = document.querySelector('.resetBtn');

/* variables */
let seconds = 0;
let minutes = 0;
let hours = 0;

// variable for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables for serTimer and timerstatus
let timerInterval = null;

/* Stop watch function */
function stopwatch(){
    seconds++
    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;
    }

    if(minutes / 60 === 1){
        minutes = 0;
        hours++
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else{
        leadingSeconds = seconds;
    }
    
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else{
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else{
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = hours + ":" + minutes + ":" + seconds;

}
//

starStopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopwatch, 1000);
        document.querySelector('.starStopBtn').innerHTML = 'Play';
        timerStatus = "started";
    }
    else{
        window.clearInterval(timerInterval);
        document.querySelector('.starStopBtn').innerHTML = 'Play';
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('.timer').innerHTML = "00:00:00"
})