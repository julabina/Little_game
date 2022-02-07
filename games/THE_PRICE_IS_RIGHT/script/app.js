const inputPropose = document.querySelector(".game__top__input");
const proposeBtn = document.querySelector(".game__mid__btn");
const resultContainer = document.querySelector(".game__bot");
const less = document.querySelector(".game__mid__less");
const more = document.querySelector(".game__mid__more");
const playBtn = document.querySelector(".menu__btnCont__playBtn");
const turnLeft = document.querySelector(".game__top__turnLeft");
const timer = document.querySelector(".game__top__timer");
const radiosTurn = document.querySelectorAll(".menu__turn__radioCont__radio");
const radiosTimer = document.querySelectorAll(".menu__timer__radioCont__radio"); 
const radiosPlayers = document.querySelectorAll(".menu__player__radioCont__radio");
const radiosDifficulty = document.querySelectorAll(".menu__difficulty__radioCont__radio");
const modale = document.querySelector(".modaleP2");
const modaleInput = document.querySelector(".modaleP2__cont__input");
const modaleBtn = document.querySelector(".modaleP2__cont__btn");
const modaleMsg = document.querySelector(".modaleP2__cont__msg");

let goodPrice, playerPrice, turn, time, val;

const randomPrice = (diff) => {
   let val = Math.ceil(Math.random() * diff);
   return val; 
}

const gameOption = () => {
    // game mod
    if (radiosTurn[0].checked) {
        turn = 20;
        turnLeft.textContent = "Turn left : " + turn;
        timer.textContent = "";
    } else if (radiosTurn[1].checked) {
        turn = 10;
        turnLeft.textContent = "Turn left : " + turn;
        timer.textContent = "";
    } else if (radiosTurn[2].checked) {
        turn = 5;
        turnLeft.textContent = "Turn left : " + turn;
        timer.textContent = "";
    } else if (radiosTurn[3].checked) {
        turn = 3;
        turnLeft.textContent = "Turn left : " + turn;
        timer.textContent = "";
    } else if (radiosTimer[0].checked) {
        time = 120;
        turnLeft.textContent = "";
        timer.textContent = "Time : " + time;
    } else if (radiosTimer[1].checked) {
        time = 60;
        turnLeft.textContent = "";
        timer.textContent = "Time : " + time;
    } else if (radiosTimer[2].checked) {
        time = 40;
        turnLeft.textContent = "";
        timer.textContent = "Time : " + time;
    } else if (radiosTimer[3].checked) {
        time = 20;
        turnLeft.textContent = "";
        timer.textContent = "Time : " + time;
    } 
    // other option
        if (radiosDifficulty[0].checked) {
            val = 100;
        } else if (radiosDifficulty[1].checked) {
            val = 1000;
        } else if (radiosDifficulty[2].checked) {
            val = 10000;
        } else if (radiosDifficulty[3].checked) {
            val = 100000;
        }
    if (radiosPlayers[1].checked) {
        modale.classList.remove("modaleP2--off");
        modaleInput.focus();
        modaleMsg.textContent = "Enter a number between 0 and " + val;
    } else {
        goodPrice = randomPrice(val);
        inputPropose.classList.remove("game__top__input--off");
        proposeBtn.classList.remove("game__mid__btn--off");
        inputPropose.focus();
    }
}

const verifyPrice = (playerPrice) => {
    if (playerPrice === goodPrice) {
        resultContainer.innerHTML += `
        <div class="game__bot__good">${playerPrice}</div>
        <div class="game__bot__status game__bot__status--win">WIN</div>
        `;
        resultContainer.scrollTop = resultContainer.scrollHeight;
        less.innerHTML = ``;
        more.innerHTML = ``;
        inputPropose.classList.add("game__top__input--off");
        proposeBtn.classList.add("game__mid__btn--off");
        playBtn.focus();
    } else if (playerPrice < goodPrice) {
        resultContainer.innerHTML += `
        <div class="game__bot__more">${playerPrice}</div>
        `;
        resultContainer.scrollTop = resultContainer.scrollHeight;
        less.innerHTML = ``;
        more.innerHTML = `<p>MORE</p>`;
    } else {
        resultContainer.innerHTML += `
        <div class="game__bot__less">${playerPrice}</div>
        `;
        resultContainer.scrollTop = resultContainer.scrollHeight;
        less.innerHTML = `<p>LESS</p>`;
        more.innerHTML = ``;
    }
}

const p2Chose = () => {
    if (modaleInput.value !== "") {
        if (parseInt(modaleInput.value) >! val) {
            goodPrice = parseInt(modaleInput.value)
            inputPropose.classList.remove("game__top__input--off");
            proposeBtn.classList.remove("game__mid__btn--off");
            inputPropose.focus();
            modale.classList.add("modaleP2--off");
        }
    }
}

proposeBtn.addEventListener("click", () => {
    if (inputPropose.value !== "") {
        verifyPrice(parseInt(inputPropose.value));
        inputPropose.value = '';
    }
    inputPropose.focus();
})

inputPropose.addEventListener("keypress", (e) => {
    if (e.code === 'Enter') {
        if (inputPropose.value !== "") {
            verifyPrice(parseInt(inputPropose.value));
            inputPropose.value = '';
        }
        inputPropose.focus();
    }
})

playBtn.addEventListener("click", () => {
    resultContainer.innerHTML = ``;
    gameOption();
})

modaleBtn.addEventListener("click", () => {
    p2Chose();
})