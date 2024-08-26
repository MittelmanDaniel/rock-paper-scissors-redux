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



function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    let options = ["rock", "paper", "scissors"]

    human_ind = options.indexOf(humanChoice)
    computer_ind = options.indexOf(computerChoice)

    if(human_ind == computer_ind){
        console.log(`It's a tie! You both chose ${computerChoice}`)
        return [0,0]
    }
    else if(human_ind == (computer_ind+1)%3){
        
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        return [1,0]
    }
    else{
        
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        return [0,1]
    }

}




function playGame(num_rounds){

    let humanScore = 0
    let computerScore = 0

    for(let i = 0; i<num_rounds;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        out = playRound(humanSelection, computerSelection);

        humanScore += out[0]
        computerScore +=out[1]
    }

    console.log(`The score was Human: ${humanScore}, Computer: ${computerScore}`)
}

playGame(5)