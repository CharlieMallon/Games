import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from '/js/snake/snake.js'
import {update as updateFood, draw as drawFood} from '/js/snake/food.js'
import {outsideGrid} from '/js/snake/grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

//game loop set up, make the game move.
function main (currentTime) {
    if (gameOver) {
        if (confirm('You Lost. Press OK to restart')) {
            window.location = "/snake.html"
        }
        return
    }

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

// checks if we died!
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}