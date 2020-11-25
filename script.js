// Questions 
var questions = [
  {
      title: "Commonly Used data types DO NOT include:",
      choices: ["stings", "alerts", "booleans", "numbers"],
      answer: "alerts"
  },
  {
      title: "The condition in an if / else statment is enclosed within _____.",
      choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "What javascipt method can we use to select an html element?",
      choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
      answer: "Both 1 and 3"
  },
  {
      title: "What html tag is NOT included in the HEAD tag?",
      choices: ["link", "meta", "title", "header"],
      answer: "header"
  },
  {
      title: "What attribute is used in html to decorate content?",
      choices: ["css", "class", "src", "style"],
      answer: "style"
  }
]

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
    // endQuiz();
    }

  }, 1000);
}

// Gets ran when countdown times out
// function endQuiz() {

// }

// Start's Quiz
function startQuiz() {
  $('.start-button').attr("class", "hide")
  $('#quiz-container').attr("class", "show")
    getQustion()
}

//Get's Quesitons
function getQustion() {
  var currentQuestion = questions[currentQuestionIndex];

  var questionText = $('#question-text')
  questionText.textContent = currentQuestion.title

}


// Event Listeners
// Starts countdown when start button is clicked
startBtn.addEventListener('click', () => {
  startCountdown();
  startQuiz();
})
