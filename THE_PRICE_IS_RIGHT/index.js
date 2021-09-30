const playerPropose = document.getElementById("playerPropose");
const lastPropose = document.querySelector(".lastPropose");
const resultStatus = document.querySelector(".resultStatus");
const submit = document.querySelector(".submitBtn");
const startBtn = document.querySelector(".startGameBtn");
const count = document.querySelector(".count");
const radios = document.querySelectorAll("input[type=radio]");
const more = document.querySelector(".rightContainer");
const less = document.querySelector(".leftContainer");
console.log(radios);

let goodPrice, currentPricePropose, countdownVal, gameMod;

const randomPrice = (int) => {
  val = Math.random() * int;
  goodPrice = Math.round(val);
  console.log(goodPrice);
};

const reset = () => {
  resultStatus.textContent = "";
  count.textContent = "";
  lastPropose.textContent = "";
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
  count.textContent = countdownVal;
  if (countdownVal === 0) {
    more.classList.add("invisible");
    less.classList.add("invisible");
    resultStatus.textContent = "YOU LOSE";
    lastPropose.textContent = goodPrice;
    lastPropose.classList.add("green");
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
  if (radios[0].checked) {
    count.textContent = 20;
    countdownVal = 20;
    gameMod = 1;
  } else if (radios[1].checked) {
    count.textContent = 10;
    countdownVal = 10;
    gameMod = 1;
  } else if (radios[2].checked) {
    count.textContent = 5;
    countdownVal = 5;
    gameMod = 1;
  } else if (radios[3].checked) {
    count.textContent = 3;
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
