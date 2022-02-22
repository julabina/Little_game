const input = document.querySelector(".game__pChose__contError__input");
const rows = document.querySelectorAll(".game__container__rows");
const validBtn = document.querySelector(".game__pChose__btn");
const hambBtn = document.querySelector(".hamb");
const closeMenuBtn = document.querySelector(".menu__closeBtn");
const menu = document.querySelector(".menu");
const langBtn = document.querySelectorAll(".lang__img");
const menuList = document.querySelectorAll(".menu__list");
const modal = document.querySelector(".modalResult");
const modalTrigger = document.querySelector(".modalResult__cover");
const modalContainer = document.querySelector(".modalResult__container");
const modalBtn = document.querySelector(".modalResult__container__btn");
const errorSpan = document.querySelector(".game__pChose__contError__span");
const modalAbout = document.querySelector(".modalAbout");
const modalAboutTrigger = document.querySelector(".modalAbout__cover");
const modalAboutContainer = document.querySelector(".modalAbout__container");
const modalAboutBtn = document.querySelector(".modalAbout__container__btn");

let letterDiff = 5;
let round = 0;
let datas, word, playerWord;
let badLetters = [];
let langEn = false;

fetch("data.json").then((res) => res.json()).then((data) => {
    datas = data;
    startGame();
    changeLang();
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

const resetForNew = () => {
    for (let i = 0; i < rows.length; i++) {
        rows[i].innerHTML = ``;
    }
    round = 0;
    badLetters = [];
    input.value = "";
}

const randomWord = () => {
    let rand;
    if (langEn === true) { 
        if (letterDiff === 5) {
            rand = (Math.ceil(Math.random() * (datas.en[0].length))) - 1;
            word = datas.en[0][rand];
        } else if (letterDiff === 6) {
            rand = (Math.ceil(Math.random() * (datas.en[1].length))) - 1;
            word = datas.en[1][rand];   
        } else {
            rand = (Math.ceil(Math.random() * (datas.en[2].length))) - 1;
            word = datas.en[2][rand];            
        }
    } else {
        if (letterDiff === 5) {
            rand = (Math.ceil(Math.random() * (datas.fr[0].length))) - 1;
            word = datas.fr[0][rand];
        } else if (letterDiff === 6) {
            rand = (Math.ceil(Math.random() * (datas.fr[1].length))) - 1;
            word = datas.fr[1][rand];   
        } else {
            rand = (Math.ceil(Math.random() * (datas.fr[2].length))) - 1;
            word = datas.fr[2][rand];            
        }
    }
}

const startGame = () => {
    resetForNew();
    input.maxLength = letterDiff;
    buildCase(letterDiff);
    randomWord();
}

const verifyLetters = () => {
    const cols = document.querySelectorAll(".game__container__rows__cols" + round);
    let doubleBadLetters = [];
    for (let i = 0; i < word.length; i++) {
        if (playerWord[i] === word[i]) {
            cols[i].classList.add("game__container__rows__cols--good");
            cols[i].textContent = playerWord[i];
        } else {
                badLetters.push(word[i]);
                cols[i].textContent = playerWord[i];
        }
    }
    let double = false;
    for (let i = 0; i < word.length; i++) {
        if (!cols[i].classList.contains("game__container__rows__cols--good")) {
            double = false;
            for (let ii = 0; ii < badLetters.length;ii++) {
                if (playerWord[i] === badLetters[ii]) {
                    if (doubleBadLetters[0] !== undefined) {
                        for (let iii = 0; iii < doubleBadLetters.length; iii++) {
                            if (playerWord[i] === doubleBadLetters[iii]) {
                                double = true;
                                break;
                            }
                        }
                    } else {
                        cols[i].classList.add("game__container__rows__cols--false");
                        doubleBadLetters.push(playerWord[i]);
                        break;
                    }
                    if (double === true) {
                        break;
                    } else {
                        cols[i].classList.add("game__container__rows__cols--false");
                        doubleBadLetters.push(playerWord[i]);    
                        break;
                    }
                }
            }
        }
    }
    if (round === 5) {
        return resultDisplay(false);
    }
    doubleBadLetters = [];
    input.focus();
}

const changeLang = () => {
    const modalAboutList = document.querySelectorAll(".modalAbout__container__list");
    const modalAboutTitle = document.querySelector(".modalAbout__container__title");
    if (langEn === true) {
        menuList[0].textContent = "New game";
        menuList[1].textContent = "Word length : 5";
        menuList[2].textContent = "Word length : 6";
        menuList[3].textContent = "Word length : 7";
        menuList[4].textContent = "Back to game selection";
        menuList[5].textContent = "About";
        modalBtn.textContent = "New game";
        errorSpan.textContent = "Only letters";
        modalAboutList[0].textContent = "Project repository"; 
        modalAboutList[1].textContent = "Github profil"; 
        modalAboutTitle.textContent = "About";
    } else {
        menuList[0].textContent = "Nouvelle partie";
        menuList[1].textContent = "Longueur du mot : 5";
        menuList[2].textContent = "Longueur du mot : 6";
        menuList[3].textContent = "Longueur du mot : 7";
        menuList[4].textContent = "Retourner à la selection des jeux";
        menuList[5].textContent = "A propos de";
        modalBtn.textContent = "Nouvelle partie";
        errorSpan.textContent = "Seulement des lettres";
        modalAboutList[0].textContent = "Dépot distant"; 
        modalAboutList[1].textContent = "Profil github"; 
        modalAboutTitle.textContent = "A propos de";
    }
}

const resultDisplay = (win) => {
    const resultTitle = document.querySelector(".modalResult__container__title");
    const resultGoodWord = document.querySelector(".modalResult__container__goodWord");
    if (langEn === true) {
        if (win === true) {
            resultTitle.textContent = "WIN";
        } else {
            resultTitle.textContent = "LOSE";
        }
    } else {
        if (win === true) {
            resultTitle.textContent = "VICTOIRE";
        } else {
            resultTitle.textContent = "PERDU";
        }
    }
    resultGoodWord.textContent = word;
    modal.classList.add("modalResult--active");
    modalTrigger.classList.add("modalResult--active");
    modalContainer.classList.add("modalResult--active");
    modalBtn.focus();
}

const closeModalResult = () => {
    modal.classList.remove("modalResult--active");
    modalTrigger.classList.remove("modalResult--active");
    modalContainer.classList.remove("modalResult--active");
}

const closeModalAbout = () => {
    modalAbout.classList.remove("modalAbout--active");
    modalAboutTrigger.classList.remove("modalAbout--active");
    modalAboutContainer.classList.remove("modalAbout--active");
}

validBtn.addEventListener("click", () => {
    if (input.value !== "") {
        badLetters = [];
        playerWord = input.value;
        for (let i = 0; i < playerWord.length; i++) {
            if (!playerWord[i].match(/[a-zA-Z]/g)) {
                input.value = "";
                input.focus();
                errorSpan.classList.remove("game__pChose__contError__span--off");
                return input.classList.add("game__pChose__contError__input--error");
            }
        }
        if (input.classList.contains("game__pChose__contError__input--error")) {
            errorSpan.classList.add("game__pChose__contError__span--off");
            input.classList.remove("game__pChose__contError__input--error");
        }
        if (playerWord === word) {
            verifyLetters();
            resultDisplay(true);
        } else {
            verifyLetters();
            round++;
        }
        input.value = "";
    }
})

input.addEventListener("keypress", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        if (input.value !== "") {
            badLetters = [];
            playerWord = input.value;
            for (let i = 0; i < playerWord.length; i++) {
                if (!playerWord[i].match(/[a-zA-Z]/g)) {
                    input.value = "";
                    input.focus();
                    errorSpan.classList.remove("game__pChose__contError__span--off");
                    return input.classList.add("game__pChose__contError__input--error");
                }
            }
            if (input.classList.contains("game__pChose__contError__input--error")) {
            errorSpan.classList.add("game__pChose__contError__span--off");
            input.classList.remove("game__pChose__contError__input--error");
        }
        if (playerWord === word) {
            verifyLetters();
            resultDisplay(true);
        } else {
            verifyLetters();
            round++;
        }
        input.value = "";
    }
}
})

hambBtn.addEventListener("click", () => {
    menu.classList.remove("menu--off");
})

closeMenuBtn.addEventListener("click", () => {
    menu.classList.add("menu--off");
})

langBtn[0].addEventListener("click", () => {
    langEn = false;
    changeLang();
    langBtn[0].classList.add("lang__img--selected");
    langBtn[1].classList.remove("lang__img--selected");
    startGame();
})

langBtn[1].addEventListener("click", () => {
    langEn = true;
    changeLang();
    langBtn[0].classList.remove("lang__img--selected");
    langBtn[1].classList.add("lang__img--selected");
    startGame();
})

modalBtn.addEventListener("click", () => {
    closeModalResult();
    startGame();
})

modalAboutBtn.addEventListener("click", () => {
    closeModalAbout();
})

// Menu

menuList[0].addEventListener("click", () => {
    startGame();
    menu.classList.add("menu--off");
})

menuList[1].addEventListener("click", () => {
    letterDiff = 5;
    startGame();
    menu.classList.add("menu--off");
})

menuList[2].addEventListener("click", () => {
    letterDiff = 6;
    startGame();
    menu.classList.add("menu--off");
})

menuList[3].addEventListener("click", () => {
    letterDiff = 7;
    startGame();
    menu.classList.add("menu--off");
})

menuList[5].addEventListener("click", () => {
    modalAbout.classList.add("modalAbout--active");
    modalAboutTrigger.classList.add("modalAbout--active");
    modalAboutContainer.classList.add("modalAbout--active");
    menu.classList.add("menu--off");
})