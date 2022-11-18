
const board = document.getElementById('board');
const generator = document.getElementById('new-row-generator')

//create a randow arrow
const createRow = () => {
    //create a row of arrows
    const newRow = board.cloneNode(true);
    const randomizer = Math.floor(Math.random() * 4);

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

    //move the arrow up the screen
    const options = [{ transform: "translateY(-10000px)" }];

    //move it for this long 
    const keyframes = {
        duration: 10000, //1 pixel per 1 milisecond
        iterations: Infinity
    }

    row.animate(options, keyframes)

}

const startGame = () => {

    // set the interval of when to show the arrows
    setInterval(() => {
        createRow();
    }, 1000)
}

startGame();