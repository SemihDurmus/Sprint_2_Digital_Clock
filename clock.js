const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const am_pm = document.querySelector('#am-pm');

const interval = setInterval(clock, 1000);


function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //hour
    if (h > 12) {
        am_pm.innerText = "PM";
        if ( h > 21) {
            hours.innerText = h - 12;
        } else {
            h -= 12
            hours.innerText = "0" + h;
        }
    } else {
        hours.innerText = h;
        am_pm.innerText = "AM";
    }
    //minute
    if (m < 10) {
        minutes.innerText = "0" + m;
    } else {
        minutes.innerText = m;
    }

    //seconds
    if (s < 10) {
        seconds.innerText = "0" + s;
    } else {
    seconds.innerText = s;
    }
}

