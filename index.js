const hourE1 = document.getElementById("hours");
const mintsE1 = document.getElementById("minutes");
const secE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function UpdateClock(){

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampm = "AM";
if(h>12){
h = h-12
amap = "PM" 

}
h = h<10 ? "0" + h : h;
m = m<10 ? "0" + m : m;
s = s<10 ? "0" + s : s;



hourE1.innerText = h;
mintsE1.innerText = m;
secE1.innerText = s;
ampmE1.innerText = amap;
setTimeout(() => {
    UpdateClock()
}, 1000);



}
UpdateClock()

