function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; 
    
    let choiceIndex = getRandomInt(0,3); 
    //console.log(choiceIndex);
    let computerChoice =  choices[choiceIndex]; 
    return(computerChoice); 
    
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
//***************************** 

function playerSelection() {
    let playerChoice = prompt('Rock or paper or scissors?');
    //case insensitivity 
    playerChoice.toLowerCase();
    return playerChoice;//local
}

//*********************************
let computerCount = 0;
let playerCount = 0; 
console.log('The computer point:' + computerCount);
console.log('Your point:' + playerCount);

function playRound(player, computer){
    console.log('You chose '+player+ ' and the computer chose ' +computer+'\n' +'As a result: ');
    if(player === computer ){ 
        return("It's a tie!") ;  

    }else if ((player=== 'rock' && computer === 'paper') || (player==='paper' && computer==='scissors') 
    || (player==='scissors' && computer==='rock')) { 
        computerCount++;
        console.log("The computer's point:" + computerCount);
        console.log('Your point:' + playerCount);

        return('The computer wins.'); 
     }else{
        playerCount++;
        console.log('Your point:' + playerCount);
        console.log("The computer's point:" + computerCount);
        return('You win!');
     }
    
    }   

//******************************************
//if the computer or the player reached 5 times wining stop the game 

while(true){

    console.log(playRound(playerSelection(), getComputerChoice())); 
    
    if (computerCount === 6){
        console.log('The computer won the game!');
        break;
    }else if (playerCount === 6){
        console.log('You beat the computer five times so you won! bravo.');
        break;
    }
}
