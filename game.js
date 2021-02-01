let DECK_CARDS_LEFT = { A: 4, K: 4, J: 4, Q: 4, N2: 4, N3: 4, N4: 4, N5: 4, N6: 4, N7: 4, N8: 4, N9: 4, N10: 4 }
let CARD_PICTURE_ROOT_VALUES = []
let GAME_DIV_IN_DOM = document.getElementById('gameDiv')
let scores = [0, 0];
let enemyCards = [];


function getCardRoots() {
    for (let i = 2; i < 11; i++) {
        CARD_PICTURE_ROOT_VALUES.push(`${i}C`)
        CARD_PICTURE_ROOT_VALUES.push(`${i}D`)
        CARD_PICTURE_ROOT_VALUES.push(`${i}H`)
        CARD_PICTURE_ROOT_VALUES.push(`${i}S`)
    }

    let a = ["J", "Q", "K", "A"]
    for (let card of a) {
        CARD_PICTURE_ROOT_VALUES.push(`${card}C`)
        CARD_PICTURE_ROOT_VALUES.push(`${card}D`)
        CARD_PICTURE_ROOT_VALUES.push(`${card}H`)
        CARD_PICTURE_ROOT_VALUES.push(`${card}S`)
    }
}



function addEventListenersToButtons() {
    document.getElementById("hit").addEventListener("click", () => {
        let cardType = addScore(0)

        let card = getRandomCardOfType(cardType)

        let image = document.createElement("img")
        image.src = `/static/cards/${card}.png`
        image.width = 100
        GAME_DIV_IN_DOM.appendChild(image)

        // GAME_DIV_IN_DOM.innerHTML += `
        // <img src="/static/cards/${card}.png" width="100px">`;

        let aiStillMove = !(scores[1] > 17)
        if (aiStillMove) {
            let cardType = addScore(1)
            enemyCards.push(getRandomCardOfType(cardType))
        }
        updateScores()

        if (scores[0] > 21) {
            while (scores[1] < 18) {
                let cardType = addScore(1)
                enemyCards.push(getRandomCardOfType(cardType))
            }
            updateScores();

            checkWinLose();
        }
    });

    document.getElementById("stand").addEventListener("click", () => {
        while (scores[1] < 18) {
            let cardType = addScore(1)
            enemyCards.push(getRandomCardOfType(cardType))
        }
        updateScores();

        checkWinLose();
    });
}


function getRandomCardOfType(cardType) {
    let availableCards = []
    for (let card of CARD_PICTURE_ROOT_VALUES) {
        if (card.includes(cardType)) {
            availableCards.push(card)
        }
    }
    let cardToPickIndex = Math.floor(Math.random() * availableCards.length);
    let cardToUse = availableCards[cardToPickIndex];

    availableCards.splice(cardToPickIndex, 1)

    return cardToUse;
}


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
        return cardValue.toString()
    }
}

function checkWinLose() {
    let finalScores = `
    Your score: ${scores[0]}<br>
    Enemy score: ${scores[1]}<br>
    <button id="newGame">New game!</button>
    <br>
    Enemy cards was:
    <br>`

    let tie = scores[0] == scores[1] || (scores[0] > 21 && scores[1] > 21);
    let player1win = (scores[0] > scores[1] && scores[0] <= 21) ||
        (scores[0] < scores[1] && scores[1] > 21);
    if (tie) {
        GAME_DIV_IN_DOM.innerHTML = `Thats a tie!!!<br>
        ${finalScores}`;
    } else if (player1win) {
        GAME_DIV_IN_DOM.innerHTML = `You won!!!<br>
        ${finalScores}`;
    } else {
        GAME_DIV_IN_DOM.innerHTML = `You lose!!!<br>
        ${finalScores}`;
    }
    for (let card of enemyCards) {
        let image = document.createElement("img")
        image.src = `/static/cards/${card}.png`
        image.width = 100
        GAME_DIV_IN_DOM.appendChild(image)
    }

    document.getElementById("newGame").onclick = () => {
        scores = [0, 0];
        enemyCards = [];
        DECK_CARDS_LEFT = {A: 4, K: 4, J: 4, Q: 4, N2: 4, N3: 4, N4: 4, N5: 4, N6: 4, N7: 4, N8: 4, N9: 4, N10: 4 }
        GAME_DIV_IN_DOM.innerHTML = `
        <h3>Your Score is: <span id="score">0</span></h3>
        <h3>enemy Score is: <span id="enemyScore">0</span></h3>
        <button id="hit">Hit!</button>
        <button id="stand">Stand!</button>
        <br>`
        addEventListenersToButtons();
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

function game() {
    getCardRoots();
    addEventListenersToButtons();
}
game()