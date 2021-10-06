const playerPropose = document.getElementById("playerPropose");
const lastPropose = document.querySelector(".lastPropose");
const resultStatus = document.querySelector(".resultStatus");
const submit = document.querySelector(".submitBtn");
const startBtn = document.querySelector(".startGameBtn");
const count = document.querySelector(".count");
const countContainer = document.querySelector(".countContainer");
const radios = document.querySelectorAll("input[type=radio]");
const more = document.querySelector(".rightContainer");
const less = document.querySelector(".leftContainer");
const recovery = document.querySelector(".recovery");
const display = document.getElementById("timer");
console.log(radios);

let goodPrice, currentPricePropose, countdownVal, newTime;
let vsMode = false;
let stopInterval = false;

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

const startTimer = (duration, display) => {
  let timer = duration,
    minutes,
    seconds;
  let interval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (stopInterval == true) {
      clearInterval(interval);
    } else if (--timer < 0) {
      more.classList.add("invisible");
      less.classList.add("invisible");
      resultStatus.textContent = "YOU LOSE";
      lastPropose.textContent = goodPrice;
      lastPropose.classList.add("green");
      recoveryOn();
      clearInterval(interval);
    }
  }, 1000);
};

const startLoad = () => {
  count.textContent = " " + 20;
  countdownVal = 20;

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
  newTime = undefined;
  currentPricePropose = undefined;
  countdownVal = undefined;
  more.classList.add("invisible");
  less.classList.add("invisible");
  lastPropose.classList.remove("green");
  vsMode = false;
  document.querySelector(".lastPropose").style.fontSize = "40px";
  document.querySelector(".resultStatus").style.fontSize = "28.8px";
  stopInterval = false;
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
    stopInterval = true;
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
    let valInput = parseInt(playerPropose.value);
    verify(valInput);
    playerPropose.value = "";
  }
});

startBtn.addEventListener("click", () => {
  stopInterval = true;
  setTimeout(() => {
    reset();
    recoveryOff();
    if (radios[0].checked) {
      display.classList.add("hidden");
      countContainer.classList.remove("hidden");
      count.textContent = " " + 20;
      countdownVal = 20;
    } else if (radios[1].checked) {
      display.classList.add("hidden");
      countContainer.classList.remove("hidden");
      count.textContent = " " + 10;
      countdownVal = 10;
    } else if (radios[2].checked) {
      display.classList.add("hidden");
      countContainer.classList.remove("hidden");
      count.textContent = " " + 5;
      countdownVal = 5;
    } else if (radios[3].checked) {
      display.classList.add("hidden");
      countContainer.classList.remove("hidden");
      count.textContent = " " + 3;
      countdownVal = 3;
    } else if (radios[4].checked) {
      newTime = 60 * 2;
      display.classList.remove("hidden");
      countContainer.classList.add("hidden");
      if (radios[9].checked) {
        setTimeout(() => {
          startTimer(newTime, display);
        }, 7000);
      } else {
        startTimer(newTime, display);
      }
    } else if (radios[5].checked) {
      newTime = 60;
      display.classList.remove("hidden");
      countContainer.classList.add("hidden");
      if (radios[9].checked) {
        setTimeout(() => {
          startTimer(newTime, display);
        }, 7000);
      } else {
        startTimer(newTime, display);
      }
    } else if (radios[6].checked) {
      newTime = 40;
      display.classList.remove("hidden");
      countContainer.classList.add("hidden");
      if (radios[9].checked) {
        setTimeout(() => {
          startTimer(newTime, display);
        }, 7000);
      } else {
        startTimer(newTime, display);
      }
    } else if (radios[7].checked) {
      newTime = 20;
      display.classList.remove("hidden");
      countContainer.classList.add("hidden");
      if (radios[9].checked) {
        setTimeout(() => {
          startTimer(newTime, display);
        }, 7000);
      } else {
        startTimer(newTime, display);
      }
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
  }, 800);
});
