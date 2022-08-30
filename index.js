const container = document.querySelector(".container");

const colorBtn = document.querySelector(".color");
const eraseBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const resetBtn = document.querySelector(".reset");
const slide = document.querySelector("#sizeSlider")

const div = Array.from(document.querySelectorAll(".container"));

const defaultSize = 16;

function makeBoard(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    // create the rows and columns with the css above
    for (let i = 0; i < (size * size); i++){
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        container.appendChild(boxes);
    }

}

function resetBoard(){
    container.innerHTML = "";
};

function clearBoard(){
    const box = container.querySelectorAll("div");
    box.forEach((item) => {
        item.style.backgroundColor = "transparent";
    })
}

function changeBoard(){
    const box = container.querySelectorAll("div")
    box.forEach(pixel => pixel.remove());
    makeBoard(slide.value)
}

// make color
function makeColor(){
    const color = document.getElementById("colorPicker").value;
    event.target.style.background = color;
}

function eraser(){
    event.target.style.background = "transparent";
}

//Target each box of the grid and change color
function chooseColor(){
    div.forEach((box) => {
        box.addEventListener("mousedown", makeColor); //mousedown is the click
        box.addEventListener("mouseover", event => { //mouseover is to continue the action when stay click
            if (event.buttons == 1) makeColor(event);
        });
    });   
} 

function makeErase(){
    div.forEach((box) => {
        box.addEventListener("mousedown", eraser); //mousedown is the click
        box.addEventListener("mouseover", event => { //mouseover is to continue the action when stay click
            if (event.buttons == 1) eraser(event);
        });
    });   
}


eraseBtn.onclick = makeErase;
//Activate button by clicking
colorBtn.onclick = chooseColor;
//Reset everything by reloading the page
resetBtn.addEventListener("click", () => location.reload());
// Clear the board
clearBtn.addEventListener("click", clearBoard);
// Set the size of board
slide.addEventListener("mouseup", changeBoard)

window.onload = () => {
    makeBoard(defaultSize);z
}