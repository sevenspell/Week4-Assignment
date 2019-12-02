//Pseudocoding


// create array of objects for code quiz questions
var listOfQuizQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "3choicelist"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "3choicelist"
  },
  {
    title: "What is the correct code for 'A does not equal to B'?",
    choices: ["A =/= B", "A !== B", "A === B", "A += B"],
    answer: "2choicelist"
  },
  {
    title: "The purpose of functions is to:",
    choices: ["perform actions in the content", "style the content", "create content", "log results"],
    answer: "1choicelist"
  },
  {
    title: "What function do you use to create random results?",
    choices: ["Math.floor(x)", "Math.round(x)", "Math.ceil(x)", "Math.random()"],
    answer: "4choicelist"
  }
];

// create global variables
var quizContainerElem = get("quizcontainer");
var questionDivElem = "";
var questionH4Elem = "";
var choiceListElem = "";



var currentQuestionIndex = 0;
var currentQuestion = listOfQuizQuestions[currentQuestionIndex];
var nextQuestionIndex = currentQuestionIndex + 1;
var nextQuestion = listOfQuizQuestions[nextQuestionIndex];
var hiScore = 0;
var totalSeconds = (listOfQuizQuestions.length * 15) + 15;

//1. instructions and start button for user to press start
  //hi-score on the top left shows original score = 0
  var highScoreElem = get("hiScoreSection");
  highScoreElem.textContent = "HighScore: " + hiScore;
  //timer on the top right shows original time = 90
  var timerRemainingElem = get("timerCountdownSection");
  timerRemainingElem.textContent = "Time Left: " + totalSeconds;




//2. Once start button is clicked..
  //addEventListener on button
get("startbutton").addEventListener("click", function () {
  //hide start button
  hideStart();
  //display question and 4 choices of answers
    //create HTML tags
  createHTML();
    //post questions
  renderQuestions();
  //timer starts countdown
  var timer;
  timer = setInterval(updateTimer, 1000);
  function updateTimer(){
    totalSeconds--;
    timerRemainingElem.textContent = "Time Left: " + totalSeconds;
    
  // stop timer at zero
    if (totalSeconds <= 0) {
      clearInterval(timer);
    };
  };

  //for (var i = 0; i < listOfQuizQuestions.length; i++) {}

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
    questionDivElem = document.createElement("div");
    questionDivElem.setAttribute("class", "col-sm-8 offset-sm-2 col-md-8 offset-md-2");
    questionDivElem.setAttribute("id", "questionDiv");
    questionDivElem.style.display = "block";
    get("quizcontainer").appendChild(questionDivElem);

    questionH4Elem = document.createElement("h4");
    questionH4Elem.setAttribute("class", "col-sm-8 offset-sm-2 col-md-8 offset-md-2");
    questionH4Elem.setAttribute("id", "questiontitle");
    questionH4Elem.style.display = "block";
    get("quizcontainer").appendChild(questionH4Elem);
    
    var currentChoiceListEl = listOfQuizQuestions[0].choices;
    for (var i = 0; i < currentChoiceListEl.length; i++){

    choiceListElem = document.createElement("button");
    choiceListElem.setAttribute("class", "col-sm-8 offset-sm-2 col-md-8 offset-md-2 choiceButtons");
    choiceListElem.setAttribute("id", [i+1]+"choicelist");
    choiceListElem.setAttribute("value", [i+1]);
    choiceListElem.setAttribute("type", "submit");
    choiceListElem.style.display = "block";
    get("quizcontainer").appendChild(choiceListElem);

    };
  };
    

  // parse question and choices to html tags
  function renderQuestions() {

    var titleValue = listOfQuizQuestions[0].title;
    var choicesValue = listOfQuizQuestions[0].choices;
    var answerValue = listOfQuizQuestions[0].answer;  
  
    console.log(titleValue);
    console.log(choicesValue);
    console.log(answerValue);
  
    get("questiontitle").textContent = titleValue;
    get("1choicelist").textContent = choicesValue[0];
    get("2choicelist").textContent = choicesValue[1];
    get("3choicelist").textContent = choicesValue[2];
    get("4choicelist").textContent = choicesValue[3];

  };

  

//3. When choice of answer is clicked..

    // addEventListener for choice button to return value

  var choiceButtonSelector = document.getElementsByClassName("choiceButtons");
  console.log(choiceButtonSelector);

  // choiceButtonSelector.addEventListener("click", function(){
  
  //   console.log("choiceButtons is working");

  // });

    // function returnChoiceValue(){
    // }



  //determine if answer matches correct answer
    // if answer is correct, show text to indicate "correct"
      //hide current question/choices
      //show next question/choices
    // if answer is wrong, show text to indicate "wrong" 
      //deduct 15 seconds from timer
      //hide current question/choices
      //show next question/choices

//4. When it comes to end of quiz ie. last question on list
  //go to results page 
    //show remaining seconds on timer as final score
    // allow text input of initials and submit
//5. Go to hi-score page with initials
  //show latest hi-score ranking (sorted by highest scores)
  //show Clear button to clear localStorage
  //show Go Back to Start button to go back to initial page



//create functions

function get(x) {
  return document.getElementById(x);
};

function addToHiScore() {
  hiScore += 15;
};

function minusFromTimer() {
  totalSeconds -= 15;
};

function finalScoreCalc() {
  hiScore + totalSeconds;
};



