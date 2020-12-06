
const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare(){
  square.forEach(className => {
    className.classList.remove("mole");
  });

  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  // assigning the ID of randomPosition to hitPosition
  hitPosition = randomPosition.id;
  console.log(hitPosition);
}


square.forEach(square => {
  square.addEventListener('mouseup', () => {
    once: true;
    if(square.id === hitPosition) {
      square.classList.add("hit-mole");
      setTimeout(() => square.classList.remove("hit-mole"), 100);
      result += 1;
      score.textContent = result;
    }
  });
})

function moveMole(){
  let timerId = null;
  timerId = setInterval(randomSquare,700);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if(currentTime === 0) {
    clearInterval(timerId);
    alert(`GAME OVER! Your final score is ${result}`)
  }
}

let timerId = setInterval(countDown, 1000);
moveMole();