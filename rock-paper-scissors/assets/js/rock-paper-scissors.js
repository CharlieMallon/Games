// 0 = rock
// 1 = scissors
// 2 = paper

const options = [
    ['draw', 'player wins', 'player loses'],
    ['player loses', 'draw', 'player wins'],
    ['player wins', 'player loses', 'draw'],
]

const playerChoice = 2 // defined by the player click
const computerChoice = Math.floor(Math.random() * 2)  // generate randomly 

const winState = options[playerChoice][computerChoice];