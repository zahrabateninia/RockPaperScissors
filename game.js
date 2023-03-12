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

function playRound(player, computer){
    console.log(player+ ' ' +computer);
    if(player === computer ){ //whenever you wanna use a function you must call it with parenthesis
        return("it's a tie!") ;   
    }else if ((player=== 'rock' && computer === 'paper') || (player==='paper' && computer==='scissors') 
    || (player==='scissors' && computer==='rock')) { 
        return('computer wins.'); 
     }else{
        return('you won!');
     }
    
    }   
//call
console.log(playRound(playerSelection(), getComputerChoice())); // we should pass some parameters
// remember it is best practice to make your variables local so if they had the same names it wont make trouble for you 