// Counter
{
  const counter = document.getElementById("counter");
  function countUp() {
    counter.innerText++;
    console.log("Counter up!");
  }
  function countDown() {
    counter.innerText--;
    console.log("Counter down!");
  }
  const divNow = document.getElementById("now");
  function myTime() {
    divNow.innerHTML = new Date();
  }
}

{
  const currentTime = document.getElementById("timer"),
    startButton = document.getElementById("start"),
    stopButton = document.getElementById("stop"),
    timerInput = document.getElementById("timer-input");

  startButton.addEventListener("click", () => {
    currentTime.innerText = timerInput.value;
    timerInput.value = "";
    let countdownInterval = setInterval(function () {
      if (currentTime.innerText > 0 && currentTime.innerText !== "") {
        currentTime.innerText--;
      } else {
        clearInterval(countdownInterval);
        currentTime.innerText = "Done!";
      }
      stopButton.addEventListener("click", () => {
        clearInterval(countdownInterval);
        currentTime.innerText = "Stopped!";
      });
    }, 1000);
  });
}
