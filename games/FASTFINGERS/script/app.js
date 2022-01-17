const textContainer = document.querySelector(".textContainer");

let datas, rand;
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
        <span class="word${i + 1}">${wordsArray[i]}</span>
        `
    }
}