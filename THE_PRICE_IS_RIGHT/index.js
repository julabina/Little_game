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

const randomPrice = (int) => {
  val = Math.random() * int;
  goodPrice = Math.round(val);
  console.log(goodPrice);
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

submit.addEventListener("click", () => {
  if (gameMod === 1) {
    let valInput = parseInt(playerPropose.value);
    verify(valInput);
    playerPropose.value = "";
  } else {
    let valInput = parseInt(playerPropose.value);
    verify(valInput);
    playerPropose.value = "";
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

  if (radios[10].checked) {
    randomPrice(100);
  } else if (radios[11].checked) {
    randomPrice(1000);
  } else if (radios[12].checked) {
    randomPrice(10000);
  } else if (radios[13].checked) {
    randomPrice(100000);
  }
});
