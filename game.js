// A is either 1 or 11
// K J Q is 10
// there are 4 of every card in a single deck
let deck = {A: 4, K: 4, J: 4, Q: 4, N2: 4, N3: 4, N4: 4, N5: 4, N6: 4, N7: 4, N8: 4, N9: 4, N10: 4}
let playerScore = 0;

function PrintDeck() {
    console.log(deck);
}

function updateScore() {
    document.querySelector('#playerScore').textContent = playerScore;
}

function pickCard() {
    while (true) {
        let pick = Math.floor(Math.random() * 13) + 1;
        if (pick === 1) {
            if (deck.A > 0) {
                deck.A--;
                return 'A';
            }
        } else if (pick === 2) {
            if (deck.K > 0) {
                deck.K--;
                return 'K';
            }
        } else if (pick === 3) {
            if (deck.J > 0) {
                deck.J--;
                return 'J';
            }
        } else if (pick === 4) {
            if (deck.Q > 0) {
                deck.Q--;
                return 'Q';
            }
        } else if (pick === 5) {
            if (deck.N2 > 0) {
                deck.N2--;
                return '2';
            }
        } else if (pick === 6) {
            if (deck.N3 > 0) {
                deck.N3--;
                return '3';
            }
        } else if (pick === 7) {
            if (deck.N4 > 0) {
                deck.N4--;
                return '4';
            }
        } else if (pick === 8) {
            if (deck.N5 > 0) {
                deck.N5--;
                return '5';
            }
        } else if (pick === 9) {
            if (deck.N6 > 0) {
                deck.N6--;
                return '6';
            }
        } else if (pick === 10) {
            if (deck.N7 > 0) {
                deck.N7--;
                return '7';
            }
        } else if (pick === 11) {
            if (deck.N8 > 0) {
                deck.N8--;
                return '8';
            }
        } else if (pick === 12) {
            if (deck.N9 > 0) {
                deck.N9--;
                return '9';
            }
        } else if (pick === 13) {
            if (deck.N10 > 0) {
                deck.N10--;
                return '10';
            }
        }
    }
}

function main() {
    
}

main()