// HTML Elements
var highscoreDisplayScore = document.getElementById("highscore-score");
var highscoreDisplayName = document.getElementById("highscore-initials");
  
  // This function generates a high score list from local storage
  function generateHighscores(){
    var highscores = JSON.parse(localStorage.getItem("savedHighscores"));
    for (i=0; i<highscores.length; i++){
        var newNameSpan = highscores[i].name
        var newScoreSpan = highscores[i].score

        $('#high-score-lists').prepend(`<tr><td class="bg-dark text-light h5 text-center highscore-score">${newNameSpan}</td><td class="bg-dark text-light h5 text-center highscore-initials">${newScoreSpan}</td></tr>`)
    }
  }

  $('#playAgain').on('click', function(){
    window.location.href = 'index.html'
  })

  $('#clearHighscore').on('click', function(){
    window.localStorage.clear();
    $('#high-score-lists').html("")
  })

  generateHighscores()