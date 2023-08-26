function refreshTime() {
    let datetime = new Date().getDate();
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    
    
    switch(day){
        case 0:
            document.getElementById("day").textContent = "SUN";
            break;
        case 1:
            document.getElementById("day").textContent = "MON";
            break;
        case 2:
            document.getElementById("day").textContent = "TUE";
            break;
        case 3:
            document.getElementById("day").textContent = "WED";
            break;
        case 4:
            document.getElementById("day").textContent = "THUR";
            break;
        case 5:
            document.getElementById("day").textContent = "FRI";
            break;
        case 6:
            document.getElementById("day").textContent = "SAT";
            break;
    }
    document.getElementById('date').innerHTML = datetime;
    
    switch(month){
        case 0:
            document.getElementById("month").textContent = "JAN";
            break;
        case 1:
            document.getElementById("month").textContent = "FEB";
            break;
        case 2:
            document.getElementById("month").textContent = "MAR";
            break;
        case 3:
            document.getElementById("month").textContent = "APR";
            break;
        case 4:
            document.getElementById("month").textContent = "MAY";
            break;
        case 5:
            document.getElementById("month").textContent = "JUN";
            break;
        case 6:
            document.getElementById("month").textContent = "JUL";
            break;
        case 7:
            document.getElementById("month").textContent = "AUG";
            break;
        case 8:
            document.getElementById("month").textContent = "SEP";
            break;
        case 9:
            document.getElementById("month").textContent = "OCT";
            break;
        case 10:
            document.getElementById("month").textContent = "NOV";
            break;
        case 11:
            document.getElementById("month").textContent = "DEC";
            break;
        default:
            break;
    }
    document.getElementById('year').innerHTML = year;
    
    //for time formats
    
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    
    if(hours < 10){
        hours = "0" + hours;
    }
    
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    document.getElementById('hour').innerHTML = hours;
    
    document.getElementById('min').innerHTML = minutes;
    
    document.getElementById('sec').innerHTML = seconds;
    
    
  }
    setInterval(refreshTime, 1000);

