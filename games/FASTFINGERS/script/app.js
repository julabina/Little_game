const textContainer = document.querySelector(".textContainer");
const textEntry = document.getElementById("textInput");
const statsGoodWord = document.querySelector(".statsContainer__good");
const statsWrongWord = document.querySelector(".statsContainer__wrong");
const statsKeyStrokeTotal = document.querySelector(".statsContainer__keyStroke__total");
const statsKeyStrokeGood = document.querySelector(".statsContainer__keyStroke__good");
const statsKeyStrokeBad = document.querySelector(".statsContainer__keyStroke__wrong");
const statsKeystroke = document.querySelector(".statsContainer__keyStroke");
const statsAccuracy = document.querySelector(".statsContainer__acc");
const statsWpm = document.querySelector(".statsContainer__wpm");
const clock = document.querySelector(".clockContainer");

let datas, rand, lang;
let start = false;
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

let wpmLang, accuracyLang, keystrokeLang, goodWordLang, wrongWordLang;

const language = () => {
    if (flags[0].classList.contains("flagsContainer--focus")) {
        menuNew.textContent = "Nouvelle partie";
        menu1min.textContent = "Classique - 1 minute";
        menu2min.textContent = "Classique - 2 minutes";
        menuTextGame.textContent = "Suivre un texte";
        menuBack.textContent = "Retourner au menu de selection";
        menuAbout.textContent = "A propos";
        statsExplain.textContent = "(Mot par minute)";
        wpmLang = "MPM";
        accuracyLang = "Précision";
        keystrokeLang = "Touches pressées";
        goodWordLang = "Mots corrects";
        wrongWordLang = "Mots incorrects";
        lang = "fr";
    } else {
        menuNew.textContent = "New game";
        menu1min.textContent = "1 minute game";
        menu2min.textContent = "2 minutes game";
        menuTextGame.textContent = "Paragraph mod";
        menuBack.textContent = "Back to game menu";
        menuAbout.textContent = "About";
        statsExplain.textContent = "(Word per minute)";
        wpmLang = "WPM";
        accuracyLang = "Accuracy";
        keystrokeLang = "Keystrokes";
        goodWordLang = "Correct word";
        wrongWordLang = "Wrong word";
        lang = "gb";
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
    assemblyWords();
})

const reset = () => {
    wordCount = 0;
    goodWord = 0;
    keyStroke = 0;
    goodKeyStroke = 0;
    wordsArray = [];
    textContainer.innerHTML = ``;
    start = false;
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
    
    let a ;
    if (lang === "fr") {
        a = datas.words_fr.length;
    } else {
        a = datas.words_gb.length;
    }
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
    if (lang === "fr") {
        wordTemporary = datas.words_fr;
    } else {
        wordTemporary = datas.words_gb;
    }
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
    statsGoodWord.textContent = goodWordLang + " : " + goodWord;
    statsWrongWord.textContent = wrongWordLang + " : " + (wordCount - goodWord);
    statsKeystroke.innerHTML = `${keystrokeLang} : (<span class="statsContainer__keyStroke__good">${goodKeyStroke}</span>|<span class="statsContainer__keyStroke__wrong">${badKeyStroke}</span>) <span class="statsContainer__keyStroke__total">${keyStroke}</span>`; 
    statsWpm.textContent = wpmLang + " : " + wordCount;
    statsAccuracy.textContent = Math.round(((100 / keyStroke) * goodKeyStroke)*100) / 100;
}

const time = () => {
    let timer = 59;
   let theTimer = setInterval(() => {
        clock.textContent = timer;
        timer--;
        if(timer < 0) {
            clearInterval(theTimer);
            statsDisplay();
        }
    }, 1000);
}

textEntry.addEventListener("keypress", (e) => {
    if(start === false) {
        time();
        start = true;
    }
    if (e.code === 'Space') {
        controlWord(textEntry.value);
        textEntry.value = '';
        keyStroke--;
    }
    keyStroke++;
})