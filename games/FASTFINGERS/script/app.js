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
let text1 = true;
let textMod = false;
let fullText = false;
let lineCount = 0;
let wordCount = 0;
let goodWord = 0;
let keyStroke = 0;
let goodKeyStroke = 0;
let lettersCount = 0;
let wordTemporary = [];
let textarray = [];
let wordsArray = [];

/* Multilanguage start*/
const flags = document.querySelectorAll(".flagsContainer__flag");
const menuNew = document.querySelector(".menu__newGame");
const menu1min = document.querySelector(".menu__classic1min");
const menu2min = document.querySelector(".menu__classic2min");
const menuTextGame1 = document.querySelector(".menu__text1min");
const menuTextGame2 = document.querySelector(".menu__text2min");
const menuTextGameFull = document.querySelector(".menu__fullText");
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
        menu1min.textContent = "Mots aléatoires - 1 minute";
        menu2min.textContent = "Mots aléatoires - 2 minutes";
        menuTextGame1.textContent = "Texte - 1 minute";
        menuTextGame2.textContent = "Texte - 2 minutes";
        menuTextGameFull.textContent = "Texte entier";
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
        menuTextGame1.textContent = "Text - 1 minute";
        menuTextGame2.textContent = "Text - 2 minutes";
        menuTextGameFull.textContent = "Full text";
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
    lineCount = 0;
    lettersCount = 0;
    wordsArray = [];
    textarray = [];
    textContainer.innerHTML = ``;
    start = false;
    textEntry.value = "";
    textEntry.disabled = false;
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
        let arrayTemp = wordTemporary;
        for (let i = a; i > 0 ; i--) {
            random(i); 
            wordsArray.push(arrayTemp[rand]);
            arrayTemp = arrayRemove(arrayTemp, arrayTemp[rand]);
        } 
}

const assemblyWords = () => {
    reset();
    language();
    if (textMod === false) {
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
    } else {
        if (fullText === true) {
            if (lang === "fr"){
                textarray = datas.text_full_fr;
            } else {
                textarray = datas.text_full_gb;
            }
        } else {
            if (lang === "fr"){
                textarray = datas.text_fr;
            } else {
                textarray = datas.text_gb;
            }
        }
        for (let i = 0; i < textarray.length; i++) {
            textContainer.innerHTML += `
            <span class="textContainer__word word${i + 1}">${textarray[i]}</span>
            `
        }
    }
    const wordSpan = document.querySelectorAll(".textContainer__word");
    wordSpan[wordCount].classList.add("textContainer__word--focus");
}

const controlWord = (word) => {
    const wordSpan = document.querySelectorAll(".textContainer__word");
    if (word.charAt() === ' ') {
        word = word.slice(1);
    }
        if (word === wordsArray[wordCount] || word === textarray[wordCount]) {
            goodWord++;
            wordSpan[wordCount].classList.add("textContainer__word--good");
            goodKeyStroke += word.length;
            let a = word.length + 1;
            lettersCount += a;
        } else {
            wordSpan[wordCount].classList.add("textContainer__word--wrong");
        }
    wordSpan[wordCount].classList.remove("textContainer__word--focus");

        /* wordSpan[wordCount + 1].classList.add("textContainer__word--focus"); */
        if (textMod === true) {
            if ((wordCount + 1) !== textarray.length) {
                wordSpan[wordCount + 1].classList.add("textContainer__word--focus");
            }
        } else {
            if ((wordCount + 1) !== wordsArray.length) {
                wordSpan[wordCount + 1].classList.add("textContainer__word--focus");
            }
        }
    
    wordCount++;
    lineCount++
    if (lineCount === 10) {
        for (let i = 0; i < wordCount; i++) {
            wordSpan[i].classList.add("textContainer__word--off");
        }
        lineCount = 0;
    }  
    if (fullText === true) {
        if (wordCount === textarray.length) {
            clearInterval(theTimer);
            statsDisplay(false);
            textEntry.disabled = true;
        } 
    } else {
        if (wordCount === textarray.length || wordCount === wordsArray.length) {
            clearInterval(theTimer);
            statsDisplay(true);
            textEntry.disabled = true;
        }
    }
}

const statsDisplay = (finish) => {
    let time, letterByTime;
    if (finish === true) {
        if (classic1 === true || text1 === true) {
            let a = 60 - timer;
            time = a / 60;
            letterByTime = lettersCount / time;
            wpm = Math.round(letterByTime / 5);        
        } else {
            let b = 120 - timer;
            time = b / 60; 
            letterByTime = lettersCount / time;
            wpm = Math.round(letterByTime / 5);        
        }
    } else {
        if (fullText === true) {
            time = timer / 60; 
            letterByTime = lettersCount / time;
            wpm = Math.round(letterByTime / 5);        
        } else {
            if (classic1 === true) {
                wpm = Math.round(lettersCount / 5);
            } else {
                wpm = Math.round((lettersCount / 2) / 5);
            }
        }
    }
    statsContainer.classList.remove("statsContainer--off");
    let badKeyStroke = keyStroke - goodKeyStroke;
    statsGoodWord.textContent = goodWordLang + " : " + goodWord;
    statsWrongWord.textContent = wrongWordLang + " : " + (wordCount - goodWord);
    statsKeystroke.innerHTML = `${keystrokeLang} : (<span class="statsContainer__keyStroke__good">${goodKeyStroke}</span>|<span class="statsContainer__keyStroke__wrong">${badKeyStroke}</span>) <span class="statsContainer__keyStroke__total">${keyStroke}</span>`; 
    statsWpm.textContent = wpmLang + " : " + wpm;
    statsAccuracy.textContent = accuracyLang + " : " + (Math.round(((100 / keyStroke) * goodKeyStroke)*100) / 100) + " %";
}

const time = () => {
    if (fullText === false) {
        if (classic1 === true || text1 === true) {
            timer = 59;
        } else {
            timer = 119;
        }
        theTimer = setInterval(() => {
            clock.textContent = timer;
            timer--;
        if(timer === 0) {
            clearInterval(theTimer);
            statsDisplay(false);
            textEntry.disabled = true;
            clock.textContent= "0";
        }
        }, 1000);
    } else {
        timer = 0;
        theTimer = setInterval(() => {
            clock.textContent = timer;
            timer++;
        }, 1000);
    }
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
    textMod = false;
    classic1 = true;
    text1 = false;
    fullText = false;
    assemblyWords();
    menu.classList.add("menu--off");
})

menu2min.addEventListener("click", () => {
    textMod = false;
    classic1 = false;
    text1 = false;
    fullText = false;
    assemblyWords();
    menu.classList.add("menu--off");
})

menuTextGame1.addEventListener("click", () => {
    textMod = true;
    classic1 = false;
    text1 = true;
    fullText = false;
    assemblyWords();
    menu.classList.add("menu--off");
})

menuTextGame2.addEventListener("click", () => {
    textMod = true;
    classic1 = false;
    text1 = false;
    fullText = false;
    assemblyWords();
    menu.classList.add("menu--off");
})

menuTextGameFull.addEventListener("click", () => {
    textMod = true;
    fullText = true;
    assemblyWords();
    menu.classList.add("menu--off");
})

menuAbout.addEventListener("click", () => {
    modale.classList.remove("modale--off");
    menu.classList.add("menu--off");
})

modaleCloseBtn.addEventListener("click", () => {
    modale.classList.add("modale--off");
})