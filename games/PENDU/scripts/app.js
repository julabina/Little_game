const alphLetters = document.querySelectorAll(".game__alphab__line__letter");
const wordLetterContainer = document.querySelectorAll(".game__word__letterContainer");
const wordLetter = document.querySelectorAll(".game__word__letterContainer__letter");
const changeWordBtn = document.querySelector(".game__changeWordBtn");
const hangmanImgInvisible = document.querySelectorAll(".game__hangedContainer--off");
const resultContainer = document.querySelector(".resultContainer");
const result = document.querySelector(".resultContainer__result");
const resultWord = document.querySelector(".resultContainer__word");
const resultBtn = document.querySelector(".resultContainer__btn");
const hangedPart = document.querySelectorAll(".game__hangedContainer__part");
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const closeMenuBtn = document.querySelector(".menu__closeBtn");
const menu = document.querySelector(".menu");
const newGameLink = document.querySelector(".menu__news");
const about = document.querySelector(".menu__about");
const modaleAbout = document.querySelector(".modaleAbout");
const modaleBtn = document.querySelector(".modaleAbout__btn");
// change language
const flags = document.querySelectorAll(".flagsContainer__flag");
const windowTitle = document.querySelector(".title");
const headerTitle = document.querySelector(".headerTitle");
const modaleTitle = document.querySelector(".modaleAbout__container__title");
const menuBack = document.querySelector(".menu__back");

let datas, word, pts ;
let hangPts = 0;
let french = true;


fetch("../data/words.json")
    .then((res) => res.json())
    .then((data) => {
        datas = data;
        assemblyWord();
    }
);

const changeLanguage = () => {
    if (french === true) {
        windowTitle.textContent = 'PENDU';
        headerTitle.textContent = 'LE PENDU';
        changeWordBtn.textContent = 'Changer mot';
        modaleTitle.textContent = 'Le pendu';
        resultBtn.textContent = 'Nouvelle partie';
        newGameLink.textContent = 'Nouvelle partie';
        about.textContent = 'A propos';
        menuBack.textContent = 'Retourner à la selection des jeux';
    } else {
        windowTitle.textContent = 'HANGMAN';
        headerTitle.textContent = 'HANGMAN';
        changeWordBtn.textContent = 'Change word';
        modaleTitle.textContent = 'Hangman';
        resultBtn.textContent = 'New game';
        newGameLink.textContent = 'New game';
        about.textContent = 'About';
        menuBack.textContent = 'Back to games selection';
    }
}

const resetWord = () => {
    for (let i = 0; i < wordLetterContainer.length; i++) {
        wordLetterContainer[i].classList.add("game__word__letterContainer--off");
        wordLetterContainer[i].classList.remove("game__word__letterContainer--on");
    }
    for (let i = 0;i < wordLetter.length; i++) {
        wordLetter[i].textContent = "_";
    }
    for (let i = 0; i < alphLetters.length;i++) {
        alphLetters[i].classList.remove("game__alphab__line__letter--chosen");
    }
    for (let i = 0; i < hangedPart.length; i++) {
        hangedPart[i].classList.add("game__hangedContainer--off");
    }
    pts = 0;
    hangPts = 0;
}

const randomWord = () => {
    let a;
    if (french === true) {
        a = (Math.ceil((Math.random() * datas.fr.length))) - 1;
        word = datas.fr[a];
    } else {
        a = (Math.ceil((Math.random() * datas.gb.length))) - 1;
        word = datas.gb[a];
    }   
}

const assemblyWord = () => {
    resetWord();
    randomWord();
    for (let i = 0; i < word.length; i++) {
        wordLetterContainer[i].classList.remove("game__word__letterContainer--off");
        wordLetterContainer[i].classList.add("game__word__letterContainer--on");
    }
}

const verifyLetter = (letter) => {
    let a = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            wordLetter[i].textContent = letter;
            pts += 1;
            verifyWin();
            a++;
        }
    }
    if (a === 0) {
        makeHangman();
    }
}

const verifyWin = () => {
    if (pts === word.length) {
       finalResult(true);
    }
}

const finalResult = (res) => {
    resultContainer.classList.remove("resultContainer--off");
    resultWord.textContent = word;
    if (res === true) {
        if (french === true) {
            result.textContent = "Gagné";
        } else {
            result.textContent = "Win";          
        }
    } else {
        if (french === true) {
            result.textContent = "Perdu";
        } else {
            result.textContent = "Lose";
        }
    }
}

const makeHangman = () => {
    hangmanImgInvisible[hangPts].classList.remove("game__hangedContainer--off");
    if (hangPts === 9) {
        return finalResult(false);
    } else {
        hangPts += 1;
    }
}

changeLanguage();

changeWordBtn.addEventListener("click", () => {
    assemblyWord();
})

resultBtn.addEventListener("click", () => {
    resultContainer.classList.add("resultContainer--off");
    result.textContent = '';
    assemblyWord();
})

alphLetters[0].addEventListener('click', () => {
    alphLetters[0].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("a");
})

alphLetters[1].addEventListener('click', () => {
    alphLetters[1].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("b");
})

alphLetters[2].addEventListener('click', () => {
    alphLetters[2].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("c");
})

alphLetters[3].addEventListener('click', () => {
    alphLetters[3].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("d");
})

alphLetters[4].addEventListener('click', () => {
    alphLetters[4].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("e");
})

alphLetters[5].addEventListener('click', () => {
    alphLetters[5].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("f");
})

alphLetters[6].addEventListener('click', () => {
    alphLetters[6].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("g");
})

alphLetters[7].addEventListener('click', () => {
    alphLetters[7].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("h");
})

alphLetters[8].addEventListener('click', () => {
    alphLetters[8].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("i");
})

alphLetters[9].addEventListener('click', () => {
    alphLetters[9].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("j");
})

alphLetters[10].addEventListener('click', () => {
    alphLetters[10].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("k");
})

alphLetters[11].addEventListener('click', () => {
    alphLetters[11].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("l");
})

alphLetters[12].addEventListener('click', () => {
    alphLetters[12].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("m");
})

alphLetters[13].addEventListener('click', () => {
    alphLetters[13].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("n");
})

alphLetters[14].addEventListener('click', () => {
    alphLetters[14].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("o");
})

alphLetters[15].addEventListener('click', () => {
    alphLetters[15].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("p");
})

alphLetters[16].addEventListener('click', () => {
    alphLetters[16].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("q");
})

alphLetters[17].addEventListener('click', () => {
    alphLetters[17].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("r");
})

alphLetters[18].addEventListener('click', () => {
    alphLetters[18].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("s");
})

alphLetters[19].addEventListener('click', () => {
    alphLetters[19].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("t");
})

alphLetters[20].addEventListener('click', () => {
    alphLetters[20].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("u");
})

alphLetters[21].addEventListener('click', () => {
    alphLetters[21].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("v");
})

alphLetters[22].addEventListener('click', () => {
    alphLetters[22].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("w");
})

alphLetters[23].addEventListener('click', () => {
    alphLetters[23].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("x");
})

alphLetters[24].addEventListener('click', () => {
    alphLetters[24].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("y");
})

alphLetters[25].addEventListener('click', () => {
    alphLetters[25].classList.add("game__alphab__line__letter--chosen");
    verifyLetter("z");
})

hamburgerBtn.addEventListener("click", () => {
    menu.classList.remove("menu--off");
})

closeMenuBtn.addEventListener("click", () => {
    menu.classList.add("menu--off");
})

newGameLink.addEventListener("click", () => {
    menu.classList.add("menu--off");
    assemblyWord();
})

about.addEventListener("click", () => {
    menu.classList.add("menu--off");
    modaleAbout.classList.remove("modaleAbout--off");
})

modaleBtn.addEventListener("click", () => {
    console.log('test');
    modaleAbout.classList.add("modaleAbout--off");
})

flags[0].addEventListener("click", () => {
    flags[0].classList.add("flagsContainer__flag--selected");
    flags[1].classList.remove("flagsContainer__flag--selected");
    french = true;
    changeLanguage();
    assemblyWord();
})

flags[1].addEventListener("click", () => {
    flags[0].classList.remove("flagsContainer__flag--selected");
    flags[1].classList.add("flagsContainer__flag--selected");
    french = false;
    changeLanguage();
    assemblyWord();
})
