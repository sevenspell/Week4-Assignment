//Pseudocoding

//1. button for user to press start
  //hi-score on the top left
  //timer on the top right
//2. Five questions
  //user clicks answer and get immediate feedback on whether it's correct or wrong
    //if answer is wrong, 15 seconds deducted from timer
//3. page showing hi-score and text input for player initials
  // score calculation is 15 points for each correct answer plus remaining time left
//final page showing user and hi-score, clear high scores button, and go back to start button


var questions = [
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


  Init();