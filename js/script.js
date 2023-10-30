// const utili
const maxCells = 100;
const maxBombs = 16;
const Score = maxCells - maxBombs;
const bombsList = [];
let score = 0;



// programma
document.getElementById("start").addEventListener("click", startGame);





    

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

// genera bombe

while (bombsList.length < 16) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      if (!bombsList.includes(randomNumber)) {
        bombsList.push(randomNumber);
      }
    }  
    console.log (bombsList)

// crea una cella
function createGridCell (innerNumber) {
    const cell = document.createElement("div")
    cell.classList.add("square")
    cell.innerHTML=`${innerNumber}`
    return cell
}


// cambia colore
function handleCellClick() {
    // this.classList.add("active")
    const clickedNumber = this.textContent
    console.log(clickedNumber)
    return clickedNumber
}

