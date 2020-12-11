const player1 = "X";
const player2 = "O";

let playTime = player1;
let gameOver = false;

updateMostrador();
beginSpaces();

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
            }

        });
    }
    
}