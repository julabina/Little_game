const alphLetters = document.querySelectorAll(".game__alphab__line__letter");
const wordLetterContainer = document.querySelectorAll(".game__word__letterContainer");
const wordLetter = document.querySelectorAll(".game__word__letterContainer__letter");


let datas, word, pts ;



fetch("../data/words.json")
    .then((res) => res.json())
    .then((data) => {
        datas = data;
        assemblyWord();
    }
);

const resetWord = () => {
    for (let i = 0; i < wordLetterContainer.length; i++) {
        wordLetterContainer[i].classList.add("game__word__letterContainer--off");
        wordLetterContainer[i].classList.remove("game__word__letterContainer--on");
    }
    pts = 0;
}

const randomWord = () => {
    a = (Math.ceil((Math.random() * datas.fr.length))) - 1;
    word = datas.fr[a];
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
    console.log(wordLetter[1]);
    for (let i = 0; i < word.length; i++) {
        console.log(letter);
        console.log(word[i]);
        if (letter === word[i]) {
            wordLetter[i].textContent = letter;
            pts += 1;
        }
    }
    verifyWin();
}

const verifyWin = () => {
    if (pts === word.length) {
        console.log('win');
    }
}

alphLetters[0].addEventListener('click', () => {
    verifyLetter("a");
})