//create a function to return a random choice as the computer choice using Math.random()

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; //they should be stings so I quoted them
    
    let choiceIndex = getRandomInt(0,3); //returns an integer between 0 and 2
    //console.log(choiceIndex);
    let computerChoice =  choices[choiceIndex]; //local , cannot be used out side of this scope!
    return(computerChoice); 
    
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
//***************************** 

//player selection 

function playerSelection() {
    let playerChoice = prompt('Rock or paper or scissors?');
    //case insensitivity 
    playerChoice.toLowerCase();
    return playerChoice;//local
}

//*********************************

// checks who wins/loses, the user or the computer
//need a counter to count the times they win

let computerCount = 0;
let playerCount = 0; 

function playRound(player, computer){
    console.log('You chose '+player+ ' and the computer chose ' +computer+'\n' +'As a result: ');
    if(player === computer ){ //whenever you wanna use a function you must call it with parenthesis
        computerCount++;
        playerCount++;
        return("it's a tie!") ;   
    }else if ((player=== 'rock' && computer === 'paper') || (player==='paper' && computer==='scissors') 
    || (player==='scissors' && computer==='rock')) { 
        computerCount++;
        return('computer wins.'); 
     }else{
        playerCount++;
        return('you won!');
     }
    
    }   
//call
console.log(playRound(playerSelection(), getComputerChoice())); // we should pass some parameters
// remember it is best practice to make your variables local so if they had the same names it wont make trouble for you 
//******************************************
//if the computer or the player reached 5 times wining stop the game 
while(true){// there are infinite possibilities
    playRound();
    
    if ((computerCount === 5) || (playerCount === 5) ){
        break;
    }
}
