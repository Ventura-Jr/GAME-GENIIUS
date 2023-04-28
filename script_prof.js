let buttonColors = ['red', 'green', 'blue', 'yellow'];
let gamePattern = [];
let userPattern = [];
let level = 0;
let turn = 0;
let started = false;

document
    .getElementById('start-button')
    .addEventListener('click', ()=>{
    if(!started){
        started = true;
        nextSequence();
    }
})

function nextSequence(){
    userPattern = [];
    turn = 0;
    level++;
    document
    .querySelector('h1').textContent = 'Nível ' + level;

    let randomColor = 
    buttonColors[Math.floor(Math.random() * buttonColors.length)]
    gamePattern.push(randomColor)


    let i = 0;
    let intervalId = setInterval(function() {
        flashButton(gamePattern[i]);
        i++;
        if(i > gamePattern.length){
            clearInterval(intervalId);
            turn = 1;
        }
    }, 500)
}

function flashButton(color) {
    let button = document.querySelector("." + color);
    if (button !== null) { // adicionando a verificação
      button.style.opacity = "0.5";
      setTimeout(function() {
        button.style.opacity = "1";
      }, 500);
    }
  }
  

document
    .querySelectorAll('.button')
    .forEach(function(button){
    button.addEventListener('click', function() {
        if(turn === 1){
            let color = button.classList[1];
            flashButton(color);
            userPattern.push(color);
            if(!checkAnswer()) {
                alert('Game Over');
                gameOver();
            }
        }
    })
})

function checkAnswer(){
    let lastIndex = userPattern.length -1;
    if(
        gamePattern[lastIndex] !== userPattern[lastIndex]
    ){
        return false;
    }
    
    if(userPattern.length === gamePattern.length){
        setTimeout(function() {
            nextSequence()
        }, 1000);
    } else {
        turn = 1;
    }
    return true
}

function gameOver() {
    gamePattern = [];
    userPattern = [];
    level = 0;
    turn = 0;
    started = false;
    document.querySelector('h1').textContent = "Vamos iniciar novamente?"
}
