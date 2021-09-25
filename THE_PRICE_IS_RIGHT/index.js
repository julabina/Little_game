const playerPropose = document.getElementById("playerPropose");
const lastPropose = document.querySelector(".lastPropose");
const resultStatus = document.querySelector(".resultStatus");
const submit = document.querySelector(".submitBtn");
const startBtn = document.querySelector(".startGameBtn");
const count = document.querySelector(".count");
const radios = document.querySelectorAll("input[type=radio]");
console.log(radios);

let goodPrice, currentPricePropose, countdownVal, gameMod;

const randomPrice = (int) => {
  val = Math.random() * int;
  goodPrice = Math.round(val);
  console.log(goodPrice);
};

const game = () => {
  let finish = false;
  randomPrice(1000);
  do {
    finish = true;
  } while (finish === false);
};

const reset = () => {
  resultStatus.textContent = "";
  count.textContent = "";
  lastPropose.textContent = "";
  goodPrice = undefined;
  currentPricePropose = undefined;
  countdownVal = undefined;
  gameMod = undefined;
};

const countdown = (int) => {
  console.log(countdownVal);
  countdownVal = int - 1;
  count.textContent = countdownVal;
  if (countdownVal === 0) {
    resultStatus.textContent = "YOU LOSE - The good price was " + goodPrice;
  }
};

function hotOrFrozen() {
  if (currentPricePropose < goodPrice) {
    resultStatus.textContent = "plus";
  } else {
    resultStatus.textContent = "moin";
  }
}

function verify(val) {
  currentPricePropose = val;
  lastPropose.textContent = currentPricePropose;
  if (currentPricePropose === goodPrice) {
    resultStatus.textContent = "YOU WIN";
  } else {
    hotOrFrozen();
  }
}

submit.addEventListener("click", () => {
  if (gameMod === 1) {
    let valInput = parseInt(playerPropose.value);
    verify(valInput);
    playerPropose.value = "";
    countdown(countdownVal);
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
