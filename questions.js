//Pseudocoding

//1. button for user to press start
//hi-score on the top left
//timer on the top right starts running
//2. Five questions
//user clicks answer and get immediate feedback on whether it's correct or wrong
//if answer is wrong, 15 seconds deducted from timer
//3. page showing hi-score and text input for player initials
// score calculation is 15 points for each correct answer plus remaining time left
//final page showing user and hi-score, clear high scores button, and go back to start button



var listOfQuizQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What is the correct code for 'A does not equal to B'?",
    choices: ["A =/= B", "A !== B", "A === B", "A += B"],
    answer: "A !== B"
  },
  {
    title: "The purpose of functions is to:",
    choices: ["perform actions in the content", "style the content", "create content", "log results"],
    answer: "perform actions in the content"
  },
  {
    title: "What function do you use to create random results?",
    choices: ["Math.floor(x)", "Math.round(x)", "Math.ceil(x)", "Math.random()"],
    answer: "Math.random()"
  }
];

var currentQuestionIndex = 0;
var currentQuestion = listOfQuizQuestions[currentQuestionIndex];
var nextQuestionIndex = currentQuestionIndex + 1;
var nextQuestion = listOfQuizQuestions[nextQuestionIndex];
var hiScore = 0;
var totalSeconds = 75;
var timeRemaining = totalSeconds;


var quizheader, quizquestions, choicesarea, question, choice, choices, chA, chB, chC, chD;


function get(x) {
  return document.getElementById(x);
}

function timerCountdown() {
  timerInitial--;
}

function addToHiScore() {
  hiScore += 15;
}

function minusFromTimer() {
  timeRemaining -= 15;
}

function finalScoreCalc() {
  hiScore + timeRemaining;
}

for(p in listOfQuizQuestions) {
  console.log (p, listOfQuizQuestions[p])
}

function renderQuestions() {
  var questionElem = get("quizquestions");
  var choiceListElem = get("choicesarea");
  var createList = document.createElement("li");

  var titleValue = listOfQuizQuestions["title"];
  var choicesValue = listOfQuizQuestions["choices"];
  var answerValue = listOfQuizQuestions["answer"];

  var titleValueString = JSON.stringify(titleValue);
  var choicesValueString = JSON.stringify(choicesValue);
  var answerValueString = JSON.stringify(answerValue);

  get("quizquestions").textContent = titleValueString;
  createList.appendChild(document.createTextNode(choicesValueString));
  choiceListElem.appendChild(createList);
  
 
}


get("startbutton").addEventListener("click", function () {
  //timer starts running
  //hide start button
  //loop questions
  for (var i = 0; i < listOfQuizQuestions.length - 1; i++) {
    //get("test").appendChild(element);
    renderQuestions();
  }

  // display() so that can be used for every level
  //addeventlistener for every choice button
  //get button (index or string) for value
  //if/else to compare choice vs correct answer
  // Show text to confirm correct or wrong
  // score ++
  // remove current qn
  // display next qn
  // else (wrong)
  //timer --
  //show text to confirm wrong
  // remove current qn
  // display next qn

});

