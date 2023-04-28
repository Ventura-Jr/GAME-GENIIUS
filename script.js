let buttonColors = ['red' , 'green' , 'blue' , 'yeloow'];
let gamePattern = [];
let userPattern = [];
let level = 0;
let turn = 0;
let started = false;

document.getElementById('start-button').addEventListener('click', ()=> {
    if(!started){
        started = true;
        nextSequence();
    }
})

function nextSequence() {
    userPattern = [];
    turn = 0;
    level ++ ;
    document.querySelector('h1').textContent = 'Nível ' + level;

let randomColor = buttonColors[Math.floor(Math.random() * buttonColors.length)] 
gamePattern.push(randomColor)

let i = 0; 
let intervalId = setInterval(function() {
    flashButton(gamePattern[i]);                //botão piscando
    i++;
    if(i > gamePattern.length) {
        clearInterval(intervalId);
        turn = 1;
    }    
}, 500)
}

function flashButton(color) {
    let button = document.querySelectorAll('.' + color)
    button.style.opacity = '0.5';
    setTimeout(function() {button.style.opacity = '1' }, 400)
}

document.querySelectorAll('.button').forEach(function(button) {
button.addEventListener('click' , function() {
    if(turn === 1) {
        let color = button.classList[1];
        flashButton(color);
        userPattern.push(color);
        if(!checkAnswer()) {
            alert('GAME OVER');
            gameOver();
        }
    }
})
})

function checkAnswer () {
    return false;
}

function gameOver () {
    gamePattern = [];
    userPattern = [];
    level = 0;
    turn = 0;
    started = false;
    document.querySelector('h1').textContent = "Vamos novamente?"
}