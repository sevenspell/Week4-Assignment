//Pseudocoding


// create array of objects for code quiz questions
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

// create global variables
var quizContainerElem = get("quizcontainer");
var currentQuestionIndex = 0;
var currentQuestion = listOfQuizQuestions[currentQuestionIndex];
var nextQuestionIndex = currentQuestionIndex + 1;
var nextQuestion = listOfQuizQuestions[nextQuestionIndex];
var hiScore = 0;
var totalSeconds = questions.length * 15;


var startheader, startcontent, question, choice, choices, chA, chB, chC, chD;

//1. instructions and start button for user to press start
  //hi-score on the top left shows original score = 0
  var highScoreElem = get("hiScoreSection");
  highScoreElem.textContent = "HighScore: " + hiScore;
  //timer on the top right shows original time = 75
  var timerRemainingElem = get("timerCountdownSection");
  timerRemainingElem.textContent = "Time Left: " + totalSeconds;

  console.log(highScoreElem);
  console.log(timerRemainingElem);


//2. Once start button is clicked..
  //instructions and start button is hidden

  //timer starts counting down
  //display question and 4 choices of answers

//3. When choice of answer is clicked..
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
}

function timerCountdown() {
  totalSeconds--;
}

function addToHiScore() {
  hiScore += 15;
}

function minusFromTimer() {
  totalSeconds -= 15;
}

function finalScoreCalc() {
  hiScore + totalSeconds;
}

function startQuiz()

function renderQuestions(i) {

  var questionElem = document.createElement("div");
  questionElem.setAttribute("class", "col-sm-8 offset-sm-2 col-md-8 offset-md-2 show");

  var choiceListElem = document.createElement("li");
  choiceListElem.setAttribute("class", "col-sm-8 offset-sm-2 col-md-8 offset-md-2 show");

  var titleValue = listOfQuizQuestions[0].title;
  var choicesValue = listOfQuizQuestions[0].choices;
  var answerValue = listOfQuizQuestions[0].answer;  

  console.log(titleValue);
  console.log(choicesValue);

  questionElem.innerHTML(titleValue);
  choiceListElem.innerHTML(choicesValue);

  // get("quizquestions").textContent = titleValueString;
  // createList.appendChild(document.createTextNode(choicesValueString));
  // choiceListElem.appendChild(createList);
  
 
}


get("startbutton").addEventListener("click", function () {
  //timer starts running
  //hide start button
  //loop questions
  for (var i = 0; i < listOfQuizQuestions.length - 1; i++) {
    //get("test").appendChild(element);
    renderQuestions(i);
  }
});

