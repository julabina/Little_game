const choiceBtns = document.querySelectorAll(".gameContainer__choiceBtn__btnContainer");
const scoreContainer = document.querySelectorAll(".gameContainer__game__scoreCont__score");
const resultStatus = document.querySelectorAll(".gameContainer__game__resultCont__result");
const choseP1 = document.querySelector(".gameContainer__game_choice__player__p1");
const choseP2 = document.querySelector(".gameContainer__game_choice__player__p2");
const menu = document.querySelector(".menuContainer__menu");
const menuBtn = document.querySelector(".menuContainer__btn");
const gameSelectBtn = document.querySelectorAll(".menuContainer__menu__options__btns__btn");
const title = document.querySelector(".gameTitle");
const radioVictoryPts = document.querySelectorAll(".menuContainer__menu__options__radios__left__radioLabel__partyType");
const modaleResult = document.querySelector(".modaleResult");
const modaleResultText = document.querySelector(".modaleResult__modale__win");
const modaleResultBtn = document.querySelector(".modaleResult__modale__btn");

let result, choseCpu;
let vsPlayer = false;
let lsGame = false;
let scoreP1 = 0;
let scoreP2 = 0;

const reset = () => {
    scoreP1 = 0;
    scoreP2 = 0;
}

const startDisplay = () => {
    reset();
    if (lsGame === true) {
        title.textContent = "Rock Paper Scissors Lizard Spock";
        choiceBtns[3].classList.remove("gameContainer__choiceBtn__btnContainer--off");
        choiceBtns[4].classList.remove("gameContainer__choiceBtn__btnContainer--off");
    } else {
        title.textContent = "Shifumi classic";
        choiceBtns[3].classList.add("gameContainer__choiceBtn__btnContainer--off");
        choiceBtns[4].classList.add("gameContainer__choiceBtn__btnContainer--off");
    }
    scoreContainer[0].textContent = scoreP1;
    scoreContainer[1].textContent = scoreP2;
    choseP1.innerHTML = `
            <div class="test">?</div>
    `
    choseP2.innerHTML = `
            <div class="test">?</div>
    `
}

const random = (int) => {
    return Math.floor(Math.random() * int);
};

const AIRandom = () => {
    if (lsGame === true) {
        a = random(5);
    } else {
        a = random(3);
    }
    if (a === 0) {
      choseCpu = "rock";
    } else if (a === 1) {
      choseCpu = "paper";
    } else if (a === 2) {
      choseCpu = "scissors";
    } else if (a === 3) {
        choseCpu = "lizard";
    } else {
        choseCpu = "spock";
    }
    return choseCpu;
  };

const play = (chosen) => {
    AIRandom();
    if (chosen === "rock") {
        choseP1.innerHTML = `
        <img class="gameContainer__game__choice__player__img" src="./assets/Rock.svg" alt="Rock"></img>
        `
        if (choseCpu === "rock") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Rock.svg" alt="Rock"></img>
            `
            result = 1;
        } else if (choseCpu === "paper") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Paper.svg" alt="Paper"></img>
            `
            result = 0;
        } else if (choseCpu === "scissors") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
            `
            result = 2;
        } else if (choseCpu === "lizard") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Lizard.svg" alt="Lizard"></img>
            `
            result = 2;
        } else {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Spock.svg" alt="Spock"></img>
            `
            result = 0;
        }
    } else if (chosen === "paper") {
        choseP1.innerHTML = `
        <img class="gameContainer__game__choice__player__img" src="./assets/Paper.svg" alt="Paper"></img>
        `
        if (choseCpu === "rock") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Rock.svg" alt="Rock"></img>
            `
            result = 2;
        } else if (choseCpu === "paper") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Paper.svg" alt="Paper"></img>
            `
            result = 1;
        } else if (choseCpu === "scissors") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
            `
            result = 0;
        } else if (choseCpu === "lizard") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Lizard.svg" alt="Lizard"></img>
            `
            result = 0;
        } else {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Spock.svg" alt="Spock"></img>
            `
            result = 2;
        }
    } else if (chosen === "scissors") {
          choseP1.innerHTML = `
          <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
          `
          if (choseCpu === "rock") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Rock.svg" alt="Rock"></img>
            `
            result = 0;
        } else if (choseCpu === "paper") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Paper.svg" alt="Paper"></img>
            `
            result = 2;
        } else if (choseCpu === "scissors") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
            `
          result = 1;
        } else if (choseCpu === "lizard") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Lizard.svg" alt="Lizard"></img>
            `
            result = 2;
        } else {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Spock.svg" alt="Spock"></img>
            `
            result = 0;
        }
      } else if (chosen === "lizard") {
            choseP1.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Lizard.svg" alt="Lizard"></img>
            `
            if (choseCpu === "rock") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Rock.svg" alt="Rock"></img>
            `
            result = 0;
        } else if (choseCpu === "paper") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Paper.svg" alt="Paper"></img>
            `
            result = 2;
        } else if (choseCpu === "scissors") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
            `
            result = 0;
        } else if (choseCpu === "lizard") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Lizard.svg" alt="Lizard"></img>
            `
            result = 1;
        } else {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Spock.svg" alt="Spock"></img>
            `
            result = 2;
        }
      } else {
            choseP1.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Spock.svg" alt="Spock"></img>
            `
            if (choseCpu === "rock") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Rock.svg" alt="Rock"></img>
            `
            result = 2;
        } else if (choseCpu === "paper") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Paper.svg" alt="Paper"></img>
            `
            result = 0;
        } else if (choseCpu === "scissors") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
            `
            result = 2;
        } else if (choseCpu === "lizard") {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Lizard.svg" alt="Lizard"></img>
            `
            result = 0;
        } else {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Spock.svg" alt="Spock"></img>
            `
            result = 1;
        }
      }
      displayGame(); 
}

const displayGame = () => {
    if (result === 2) {
        resultStatus[0].textContent = "Win"
        resultStatus[1].textContent = "Lose"
        scoreP1++;
    } else if (result === 0) {
          resultStatus[0].textContent = "Lose"
          resultStatus[1].textContent = "Win"
          scoreP2++;
    } else {
          resultStatus[0].textContent = "Equal"
          resultStatus[1].textContent = "Equal"
    }
    scoreContainer[0].textContent = scoreP1;
    scoreContainer[1].textContent = scoreP2;
    verifyWin();
}

const verifyWin = () => {
    let pla;
    if (radioVictoryPts[1].checked) {
        if (scoreP1 === 3 || scoreP2 === 3) {
            if (scoreP1 === 3) {
                pla = "Player 1"
            } else {
                pla = "CPU"
            }
            modaleResultText.textContent = pla + " WIN";
            modaleResult.classList.remove("modaleResult--off");
        }
    } else if (radioVictoryPts[2].checked) {
        if (scoreP1 === 10 || scoreP2 === 10) {
            if (scoreP1 === 3) {
                pla = "Player 1"
            } else {
                pla = "CPU"
            }
            modaleResultText.textContent = pla + " WIN";
            modaleResult.classList.remove("modaleResult--off");  
        }
    } else if (radioVictoryPts[3].checked) {
        if (scoreP1 === 20 || scoreP2 === 20) {
            if (scoreP1 === 3) {
                pla = "Player 1"
            } else {
                pla = "CPU"
            }
            modaleResultText.textContent = pla + " WIN";
            modaleResult.classList.remove("modaleResult--off");   
        }
    } 
}

startDisplay();

choiceBtns[0].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="test"></div>
    `
    choseP2.innerHTML = `
            <div class="test"></div>
    `
    setTimeout(() => {
        play("rock");
    }, 100);
})

choiceBtns[1].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="test"></div>
    `
    choseP2.innerHTML = `
            <div class="test"></div>
    `
    setTimeout(() => {
        play("paper");
    }, 100);
})

choiceBtns[2].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="test"></div>
    `
    choseP2.innerHTML = `
            <div class="test"></div>
    `
    setTimeout(() => {
        play("scissors");
    }, 100);
})

choiceBtns[3].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="test"></div>
    `
    choseP2.innerHTML = `
            <div class="test"></div>
    `
    setTimeout(() => {
        play("lizard");
    }, 100);
})

choiceBtns[4].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="test"></div>
    `
    choseP2.innerHTML = `
            <div class="test"></div>
    `
    setTimeout(() => {
        play("spock");
    }, 100);
})

menuBtn.addEventListener("click", () => {
    if (menu.classList.contains("menuContainer__menu--off")) {
        menu.classList.remove("menuContainer__menu--off");
    } else {
        menu.classList.add("menuContainer__menu--off");
    }
})
gameSelectBtn[0].addEventListener("click", () => {
    gameSelectBtn[0].classList.add("menuContainer__menu__options__btns__btn--selected");
    gameSelectBtn[1].classList.remove("menuContainer__menu__options__btns__btn--selected");
    lsGame = false;
    startDisplay();
})

gameSelectBtn[1].addEventListener("click", () => {
    gameSelectBtn[0].classList.remove("menuContainer__menu__options__btns__btn--selected");
    gameSelectBtn[1].classList.add("menuContainer__menu__options__btns__btn--selected");
    lsGame = true;
    startDisplay();
})

modaleResultBtn.addEventListener("click", () => {
    modaleResult.classList.add("modaleResult--off");
    startDisplay();
})