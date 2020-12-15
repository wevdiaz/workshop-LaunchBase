const player1 = prompt("Nome do Jogador 1") || "Jogador 1";
const player2 = prompt("Nome do Jogador 2") || "Jogador 2";

let playTime = player1;
let gameOver = false;
let namePlayer = document.getElementById("namePlayer");

const fieldsTabuleiro = document.querySelectorAll(".space");
const containerRestart = document.getElementById("restart");

updateMostrador();
beginSpaces();


function updateMostrador() {

    if (gameOver) return;

    if (playTime == player1) {

        let player = document.querySelector("div#mostrador img");
        player.setAttribute("src", "imagens/jdv-x.png");
        namePlayer.innerHTML = playTime;
    }
    else {
        let player = document.querySelector("div#mostrador img");
        player.setAttribute("src", "imagens/jdv-o.png");
        namePlayer.innerHTML = playTime;
    }
}


function beginSpaces() {

    let spaces = document.getElementsByClassName("space");

    for (let i = 0; i < spaces.length; i++) {

        spaces[i].addEventListener("click", function(){

            if (gameOver) return;

            if (this.getElementsByTagName("img").length == 0) {

                if (playTime == player1) {
                    this.innerHTML = "<img src='imagens/jdv-x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                }
                else {
                    this.innerHTML = "<img src='imagens/jdv-O.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                updateMostrador();
                checkWinner();
                checkFields();
            }

        });
    }
    
}


async function checkWinner() {

    let a1 = document.getElementById("a1").getAttribute("jogada");
    let a2 = document.getElementById("a2").getAttribute("jogada");
    let a3 = document.getElementById("a3").getAttribute("jogada");

    let b1 = document.getElementById("b1").getAttribute("jogada");
    let b2 = document.getElementById("b2").getAttribute("jogada");
    let b3 = document.getElementById("b3").getAttribute("jogada");

    let c1 = document.getElementById("c1").getAttribute("jogada");
    let c2 = document.getElementById("c2").getAttribute("jogada");
    let c3 = document.getElementById("c3").getAttribute("jogada");

    let vencedor = "";

    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) {
        vencedor = a1;
    }
    else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 ==c1 && b2 != "")) {
        vencedor = b2;
    }
    else if (((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != "") {
        vencedor = c3;
    }

    if (vencedor != "") {
        gameOver = true;

        await sleep(50);
        alert(`O vencedor foi o '${vencedor}'`);

        restartGame();
    }
}

function checkFields() {
    let contador = 0;

    for (let i = 0; i < fieldsTabuleiro.length; i++) {

        if (fieldsTabuleiro[i].innerHTML != "") {
            contador = contador + 1;
        }
    }

    if (contador == 9 && gameOver == false) {
        
        const newButton = document.createElement("button");
        newButton.innerText = "Começar novo jogo";

        const mgs = document.createElement("p");
        mgs.innerHTML = "Deu velha! <br> Vamos tentar de novo &#x1F600;";

        newButton.addEventListener("click", restartGame );

        containerRestart.appendChild(mgs);
        containerRestart.appendChild(newButton);
    }
}

function restartGame() {
    
    document.location.reload();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}