const buttons = [document.getElementById('rock'),document.getElementById('paper'),document.getElementById('scissor')];
const playerscore = document.getElementById('playerscr');
const computerscore = document.getElementById('computerscr');

const reset = document.getElementById('reset');



reset.addEventListener('click',() => {location.reload()} );

let playerscr = 0;
 let computerscr = 0;

 buttons.forEach(button => {button.addEventListener('click',function()
 {
  playerround(button.id);
 })
});

//random choice for computer
function computerplay (){
  let choices = ['rock','paper','scissor'];
  return choices[Math.floor(Math.random() * choices.length)]; 
}


//buttons disable function 

function disablebutns(){
  buttons.forEach(elm => {
    elm.disabled = true;
  });
}






// function for game
function playerround(playerselection){


  let computerChoice = computerplay();

  let result = '';


if ((playerselection == 'rock' && computerChoice == 'scissor') ||
    (playerselection == 'paper' && computerChoice == 'rock')  ||
    (playerselection == 'scissor' && computerChoice == 'paper')
){
  playerscr += 1;
  playerscore.innerHTML = `<h3>${playerscr}</h3>` 
result = "<h3>You Win!</h3>"

}
else if (playerselection == computerChoice){
  result = "<h3>It is a Tie.</h3>"
}

else {
  computerscr += 1;
  computerscore.innerHTML = `<h3>${computerscr}</h3>` 
result = "<h3>You Lose!</h3>"
}


if (playerscr == 5){
  result = "<h3>You Won 5 Rounds. <br> For Playing Again Click on Play Again. </h3>"
  disablebutns();
}

else if (computerscr == 5 ){
  result = "<h3>Computer Won 5 Rounds. For Playing Again Click on Play Again.</h3>"
  disablebutns();
}



return  mainres= document.getElementById('main').innerHTML = result;

}





































