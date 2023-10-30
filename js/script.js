// const utili
const maxCells = 100;
const maxBombs = 16;
const Score = maxCells - maxBombs;
let score = 0;
let clicked = []



// programma
document.getElementById("start").addEventListener("click", startGame);

const bombsList = generateBombs(maxCells)
console.log (bombsList)

const maxClicks = maxCells - bombsList.length
console.log (maxClicks)

// ***************funzioni******************

// funzione principale
function startGame(){
    const gridElem = document.getElementById("grid")
    gridElem.innerHTML = "";

    for(let i = 1; i<=100; i++) {
        const newCell = createGridCell(i);
        newCell.addEventListener("click" , handleCellClick)
        gridElem.append(newCell)
    }
}

// crea una cella
function createGridCell (innerNumber) {
    const cell = document.createElement("div")
    cell.classList.add("square")
    cell.innerHTML=`${innerNumber}`
    return cell
}


// cambia colore
function handleCellClick() {   
    let clickedNumber = parseInt(this.textContent)    
    // logica del gioco
    if (bombsList.includes(clickedNumber)) {
        this.classList.add("red")
        document.getElementById("lose").style.display = "flex";
    }
    else {
         this.classList.add("active")
    }
}

// genera numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * ( max -  min
    + 1)) + min
}

// genera bombe
function generateBombs(max) {
    const result = []
    while (result.length < 16){
        const rndNum = getRndInteger (1,max);
    if(!result.includes(rndNum)) {
        result.push(rndNum)
    }
    }
    return result
    
}

// ricomincia
document.getElementById("refresh").addEventListener("click", function(){
    location.reload();
});

