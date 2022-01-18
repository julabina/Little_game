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
let wordCount = 0;
let goodWord = 0;
let keyStroke = 0;
let goodKeyStroke = 0;
let wordTemporary = [];
let wordsArray = [];

fetch("data.json")
.then(res => res.json())
.then(data => {
    datas = data;  
    assemblyWords();
})

const random = (val) => {
    rand = Math.ceil(Math.random() * (val - 1));
}

const makeArray = () => {
    for (let i = datas.words.length; i > 0 ; i--) {
        random(i);
        wordsArray.push(wordTemporary[rand]);
        wordTemporary.splice(rand,1)
    }
    console.log(wordsArray);
}

const assemblyWords = () => {
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
    statsWpm.textContent = wordCount;
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