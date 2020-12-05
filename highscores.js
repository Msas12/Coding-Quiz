// HTML Elements
var highscoreDisplayScore = document.getElementById("highscore-score");
var highscoreDisplayName = document.getElementById("highscore-initials");
  
  // This function generates a high score list from local storage
  function generateHighscores(){
    var highscores = JSON.parse(localStorage.getItem("savedHighscores"));
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li")
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



  generateHighscores()