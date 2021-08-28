const rock = document.querySelector(".rock");
const papper = document.querySelector(".papper");
const scissors = document.querySelector(".scissors");
const rockLS = document.querySelector(".rockls");
const papperLS = document.querySelector(".papperls");
const scissorsLS = document.querySelector(".scissorsls");
const lizardLS = document.querySelector(".lizard");
const spockLS = document.querySelector(".spock");
const resultP1 = document.querySelector(".resultP1");
const resultP2 = document.querySelector(".resultP2");
const resultContainer = document.querySelector(".resultContainer");
const resultContainerLS = document.querySelector(".resultContainerLS");
const radioRandom = document.getElementById("radioRandom");
const radioAI = document.getElementById("radioNormal");
let choseCpu, result, status, choseAI, prevChoseOdd, prevChoseEven, prevChose;
let scoreP1 = 0;
let scoreP2 = 0;
let scoreP1LS = 0;
let scoreP2LS = 0;
let choseP1 = undefined;
let choseP1LS = undefined;
let roundAI = 1;

const random = (int) => {
  return Math.floor(Math.random() * int);
};

const AIRandom = () => {
  a = random(3);
  if (a === 0) {
    choseCpu = "rock";
  } else if (a === 1) {
    choseCpu = "papper";
  } else {
    choseCpu = "scissors";
  }
  return choseCpu;
};

const AIRPS = () => {
  if (roundAI === 1) {
    a = random(100);
    if (a < 38) {
      choseAI = "scissors";
    } else if (a > 45) {
      choseAI = "papper";
    } else {
      choseAI = "rock";
    }
  } else if (roundAI === 2) {
    if (scoreP2 === 1) {
      if (choseAI == "scissors") {
        choseAI = "rock";
      } else if (choseAI == "papper") {
        choseAI = "scissors";
      } else {
        choseAI = "papper";
      }
    } else {
      a = random(100);
      if (a <= 35) {
        choseAI = "rock";
      } else if (a >= 65) {
        choseAI = "scissors";
      } else {
        choseAI = "papper";
      }
    }
  } else {
    if (prevChoseEven == prevChoseOdd) {
      if (prevChoseOdd == "rock") {
        a = random(100);
        if (a <= 50) {
          choseAI = "papper";
        } else {
          choseAI = "scissors";
        }
      } else if (prevChoseOdd == "scissors") {
        a = random(100);
        if (a <= 50) {
          choseAI = "papper";
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
      if (prevChose == "rock") {
        b = random(100);
        if (b <= 50) {
          choseAI = "scissors";
        } else if (b >= 75) {
          choseAI = "papper";
        } else {
          choseAI = "rock";
        }
      } else if (prevChose == "scissors") {
        b = random(100);
        if (b <= 50) {
          choseAI = "papper";
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
          choseAI = "papper";
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
        choseAI = "papper";
      }
    }
  }
  if (roundAI % 2 == 0) {
    prevChoseOdd = choseP1;
  } else {
    prevChoseEven = choseP1;
  }
  prevChose = choseP1;
  roundAI++;
  choseCpu = choseAI;
};

const resultRPS = () => {
  if (radioAI.checked) {
    AIRPS();
  } else {
    AIRandom();
  }
  if (choseP1 == "rock") {
    if (choseCpu == "rock") {
      result = 1;
    } else if (choseCpu == "papper") {
      result = 0;
    } else {
      result = 2;
    }
  } else if (choseP1 == "papper") {
    if (choseCpu == "rock") {
      result = 2;
    } else if (choseCpu == "papper") {
      result = 1;
    } else {
      result = 0;
    }
  } else {
    if (choseCpu == "rock") {
      result = 0;
    } else if (choseCpu == "papper") {
      result = 2;
    } else {
      result = 1;
    }
  }
  return result;
};

const statusResultRPS = () => {
  resultRPS();

  if (result === 2) {
    status = "win";
    scoreP1++;
  } else if (result === 0) {
    status = "lose";
    scoreP2++;
  } else {
    status = "equal";
  }
};

function displayRPS() {
  statusResultRPS();
  resultContainer.innerHTML = `
  <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
  <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
  <p>Player 1 ${status}</p>  
  `;
}

/* ----- Rock Papper Scissors Lizard Spock ----- */

const AIRandomLizardSpock = () => {
  a = random(5);
  if (a === 0) {
    choseCpu = "rock";
  } else if (a === 1) {
    choseCpu = "papper";
  } else if (a === 2) {
    choseCpu = "scissors";
  } else if (a === 3) {
    choseCpu = "lizard";
  } else {
    choseCpu = "spock";
  }
  return choseCpu;
};

const resultLizardSpock = () => {
  AIRandomLizardSpock();
  if (choseP1LS == "rock") {
    if (choseCpu == "rock") {
      result = 1;
    } else if (choseCpu == "papper") {
      result = 0;
    } else if (choseCpu == "scissors") {
      result = 2;
    } else if (choseCpu == "lizard") {
      result = 2;
    } else {
      result = 0;
      console.log("test");
    }
  } else if (choseP1LS == "papper") {
    if (choseCpu == "rock") {
      result = 2;
    } else if (choseCpu == "papper") {
      result = 1;
    } else if (choseCpu == "scissors") {
      result = 0;
    } else if (choseCpu == "lizard") {
      result = 0;
    } else {
      result = 2;
    }
  } else if (choseP1LS == "scissors") {
    if (choseCpu == "rock") {
      result = 0;
    } else if (choseCpu == "papper") {
      result = 2;
    } else if (choseCpu == "scissors") {
      result = 1;
    } else if (choseCpu == "lizard") {
      result = 2;
    } else {
      result = 0;
    }
  } else if (choseP1LS == "lizard") {
    if (choseCpu == "rock") {
      result = 0;
    } else if (choseCpu == "papper") {
      result = 2;
    } else if (choseCpu == "scissors") {
      result = 0;
    } else if (choseCpu == "lizard") {
      result = 1;
    } else {
      result = 2;
    }
  } else {
    if (choseCpu == "rock") {
      result = 2;
    } else if (choseCpu == "papper") {
      result = 0;
    } else if (choseCpu == "scissors") {
      result = 2;
    } else if (choseCpu == "lizard") {
      result = 0;
    } else {
      result = 1;
    }
  }
  console.log(choseCpu);
  return result;
};

const statusResultLizardSpock = () => {
  resultLizardSpock();

  if (result === 2) {
    status = "win";
    scoreP1LS++;
  } else if (result === 0) {
    status = "lose";
    scoreP2LS++;
  } else {
    status = "equal";
  }
};

function displayLizardSpock() {
  statusResultLizardSpock();
  resultContainerLS.innerHTML = `
  <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
  <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
  <p>Player 1 ${status}</p>  
  `;
}

/* ----------------- event -----------------------*/

rock.addEventListener("click", () => {
  choseP1 = "rock";
  displayRPS();
});
papper.addEventListener("click", () => {
  choseP1 = "papper";
  displayRPS();
});
scissors.addEventListener("click", () => {
  choseP1 = "scissors";
  displayRPS();
});

/* ------------------------------------------------*/

rockLS.addEventListener("click", () => {
  choseP1LS = "rock";
  displayLizardSpock();
});
papperLS.addEventListener("click", () => {
  choseP1LS = "papper";
  displayLizardSpock();
});
scissorsLS.addEventListener("click", () => {
  choseP1LS = "scissors";
  displayLizardSpock();
});
lizardLS.addEventListener("click", () => {
  choseP1LS = "lizard";
  displayLizardSpock();
});
spockLS.addEventListener("click", () => {
  choseP1LS = "spock";
  displayLizardSpock();
});
