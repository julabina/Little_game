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
let choseCpu, result, status;
let scoreP1 = 0;
let scoreP2 = 0;
let scoreP1LS = 0;
let scoreP2LS = 0;
let choseP1 = undefined;
let choseP1LS = undefined;

const random = (int) => {
  return Math.floor(Math.random() * int);
};

const p2Random = () => {
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

const p2RandomLizardSpock = () => {
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

const resultRdm = () => {
  p2Random();
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
  console.log(choseCpu);
  return result;
};

const resultRndLizardSpock = () => {
  p2RandomLizardSpock();
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

const playRdm = () => {
  resultRdm();

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

const playRdmLizardSpock = () => {
  resultRndLizardSpock();

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

function displayRdm() {
  playRdm();
  resultContainer.innerHTML = `
  <p>Score : ${scoreP1} - ${scoreP2} : Score</p>
  <p>P1 : ${choseP1} - ${choseCpu} : CPU</p>
  <p>Player 1 ${status}</p>  
  `;
}

function displayRdmLizardSpock() {
  playRdmLizardSpock();
  resultContainerLS.innerHTML = `
  <p>Score : ${scoreP1LS} - ${scoreP2LS} : Score</p>
  <p>P1 : ${choseP1LS} - ${choseCpu} : CPU</p>
  <p>Player 1 ${status}</p>  
  `;
}

rock.addEventListener("click", () => {
  choseP1 = "rock";
  displayRdm();
});
papper.addEventListener("click", () => {
  choseP1 = "papper";
  displayRdm();
});
scissors.addEventListener("click", () => {
  choseP1 = "scissors";
  displayRdm();
});

/* ----------------- */

rockLS.addEventListener("click", () => {
  choseP1LS = "rock";
  displayRdmLizardSpock();
});
papperLS.addEventListener("click", () => {
  choseP1LS = "papper";
  displayRdmLizardSpock();
});
scissorsLS.addEventListener("click", () => {
  choseP1LS = "scissors";
  displayRdmLizardSpock();
});
lizardLS.addEventListener("click", () => {
  choseP1LS = "lizard";
  displayRdmLizardSpock();
});
spockLS.addEventListener("click", () => {
  choseP1LS = "spock";
  displayRdmLizardSpock();
});
