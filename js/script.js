// Costanti per le modalità di gioco
const modalitaDiGioco = {
    facile: { bombe: 15 },
    medio: { bombe: 30 },
    difficile: { bombe: 45 },
    estremo: { bombe: 75 }
};

// Variabile per tenere traccia della modalità di gioco selezionata
let modalitaSelezionata = 'facile'; // Default: modalità facile

// Variabili di gioco
const indizio = "Non c'è nessun indizio quì, prova da un' altra parte";
const maxCells = 100;
let maxBombs = modalitaDiGioco[modalitaSelezionata].bombe;
let Score = maxCells - maxBombs;
let bombsList = [];
let maxClicks = 0;
let score = 0;
let clicked = [];
console.log (indizio);

// Funzione per iniziare il gioco con la modalità selezionata
function iniziaGioco() {
    maxBombs = modalitaDiGioco[modalitaSelezionata].bombe;
    Score = maxCells - maxBombs;
    maxClicks = maxCells - maxBombs;
    bombsList = generateBombs(maxCells);
    score = 0;
    clicked = [];
    console.log(clicked, maxClicks, bombsList);
    startGame();
}

// Ascoltatore degli eventi per il cambio della modalità di gioco
document.getElementById('modalita-gioco').addEventListener('change', function() {
    modalitaSelezionata = this.value;
});

// Ascoltatore degli eventi per avviare il gioco
document.getElementById("start").addEventListener("click", iniziaGioco);

// Ascoltatore degli eventi per il riavvio del gioco in caso di perdita
document.getElementById("refresh").addEventListener("click", function() {
    location.reload();
});

// Ascoltatore degli eventi per il riavvio del gioco in caso di vittoria
document.getElementById("reload").addEventListener("click", function() {
    location.reload();
});

// Funzione principale per iniziare il gioco
function startGame() {
    const gridElem = document.getElementById("grid");
    gridElem.innerHTML = "";

    for (let i = 1; i <= maxCells; i++) {
        const newCell = createGridCell(i);
        newCell.addEventListener("click", handleCellClick);

        // Aggiungi la classe "bomba" alle celle che contengono le bombe
        if (bombsList.includes(i)) {
            newCell.classList.add("bomba");
        }

        gridElem.append(newCell);
    }
}

// Funzione per creare una cella nella griglia
function createGridCell(innerNumber) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    cell.innerHTML = `${innerNumber}`;
    return cell;
}

// Funzione per gestire il click su una cella
function handleCellClick() {
    let clickedNumber = parseInt(this.textContent);

    // Logica del gioco
    console.log(clickedNumber);

    // Condizione di perdita
    if (bombsList.includes(clickedNumber)) {
        // Mostra tutte le bombe quando si perde
        const bombe = document.querySelectorAll('.bomba');
        bombe.forEach(cell => cell.classList.add('red'));

        this.classList.add("red");
        document.getElementById("lose").style.display = "flex";
    } else {
        this.classList.add("active");
        if (!clicked.includes(clickedNumber)) {
            clicked.push(clickedNumber);
        }
        console.log(clicked);
        if (clicked.length === maxClicks) {
            document.getElementById("win").style.display = "flex";
        }
    }
}

// Funzione per generare un numero intero casuale tra min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per generare le posizioni delle bombe in modo casuale
function generateBombs(max) {
    const result = [];
    while (result.length < maxBombs) {
        const rndNum = getRndInteger(1, max);
        if (!result.includes(rndNum)) {
            result.push(rndNum);
        }
    }
    return result;
}
