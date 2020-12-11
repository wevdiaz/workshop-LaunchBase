const player1 = "X";
const player2 = "O";

let playTime = player1;
let gameOver = false;

updateMostrador();


function updateMostrador() {

    if (gameOver) return;

    if (playTime == player1) {

        let player = document.querySelector("div#mostrador img");
        player.setAttribute("src", "imagens/jdv-x.png");
    }
    else {
        let player = document.querySelector("div#mostrador img");
        player.setAttribute("src", "imagens/jdv-o.png");
    }
}


