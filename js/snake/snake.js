export const SNAKE_SPEED = 1 // Change this to change the speed of the snake - this is the number of times it will render in seconds
const snakeBody = [{x:11, y:11}]

export function update() {
    console.log('update snake')
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')

        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        
        gameBoard.appendChild(snakeElement)
    })
}

