var timerEL = document.getElementById('timer');
var mainEl = document.getElementById('main');
var highScore = document.getElementById('highscore');
var startButton = document.getElementById('sbutton');
var message = "Game Over!";
var timeLeft 

// Timer that counts down from 60
//function countdown () {



function startQuiz() {
    timeLeft = 60;
    //sets timer
    timer = setInterval(function(){
    timeLeft--;
    timerEl.textContent = timeLeft;    
    },1000);

    startButton.addEventListener("click",function(){
// event.preventDefault();
    if (timeLeft > 1) {
    timerEL.textContent = timeLeft + ' s remaining';
    console.log(timeLeft);
         } 
    else {
         timerEl.textContent=''
         clearInterval(timeInterval);
         displayMessage()   
         }
     }, 1000);
        
function displayMessage() {
message;
}    
} 