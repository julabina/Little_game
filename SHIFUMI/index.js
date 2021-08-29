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
const threePts = document.getElementById("radioThreePts");
const tenPts = document.getElementById("radioTenPts");
const XPts = document.getElementById("radioXPts");
const training = document.getElementById("radioTraining");
let choseCpu,
  result,
  status,
  choseAI,
  choseAILS,
  prevChoseOdd,
  prevChoseEven,
  prevChose,
  prevChoseLS,
  prevChoseEvenLS,
  prevChoseOddLS;
let scoreP1 = 0;
let scoreP2 = 0;
let scoreP1LS = 0;
let scoreP2LS = 0;
let choseP1 = undefined;
let choseP1LS = undefined;
let roundAI = 1;
let roundAILS = 1;

const random = (int) => {
  return Math.floor(Math.random() * int);
};

const reset = () => {
  scoreP1 = 0;
  scoreP2 = 0;
  choseP1 = undefined;
  choseCpu = undefined;
  choseAI = undefined;
  roundAI = 1;
  prevChose = undefined;
  prevChoseEven = undefined;
  prevChoseOdd = undefined;
};

const resetLS = () => {
  scoreP1LS = 0;
  scoreP2LS = 0;
  choseP1LS = undefined;
  choseCpu = undefined;
  choseAILS = undefined;
  roundAILS = 1;
  prevChoseLS = undefined;
  prevChoseEvenLS = undefined;
  prevChoseOddLS = undefined;
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

  if (threePts.checked) {
    if (scoreP1 === 3 || scoreP2 === 3) {
      if (scoreP1 === 3) {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 1 WIN</h2>
          <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
          <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        `;
        reset();
      } else {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 2 WIN</h2>
          <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
          <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        `;
        reset();
      }
    } else {
      resultContainerLS.innerHTML = `
        <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
        <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        <p>Player 1 ${status}</p>  
    `;
    }
  } else if (tenPts.checked) {
    if (scoreP1 === 10 || scoreP2 === 10) {
      if (scoreP1 === 10) {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 1 WIN</h2>
          <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
          <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        `;
        reset();
      } else {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 2 WIN</h2>
          <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
          <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        `;
        reset();
      }
    } else {
      resultContainerLS.innerHTML = `
        <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
        <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        <p>Player 1 ${status}</p>  
    `;
    }
  } else if (XPts.checked) {
    if (scoreP1 === 25 || scoreP2 === 25) {
      if (scoreP1 === 25) {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 1 WIN</h2>
          <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
          <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        `;
        reset();
      } else {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 2 WIN</h2>
          <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
          <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        `;
        reset();
      }
    } else {
      resultContainerLS.innerHTML = `
        <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
        <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
        <p>Player 1 ${status}</p>  
    `;
    }
  } else {
    resultContainerLS.innerHTML = `
    <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
    <p>Player 1 ${status}</p>  
    `;
    reset();
  }
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

const AILizardSpock = () => {
  if (prevChoseEvenLS == prevChoseOddLS) {
    if (prevChoseOddLS == "rock") {
      a = random(4);
      if (a === 1) {
        choseAiLS = "papper";
      } else if (a === 2) {
        choseAiLS = "scissors";
      } else if (a === 3) {
        choseAiLS = "lizard";
      } else {
        choseAiLS = "spock";
      }
    } else if (prevChoseOddLS == "papper") {
      a = random(4);
      if (a === 1) {
        choseAiLS = "rock";
      } else if (a === 2) {
        choseAiLS = "scissors";
      } else if (a === 3) {
        choseAiLS = "lizard";
      } else {
        choseAiLS = "spock";
      }
    } else if (prevChoseOddLS == "scissors") {
      a = random(4);
      if (a === 1) {
        choseAiLS = "rock";
      } else if (a === 2) {
        choseAiLS = "papper";
      } else if (a === 3) {
        choseAiLS = "lizard";
      } else {
        choseAiLS = "spock";
      }
    } else if (prevChoseOddLS == "lizard") {
      a = random(4);
      if (a === 1) {
        choseAiLS = "rock";
      } else if (a === 2) {
        choseAiLS = "papper";
      } else if (a === 3) {
        choseAiLS = "scissors";
      } else {
        choseAiLS = "spock";
      }
    } else {
      a = random(4);
      if (a === 1) {
        choseAiLS = "rock";
      } else if (a === 2) {
        choseAiLS = "papper";
      } else if (a === 3) {
        choseAiLS = "scissors";
      } else {
        choseAiLS = "lizard";
      }
    }
  } else if (result === 0) {
    a = random(100);
    if (choseP1LS == "rock") {
      if (choseCpu == "papper") {
        if (a < 45) {
          choseAiLS = "scissors";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "spock";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "rock";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "lizard";
        } else {
          choseAiLS = "papper";
        }
      } else {
        if (a < 45) {
          choseAiLS = "lizard";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "papper";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "rock";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "scissors";
        } else {
          choseAiLS = "spock";
        }
      }
    } else if (choseP1LS == "papper") {
      if (choseCpu == "scissors") {
        if (a < 45) {
          choseAiLS = "rock";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "spock";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "papper";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "lizard";
        } else {
          choseAiLS = "scissors";
        }
      } else {
        if (a < 45) {
          choseAiLS = "rock";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "scissors";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "papper";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "spock";
        } else {
          choseAiLS = "lizard";
        }
      }
    } else if (choseP1LS == "scissors") {
      if (choseCpu == "rock") {
        if (a < 45) {
          choseAiLS = "papper";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "spock";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "lizard";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "scissors";
        } else {
          choseAiLS = "rock";
        }
      } else {
        if (a < 45) {
          choseAiLS = "lizard";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "papper";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "rock";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "spock";
        } else {
          choseAiLS = "scissors";
        }
      }
    } else if (choseP1LS == "lizard") {
      if (choseCpu == "rock") {
        if (a < 45) {
          choseAiLS = "papper";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "spock";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "scissors";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "lizard";
        } else {
          choseAiLS = "rock";
        }
      } else {
        if (a < 45) {
          choseAiLS = "spock";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "rock";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "papper";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "lizard";
        } else {
          choseAiLS = "scissors";
        }
      }
    } else {
      if (choseCpu == "papper") {
        if (a < 45) {
          choseAiLS = "scissors";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "lizard";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "rock";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "spock";
        } else {
          choseAiLS = "papper";
        }
      } else {
        if (a < 45) {
          choseAiLS = "rock";
        } else if (a >= 45 && a < 70) {
          choseAiLS = "scissors";
        } else if (a >= 70 && a < 80) {
          choseAiLS = "papper";
        } else if (a >= 80 && a < 90) {
          choseAiLS = "lizard";
        } else {
          choseAiLS = "scissors";
        }
      }
    }
  } else {
    a = random(100);
    if (a < 25) {
      choseAiLS = "lizard";
    } else if (a >= 25 && a < 50) {
      choseAiLS = "spock";
    } else if (a >= 50 && a < 70) {
      choseAiLS = "rock";
    } else if (a >= 70 && a < 90) {
      choseAiLS = "scissors";
    } else {
      choseAiLS = "papper";
    }
  }
  if (roundAILS % 2 == 0) {
    prevChoseOddLS = choseP1LS;
  } else {
    prevChoseEvenLS = choseP1LS;
  }
  roundAILS++;
  prevChoseLS = choseP1LS;
  choseCpu = choseAiLS;
};

const resultLizardSpock = () => {
  if (radioAI.checked) {
    AILizardSpock();
  } else {
    AIRandomLizardSpock();
  }
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
  return result;
};

const statusResultLizardSpock = () => {
  resultLizardSpock();

  if (training.checked) {
    if (result === 2) {
      status = "win";
    } else if (result === 0) {
      status = "lose";
    } else {
      status = "equal";
    }
  } else {
    if (result === 2) {
      status = "win";
      scoreP1LS++;
    } else if (result === 0) {
      status = "lose";
      scoreP2LS++;
    } else {
      status = "equal";
    }
  }
};

function displayLizardSpock() {
  statusResultLizardSpock();

  if (threePts.checked) {
    if (scoreP1LS === 3 || scoreP2LS === 3) {
      if (scoreP1LS === 3) {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 1 WIN</h2>
          <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
          <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        `;
        resetLS();
      } else {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 2 WIN</h2>
          <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
          <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        `;
        resetLS();
      }
    } else {
      resultContainerLS.innerHTML = `
        <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
        <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        <p>Player 1 ${status}</p>  
    `;
    }
  } else if (tenPts.checked) {
    if (scoreP1LS === 10 || scoreP2LS === 10) {
      if (scoreP1LS === 10) {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 1 WIN</h2>
          <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
          <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        `;
        resetLS();
      } else {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 2 WIN</h2>
          <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
          <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        `;
        resetLS();
      }
    } else {
      resultContainerLS.innerHTML = `
        <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
        <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        <p>Player 1 ${status}</p>  
    `;
    }
  } else if (XPts.checked) {
    if (scoreP1LS === 25 || scoreP2LS === 25) {
      if (scoreP1LS === 25) {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 1 WIN</h2>
          <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
          <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        `;
        resetLS();
      } else {
        resultContainerLS.innerHTML = `
          <h2>PLAYER 2 WIN</h2>
          <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
          <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        `;
        resetLS();
      }
    } else {
      resultContainerLS.innerHTML = `
        <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
        <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
        <p>Player 1 ${status}</p>  
    `;
    }
  } else {
    resultContainerLS.innerHTML = `
    <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
    <p>Player 1 ${status}</p>  
    `;
    resetLS();
  }
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
