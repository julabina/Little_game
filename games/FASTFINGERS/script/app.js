const textContainer = document.querySelector(".textContainer");
const textEntry = document.getElementById("textInput");
const statsGoodWord = document.querySelector(".statsContainer__good");
const statsWrongWord = document.querySelector(".statsContainer__wrong");
const statsKeyStrokeTotal = document.querySelector(".statsContainer__keyStroke__total");
const statsKeyStrokeGood = document.querySelector(".statsContainer__keyStroke__good");
const statsKeyStrokeBad = document.querySelector(".statsContainer__keyStroke__wrong");
const statsAccuracy = document.querySelector(".statsContainer__acc");
const statsWpm = document.querySelector(".statsContainer__wpm");

let datas, rand;
let testt, testtt;
let wordCount = 0;
let goodWord = 0;
let keyStroke = 0;
let goodKeyStroke = 0;
let wordTemporary = [];
let wordsArray = [];

/* Multilanguage start*/
const flags = document.querySelectorAll(".flagsContainer__flag");
const menuNew = document.querySelector(".menu__newGame");
const menu1min = document.querySelector(".menu__classic1min");
const menu2min = document.querySelector(".menu__classic2min");
const menuTextGame = document.querySelector(".menu__text");
const menuBack = document.querySelector(".menu__back");
const menuAbout = document.querySelector(".menu__about");
const statsExplain = document.querySelector(".statsContainer__explain");

let wpmLang;

const language = () => {
    if (flags[0].classList.contains("flagsContainer--focus")) {
        menuNew.textContent = "Nouvelle partie";
        menu1min.textContent = "1 minute";
        menu2min.textContent = "2 minutes";
        menuTextGame.textContent = "Suivre un texte";
        menuBack.textContent = "Retourner au menu de selection";
        menuAbout.textContent = "A propos";
        statsExplain.textContent = "(Mot par minute)";
        wpmLang = "MPM";
    } else {
        menuNew.textContent = "New game";
        menu1min.textContent = "1 minute game";
        menu2min.textContent = "2 minutes game";
        menuTextGame.textContent = "Paragraph mod";
        menuBack.textContent = "Back to game menu";
        menuAbout.textContent = "About";
        statsExplain.textContent = "(Word per minute)";
        wpmLang = "WPM";
    }
}

flags[0].addEventListener("click", () => {
    flags[0].classList.add("flagsContainer--focus");
    flags[1].classList.remove("flagsContainer--focus");
    language();
    assemblyWords();
})

flags[1].addEventListener("click", () => {
    flags[1].classList.add("flagsContainer--focus");
    flags[0].classList.remove("flagsContainer--focus");
    language();
    assemblyWords();
})

/* Multilanguage end */


fetch("data.json")
.then(res => res.json())
.then(data => {
    datas = data;  
    testt = data.words;
    assemblyWords();
})

const reset = () => {
    wordCount = 0;
    goodWord = 0;
    keyStroke = 0;
    goodKeyStroke = 0;
    wordsArray = [];
    textContainer.innerHTML = ``;
}

const random = (val) => {
    rand = Math.ceil(Math.random() * (val - 1));
}

const arrayRemove = (arr, value) => {
   return arr.filter(function(el){
        return el != value;
    })
}

const makeArray = () => {
    let a = datas.words.length;
    let test = wordTemporary;
    for (let i = a; i > 0 ; i--) {
        random(i); 
        wordsArray.push(test[rand]);
        test = arrayRemove(test, test[rand]);
    }
}

const assemblyWords = () => {
    reset();
    language();
    wordTemporary = datas.words;
    makeArray();
    for (let i = 0; i < wordsArray.length; i++) {
        textContainer.innerHTML += `
        <span class="textContainer__word word${i + 1}">${wordsArray[i]}</span>
        `
    }
    const wordSpan = document.querySelectorAll(".textContainer__word");
    wordSpan[wordCount].classList.add("textContainer__word--focus");
}

const controlWord = (word) => {
    const wordSpan = document.querySelectorAll(".textContainer__word");
    if (word.charAt() === ' ') {
        word = word.slice(1);
    }
    if (word === wordsArray[wordCount]) {
        goodWord++;
        wordSpan[wordCount].classList.add("textContainer__word--good");
        goodKeyStroke += word.length;
    } else {
        wordSpan[wordCount].classList.add("textContainer__word--wrong");
    }
    wordSpan[wordCount].classList.remove("textContainer__word--focus");
    wordSpan[wordCount + 1].classList.add("textContainer__word--focus");
    wordCount++;
}

const statsDisplay = () => {
    let badKeyStroke = keyStroke - goodKeyStroke;
    statsGoodWord.textContent = goodWord;
    statsWrongWord.textContent = wordCount - goodWord;
    statsKeyStrokeTotal.textContent = keyStroke;
    statsKeyStrokeGood.textContent = goodKeyStroke;
    statsKeyStrokeBad.textContent = badKeyStroke;
    statsWpm.textContent = wpmLang + " : " + wordCount;
    statsAccuracy.textContent = Math.round(((100 / keyStroke) * goodKeyStroke)*100) / 100;
}

textEntry.addEventListener("keypress", (e) => {
    if (e.code === 'Space') {
        controlWord(textEntry.value);
        textEntry.value = '';
        statsDisplay();
        keyStroke--;
    }
    keyStroke++;
})