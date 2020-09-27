const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const am_pm = document.querySelector('#am-pm');

const interval = setInterval(clock, 1000);

const cl_hours = document.querySelectorAll(".shine");
const clock_bg = document.querySelector(".clock");
const body_bg = document.querySelector(".big_body");

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

// let h = new Date().getHours();

// if (h > 18 && h < 8) {
//     for (let i = 0; i < cl_hours.length; i++) {
//         cl_hours[i].className = "shine"
//     }

//     clock_bg.className = "clock";
//     body_bg.className = "big_body";
// } else {

//     for (let i = 0; i < cl_hours.length; i++) {
//         cl_hours[i].className = "day_shine"
//     }

//     clock_bg.className = "day_clock";
//     body_bg.className = "big_body_day";
// }




function darkMode() {

    for (let i = 0; i < cl_hours.length; i++) {
        cl_hours[i].classList.toggle("day_shine")
    }

    clock_bg.classList.toggle("day_clock");
    body_bg.classList.toggle("big_body_day");
}
