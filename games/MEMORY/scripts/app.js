const gameContainer = document.querySelector(".gameContainer");

let cardID = [];
let cardIDRandom = [];
let val, nbrCard = 0;
let countTurn = 0;

const verifyWin = () => {
    const cards = document.querySelectorAll(".gameContainer__container");
        console.log('---');
        for (let i = 0;i < cards.length; i++) {
            cards[i].classList.remove("turn");
        }
}

const turn = (val) => {
    console.log(countTurn);
    const cards = document.querySelectorAll(".gameContainer__container");
    if (!cards[val].classList.contains("turn")) { 
        console.log('test');
        countTurn++;
        if (countTurn < 3) {
                cards[val].classList.add("turn")
        }
    } 
    if (countTurn === 2) {
        setTimeout(() => {
            verifyWin();
            countTurn = 0;
        }, 2000);
    }
}
    
const randomID = (nbr) => {
    rand = Math.ceil(Math.random() * nbr);
    val = rand - 1;
}

const createCard = () => {
    cardIDRandom = [];
    for (let i = 0; i < nbrCard; i++) {
        randomID(cardID.length);
        cardIDRandom.push(cardID[val]);
        cardID.splice(val, 1);
    }
    for (let i = 0; i < cardIDRandom.length; i++) {
        gameContainer.innerHTML += `
        <div class="gameContainer__container gameContainer__container--${cardIDRandom[i]}" onClick={turn(${i})}>
        <div class="gameContainer__container__cards">
        <div class="gameContainer__container__cards__front">
        <img src="./assets/cardBack.webp" alt="card back">
        </div>
        <div class="gameContainer__container__cards__back">
        <p>${cardIDRandom[i]}</p>
        </div>
        </div>
        </div>
        `; 
    }
}

const assemblyCards = () => {
    if (gameContainer.classList.contains("gameContainer--12")) {
        cardID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
        nbrCard = 12;
        createCard();
    } else if (gameContainer.classList.contains("gameContainer--16")) {
        cardID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    } else if (gameContainer.classList.contains("gameContainer--20")) {
        cardID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
    }
}

assemblyCards();

