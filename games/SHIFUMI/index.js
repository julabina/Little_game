const choiceBtns = document.querySelectorAll(".gameContainer__choiceBtn__btnContainer");
const scoreContainer = document.querySelectorAll(".gameContainer__game__scoreCont__score");
const resultStatus = document.querySelectorAll(".gameContainer__game__resultCont__result");
const choseP1 = document.querySelector(".gameContainer__game_choice__player__p1");
const choseP2 = document.querySelector(".gameContainer__game_choice__player__p2");
const menuNew = document.querySelector(".menuContainer__menu__links__new");
const menuAbout = document.querySelector(".menuContainer__menu__links__about");
const menuAboutLs = document.querySelector(".menuContainer__menu__links__aboutLs");
const menu = document.querySelector(".menuContainer__menu");
const menuBtn = document.querySelector(".menuContainer__btn");
const gameSelectBtn = document.querySelectorAll(".menuContainer__menu__options__btns__btn");
const title = document.querySelector(".gameTitle");
const whoPlay = document.querySelector(".gameContainer__game__scoreCont__pChose");
const radioVictoryPts = document.querySelectorAll(".menuContainer__menu__options__radios__left__radioLabel__partyType");
const radioAI = document.querySelectorAll(".menuContainer__menu__options__radios__right__difficulty__radioLabel__lvl");
const radioVS = document.querySelectorAll(".menuContainer__menu__options__radios__right__versus__radioLabel__vs");
const modaleResult = document.querySelector(".modaleResult");
const modaleResultText = document.querySelector(".modaleResult__modale__win");
const modaleResultBtn = document.querySelector(".modaleResult__modale__btn");
const modaleLs = document.querySelector(".modaleAboutLs");
const modaleLsBtn = document.querySelector(".modaleAboutLs__modale__btnContainer__btn");
const modaleAbout = document.querySelector(".modaleAbout");
const modaleAboutBtn = document.querySelector(".modaleAbout__modale__btnContainer__btn");

let result, choseCpu,choseAI,p1Choice, roundAI, prevChose, prevChoseEven, prevChoseOdd;
let vsPlayer = false;
let lsGame = false;
let scoreP1 = 0;
let scoreP2 = 0;
let vsRound = 0;

const reset = () => {
    scoreP1 = 0;
    scoreP2 = 0;
    roundAI = 0;
}

const startDisplay = () => {
    reset();
    if (vsPlayer === true) {
        whoPlay.textContent = "Player 1 chose";
    }
    if (lsGame === true) {
        title.textContent = "Lizard Spock version";
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
            <div class="notIcon">?</div>
    `
    choseP2.innerHTML = `
            <div class="notIcon">?</div>
    `
}


/* ------------------------CODE FROM OLD VERSION V1 start----------------------- */


const random = (int) => {
    return Math.floor(Math.random() * int);
};

const AIRandom = () => {
    let a;
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

  const AIClassic = () => {
      let a;
    if (roundAI === 1) {
      a = random(100);
      if (a < 38) {
        choseAI = "scissors";
      } else if (a > 45) {
        choseAI = "paper";
      } else {
        choseAI = "rock";
      }
    } else if (roundAI === 2) {
      if (scoreP2 === 1) {
        if (choseAI === "scissors") {
          choseAI = "rock";
        } else if (choseAI === "paper") {
          choseAI = "scissors";
        } else {
          choseAI = "paper";
        }
      } else {
        a = random(100);
        if (a <= 35) {
          choseAI = "rock";
        } else if (a >= 65) {
          choseAI = "scissors";
        } else {
          choseAI = "paper";
        }
      }
    } else {
      if (prevChoseEven === prevChoseOdd) {
        if (prevChoseOdd === "rock") {
          a = random(100);
          if (a <= 50) {
            choseAI = "paper";
          } else {
            choseAI = "scissors";
          }
        } else if (prevChoseOdd === "scissors") {
          a = random(100);
          if (a <= 50) {
            choseAI = "paper";
          } else {
            choseAI = "rock";
          }
        } else {
          a = random(100);
          if (a <= 50) {
            choseAI = "scissors";
          } else {
            choseAI = "rock";
          }
        }
      } else if (result === 0) {
        if (prevChose === "rock") {
          b = random(100);
          if (b <= 50) {
            choseAI = "scissors";
          } else if (b >= 75) {
            choseAI = "paper";
          } else {
            choseAI = "rock";
          }
        } else if (prevChose === "scissors") {
          b = random(100);
          if (b <= 50) {
            choseAI = "paper";
          } else if (b >= 75) {
            choseAI = "scissors";
          } else {
            choseAI = "rock";
          }
        } else {
          b = random(100);
          if (b <= 50) {
            choseAI = "rock";
          } else if (b >= 75) {
            choseAI = "paper";
          } else {
            choseAI = "scissors";
          }
        }
      } else {
        b = random(100);
        if (b <= 35) {
          choseAI = "rock";
        } else if (b >= 65) {
          choseAI = "scissors";
        } else {
          choseAI = "paper";
        }
      }
    }
    if (roundAI % 2 === 0) {
      prevChoseOdd = choseP1;
    } else {
      prevChoseEven = choseP1;
    }
    prevChose = choseP1;
    roundAI++;
    choseCpu = choseAI;
  };  

  const AILizardSpock = () => {
    if (prevChoseEven === prevChoseOdd) {
      if (prevChoseOdd === "rock") {
        a = random(4);
        if (a === 1) {
          choseAi = "paper";
        } else if (a === 2) {
          choseAi = "scissors";
        } else if (a === 3) {
          choseAi = "lizard";
        } else {
          choseAi = "spock";
        }
      } else if (prevChoseOdd === "paper") {
        a = random(4);
        if (a === 1) {
          choseAi = "rock";
        } else if (a === 2) {
          choseAi = "scissors";
        } else if (a === 3) {
          choseAi = "lizard";
        } else {
          choseAi = "spock";
        }
      } else if (prevChoseOdd === "scissors") {
        a = random(4);
        if (a === 1) {
          choseAi = "rock";
        } else if (a === 2) {
          choseAi = "paper";
        } else if (a === 3) {
          choseAi = "lizard";
        } else {
          choseAi = "spock";
        }
      } else if (prevChoseOdd === "lizard") {
        a = random(4);
        if (a === 1) {
          choseAi = "rock";
        } else if (a === 2) {
          choseAi = "paper";
        } else if (a === 3) {
          choseAi = "scissors";
        } else {
          choseAi = "spock";
        }
      } else {
        a = random(4);
        if (a === 1) {
          choseAi = "rock";
        } else if (a === 2) {
          choseAi = "paper";
        } else if (a === 3) {
          choseAi = "scissors";
        } else {
          choseAi = "lizard";
        }
      }
    } else if (result === 0) {
      a = random(100);
      if (choseP1 === "rock") {
        if (choseCpu === "paper") {
          if (a < 45) {
            choseAi = "scissors";
          } else if (a >= 45 && a < 70) {
            choseAi = "spock";
          } else if (a >= 70 && a < 80) {
            choseAi = "rock";
          } else if (a >= 80 && a < 90) {
            choseAi = "lizard";
          } else {
            choseAi = "paper";
          }
        } else {
          if (a < 45) {
            choseAi = "lizard";
          } else if (a >= 45 && a < 70) {
            choseAi = "paper";
          } else if (a >= 70 && a < 80) {
            choseAi = "rock";
          } else if (a >= 80 && a < 90) {
            choseAi = "scissors";
          } else {
            choseAi = "spock";
          }
        }
      } else if (choseP1 === "paper") {
        if (choseCpu === "scissors") {
          if (a < 45) {
            choseAi = "rock";
          } else if (a >= 45 && a < 70) {
            choseAi = "spock";
          } else if (a >= 70 && a < 80) {
            choseAi = "paper";
          } else if (a >= 80 && a < 90) {
            choseAi = "lizard";
          } else {
            choseAi = "scissors";
          }
        } else {
          if (a < 45) {
            choseAi = "rock";
          } else if (a >= 45 && a < 70) {
            choseAi = "scissors";
          } else if (a >= 70 && a < 80) {
            choseAi = "paper";
          } else if (a >= 80 && a < 90) {
            choseAi = "spock";
          } else {
            choseAi = "lizard";
          }
        }
      } else if (choseP1 === "scissors") {
        if (choseCpu === "rock") {
          if (a < 45) {
            choseAi = "paper";
          } else if (a >= 45 && a < 70) {
            choseAi = "spock";
          } else if (a >= 70 && a < 80) {
            choseAi = "lizard";
          } else if (a >= 80 && a < 90) {
            choseAi = "scissors";
          } else {
            choseAi = "rock";
          }
        } else {
          if (a < 45) {
            choseAi = "lizard";
          } else if (a >= 45 && a < 70) {
            choseAi = "paper";
          } else if (a >= 70 && a < 80) {
            choseAi = "rock";
          } else if (a >= 80 && a < 90) {
            choseAi = "spock";
          } else {
            choseAi = "scissors";
          }
        }
      } else if (choseP1 === "lizard") {
        if (choseCpu === "rock") {
          if (a < 45) {
            choseAi = "paper";
          } else if (a >= 45 && a < 70) {
            choseAi = "spock";
          } else if (a >= 70 && a < 80) {
            choseAi = "scissors";
          } else if (a >= 80 && a < 90) {
            choseAi = "lizard";
          } else {
            choseAi = "rock";
          }
        } else {
          if (a < 45) {
            choseAi = "spock";
          } else if (a >= 45 && a < 70) {
            choseAi = "rock";
          } else if (a >= 70 && a < 80) {
            choseAi = "paper";
          } else if (a >= 80 && a < 90) {
            choseAi = "lizard";
          } else {
            choseAi = "scissors";
          }
        }
      } else {
        if (choseCpu === "paper") {
          if (a < 45) {
            choseAi = "scissors";
          } else if (a >= 45 && a < 70) {
            choseAi = "lizard";
          } else if (a >= 70 && a < 80) {
            choseAi = "rock";
          } else if (a >= 80 && a < 90) {
            choseAi = "spock";
          } else {
            choseAi = "paper";
          }
        } else {
          if (a < 45) {
            choseAi = "rock";
          } else if (a >= 45 && a < 70) {
            choseAi = "scissors";
          } else if (a >= 70 && a < 80) {
            choseAi = "paper";
          } else if (a >= 80 && a < 90) {
            choseAi = "lizard";
          } else {
            choseAi = "scissors";
          }
        }
      }
    } else {
      a = random(100);
      if (a < 25) {
        choseAi = "lizard";
      } else if (a >= 25 && a < 50) {
        choseAi = "spock";
      } else if (a >= 50 && a < 70) {
        choseAi = "rock";
      } else if (a >= 70 && a < 90) {
        choseAi = "scissors";
      } else {
        choseAi = "paper";
      }
    }
    if (roundAI % 2 === 0) {
      prevChoseOdd = choseP1;
    } else {
      prevChoseEven = choseP1;
    }
    roundAI++;
    prevChose = choseP1;
    choseCpu = choseAi;
  };


/* ------------------------CODE FROM OLD VERSION V1 end----------------------- */


const play = (chosen) => {
    if (vsPlayer === true) {
        if (vsRound === 1) {
            choseCpu = chosen;
            compareGame(p1Choice);
            vsRound = 0;
            whoPlay.textContent = "Player 1 chose";
        } else {
            p1Choice = chosen;
            vsRound = 1;
            whoPlay.textContent = "Player 2 chose";
        }
    } else {
        if (radioAI[0].checked) {
            if (lsGame === true) {
                AILizardSpock();
            } else {
                AIClassic();
            }
        } else {
            AIRandom();
        }
        compareGame(chosen);
    }
}

const compareGame = (chosen) => {
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
                pla = "Player 1";
            } else {
                if (vsPlayer === true) {
                    pla = "Player 2";
                } else {
                    pla = "CPU";
                }
            }
            modaleResultText.textContent = pla + " WIN";
            modaleResult.classList.remove("modaleResult--off");
        }
    } else if (radioVictoryPts[2].checked) {
        if (scoreP1 === 10 || scoreP2 === 10) {
            if (scoreP1 === 3) {
                pla = "Player 1";
            } else {
                if (vsPlayer === true) {
                    pla = "Player 2";
                } else {
                    pla = "CPU";
                }
            }
            modaleResultText.textContent = pla + " WIN";
            modaleResult.classList.remove("modaleResult--off");  
        }
    } else if (radioVictoryPts[3].checked) {
        if (scoreP1 === 20 || scoreP2 === 20) {
            if (scoreP1 === 3) {
                pla = "Player 1";
            } else {
                if (vsPlayer === true) {
                    pla = "Player 2";
                } else {
                    pla = "CPU";
                }
            }
            modaleResultText.textContent = pla + " WIN";
            modaleResult.classList.remove("modaleResult--off");   
        }
    } 
}
startDisplay();

choiceBtns[0].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="notIcon"></div>
    `
    choseP2.innerHTML = `
            <div class="notIcon"></div>
    `
    setTimeout(() => {
        play("rock");
    }, 100);
})

choiceBtns[1].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="notIcon"></div>
    `
    choseP2.innerHTML = `
            <div class="notIcon"></div>
    `
    setTimeout(() => {
        play("paper");
    }, 100);
})

choiceBtns[2].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="notIcon"></div>
    `
    choseP2.innerHTML = `
            <div class="notIcon"></div>
    `
    setTimeout(() => {
        play("scissors");
    }, 100);
})

choiceBtns[3].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="notIcon"></div>
    `
    choseP2.innerHTML = `
            <div class="notIcon"></div>
    `
    setTimeout(() => {
        play("lizard");
    }, 100);
})

choiceBtns[4].addEventListener("click", () => {
    choseP1.innerHTML = `
            <div class="notIcon"></div>
    `
    choseP2.innerHTML = `
            <div class="notIcon"></div>
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

modaleLsBtn.addEventListener("click", () => {
    modaleLs.classList.add("modaleAboutLs--off");
})

modaleAboutBtn.addEventListener("click", () => {
    modaleAbout.classList.add("modaleAbout--off");
})

radioVictoryPts[1].addEventListener("click", () => {
    startDisplay();
})

radioVictoryPts[2].addEventListener("click", () => {
    startDisplay();
})

radioVictoryPts[3].addEventListener("click", () => {
    startDisplay();
})

radioAI[0].addEventListener("click", () => {
    startDisplay();
})

radioAI[1].addEventListener("click", () => {
    startDisplay();
})

radioVS[0].addEventListener("click", () => {
    vsPlayer = false;
    startDisplay();
})

radioVS[1].addEventListener("click", () => {
    vsPlayer = true;
    startDisplay();
})

menuNew.addEventListener("click", () => {
    startDisplay();
})

menuAboutLs.addEventListener("click", () => {
    modaleLs.classList.remove("modaleAboutLs--off");
})

menuAbout.addEventListener("click", () => {
    modaleAbout.classList.remove("modaleAbout--off");
})