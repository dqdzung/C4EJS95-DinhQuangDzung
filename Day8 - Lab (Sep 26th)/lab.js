// Counter
const counter = document.getElementById("number");

function countUp() {
    counter.innerText++;
    console.log("Counter up!");
}
function countDown() {
    counter.innerText--;
    console.log("Counter down!");
}

const divNow = document.getElementById('now');
function myTime() { 
divNow.innerHTML = new Date();}
// 