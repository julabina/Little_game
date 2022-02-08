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
const hideBtn = document.querySelector(".menuMobileBtn");
const menuTurn = document.querySelector(".menu__turn");
const menuTimer = document.querySelector(".menu__timer");
const menuPlayer = document.querySelector(".menu__player");
const menuDiff = document.querySelector(".menu__difficulty");

let goodPrice, playerPrice, turn, time, val, timerInterval ;
let gameOn = false;
let turnMod = true;

const randomPrice = (diff) => {
   let val = Math.ceil(Math.random() * diff);
   return val; 
}

const gameOption = () => {
    // game mod
    if (radiosTurn[0].checked) {
        turnMod = true;
        turn = 20;
        turnLeft.textContent = "Turn left : " + turn;
        timer.textContent = "";
    } else if (radiosTurn[1].checked) {
        turnMod = true;
        turn = 10;
        turnLeft.textContent = "Turn left : " + turn;
        timer.textContent = "";
    } else if (radiosTurn[2].checked) {
        turnMod = true;
        turn = 5;
        turnLeft.textContent = "Turn left : " + turn;
        timer.textContent = "";
    } else if (radiosTurn[3].checked) {
        turnMod = true;
        turn = 3;
        turnLeft.textContent = "Turn left : " + turn;
        timer.textContent = "";
    } else if (radiosTimer[0].checked) {
        turnMod = false;
        time = 120;
        turnLeft.textContent = "";
        timer.textContent = "Time : " + time;
    } else if (radiosTimer[1].checked) {
        turnMod = false;
        time = 60;
        turnLeft.textContent = "";
        timer.textContent = "Time : " + time;
    } else if (radiosTimer[2].checked) {
        turnMod = false;
        time = 40;
        turnLeft.textContent = "";
        timer.textContent = "Time : " + time;
    } else if (radiosTimer[3].checked) {
        turnMod = false;
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
        if (turnMod === false) {
            timerGo();
        }
    }
}

const timerGo = () => {
        timerInterval = setInterval(() => {
        time--;
        timer.textContent = "Time : " + time;
        if (time < 1) {
            resultContainer.innerHTML += `
            <div class="game__bot__status game__bot__status--lose">LOSE</div>
            <div class="game__bot__good">The good price was ${goodPrice}</div>
            `;
            resultContainer.scrollTop = resultContainer.scrollHeight;
            less.innerHTML = ``;
            more.innerHTML = ``;
            inputPropose.classList.add("game__top__input--off");
            proposeBtn.classList.add("game__mid__btn--off");
            gameOn = false;
            clearInterval(timerInterval);
        }
    }, 1000);
}

const verifyLose = () => {
    if (turnMod === true) {
        turn--;
        turnLeft.textContent = "Turn left : " + turn;
        if (turn < 1) {
            resultContainer.innerHTML += `
            <div class="game__bot__status game__bot__status--lose">LOSE</div>
            <div class="game__bot__good">The good price was ${goodPrice}</div>
            `;
            resultContainer.scrollTop = resultContainer.scrollHeight;
            less.innerHTML = ``;
            more.innerHTML = ``;
            inputPropose.classList.add("game__top__input--off");
            proposeBtn.classList.add("game__mid__btn--off");
            gameOn = false;
        }
    }
}

const verifyPrice = (playerPrice) => {
    if (playerPrice === goodPrice) {
        if (turnMod === false) {
            clearInterval(timerInterval);
        }
        resultContainer.innerHTML += `
        <div class="game__bot__good">${playerPrice}</div>
        <div class="game__bot__status game__bot__status--win">WIN</div>
        `;
        resultContainer.scrollTop = resultContainer.scrollHeight;
        less.innerHTML = ``;
        more.innerHTML = ``;
        inputPropose.classList.add("game__top__input--off");
        proposeBtn.classList.add("game__mid__btn--off");
        gameOn = false;
    } else if (playerPrice < goodPrice) {
        resultContainer.innerHTML += `
        <div class="game__bot__more">${playerPrice}</div>
        `;
        resultContainer.scrollTop = resultContainer.scrollHeight;
        less.innerHTML = ``;
        more.innerHTML = `<p>MORE</p>`;
        verifyLose();
    } else {
        resultContainer.innerHTML += `
        <div class="game__bot__less">${playerPrice}</div>
        `;
        resultContainer.scrollTop = resultContainer.scrollHeight;
        less.innerHTML = `<p>LESS</p>`;
        more.innerHTML = ``;
        verifyLose();
    }
}

const p2Chose = () => {
    if (modaleInput.value !== "") {
        if (parseInt(modaleInput.value) <= val) {
            modaleInput.classList.remove("modaleP2__cont__input--error");
            goodPrice = parseInt(modaleInput.value)
            inputPropose.classList.remove("game__top__input--off");
            proposeBtn.classList.remove("game__mid__btn--off");
            inputPropose.focus();
            modale.classList.add("modaleP2--off");
            if (turnMod === false) {
                setTimeout(() => {
                    timerGo();
                }, 1200);
            }
        } else {
            modaleInput.classList.add("modaleP2__cont__input--error");
            modaleInput.focus();
        }
    } else {
        modaleInput.classList.add("modaleP2__cont__input--error");
        modaleInput.focus();
    }
}

proposeBtn.addEventListener("click", () => {
    if (inputPropose.value !== "" && gameOn === true) {
        verifyPrice(parseInt(inputPropose.value));
        inputPropose.value = '';
    }
    inputPropose.focus();
})

inputPropose.addEventListener("keypress", (e) => {
    if (e.code === 'Enter') {
        if (inputPropose.value !== "" && gameOn === true) {
            verifyPrice(parseInt(inputPropose.value));
            inputPropose.value = '';
        }
        inputPropose.focus();
    }
})

playBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    resultContainer.innerHTML = ``;
    inputPropose.value = '';
    gameOption();
    gameOn = true;
})

modaleBtn.addEventListener("click", () => {
    p2Chose();
})

modaleInput.addEventListener("keypress", (e) => {
    if (e.code === 'Enter') {
        p2Chose();
    }
})

hideBtn.addEventListener("click", () => {
    if (menuTurn.classList.contains("menu__turn--hide")) {
        menuTurn.classList.remove("menu__turn--hide");
        menuTimer.classList.remove("menu__timer--hide");
        menuDiff.classList.remove("menu__difficulty--hide");
        menuPlayer.classList.remove("menu__player--hide");
    } else {
        menuTurn.classList.add("menu__turn--hide");
        menuTimer.classList.add("menu__timer--hide");
        menuDiff.classList.add("menu__difficulty--hide");
        menuPlayer.classList.add("menu__player--hide");
    }
})