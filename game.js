// A is either 1 or 11
// K J Q is 10
// there are 4 of every card in a single deck

let DECK_CARDS_LEFT = { A: 4, K: 4, J: 4, Q: 4, N2: 4, N3: 4, N4: 4, N5: 4, N6: 4, N7: 4, N8: 4, N9: 4, N10: 4 }

// body dom element
let DOM_BODY = document.getElementById('body')


let scores = [0, 0];

// just fo debug
function PrintDeck() {
    console.log(DECK_CARDS_LEFT);
}



document.getElementById("hit").addEventListener("click", () => {
    // adding scores to player and enemy
    addScore(0)
    if (!(scores[1] > 17)) {
        addScore(1)
    }
    updateScores(scores[0])

    if (scores[0] > 21) {
        while (scores[1] < 18) {
            addScore(1)
        }

        updateScores();

        checkWinLose();
    }
});


function addScore(player) {
    if (!(scores[player] > 21)) {
        let cardValue = pickCard();
        if (cardValue == 'A') {
            if (scores[player] > 10) {
                scores[player] += 1;
            } else {
                scores[player] += 11;
            }
        } else {
            scores[player] += cardValue;
        }
    }
}


document.getElementById("stand").addEventListener("click", () => {
    while (scores[1] < 18) {
        addScore(1)
    }

    updateScores();

    checkWinLose();
});


function checkWinLose() {
    let finalScores = `
    Your score: ${scores[0]}<br>
    Enemy score: ${scores[1]}`
    if (scores[0] == scores[1] || (scores[0] > 21 && scores[1] > 21)) {
        DOM_BODY.innerHTML = `Thats a tie!!!<br>
        ${finalScores}`;
    } else if ((scores[0] > scores[1] && scores[0] <= 21) ||
        (scores[0] < scores[1] && scores[1] > 21)) {
        DOM_BODY.innerHTML = `You won!!!<br>
        ${finalScores}`;
    } else {
        DOM_BODY.innerHTML = `You lose!!!<br>
        ${finalScores}`;
    }
}


function updateScores() {
    document.getElementById("score").innerHTML = scores[0];
    document.getElementById("enemyScore").innerHTML = scores[1];
}



function pickCard() {
    while (true) {
        let pick = Math.floor(Math.random() * 13) + 1;
        if (pick === 1) {
            if (DECK_CARDS_LEFT.A > 0) {
                DECK_CARDS_LEFT.A--;
                return 'A';
            }
        } else if (pick === 2) {
            if (DECK_CARDS_LEFT.K > 0) {
                DECK_CARDS_LEFT.K--;
                return 10;
            }
        } else if (pick === 3) {
            if (DECK_CARDS_LEFT.J > 0) {
                DECK_CARDS_LEFT.J--;
                return 10;
            }
        } else if (pick === 4) {
            if (DECK_CARDS_LEFT.Q > 0) {
                DECK_CARDS_LEFT.Q--;
                return 10;
            }
        } else if (pick === 5) {
            if (DECK_CARDS_LEFT.N2 > 0) {
                DECK_CARDS_LEFT.N2--;
                return 2;
            }
        } else if (pick === 6) {
            if (DECK_CARDS_LEFT.N3 > 0) {
                DECK_CARDS_LEFT.N3--;
                return 3;
            }
        } else if (pick === 7) {
            if (DECK_CARDS_LEFT.N4 > 0) {
                DECK_CARDS_LEFT.N4--;
                return 4;
            }
        } else if (pick === 8) {
            if (DECK_CARDS_LEFT.N5 > 0) {
                DECK_CARDS_LEFT.N5--;
                return 5;
            }
        } else if (pick === 9) {
            if (DECK_CARDS_LEFT.N6 > 0) {
                DECK_CARDS_LEFT.N6--;
                return 6;
            }
        } else if (pick === 10) {
            if (DECK_CARDS_LEFT.N7 > 0) {
                DECK_CARDS_LEFT.N7--;
                return 7;
            }
        } else if (pick === 11) {
            if (DECK_CARDS_LEFT.N8 > 0) {
                DECK_CARDS_LEFT.N8--;
                return 8;
            }
        } else if (pick === 12) {
            if (DECK_CARDS_LEFT.N9 > 0) {
                DECK_CARDS_LEFT.N9--;
                return 9;
            }
        } else if (pick === 13) {
            if (DECK_CARDS_LEFT.N10 > 0) {
                DECK_CARDS_LEFT.N10--;
                return 10;
            }
        }
    }
}