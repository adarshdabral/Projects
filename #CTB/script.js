let score = 0;
let timeLeft = 10;
let timer;
//To convert HTML Element into a JS Variable
function updateScore() {
    document.getElementById("score").textContent = score;
  }
  function updateTimer() {
    document.getElementById("timeLeft").textContent = timeLeft;
  }
  //Onclick Function of the Button
function handleClick() {
    updateScore();
    score++;
  }

function startGame() {
  score = 0;
  timeLeft = 10;
  updateTimer();
// To change the value of timeleft after 1000ms --> setInterval(function(), time period in ms);
  timer = setInterval(function() {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  document.getElementById("clickButton").disabled = true;//button won't work
  alert("Game Over! Your score is " + score);
}

// Start the game
startGame();