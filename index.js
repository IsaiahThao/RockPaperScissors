const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const selectionButtons = document.querySelectorAll('.selector');
let humanScore = 0;
let computerScore = 0;

console.log('Test');

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', (e) => {
        const choice = e.target.id
        makeChoice(choice)
    })
})

function getComputerChoice(){
    let decider = Math.floor(Math.random()*3)
    let choice

    if (decider == 0){
        choice = 'rock'
    }

    else if(choice == 1){
        choice = 'paper'
    }

    else{
        choice = 'scissors'
    } 
    return choice
}

function makeChoice(humanSelection){
    const computerSelection = getComputerChoice()

    if (playRound(humanSelection, computerSelection)){
        incrementPlayerScore()
    }
    else{
        incrementCopmuterScore()
    }

    gameOver()
}

function playRound(humanSelection, computerSelection){
    const displayWinner = document.querySelector('.display-choice');
    if (humanSelection == computerSelection){
        displayWinner.innerHTML = 'Draw!'
    }
    
    if (humanSelection == 'rock'){
        if (computerSelection == 'paper'){
            displayWinner.innerHTML = 'You lose! Paper beats rock'
            return false
        }
        else{
            displayWinner.innerHTML = 'You win! Rock beats scissors'
            return true
        }
    }

    else if (humanSelection == 'paper'){
        if (computerSelection == 'scissors'){
            displayWinner.innerHTML = 'You lose! Scissors beats paper'
            return false
        }
        else{
            displayWinner.innerHTML = 'You win! Paper beats rock'
            return true
        }
    }

    else{
        if (computerSelection == 'paper'){
            displayWinner.innerHTML = 'You win! Scissors beats paper'
            return true
        }
        else{
            displayWinner.innerHTML = 'You lose! Rock beats scissors'
            return false
        }
    }
}

function incrementPlayerScore(){
    humanScore += 1;
    const displayHumanScore = document.querySelector('#user-score')
    displayHumanScore.innerHTML = `${humanScore}`
}

function incrementCopmuterScore(){
    computerScore += 1;
    const displayComputerScore = document.querySelector('#computer-score')
    displayComputerScore.innerHTML = `${computerScore}`
}

function gameOver(){
   if (humanScore + computerScore == 5){
    if (humanScore > computerScore){
        alert(`Game over! You win`)
    }
    else if (computerScore > humanScore){
        alert(`Game over! You lose!`)
    }
    else{
        alert(`Game over! Draw!`)
    }
   }
}