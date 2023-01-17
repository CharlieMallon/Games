// computer choice
let computerChoice = 'waiting....'
computerChoiceFunction = () => {
    const num = Math.floor(Math.random() * 5);
    const options = [
        'rock', 'scissors', 'paper', 'lizard', 'spock'
    ]
    computerChoice = options[num]
    
    computer.innerHTML = computerChoice
}

// users choice
let userChoice = 'pick your weapon';

const choiceFunction = (e) => {
    userChoice = e.dataset.choice
    user.innerHTML = userChoice
}

// event listener on the user otions
const userOptions = document.getElementsByClassName('player')
for (let i = 0; i < userOptions.length; i++) {
    userOptions[i].addEventListener('click', function (e) {
        choiceFunction(e.target)
        computerChoiceFunction()
        gamePlay()
    });
}

// put stuff on the page
const user = document.getElementById('userChoice')
const computer = document.getElementById('computerChoice')
user.innerHTML = userChoice
computer.innerHTML = computerChoice

// result matrix
const matrix = {
    rock: {
        rock: 'draw',
        paper: 'loose',
        scissors: 'win',
        lizard: 'loose',
        spock: 'win',
    },
    paper: {
        rock: 'win',
        paper: 'draw',
        scissors: 'loose',
        lizard: 'loose',
        spock: 'win',
    },
    scissors: {
        rock: 'loose',
        paper: 'win',
        scissors: 'draw',
        lizard: 'win',
        spock: 'loose',
    },
    lizard: {
        rock: 'loose',
        paper: 'win',
        scissors: 'loose',
        lizard: 'draw',
        spock: 'win',
    },
    spock: {
        rock: 'loose',
        paper: 'loose',
        scissors: 'win',
        lizard: 'loose',
        spock: 'draw',
    },
}

const gamePlay = () => {
    const result = matrix[userChoice][computerChoice]
    console.log(result)
    document.getElementById('result').innerHTML = result
}

