const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const selectionButtons = document.querySelectorAll('.selector')

console.log('Test');

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', (e) => {
        const choice = e.target.id
        playRound(choice, getComputerChoice())
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

function playRound(humanSelection, computerSelection){
    if (humanSelection == computerSelection){
        console.log('Draw!')
    }
    
    if (humanSelection == 'rock'){
        if (computerSelection == 'paper'){
            console.log('You lose! Paper beats rock') 
            return false
        }
        else{
            console.log('You win! Rock beats scissors')
            return true
        }
    }

    else if (humanSelection == 'paper'){
        if (computerSelection == 'scissors'){
            console.log('You lose! Scissors beats paper')
            return false
        }
        else{
            console.log('You win! Paper beats rock')
            return true
        }
    }

    else{
        if (computerSelection == 'paper'){
            console.log('You win! Scissors beats paper')
            return true
        }
        else{
            console.log('You lose! Rock beats scissors')
            return false
        }
    }
}




