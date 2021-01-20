//----------Inputs----------//

let inputDirection = { x: 0, y:0 }
let lastInputDirection = { x: 0, y:0 }

window.addEventListener('keydown', e=> {
    switch (e.key){
        case 'ArrowUp':
            if (lastInputDirection.y !==0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !==0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !==0) break
            inputDirection = { x: -1, y: 0 }
            break
            case 'ArrowRight':
                if (lastInputDirection.x !==0) break
                inputDirection = { x: 1, y: 0 }
                break
            }
})

function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

//----------Grid----------//

const GRID_SIZE = 21

function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
        )
    }
    
//----------Constants----------//
const EXPANSION_RATE = 5 //This controls how big the snake grows when it eats food
const gameBoard = document.getElementById('game-board')
const SNAKE_SPEED = 5 // Change this to change the speed of the snake - this is the number of times it will render in seconds
const snakeBody = [
    {x:11, y:11},
]

//----------Food----------//

let food = getRandomFoodPosition()

function updateFood() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

function drawFood(gameBoard) {
    
        const foodElement = document.createElement('div')

        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}


//-----------Snake Controls----------//
let newSegments = 0

function updateSnake() {
    addSegments()

    const inputDirection = getInputDirection()

    for( let i = snakeBody.length -2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')

        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        
        gameBoard.appendChild(snakeElement)
    })
}

function expandSnake(amount) {
    newSegments += amount
}

function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0)
        return false
        return equalPositions(segment, position)
    })
}

function getSnakeHead(){
    return snakeBody[0]
}

function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments (){
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}

//----------Game Controls----------//
let lastRenderTime = 0
let gameOver = false

//game loop set up, make the game move.
function main (currentTime) {
    if (gameOver) {
        Swal.fire({
            title: 'You Lose!',
            showDenyButton: true,
            confirmButtonText: `Play again!`,
            denyButtonText: `Go back`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                location.reload();
            } else if (result.isDenied) {
                location.replace("index.html");
            }
        })
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