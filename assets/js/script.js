// pseudo-code steps
// 1 when user clicks start btn, bring up quiz, begin countdown timer 
// 2 when user chooses an answer, check if right or wrong
// 3 if answer is right, display "correct" and move to next question
// 4 if answer is wrong, display "wrong", deduct 10 seconds from timer, 
//   and move to the next question
// 5 repeat steps 2 through 4 until finished all five questions
// 6 when quiz is complete:
// a. display "game over" 
// b. stop the clock,
// c. use the remaining time as "high score", 
// d. prompt for/collect users initials
// e. post initials with high score



var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('primary');
var secondaryEl = document.getElementById('secondary');
var highScore = document.getElementById('highscore');
var startButton = document.getElementById('sbutton');
var orderedList = document.getElementById('choiceList')
var message = "Game Over!";
var timeLeft;
var timeInterval;
var test = "test content";
var questionIndex = 0;



var questions = [
  {
    title: "Commonly used data types DO NOT include",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ___________.",
    choices: ["quotes", "curly brackets", "parantheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ___________.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ___________ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parantheses"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing   content to the debugger is ___________.",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];



startButton.addEventListener("click", function () {
  console.log("Hello, 'start button' working!");
  startQuiz();
});

//where you determine if right or wrong
function choiceClick() {
  console.log("Hello, 'choice click' is working!");


  // will need to add stuff to this function (perhaps "this" goes here??)
  //if (){
  // console.log(question.choices);
}


function startQuiz() {
  timeLeft = 75;
  timeInterval = setInterval(function () {
    console.log(timeLeft)

    if (timeLeft > 0) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);

  var question = questions[questionIndex]

  for (var i = 0; i < question.choices.length; i++) {
    mainEl.textContent = " ";
    secondaryEl.textContent = question.title;

    var choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = question.choices[i];
    choiceBtn.className = "button";
    // Tutor said I'll need to add something here ("this" stuff??)  

    choiceBtn.onclick = choiceClick;
 

    orderedList.append(choiceBtn);

    console.log("i = " + i);

    // iterating 4x bc they are 4 answer choices displayed
    // I need to get an iteration counter for the questions.titles. for
    // loop to work correction (I think).
  }
  //    else {
  //         timerEl.textContent=''
  //         clearInterval(timeInterval);
  //         displayMessage()   
  //         }
  //     }, 1000);


}