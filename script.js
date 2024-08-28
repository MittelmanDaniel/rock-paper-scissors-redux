function getComputerChoice(){
    let options = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3)

    return options[index]
}

function getHumanChoice(){
    let options = ["rock", "paper", "scissors"]
    let choice = prompt("What do you choose?").toLowerCase()

    while(! options.includes(choice)){
        choice = prompt("You need to pick rock, paper or scissors").toLowerCase()
    }
    return choice



}

const playerDisplay = document.querySelector('#player')
const botDisplay = document.querySelector('#bot')
const winner = document.querySelector('#winner')

let playerScore = 0
let botScore = 0

function playRound(humanChoice){

    humanChoice = humanChoice.toLowerCase()
    computerChoice = getComputerChoice()
    let options = ["rock", "paper", "scissors"]

    human_ind = options.indexOf(humanChoice)
    computer_ind = options.indexOf(computerChoice)

    if(human_ind == computer_ind){
        console.log(`It's a tie! You both chose ${computerChoice}`)
        
    }
    else if(human_ind == (computer_ind+1)%3){
        
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        playerScore++
        playerDisplay.innerText = 'Your Score: ' + playerScore
    }
    else{
        
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        
        botScore++

        botDisplay.innerText = 'Bot Score: ' + botScore

    }
    if(playerScore >= 5){
        winner.innerText = 'YOU WIN'
    }
    else if(botScore >=5){
        winner.innerText = 'YOU LOST'
    }


}





const rock = document.querySelector('#rock')

rock.addEventListener('click', ()=>{
    playRound('rock')
})

const paper = document.querySelector('#paper')

paper.addEventListener('click', ()=>{playRound('paper')})

const scissors = document.querySelector('#scissors')

scissors.addEventListener('click', ()=>playRound('scissors'))
