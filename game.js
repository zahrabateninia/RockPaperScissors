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
    console.log(player +computer);
    if(player === computer ){ 
        console.log("it is a tie");
        return; }

    else if ((player=== 'rock' && computer === 'paper') || (player==='paper' && computer==='scissors') 
    || (player==='scissors' && computer==='rock')) {
        ++computerScore.textContent;
    }else{
         ++playerScore.textContent;
     };
     
    
    }


//******************************************
