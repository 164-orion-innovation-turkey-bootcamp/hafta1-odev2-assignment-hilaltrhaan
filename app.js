const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");

let player = "X";
let gameOver = false;
let winner;


//StartGame fonksiyonu ile player box kontrolü yapılıyor.
function startGame() {
    playerText.textContent = `${player}'s Turn !`

    blocks.forEach(block => block.addEventListener("click", () => chooseArea(block)))
   
}
//REPLAY FUNCTİON

function replayGame(){
  window.location.reload();
}

//chooseArea fonksiyonu ile seçim alanı belirlenmesi için kod bloğu
function chooseArea(block) {
    if (block.textContent === "") {
        block.textContent = player;
        if (player === "O") {
            block.style.color = "red"
        }
        turnPlayer();
    } else {
        errorText.textContent = "it's not empty! "
       
        setTimeout(() => {
            errorText.textContent = ""
         
        }, 2500)
    }
/***********************************/
    checkWin();
    checkTie();

    if (gameOver) {
        playerText.textContent = `Game is over, ${winner} Won`;
        playerText.style.color="green";
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
}
//Oyuncu değişikliği için işlenecek olan kod bloğu
function turnPlayer() {
    if (player === "X") {
        player = "O";
        playerText.textContent = `${player}'s Turn !`
        return;
    } else if (player === "O") {
        player = "X";
        playerText.textContent = `${player}'s Turn !`

    }
}
/***********************************/
function checkWin() {
    // win
    checkRows()
    checkColumns()
    checkDiagonals()
}
//X ve O için berabere kalma durumunu kontrol eden kod bloğu
function checkTie() {
    // tie
    const values = [];
    blocks.forEach(block => values.push(block.textContent))
    if (!values.includes("")) {
        playerText.textContent = "Tie !";
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
}
/***********************************/
//Satırları Kontrol eden kod bloğu
function checkRows() {
    // check rows
    let row1 = blocks[0].textContent == blocks[1].textContent &&
        blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    let row2 = blocks[3].textContent == blocks[4].textContent &&
        blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== ""
    let row3 = blocks[6].textContent == blocks[7].textContent &&
        blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== ""

    if (row1 || row2 || row3) {
        gameOver = true
    }
    if (row1) return winner = blocks[0].textContent
    if (row2) return winner = blocks[3].textContent
    if (row3) return winner = blocks[6].textContent
}
/***********************************/

//Sütunları kontrol eden kod bloğu
function checkColumns() {
    // check cols
    let col1 = blocks[0].textContent == blocks[3].textContent &&
        blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== ""
    let col2 = blocks[1].textContent == blocks[4].textContent &&
        blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== ""
    let col3 = blocks[2].textContent == blocks[5].textContent &&
        blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !== ""

    if (col1 || col2 || col3) {
        gameOver = true
    }
    if (col1) return winner = blocks[0].textContent
    if (col2) return winner = blocks[1].textContent
    if (col3) return winner = blocks[2].textContent
}
/***********************************/

//Çapraz durumda X ve O ları kontrol eden kod bloğu
function checkDiagonals() {
    // check diag
    let dia1 = blocks[0].textContent == blocks[4].textContent &&
        blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== ""
    let dia2 = blocks[2].textContent == blocks[4].textContent &&
        blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== ""

    if (dia1 || dia2) {
        gameOver = true
    }
    if (dia1) return winner = blocks[0].textContent
    if (dia2) return winner = blocks[2].textContent
}
/***********************************/

startGame();


