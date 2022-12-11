function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

function getComputerChoice(){
    let array = ['Rock', 'Paper', 'Scissors']
    const randomElement = array[Math.floor(Math.random()*array.length)];
    return randomElement;
}



function playRound(playerSelection, computerSelection){
    playerSelection = toTitleCase(playerSelection)
    computerSelection  = toTitleCase(computerSelection)
    let won = false
    let draw = false;
    if(playerSelection==computerSelection){
        draw = true;
    }
    if((playerSelection=="Rock" && computerSelection == "Scissors") || (playerSelection=="Scissors" && computerSelection=="Paper") || (playerSelection=='Paper' && computerSelection=="Rock")){
        won = true
    }
    if(won){
        return `${playerSelection} beats ${computerSelection}. You Won!`
    }
    else if(draw==true){
        return `You both chose ${playerSelection}. It's a Tie!`
    }
    else{
        return `${computerSelection} beats ${playerSelection}. You Lose!`
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0;i<5;i++){
        let playerSelection = prompt("Enter your choice: ")
        let computerSelection = getComputerChoice();
        let curResult = playRound(playerSelection, computerSelection);
        let temp = curResult.slice(-3);
        if(temp=="se!"){
            computerScore++;
        }else if(temp=="on!"){
            playerScore++;
        }
        console.log(curResult)
    }
    console.log(playerScore)
    console.log(computerScore)
    if(playerScore>computerScore){
        console.log("You are the winner!!")
    }else if(playerScore== computerScore){
        console.log("You are tied with the Computer");
    }else{
        console.log("You lost! The computer won!")
    }
}
game()