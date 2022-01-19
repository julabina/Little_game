const textContainer = document.querySelector(".textContainer");
const textEntry = document.getElementById("textInput");
const statsContainer = document.querySelector(".statsContainer");
const statsGoodWord = document.querySelector(".statsContainer__good");
const statsWrongWord = document.querySelector(".statsContainer__wrong");
const statsKeyStrokeTotal = document.querySelector(".statsContainer__keyStroke__total");
const statsKeyStrokeGood = document.querySelector(".statsContainer__keyStroke__good");
const statsKeyStrokeBad = document.querySelector(".statsContainer__keyStroke__wrong");
const statsKeystroke = document.querySelector(".statsContainer__keyStroke");
const statsAccuracy = document.querySelector(".statsContainer__acc");
const statsWpm = document.querySelector(".statsContainer__wpm");
const clock = document.querySelector(".inputContainer__clockContainer");
const menu = document.querySelector(".menu");
const hambBtn = document.querySelector(".hamburgerBtn");
const crossMenuBtn = document.querySelector(".menu__closeBtn");
const modale = document.querySelector(".modale");
const modaleCloseBtn = document.querySelector(".modale__btnContainer__closeBtn");

let datas, rand, lang, wpm , theTimer, timer ;
let start = false;
let classic1 = true;
let lineCount = 0;
let wordCount = 0;
let goodWord = 0;
let keyStroke = 0;
let goodKeyStroke = 0;
let lettersCount = 0;
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
const statsNewBtn = document.querySelector(".statsContainer__newBtn");
const modaleTitle = document.querySelector(".modale__title");
const modaleCodedBy = document.querySelector(".modale__codedBy");
const modaleGHLink = document.querySelector(".modale__gh__githubLink");

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
        statsNewBtn.textContent = "Nouvelle partie";
        modaleTitle.textContent = "A propos";
        modaleCodedBy.textContent = "Développé par Lenfumé Julien";
        modaleGHLink.textContent = "Profil Github : ";
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
        statsNewBtn.textContent = "New game";
        modaleTitle.textContent = "About";
        modaleCodedBy.textContent = "Coded by Lenfume Julien";
        modaleGHLink.textContent = "Github profil : ";
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
    textEntry.value = "";
    textEntry.readOnly = false;
    statsContainer.classList.add("statsContainer--off");
    clearInterval(theTimer);
    clock.textContent = "0";
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
        let a = word.length + 1;
        lettersCount += a;
    } else {
        wordSpan[wordCount].classList.add("textContainer__word--wrong");
    }
    wordSpan[wordCount].classList.remove("textContainer__word--focus");
    wordSpan[wordCount + 1].classList.add("textContainer__word--focus");
    wordCount++;
    lineCount++
    if (lineCount === 10) {
        for (let i = 0; i < wordCount; i++) {
            wordSpan[i].classList.add("textContainer__word--off");
        }
        lineCount = 0;
    }
}

const statsDisplay = () => {
    wpm = Math.round(lettersCount / 5);
    statsContainer.classList.remove("statsContainer--off");
    let badKeyStroke = keyStroke - goodKeyStroke;
    statsGoodWord.textContent = goodWordLang + " : " + goodWord;
    statsWrongWord.textContent = wrongWordLang + " : " + (wordCount - goodWord);
    statsKeystroke.innerHTML = `${keystrokeLang} : (<span class="statsContainer__keyStroke__good">${goodKeyStroke}</span>|<span class="statsContainer__keyStroke__wrong">${badKeyStroke}</span>) <span class="statsContainer__keyStroke__total">${keyStroke}</span>`; 
    statsWpm.textContent = wpmLang + " : " + wpm;
    statsAccuracy.textContent = accuracyLang + " : " + (Math.round(((100 / keyStroke) * goodKeyStroke)*100) / 100) + " %";
}

const time = () => {
    if (classic1 === true) {
        timer = 59;
    } else {
        timer = 119;
    }
   theTimer = setInterval(() => {
        clock.textContent = timer;
        timer--;
        if(timer === 0) {
            clearInterval(theTimer);
            statsDisplay();
            textEntry.readOnly = true;
            clock.textContent= "0"
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

statsNewBtn.addEventListener("click", () => {
    assemblyWords();
})

hambBtn.addEventListener("click", () => {
    menu.classList.remove("menu--off");
})

crossMenuBtn.addEventListener("click", () => {
    menu.classList.add("menu--off");
})

menuNew.addEventListener("click", () => {
    assemblyWords();
    menu.classList.add("menu--off");
})

menu1min.addEventListener("click", () => {
    assemblyWords();
    menu.classList.add("menu--off");
    classic1 = true;
})

menu2min.addEventListener("click", () => {
    assemblyWords();
    menu.classList.add("menu--off");
    classic1 = false;
})

menuTextGame.addEventListener("click", () => {
    
    menu.classList.add("menu--off");
})

menuAbout.addEventListener("click", () => {
    modale.classList.remove("modale--off");
    menu.classList.add("menu--off");
})

modaleCloseBtn.addEventListener("click", () => {
    modale.classList.add("modale--off");
})