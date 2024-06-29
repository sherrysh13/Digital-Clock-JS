console.log("running");

function digitalClock(){

    let hr = document.querySelector(".hours");
    let min = document.querySelector(".min");
    let sec = document.querySelector(".sec");
    let period = document.querySelector(".period");

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if(hours >= 12){
        period.innerHTML = "PM";
    }else{
        period.innerHTML = "AM";
    }
    if(hours > 12){
        hours =  hours - 12;
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }
    hr.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    
        // console.log(hours);
        // console.log(minutes);
        // console.log(seconds);
}
setInterval(digitalClock, 1000);