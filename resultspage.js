//5. Go to hi-score page with initials
  //show latest hi-score ranking (sorted by highest scores)

  function showRanking(){
    // var getInitials = localStorage.getItem(initialsInputBox.value);
    // var getHighScore = localStorage.getItem(total);
    // var stringifyInitials = JSON.stringify(getInitials);
    // var stringifyHighScore = JSON.stringify(getHighScore);

    var data = localStorage["item_key"];

  
    for (var i = 0; i < localStorage.length; i++){
      var getInitialsHiScore = localStorage[key];
      var stringifyInitialsHiScore = JSON.stringify(getInitialsHiScore);

      initialRanking = document.createElement("p");
      initialRanking.setAttribute("class", "show");
      initialRanking.setAttribute("id", "ranking"+i);
      initialRanking.textContent = stringifyInitialsHiScore;
      var appendIRanking = get("initialstable").appendChild(initialRanking);
      highScoreRanking = document.createElement("p");
      highScoreRanking.setAttribute("class", "show");
      highScoreRanking.setAttribute("id", "ranking"+i);
      highScoreRanking.textContent = stringifyInitialsHiScore.value;
      var appendSRanking = get("initialstable").appendChild(highScoreRanking);
  
    };

  };

  showRanking();



  //show Clear button to clear localStorage
  //show Go Back to Start button to go back to initial page