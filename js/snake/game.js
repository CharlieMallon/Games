import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from '/js/snake/snake.js'
import {update as updateFood, draw as drawFood} from '/js/snake/food.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

//game loop set up, make the game move.
function main (currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED)
        return

    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

//update game logic
function update() {
    updateSnake()
    updateFood()
    checkDeath()
}


//draws the next game frame - based on the update loop
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

