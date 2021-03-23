var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('primary');
var secondaryEl = document.getElementById('secondary');
var highScore = document.getElementById('highscore');
var startButton = document.getElementById('sbutton');
var message = "Game Over!";
var timeLeft;
var timeInterval;
var i;
var test ="test content";   

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
  {   title: "Arrays in JavaScript can be used to store ___________.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {   title: "String values must be enclosed within ___________ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parantheses"],
    answer: "quotes"
  },
  {   title: "A very useful tool used during development and debugging for printing   content to the debugger is ___________.",
    choices: ["JavaScrip", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

startButton.addEventListener("click", function () {
    console.log("Hello, I'm working!");
    startQuiz();
});


function startQuiz() {
    timeLeft = 75;
    timeInterval = setInterval(function () {
        console.log(timeLeft)

        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);

        for (i = 1; i < 6; i++) {
            mainEl.textContent = " ";
            secondaryEl.textContent = questions(i); // need to "inject" object values here
         
             
    }       



//    else {
//         timerEl.textContent=''
//         clearInterval(timeInterval);
//         displayMessage()   
//         }
//     }, 1000);

// function displayMessage() { ??????????
// message;

}