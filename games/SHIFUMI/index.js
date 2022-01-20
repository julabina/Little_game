const choiceBtns = document.querySelectorAll(".gameContainer__choiceBtn__btnContainer");
const scoreContainer = document.querySelectorAll(".gameContainer__game__scoreCont__score");
const resultStatus = document.querySelectorAll(".gameContainer__game__resultCont__result");
const choseP1 = document.querySelector(".gameContainer__game_choice__player__p1");
const choseP2 = document.querySelector(".gameContainer__game_choice__player__p2");

let result, choseCpu;
let vsPlayer = false;
let scoreP1 = 0;
let scoreP2 = 0;

const startDisplay = () => {
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
    a = random(3);
    if (a === 0) {
      choseCpu = "rock";
    } else if (a === 1) {
      choseCpu = "paper";
    } else {
      choseCpu = "scissors";
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
        } else {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
            `
            result = 2;
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
        } else {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
            `
            result = 0;
        }
    } else {
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
        } else {
            choseP2.innerHTML = `
            <img class="gameContainer__game__choice__player__img" src="./assets/Scissors.svg" alt="Scissors"></img>
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