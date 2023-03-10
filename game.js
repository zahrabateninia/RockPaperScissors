//create a function to return a random choice as the computer choice using Math.random()

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    
    let choiceIndex = getRandomInt(0,3); //returns an integer between 0 and 2
    //console.log(choiceIndex);
    let computerChoice =  choices[choiceIndex];
    console.log(computerChoice);
    return(computerChoice); 
    
}
//call the function
getComputerChoice();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
//***************************** 

//player selection 

function playerSelection() {
    let userChoice = prompt('Rock or paper or scissors?');
    console.log(userChoice);
}
//call
playerSelection();

//*********************************

// checks who wins/loses, the user or the computer

function playRound(userChoice, ){
    if (playerSelection === getComputerChoice ){
        return("it's a tie!")
        console.log('its a tie')
    }
}
playRound();

