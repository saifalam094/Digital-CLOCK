// console.log("hellow wor


setInterval(() => {

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ampm = "AM"
if(hours>12){
 hours = hours-12;
 ampm ="PM"
}
hours = hours < 10 ? "0"+hours: hours;
minutes = minutes < 10 ? "0"+minutes: minutes;
seconds = seconds < 10 ? "0"+seconds: seconds;


document.getElementById('hour').innerHTML= hours
document.getElementById('minutes').innerHTML= minutes
document.getElementById('seconds').innerHTML= seconds
document.getElementById('ampm').innerHTML = ampm

    
}, 1000);



