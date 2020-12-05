$(document).ready(function () {
  // Questions 
  var questions = [{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "1"
  },
  {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "Document Object Model"
  },
  {
    question: "What is used primarily to add styling to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "CSS"
  },
  {
    question: "What HTML tags are JavaScript code wrapped in?",
    choiceA: "div",
    choiceB: "link",
    choiceC: "head",
    choiceD: "script",
    correctAnswer: "script"
  },
  {
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "No expiration time"
  },
  {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "World Wide Web"
  },
  {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "src"
  },

  ];

  // HTML Elements
  var highscoreDisplayScore = document.getElementById("highscore-score");
  var highscoreDisplayName = document.getElementById("highscore-initials");
  var countDown = document.querySelector('.countdown-timer')
  var buttonA = document.getElementById("a");
  var buttonB = document.getElementById("b");
  var buttonC = document.getElementById("c");
  var buttonD = document.getElementById("d");

  // Global Variables
  var secondsLeft = 70;
  var currentQuestionIndex = 0;
  var finalQuestionIndex = questions.length;
  var score = 0
  var correct;
  

  //Countdown Function
  function startCountdown() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      countDown.textContent = 'Time Remaining: ' + secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        // endQuiz();
      }

    }, 1000);
  }


  // Start's Quiz
  function startQuiz() {
    $('.start-button').attr("class", "d-none")
    $('#quiz-container').attr("class", "show")
    $('#current-score').text('Score: ' + score)
    $('#current-score').attr("class", "show")
    getQuestion()
  }

  function updateScore() {
    $('#current-score').text('Score: ' + score)  

  }

  //Get's Quesitons
  function getQuestion() {
    // Gets current question from array
    var currentQuestion = questions[currentQuestionIndex];

    // Finishes Quiz after final question
    if (currentQuestionIndex === finalQuestionIndex) {
      return endQuiz()
    }

    // Updates Question
    var questionText = document.getElementById('question-text')
    questionText.textContent = currentQuestion.question;
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;

  }


    $(".btn-choice").on("click", function () {

      // Then determine which button was clicked
      var userChoice = jQuery(this).text();
      console.log(userChoice.trim());

      // Seting variable correct to correct answer
      correct = questions[currentQuestionIndex].correctAnswer;
      console.log(userChoice == correct);

      if (userChoice.trim() == correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        console.log(score)
        updateScore()
        //Display in the results div that the answer is correct
        $('#result').html('Correct')
        currentQuestionIndex++;
        getQuestion();

        //Display in the results div that the answer is incorrect
      } else if (userChoice.trim() !== correct && currentQuestionIndex !== finalQuestionIndex){
        $('#result').html('Incorrect')
        currentQuestionIndex++;
        secondsLeft-=10;
        getQuestion();
      }


    })


  function endQuiz() {
    console.log('QuizEnded')
    $('#quiz-container').html(`
    <div class="container">
      <div id="final-score" class="text-center mb-5">
      </div>
      <form class="col-lg-6 offset-lg-4">
          <div class="form-row text-center">
          <div class="col-auto">
              <label class="sr-only" for="inlineFormInput">Name</label>
              <input type="text" class="initials form-control mb-2" id="inlineFormInput" placeholder="Initials">
          </div>
          <div class="col-auto">
              <button type="submit" id="submit-score" class="btn btn-primary mb-2">Submit</button>
          </div>
          </div>
      </form>
  </div>
    `)

    //Show Current Score
    $('#final-score').text('Total Score: ' + score)

    var highscoreInputName = document.querySelector('input')

    //Function to submit high score and go to high scores page
    $('#submit-score').on('click', function (event){
      event.preventDefault();

      if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
      }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim()
        var currentHighscore = {
            name : currentUser,
            score : score
          }
      }

      savedHighscores.push(currentHighscore);
      localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));

      window.location.href = 'highscores.html';
      generateHighscores()

    })

  }

  // This function clears the list for the high scores and generates a new high score list from local storage
  function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
  }

  $('#playAgain').on('click', function(){
    window.location.href = 'index.html'
  })

  $('#clearHighscore').on('click', function(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
  })







  // Initial Event Listeners
  // Starts countdown and shows quiz when start button is clicked
  $('.start-button').on('click', () => {
    startCountdown();
    startQuiz();
  })

})
