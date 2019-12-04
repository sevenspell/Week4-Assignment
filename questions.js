//Pseudocoding
// create array of objects for code quiz questions
var listOfQuizQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "3"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "3"
  },
  {
    title: "What is the correct code for 'A does not equal to B'?",
    choices: ["A =/= B", "A != B", "A === B", "A += B"],
    answer: "2"
  },
  {
    title: "The purpose of functions is to:",
    choices: ["perform actions in the content", "style the content", "create content", "log results"],
    answer: "1"
  },
  {
    title: "What function do you use to create random results?",
    choices: ["Math.floor(x)", "Math.round(x)", "Math.ceil(x)", "Math.random()"],
    answer: "4"
  }
];

// create global variables
var quizContainerElem = get("quizcontainer");
var questionH4Elem = "";
var choiceListElem = "";
var lineBreak = "";
var allChoiceButtonsElem = "";

var currentQuestionIndex = 0;
var currentQuestion = listOfQuizQuestions[currentQuestionIndex];
var latest = currentQuestionIndex++;

var titleValue = listOfQuizQuestions[latest].title;
var choicesValue = listOfQuizQuestions[latest].choices;
var answerValue = listOfQuizQuestions[latest].answer;

var hiScore = 0;
var totalSeconds = listOfQuizQuestions.length * 15;

//create functions
function get(x) {
  return document.getElementById(x);
};

function getClass(x) {
  return document.getElementsByClassName(x);
};

function addToHiScore() {
  hiScore += 15;
  highScoreElem.textContent = "HighScore: " + hiScore;
};

function minusFromTimer() {
  totalSeconds -= 15;
  timerRemainingElem.textContent = "Time Left: " + totalSeconds;
};

//1. instructions and start button for user to press start
  //hi-score on the top left shows original score = 0
  var highScoreElem = get("hiScoreSection");
  highScoreElem.textContent = "HighScore: " + hiScore;
  //timer on the top right shows original time = 90
  var timerRemainingElem = get("timerCountdownSection");
  timerRemainingElem.textContent = "Time Left: " + totalSeconds;

//2. Once start button is clicked..
  //addEventListener on button
get("startbutton").addEventListener("click", function (event) {
  event.preventDefault();

  //hide start button
  hideStart();
  //display question and 4 choices of answers
    //create HTML tags
  createHTML();
    //post questions
  renderQuestions();
  //timer starts countdown
  var timer = setInterval(updateTimer, 800);

  function updateTimer(){
    totalSeconds--;
    timerRemainingElem.textContent = "Time Left: " + totalSeconds;
    
  // stop timer at zero
    if (totalSeconds <= 0) {
      clearInterval(timer);
    } else if (latest ===  parseInt(listOfQuizQuestions.length)){
      clearInterval(timer);
    }
  };
});

  //instructions and start button is hidden
  function hideStart() {  
    var startHeaderHide = get("startheader");
    startHeaderHide.style.display = "none";
    var startContentHide = get("startcontent");
    startContentHide.style.display = "none";
    var startButtonHide = get("startbutton");
    startButtonHide.style.display = "none";
  };

//display question and 4 choices of answers
  //create function for creating html tags for questions
  function createHTML(){
    questionH4Elem = get("questiontitle");
    questionH4Elem.setAttribute("class", "show");
    var currentChoiceListEl = listOfQuizQuestions[0].choices;
    for (var i = 0; i < currentChoiceListEl.length; i++){
      choiceListElem = document.createElement("button");
      choiceListElem.setAttribute("class", "col-sm-8 offset-sm-2 col-md-8 offset-md-2 show choiceButtons");
      choiceListElem.setAttribute("id", [i+1]+"choicelist");
      choiceListElem.setAttribute("value", [i+1]);
      choiceListElem.setAttribute("type", "submit");
      choiceListElem.onclick = answerVerification;
      var choiceButtonInsert = get("choicelist").appendChild(choiceListElem);
      lineBreak = document.createElement("br");
      var lineBreakInsert = get("choicelist").appendChild(lineBreak);
    };
  };
    
  // parse question and choices to html tags
  function renderQuestions() {
    currentQuestionIndex = 0
    console.log("original question index =" + currentQuestionIndex);
    var titleValue = currentQuestion.title;
    var choicesValue = currentQuestion.choices;
    var answerValue = currentQuestion.answer;  
  
    console.log(titleValue);
    console.log(choicesValue);
    console.log(answerValue);
  
    get("questiontitle").textContent = titleValue;
    get("1choicelist").textContent = choicesValue[0];
    get("2choicelist").textContent = choicesValue[1];
    get("3choicelist").textContent = choicesValue[2];
    get("4choicelist").textContent = choicesValue[3];

    currentQuestionIndex++;
    latest = currentQuestionIndex++;
    return latest;
  };

//3. When choice of answer is clicked..
  // add onclick event function for choice button to return value
  function answerVerification(){
    var answerValue = listOfQuizQuestions[latest-1].answer;
    console.log(this.value);

    //determine if answer matches correct answer
    if (this.value === answerValue){
      // if answer is correct, show text to indicate "correct"
      get("answerstatus").textContent = "You got it correct!";
      // clear answerstatus after 1.5secs
      function delayedAnswerStatus(){
        setTimeout(function () {
          get("answerstatus").style.display='none';
        }, 800);
        return;
      };
      delayedAnswerStatus();
      // add 15 points to High Score
      addToHiScore();
      //show next question/choices
      renderNextQuestion();
    } else if (this.value != answerValue){
      // if answer is wrong, show text to indicate "wrong" 
      get("answerstatus").textContent = "You got it wrong! 15 seconds deducted.";
      // clear answerstatus after 1.5secs
      function delayedAnswerStatus(){
        setTimeout(function () {
          get("answerstatus").style.display='none';
        }, 800);
      };
      delayedAnswerStatus();
      //deduct 15 seconds from timer
      minusFromTimer();
      //show next question/choices
      console.log("this is length of qz qns: " + listOfQuizQuestions.length);
      console.log("this is latest index " + latest);
      if (latest === parseInt(listOfQuizQuestions.length)){
        setTimeout(function quizEnds() {
        }, 800);
      } else {
        renderNextQuestion();
      }
  };
};

  function renderNextQuestion() {
    //delay display of next question to clear answerstatus first
    currentQuestionIndex = latest;
    console.log("currentQuestionIndex " + currentQuestionIndex);

    if (currentQuestionIndex < parseInt(listOfQuizQuestions.length)){
      setTimeout(function executeNextQuestion() {
        var currentQuestion = listOfQuizQuestions[latest];
        var nextTitleValue = currentQuestion.title;
        var nextChoicesValue = currentQuestion.choices;
        var AnswerValue = currentQuestion.answer;
  
        console.log(nextTitleValue);
        console.log(nextChoicesValue);
        console.log(AnswerValue);
  
        get("questiontitle").textContent = nextTitleValue;
        get("1choicelist").textContent = nextChoicesValue[0];
        get("2choicelist").textContent = nextChoicesValue[1];
        get("3choicelist").textContent = nextChoicesValue[2];
        get("4choicelist").textContent = nextChoicesValue[3];
  
        currentQuestionIndex++;
        latest = currentQuestionIndex++;
        console.log("Next index coming up later: " + latest);
        return latest;
      }, 800);

  //4. When it comes to end of quiz ie. last question on list
     
  } else if (latest ===  parseInt(listOfQuizQuestions.length)){
      setTimeout(function quizEnds() {
        console.log("quiz ends no more next questions!");
        
        console.log(hiScore);
        console.log(totalSeconds);

        scoreNumber = parseInt(hiScore);
        finalTime = parseInt(totalSeconds);

        console.log(scoreNumber);
        console.log(finalTime);

        var total = scoreNumber+finalTime;
        console.log(total);

        function showFinalScore(){
          questionH4Elem.setAttribute("class", "hide");
          allChoiceButtonsElem1 = get("1choicelist");
          allChoiceButtonsElem2 = get("2choicelist");
          allChoiceButtonsElem3 = get("3choicelist");
          allChoiceButtonsElem4 = get("4choicelist");
          allChoiceButtonsElem1.setAttribute("class", "hide");
          allChoiceButtonsElem2.setAttribute("class", "hide");
          allChoiceButtonsElem3.setAttribute("class", "hide");
          allChoiceButtonsElem4.setAttribute("class", "hide");


          finalScoreElem = document.createElement("h4");
          finalScoreElem.setAttribute("class", "show");
          finalScoreElem.setAttribute("id", "score");
          finalScoreElem.textContent = ("Your final score is " + total + ".");//show remaining seconds on timer + high score as final 
          var appendFinalScore = get("finalscore").appendChild(finalScoreElem);
          console.log(appendFinalScore);

          initialsInput = document.createElement("label");
          initialsInput.setAttribute("class", "show formtext");
          initialsInput.setAttribute("id", "initialInput");
          initialsInput.setAttribute("for", "formGroup");
          initialsInput.textContent = ("Enter your initials:");
          var appendInitialsInput = get("initialsheader").appendChild(initialsInput);

          initialsInputBox = document.createElement("input"); // allow text input of initials and submit
          initialsInputBox.setAttribute("class", "show form-control");
          initialsInputBox.setAttribute("id", "initialInputBox");
          initialsInputBox.setAttribute("type", "text");
          initialsInputBox.setAttribute("placeholder", "VIC");
          var appendInitialsInputBox = get("initialsinput").appendChild(initialsInputBox);

          initialsButton = document.createElement("button");
          initialsButton.setAttribute("class", "btn btn-rita");
          initialsButton.setAttribute("id", "initialsbutton");
          initialsButton.setAttribute("type", "submit");
          initialsButton.textContent = ("Submit");
          initialsButton.onclick = goToFinalPage;
          var appendInitialsInputBox = get("initialsubmitbutton").appendChild(initialsButton);
        };
        showFinalScore();

        function goToFinalPage(){

          //store initials and high score in local storage
          var storeInitialsHiScore = localStorage.setItem(initialsInputBox.value, total);
          //go to results page 
          // get("form_id").submit();
          // window.location.replace(href="./resultspage.html");
        };
      }, 800);
  };
};












