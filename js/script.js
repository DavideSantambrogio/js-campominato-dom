// const utili
const maxCells = 100;
const maxBombs = 16;
const Score = maxCells - maxBombs;
const bombsList = generateBombs(maxCells)
const maxClicks = maxCells - bombsList.length
let score = 0;
let clicked = []
console.log(clicked, maxClicks, bombsList)


// programma
document.getElementById("start").addEventListener("click", startGame);



// ***************funzioni******************

// funzione principale
function startGame(){
    const gridElem = document.getElementById("grid")
    gridElem.innerHTML = "";

    for(let i = 1; i<=maxCells; i++) {
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
    console.log(clickedNumber)
    // lose condition
    if (bombsList.includes(clickedNumber)) {
        this.classList.add("red")
        document.getElementById("lose").style.display = "flex";
    }
    else {
         this.classList.add("active") 
         if(!clicked.includes(clickedNumber)) {
            clicked.push(clickedNumber)
        }   
         console.log (clicked)   
        if (clicked.length === maxClicks) {
            document.getElementById("win").style.display = "flex";
        } 
    }

    // win condition
  
}

// genera numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * ( max -  min
    + 1)) + min
}

// genera bombe
function generateBombs(max) {
    const result = []
    while (result.length < maxBombs){
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
document.getElementById("reload").addEventListener("click", function(){
    location.reload();
});
