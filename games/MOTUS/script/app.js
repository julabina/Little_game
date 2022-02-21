const input = document.querySelector(".game__pChose__input");
const rows = document.querySelectorAll(".game__container__rows");
const validBtn = document.querySelector(".game__pChose__btn");


let letterDiff = 5;
let round = 0;
let datas, word, playerWord;
let badLetters = [];

fetch("data.json").then((res) => res.json()).then((data) => {
    datas = data;
    startGame();
});

const buildCase = (cases) => {
    for (let i = 0; i < rows.length; i++) {
        for (let ii = 0; ii < cases; ii++) {
            rows[i].innerHTML += `
                <div class="game__container__rows__cols game__container__rows__cols${i}"></div>
            `
        }
    }
}

const randomWord = () => {
    let rand = (Math.ceil(Math.random() * (datas.fr[0].length))) - 1;
    word = datas.fr[0][rand];
}

const startGame = () => {
    input.maxLength = letterDiff;
    buildCase(letterDiff);
    randomWord();
    console.log(word);
}

const verifyLetters = () => {
    const cols = document.querySelectorAll(".game__container__rows__cols" + round);
    for (let i = 0; i < word.length; i++) {
        if (playerWord[i] === word[i]) {
            cols[i].classList.add("game__container__rows__cols--good");
            cols[i].textContent = playerWord[i];
        } else {
            badLetters.push(word[i]);
            cols[i].textContent = playerWord[i];
        }
    }
    for (let i = 0; i < word.length; i++) {
        if (!cols[i].classList.contains("game__container__rows__cols--good")) {
            for (let ii = 0; ii < badLetters.length;ii++) {
                if (playerWord[i] === badLetters[ii]) {
                    cols[i].classList.add("game__container__rows__cols--false");
                }
            }
        }
    }
}

validBtn.addEventListener("click", () => {
    playerWord = input.value;
    if (playerWord === word) {
        console.log("win");
        verifyLetters();
    } else {
        verifyLetters();
        round++;
    }
})