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
  var countDown = document.querySelector('.countdown-timer')
  var startBtn = document.querySelector('.start-button')
  var choicesEl = document.querySelector("#choices");
  var buttonA = document.getElementById("a");
  var buttonB = document.getElementById("b");
  var buttonC = document.getElementById("c");
  var buttonD = document.getElementById("d");

  // Global Variables
  var secondsLeft = 120;
  var currentQuestionIndex = 0;
  var finalQuestionIndex = questions.length-1;
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

  // Gets ran when countdown times out
  // function endQuiz() {

  // }

  // Start's Quiz
  function startQuiz() {
    $('.start-button').attr("class", "d-none")
    $('#quiz-container').attr("class", "show")
    $('#current-score').attr("class", "show").text = score
    getQuestion()
  }

  //Get's Quesitons
  function getQuestion() {
    // Gets current question from array
    var currentQuestion = questions[currentQuestionIndex];

    // Updates Question
    var questionText = document.getElementById('question-text')
    questionText.textContent = currentQuestion.question;
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;

  }


    $(".btn-choice").on("click", function () {
      console.log("You clicked a button!!");

      // Then determine which button was clicked
      var userChoice = jQuery(this).text();
      console.log(userChoice.trim());

      // Seting variable correct to correct answer
      correct = questions[currentQuestionIndex].correctAnswer;
      console.log(userChoice == correct);

      if (userChoice.trim() == correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        console.log(score)
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

      if (currentQuestionIndex == finalQuestionIndex) {
        endQuiz()
      }
    })


  function endQuiz() {
    console.log('QuizEnded')
    $('#quiz-container').html(`
    <div class="container">
    <form class="col-lg-6 offset-lg-4">
        <div class="form-row align-items-center">
        <div class="col-auto">
            <label class="sr-only" for="inlineFormInput">Name</label>
            <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Initials">
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </div>
        </div>
    </form>
  </div>
    `)
  }




  // Event Listeners
  // Starts countdown and shows quiz when start button is clicked
  startBtn.addEventListener('click', () => {
    startCountdown();
    startQuiz();
  })

})
