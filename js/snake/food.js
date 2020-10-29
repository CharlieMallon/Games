import { onSnake, expandSnake } from '/js/snake/snake.js'
import { randomGridPosition } from '/js/snake/grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5 //This controls how big the snake grows when it eats food


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
    
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

