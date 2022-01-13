const gameContainer = document.querySelector(".gameContainer");
const resultContainer = document.querySelector(".resultContainer");
const menuBtn = document.getElementById("hambBtn");
const menuCloseBtn = document.querySelector(".menu__closeBtn");
const menu = document.querySelector(".menu");
const menuNew = document.querySelector(".menu__list__new");
const menuNbrs = document.querySelectorAll(".menu__list__nbrs");
const menuAbout = document.querySelector(".menu__list__about");
const modale = document.querySelector(".modale");
const modaleCloseBtn=document.querySelector(".modale__container__closeBtn");

let cardID = [];
let cardIDRandom = [];
let val, nbrCard = 0;
let countTurn = 0;
let card1, card2, cardIndex1, cardIndex2;
let count = 0;
let victoryPts = 0;

const resetAfterWin = () => {
    resultContainer.innerHTML = ``;
    victoryPts = 0;
    count = 0;
    countTurn = 0;
    cardIDRandom = [];
    cardID = [];
    gameContainer.classList.remove("gameContainer__container--off");
    gameContainer.innerHTML = ``;
    assemblyCards();
}

const resetTemplate = () => {
    gameContainer.classList.remove("gameContainer--12");
    gameContainer.classList.remove("gameContainer--16");
    gameContainer.classList.remove("gameContainer--20");
    gameContainer.classList.remove("gameContainer--24");
    gameContainer.classList.remove("gameContainer--30");
    gameContainer.classList.remove("gameContainer--36");
}

const verifyWin = () => {
    const cards = document.querySelectorAll(".gameContainer__container");
    if (card1 === card2) {
        cards[cardIndex1].classList.add("gameContainer__container--invisible");
        cards[cardIndex2].classList.add("gameContainer__container--invisible");
        victoryPts++;
    } else {
        for (let i = 0;i < cards.length; i++) {
            cards[i].classList.remove("turn");
        }
    }
    if (victoryPts === (nbrCard / 2)) {
        gameContainer.classList.add("gameContainer__container--off");
        resultContainer.innerHTML = `
        <h2>WIN</h2>
        <h3>in ${count} rounds</h3>
        <button class="resultContainer__newBtn" onClick={resetAfterWin()}>New game</button>
        `;
    }
}

const turn = (val) => {
    const cards = document.querySelectorAll(".gameContainer__container");
    if (!cards[val].classList.contains("turn")) { 
        countTurn++;
        if (countTurn < 3) {
                cards[val].classList.add("turn");
                if (countTurn === 1) {
                    card1 = cards[val].id;
                    cardIndex1 = val;
                } else if (countTurn === 2) {
                    card2 = cards[val].id;
                    cardIndex2 = val;
                }
        }
    } 
    if (countTurn === 2) {
        setTimeout(() => {
            verifyWin();
            countTurn = 0;
            count++;
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
        <div class="gameContainer__container gameContainer__container--${cardIDRandom[i]}" id="${cardIDRandom[i]}" onClick={turn(${i})}>
            <div class="gameContainer__container__cards">
                <div class="gameContainer__container__cards__front">
                    <img src="./assets/cardBack.webp" alt="card back">
                </div>
                <div class="gameContainer__container__cards__back">
                    <p class="gameContainer__container__cards__back__value">${cardIDRandom[i]}</p>
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
        nbrCard = 16;
        createCard();
    } else if (gameContainer.classList.contains("gameContainer--20")) {
        cardID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
        nbrCard = 20;
        createCard();
    } else if (gameContainer.classList.contains("gameContainer--24")) {
        cardID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
        nbrCard = 24;
        createCard();
    } else if (gameContainer.classList.contains("gameContainer--30")) {
        cardID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15];
        nbrCard = 30;
        createCard();
    } else if (gameContainer.classList.contains("gameContainer--36")) {
        cardID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18];
        nbrCard = 36;
        createCard();
    }
}

assemblyCards();

menuBtn.addEventListener("click", () => {
    menu.classList.remove("menu--off");
})

menuCloseBtn.addEventListener("click", () => {
    menu.classList.add("menu--off");
})

menuNew.addEventListener("click", () => {
    resetAfterWin();
    menu.classList.add("menu--off");
})

menuNbrs[0].addEventListener("click", () => {
    resetTemplate();
    gameContainer.classList.add("gameContainer--12");
    resetAfterWin();
    menu.classList.add("menu--off");
})

menuNbrs[1].addEventListener("click", () => {
    resetTemplate();
    gameContainer.classList.add("gameContainer--16");
    resetAfterWin();
    menu.classList.add("menu--off");
})

menuNbrs[2].addEventListener("click", () => {
    resetTemplate();
    gameContainer.classList.add("gameContainer--20");
    resetAfterWin();
    menu.classList.add("menu--off");
})

menuNbrs[3].addEventListener("click", () => {
    resetTemplate();
    gameContainer.classList.add("gameContainer--24");
    resetAfterWin();
    menu.classList.add("menu--off");
})

menuNbrs[4].addEventListener("click", () => {
    resetTemplate();
    gameContainer.classList.add("gameContainer--30");
    resetAfterWin();
    menu.classList.add("menu--off");
})

menuNbrs[5].addEventListener("click", () => {
    resetTemplate();
    gameContainer.classList.add("gameContainer--36");
    resetAfterWin();
    menu.classList.add("menu--off");
})

menuAbout.addEventListener("click", () => {
    modale.classList.remove("modale--off");
    menu.classList.add("menu--off");
})

modaleCloseBtn.addEventListener("click", () => {
    modale.classList.add("modale--off");
})