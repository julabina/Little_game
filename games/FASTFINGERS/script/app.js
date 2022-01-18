const textContainer = document.querySelector(".textContainer");
const textEntry = document.getElementById("textInput");

let datas, rand;
let wordCount = 0;
let goodWord = 0;
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
}

const controlWord = (word) => {
    const wordSpan = document.querySelectorAll(".textContainer__word");
    if (word.charAt() === ' ') {
        word = word.slice(1);
    }
    if (word === wordsArray[wordCount]) {
        goodWord++;
    }
    wordSpan[wordCount].classList.add("textContainer__word--off");
    wordCount++;
}

const test = () => {
    textEntry.value = '';

}

textEntry.addEventListener("keypress", (e) => {
    if (e.code === 'Space') {
        controlWord(textEntry.value);
        test();
    }
})