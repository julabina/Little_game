const playerPropose = document.getElementById("playerPropose");
const lastPropose = document.querySelector(".lastPropose");
const resultStatus = document.querySelector(".resultStatus");
const submit = document.querySelector(".submitBtn");
const startBtn = document.querySelector(".startGameBtn");
const count = document.querySelector(".count");
const radios = document.querySelectorAll("input[type=radio]");
const more = document.querySelector(".rightContainer");
const less = document.querySelector(".leftContainer");
const recovery = document.querySelector(".recovery");
console.log(radios);

let goodPrice, currentPricePropose, countdownVal, gameMod, newTime;
let vsMode = false;

const randomPrice = (int) => {
  val = Math.random() * int;
  goodPrice = Math.round(val);
  console.log(goodPrice);
};

const P2Price = (int) => {
  if (int === 1) {
    lastPropose.textContent = "Enter your price";
    document.querySelector(".lastPropose").style.fontSize = "medium";
    resultStatus.textContent = "between 0 and 100";
    document.querySelector(".resultStatus").style.fontSize = "medium";
    vsMode = true;
  } else if (int === 2) {
    lastPropose.textContent = "Enter your price";
    document.querySelector(".lastPropose").style.fontSize = "medium";
    resultStatus.textContent = "between 0 and 1000";
    document.querySelector(".resultStatus").style.fontSize = "medium";
    vsMode = true;
  } else if (int === 3) {
    lastPropose.textContent = "Enter your price";
    document.querySelector(".lastPropose").style.fontSize = "medium";
    resultStatus.textContent = "between 0 and 10000";
    document.querySelector(".resultStatus").style.fontSize = "medium";
    vsMode = true;
  } else {
    lastPropose.textContent = "Enter your price";
    document.querySelector(".lastPropose").style.fontSize = "medium";
    resultStatus.textContent = "between 0 and 100000";
    document.querySelector(".resultStatus").style.fontSize = "medium";
    vsMode = true;
  }
};

const test = (time) => {
  setInterval((newTime2) => {
    newTime2 = time - 1;
    newTime = newTime2;
    if (newTime > 0) {
      console.log(newTime);
    } else {
      console.log("fin");
    }
  }, 1000);
};

/* const test1 = (time) => {
  newTime = time;
  if (newTime > 0) {
    newTime = time - 1;

    setTimeout(console.log(newTime), 1000);
    test(newTime);
  } else {
    console.log(newTime);
    console.log("fin");
    timerStart = false;
  }
}; */

const startLoad = () => {
  count.textContent = " " + 20;
  countdownVal = 20;
  gameMod = 1;
  count.textContent = " " + countdownVal;
  randomPrice(100);
};

startLoad();

const recoveryOff = () => {
  recovery.classList.add("invisible");
};

const recoveryOn = () => {
  recovery.classList.remove("invisible");
};

const reset = () => {
  resultStatus.textContent = "";
  count.textContent = "";
  lastPropose.textContent = "";
  playerPropose.value = "";
  goodPrice = undefined;
  currentPricePropose = undefined;
  countdownVal = undefined;
  gameMod = undefined;
  more.classList.add("invisible");
  less.classList.add("invisible");
  lastPropose.classList.remove("green");
  vsMode = false;
  document.querySelector(".lastPropose").style.fontSize = "40px";
  document.querySelector(".resultStatus").style.fontSize = "28.8px";
};

const countdown = (int) => {
  console.log(countdownVal);
  countdownVal = int - 1;
  count.textContent = " " + countdownVal;
  if (countdownVal === 0) {
    more.classList.add("invisible");
    less.classList.add("invisible");
    resultStatus.textContent = "YOU LOSE";
    lastPropose.textContent = goodPrice;
    lastPropose.classList.add("green");
    recoveryOn();
  }
};

function hotOrFrozen() {
  if (currentPricePropose < goodPrice) {
    more.classList.remove("invisible");
    less.classList.add("invisible");
  } else {
    more.classList.add("invisible");
    less.classList.remove("invisible");
  }
}

function verify(val) {
  currentPricePropose = val;
  lastPropose.textContent = currentPricePropose;
  if (currentPricePropose === goodPrice) {
    recoveryOn();
    more.classList.add("invisible");
    less.classList.add("invisible");
    resultStatus.textContent = "YOU WIN";
    lastPropose.classList.add("green");
  } else {
    hotOrFrozen();
    countdown(countdownVal);
  }
}

const resetStatusText = () => {
  resultStatus.textContent = "";
  lastPropose.textContent = "";
  document.querySelector(".lastPropose").style.fontSize = "40px";
  document.querySelector(".resultStatus").style.fontSize = "28.8px";
};

submit.addEventListener("click", () => {
  if (radios[9].checked && vsMode == true) {
    resetStatusText();
    if (radios[10].checked) {
      if (playerPropose.value > 100) {
        resultStatus.textContent = "Between 0 and 100";
        document.querySelector(".resultStatus").style.fontSize = "medium";
      } else {
        goodPrice = parseInt(playerPropose.value);
        vsMode = false;
        playerPropose.value = "";
        resetStatusText();
        console.log(goodPrice);
      }
    } else if (radios[11].checked) {
      if (playerPropose.value > 1000) {
        resultStatus.textContent = "Between 0 and 1000";
        document.querySelector(".resultStatus").style.fontSize = "medium";
      } else {
        goodPrice = parseInt(playerPropose.value);
        vsMode = false;
        playerPropose.value = "";
        resetStatusText();
        console.log(goodPrice);
      }
    } else if (radios[12].checked) {
      if (playerPropose.value > 10000) {
        resultStatus.textContent = "Between 0 and 10000";
        document.querySelector(".resultStatus").style.fontSize = "medium";
      } else {
        goodPrice = parseInt(playerPropose.value);
        vsMode = false;
        playerPropose.value = "";
        resetStatusText();
        console.log(goodPrice);
      }
    } else {
      if (playerPropose.value > 100000) {
        resultStatus.textContent = "Between 0 and 100000";
        document.querySelector(".resultStatus").style.fontSize = "medium";
      } else {
        goodPrice = parseInt(playerPropose.value);
        vsMode = false;
        playerPropose.value = "";
        resetStatusText();
        console.log(goodPrice);
      }
    }
  } else {
    if (gameMod === 1) {
      let valInput = parseInt(playerPropose.value);
      verify(valInput);
      playerPropose.value = "";
    } else {
      let valInput = parseInt(playerPropose.value);
      verify(valInput);
      playerPropose.value = "";
    }
  }
});

startBtn.addEventListener("click", () => {
  reset();
  recoveryOff();
  if (radios[0].checked) {
    count.textContent = " " + 20;
    countdownVal = 20;
    gameMod = 1;
  } else if (radios[1].checked) {
    count.textContent = " " + 10;
    countdownVal = 10;
    gameMod = 1;
  } else if (radios[2].checked) {
    count.textContent = " " + 5;
    countdownVal = 5;
    gameMod = 1;
  } else if (radios[3].checked) {
    count.textContent = " " + 3;
    countdownVal = 3;
    gameMod = 1;
  } else if (radios[4].checked) {
    gameMod = 2;
  } else if (radios[5].checked) {
    gameMod = 2;
  } else if (radios[6].checked) {
    gameMod = 2;
  } else if (radios[7].checked) {
    gameMod = 2;
  }

  /* difficulty */
  if (radios[9].checked) {
    if (radios[10].checked) {
      P2Price(1);
    } else if (radios[11].checked) {
      P2Price(2);
    } else if (radios[12].checked) {
      P2Price(3);
    } else if (radios[13].checked) {
      P2Price(4);
    }
  } else {
    if (radios[10].checked) {
      randomPrice(100);
    } else if (radios[11].checked) {
      randomPrice(1000);
    } else if (radios[12].checked) {
      randomPrice(10000);
    } else if (radios[13].checked) {
      randomPrice(100000);
    }
  }
});
