function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; 
    
    let choiceIndex = getRandomInt(0,3); 
    let computerChoice =  choices[choiceIndex]; 
    return(computerChoice); 
    
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}
//***************************** 

function playRound(player, computer){
    let playerScore =document.querySelector('#player-score');
    let computerScore = document.querySelector('#computer-score');

    if(player === computer ){ 
        return; }

    else if ((player=== 'rock' && computer === 'paper') || (player==='paper' && computer==='scissors') 
    || (player==='scissors' && computer==='rock')) {
        ++computerScore.textContent;
    }else{
         ++playerScore.textContent;
     };

     if (computerScore.textContent == 5){
         let computerWins = document.querySelector('#computer-wins');
         computerWins.style.display = 'block';
         computerScore.textContent = 0;
         playerScore.textContent = 0;
        }else if ( playerScore.textContent == 5 ){
         let playerWins = document.querySelector('#player-wins');
         playerWins.style.display = 'block'; 
        computerScore.textContent = 0;
        playerScore.textContent = 0;

     }
    }



//******************************************
//refresh the website
