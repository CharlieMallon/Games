// computer choice
const num = Math.floor(Math.random() * 5);
const options = [
    'rock', 'scissors', 'paper', 'lizard', 'spock'
]
const computerChoice = options[num]

console.log(computerChoice)

// users choice
const userChoice = 'scissors';

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
const result = matrix[userChoice][computerChoice]

console.log(result)
