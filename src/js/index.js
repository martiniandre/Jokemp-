let ScoreUser = 0
let computerScore = 0

let round = 0
let rounds = document.querySelector('.round-count')

const result = document.querySelector('.result')
const userSpan = document.querySelector('.user')
const compSpan = document.querySelector('.computer')

const rock = document.getElementById('r')
const scissors = document.getElementById('s')
const paper = document.getElementById('p')

function computerPlay(){
    const plays = ['rock','paper','scissor']
    const randomNumbers = Math.floor(Math.random()*3)
    return plays[randomNumbers]

}
function wins(user,computer){
    ScoreUser=ScoreUser+1
    round++
    rounds.innerHTML=round
    userSpan.innerHTML= ScoreUser
    compSpan.innerHTML = computerScore
}
function lose(){
    computerScore++
    round++
    rounds.innerHTML=round
    userSpan.innerHTML= ScoreUser
    compSpan.innerHTML = computerScore

}
function draw(){
    round++
    rounds.innerHTML=round
}
function game(userChoice){
    const computerChoice = computerPlay()  
    switch(userChoice + computerChoice){
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
           wins(userChoice,computerChoice)
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            draw(userChoice,computerChoice)
            break
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            lose(userChoice,computerChoice)
            break
    }
}


function main(){
    rock.addEventListener('click', () => {
    
        game("rock")
    })
    paper.addEventListener('click', () => {
       
        game("paper")
    })
    scissors.addEventListener('click',()=>{
        game("scissors")
    })
}



main(game())

