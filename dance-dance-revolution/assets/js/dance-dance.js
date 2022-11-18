const DIRECTIONS = ["ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"]
let ACTIVE = null;

const board = document.getElementById('board');
const generator = document.getElementById('new-row-generator')

//create a randow arrow
const createRow = () => {
    //create a row of arrows
    const newRow = board.cloneNode(true);
    const randomizer = Math.floor(Math.random() * 4);

    //sets a which arrow is active on the row
    newRow.setAttribute("data-active", randomizer);

    //colour random arrow blue and rest transparent
    for (let i = 0; i < 4; i++) {
        if (i === randomizer) {
            newRow.children[i].style.setProperty("--arrow-outline", "blue");
        } else {
            newRow.children[i].style.setProperty("--arrow-outline", "transparent");
            newRow.children[i].style.setProperty("--arrow-color", "transparent");
        }
    }

    //add arrow to bottom of screen
    generator.append(newRow);
    //animate the arrow
    animateRow(newRow)

    //romoves the arrow from the dom
    setTimeout(() => {
        newRow.remove();
    }, 5000)
}

const animateRow = (row) => {

    const rowTop = row.getBoundingClientRect().top; // top of new row
    const boardTop = board.getBoundingClientRect().top // top of board row

    const proximity = rowTop - boardTop; //how close are they together

    //set when the row is active and therfore can be pressed
    setTimeout(() => {
        ACTIVE = row
    }, proximity - 100)

    //move the arrow up the screen
    const options = [{ transform: "translateY(-10000px)" }];

    //move it for this long 
    const keyframes = {
        duration: 10000, //1 pixel per 1 milisecond
        iterations: Infinity
    }

    row.animate(options, keyframes)

}

const handleKeyDown = (event) => {

    const activeArrow = ACTIVE.getAttribute("data-active");
    const pressedKey = DIRECTIONS.findIndex((direction) => direction === event.key);

    console.log(activeArrow, pressedKey)

    if (pressedKey == activeArrow) {
        console.log("yay");
    } else {
        console.log("miss");
    }
}


const startGame = () => {

    document.addEventListener('keydown', handleKeyDown);
    // set the interval of when to show the arrows
    setInterval(() => {
        createRow();
    }, 1000)
}

startGame();