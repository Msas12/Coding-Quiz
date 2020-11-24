var countDown = document.querySelector('.countdown-timer')
var startBtn = document.querySelector('.start-button')

// Countdown start
var secondsLeft = 120;

//Countdown Function
function startCountdown() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = 'Time Remaining: ' + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

// Gets ran when countdown times out
function sendMessage() {

}


//Event Listeners
// Starts count down when start button is clicked
startBtn.addEventListener('click', startCountdown())