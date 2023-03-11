//create a function to return a random choice as the computer choice using Math.random()

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; //they should be stings so I quoted them
    
    let choiceIndex = getRandomInt(0,3); //returns an integer between 0 and 2
    //console.log(choiceIndex);
    let computerChoice =  choices[choiceIndex];
    return(computerChoice); 
    
}
//call the function
console.log(getComputerChoice());

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
    return playerChoice;
}
//call
console.log(playerSelection());

//*********************************

// checks who wins/loses, the user or the computer

function playRound(playerChoice, computerChoice ){
    if (playerChoice === computerChoice){
        //console.log('It is a tie')
        return("it's a tie!") ;  
    }else if (playerChoice == 'rock' && computerChoice == 'paper') { 
        return('computer chose paper! so computer wins.');// one score for computer should be added
    }//BUG: NO MATTER WHAT IT RETURNS ITS A TIE!!!!
    
    //maybe using switch is better as we have lots of conditions but it didn't work try it later
}
//call
console.log(playRound());

