const dicesNumber = document.querySelectorAll(".diceNumber");
const dices = document.querySelectorAll(".dice");
const launchBtn = document.querySelector(".launchDice");
const playBtn = document.querySelector(".play");
const coverLaunch = document.querySelector(".coverLaunchDice");
const coverPlay = document.querySelector(".coverPlay");
const previewContainer = document.querySelectorAll(".score-preview-container");
const preview = document.querySelectorAll(".score-preview");
console.log(previewContainer);

let value = [0, 0, 0, 0, 0, 0];
let one = 0,
  two = 0,
  three = 0,
  four = 0,
  five = 0,
  six = 0;
let bre, carre, full, small, large, yams, luck, bonus;
let count;
console.log(preview);

const randomizeDice = () => {
  val = Math.ceil(Math.random() * 6);
  return val;
};

const resetVal = () => {
  value = [0, 0, 0, 0, 0, 0];
};

const resetFocused = () => {
  for (i = 0; i < previewContainer.length; i++) {
    previewContainer[i].classList.remove("focused");
  }
};

const verifyFocus = () => {
  for (let i = 0; i < previewContainer.length; i++) {
    if (previewContainer[i].classList.contains("focused")) {
      previewContainer[i].classList.remove("focused");
      previewContainer[i].classList.add("selected");
    }
  }
};

const verifyThree = () => {
  if (
    value[0] > 2 ||
    value[1] > 2 ||
    value[3] > 2 ||
    value[4] > 2 ||
    value[5] > 2 ||
    value[2] > 2
  ) {
    let a =
      value[0] +
      value[1] * 2 +
      value[2] * 3 +
      value[3] * 4 +
      value[4] * 5 +
      value[5] * 6;
    preview[6].textContent = a;
  } else {
    preview[6].textContent = "0";
  }
};

const verifyFour = () => {
  if (
    value[0] > 3 ||
    value[1] > 3 ||
    value[3] > 3 ||
    value[4] > 3 ||
    value[5] > 3 ||
    value[2] > 3
  ) {
    let a =
      value[0] +
      value[1] * 2 +
      value[2] * 3 +
      value[3] * 4 +
      value[4] * 5 +
      value[5] * 6;
    preview[7].textContent = a;
  } else {
    preview[7].textContent = "0";
  }
};

const verifyFull = () => {
  if (
    (value[0] == 3 && value[1] == 2) ||
    (value[0] == 3 && value[2] == 2) ||
    (value[0] == 3 && value[3] == 2) ||
    (value[0] == 3 && value[4] == 2) ||
    (value[0] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[1] == 3 && value[0] == 2) ||
    (value[1] == 3 && value[2] == 2) ||
    (value[1] == 3 && value[3] == 2) ||
    (value[1] == 3 && value[4] == 2) ||
    (value[1] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[2] == 3 && value[1] == 2) ||
    (value[2] == 3 && value[0] == 2) ||
    (value[2] == 3 && value[3] == 2) ||
    (value[2] == 3 && value[4] == 2) ||
    (value[2] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[3] == 3 && value[1] == 2) ||
    (value[3] == 3 && value[2] == 2) ||
    (value[3] == 3 && value[0] == 2) ||
    (value[3] == 3 && value[4] == 2) ||
    (value[3] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[4] == 3 && value[1] == 2) ||
    (value[4] == 3 && value[2] == 2) ||
    (value[4] == 3 && value[3] == 2) ||
    (value[4] == 3 && value[0] == 2) ||
    (value[4] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[5] == 3 && value[1] == 2) ||
    (value[5] == 3 && value[2] == 2) ||
    (value[5] == 3 && value[3] == 2) ||
    (value[5] == 3 && value[4] == 2) ||
    (value[5] == 3 && value[0] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    value[0] == 5 ||
    value[1] == 5 ||
    value[2] == 5 ||
    value[3] == 5 ||
    value[4] == 5 ||
    value[5] == 5
  ) {
    preview[8].textContent = "25";
  } else {
    preview[8].textContent = "0";
  }
};

const verifySmall = () => {
  if (value[0] == 1 && value[1] == 1 && value[2] == 1 && value[3] == 1) {
    preview[9].textContent = "30";
  } else if (value[0] == 2 && value[1] == 1 && value[2] == 1 && value[3] == 1) {
  } else if (value[0] == 1 && value[1] == 2 && value[2] == 1 && value[3] == 1) {
    preview[9].textContent = "30";
  } else if (value[0] == 1 && value[1] == 1 && value[2] == 2 && value[3] == 1) {
    preview[9].textContent = "30";
  } else if (value[0] == 1 && value[1] == 1 && value[2] == 1 && value[3] == 2) {
    preview[9].textContent = "30";
  } else if (value[1] == 1 && value[2] == 1 && value[3] == 1 && value[4] == 1) {
    preview[9].textContent = "30";
  } else if (value[1] == 2 && value[2] == 1 && value[3] == 1 && value[4] == 1) {
    preview[9].textContent = "30";
  } else if (value[1] == 1 && value[2] == 2 && value[3] == 1 && value[4] == 1) {
    preview[9].textContent = "30";
  } else if (value[1] == 1 && value[2] == 1 && value[3] == 2 && value[4] == 1) {
    preview[9].textContent = "30";
  } else if (value[1] == 1 && value[2] == 1 && value[3] == 1 && value[4] == 2) {
    preview[9].textContent = "30";
  } else if (value[2] == 1 && value[3] == 1 && value[4] == 1 && value[5] == 1) {
    preview[9].textContent = "30";
  } else if (value[2] == 2 && value[3] == 1 && value[4] == 1 && value[5] == 1) {
    preview[9].textContent = "30";
  } else if (value[2] == 1 && value[3] == 2 && value[4] == 1 && value[5] == 1) {
    preview[9].textContent = "30";
  } else if (value[2] == 1 && value[3] == 1 && value[4] == 2 && value[5] == 1) {
    preview[9].textContent = "30";
  } else if (value[2] == 1 && value[3] == 1 && value[4] == 1 && value[5] == 2) {
    preview[9].textContent = "30";
  } else {
    preview[9].textContent = "0";
  }
};

const verifyLarge = () => {
  if (
    value[0] == 1 &&
    value[1] == 1 &&
    value[2] == 1 &&
    value[3] == 1 &&
    value[4] == 1
  ) {
    preview[10].textContent = "40";
  } else if (
    value[1] == 1 &&
    value[2] == 1 &&
    value[3] == 1 &&
    value[4] == 1 &&
    value[5] == 1
  ) {
    preview[10].textContent = "40";
  } else {
    preview[10].textContent = "0";
  }
};

const verifyYams = () => {
  if (
    value[0] == 5 ||
    value[1] == 5 ||
    value[2] == 5 ||
    value[3] == 5 ||
    value[4] == 5 ||
    value[5] == 5
  ) {
    preview[11].textContent = "50";
  } else {
    preview[11].textContent = "0";
  }
};

const verifyLuck = () => {
  let a =
    value[0] +
    value[1] * 2 +
    value[2] * 3 +
    value[3] * 4 +
    value[4] * 5 +
    value[5] * 6;

  preview[12].textContent = a;
};

const verifyBonus = () => {
  a = one + two + three + four + five + six;
  if (a > 62) {
    preview[13].textContent = "35";
  } else {
    preview[13].textContent = a + "/63";
  }
};

const verifyNumber = () => {
  for (let i = 0; i < dicesNumber.length; i++) {
    for (let k = 0; k < 6; k++) {
      let b = k + 1;
      let a = b.toString();
      if (dicesNumber[i].textContent == a) {
        value[k] += 1;
      }
    }
  }
};

const verifyPts = () => {
  let val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 1) {
      val++;
    }
  }
  preview[0].textContent = val;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 2) {
      val++;
    }
  }
  preview[1].textContent = val * 2;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 3) {
      val++;
    }
  }
  preview[2].textContent = val * 3;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 4) {
      val++;
    }
  }
  preview[3].textContent = val * 4;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 5) {
      val++;
    }
  }
  preview[4].textContent = val * 5;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 6) {
      val++;
    }
  }
  preview[5].textContent = val * 6;
  val = 0;
  verifyNumber();
  verifyThree();
  verifyFour();
  verifyFull();
  verifySmall();
  verifyLarge();
  verifyYams();
  verifyLuck();
  verifyBonus();
  resetVal();
};

dices[0].addEventListener("click", () => {
  if (count == undefined) {
  } else {
    if (dices[0].classList.contains("diceSelected")) {
      dices[0].classList.remove("diceSelected");
    } else {
      dices[0].classList.add("diceSelected");
    }
  }
});

dices[1].addEventListener("click", () => {
  if (count == undefined) {
  } else {
    if (dices[1].classList.contains("diceSelected")) {
      dices[1].classList.remove("diceSelected");
    } else {
      dices[1].classList.add("diceSelected");
    }
  }
});

dices[2].addEventListener("click", () => {
  if (count == undefined) {
  } else {
    if (dices[2].classList.contains("diceSelected")) {
      dices[2].classList.remove("diceSelected");
    } else {
      dices[2].classList.add("diceSelected");
    }
  }
});

dices[3].addEventListener("click", () => {
  if (count == undefined) {
  } else {
    if (dices[3].classList.contains("diceSelected")) {
      dices[3].classList.remove("diceSelected");
    } else {
      dices[3].classList.add("diceSelected");
    }
  }
});

dices[4].addEventListener("click", () => {
  if (count == undefined) {
  } else {
    if (dices[4].classList.contains("diceSelected")) {
      dices[4].classList.remove("diceSelected");
    } else {
      dices[4].classList.add("diceSelected");
    }
  }
});

launchBtn.addEventListener("click", () => {
  resetFocused();
  for (let i = 0; i < dicesNumber.length; i++) {
    if (!dices[i].classList.contains("diceSelected")) {
      randomizeDice();
      dicesNumber[i].textContent = val;
    }
  }
  verifyPts();
  if (count == undefined) {
    count = 1;
    coverPlay.classList.add("invisible");
    playBtn.classList.remove("readOnly");
  } else if (count < 2) {
    count++;
  } else {
    count = 0;
    launchBtn.classList.add("readOnly");
    coverLaunch.classList.remove("invisible");
  }
  console.log(count);
});

const ptsAttribute = () => {
  if (previewContainer[0].classList.contains("selected")) {
    one = previewContainer[0].textContent;
  } else if (previewContainer[1].classList.contains("selected")) {
    two = previewContainer[1].textContent;
  } else if (previewContainer[2].classList.contains("selected")) {
    three = previewContainer[2].textContent;
  } else if (previewContainer[3].classList.contains("selected")) {
    four = previewContainer[3].textContent;
  } else if (previewContainer[4].classList.contains("selected")) {
    five = previewContainer[4].textContent;
  } else if (previewContainer[5].classList.contains("selected")) {
    six = previewContainer[5].textContent;
  } else if (previewContainer[6].classList.contains("selected")) {
  } else if (previewContainer[7].classList.contains("selected")) {
  } else if (previewContainer[8].classList.contains("selected")) {
  } else if (previewContainer[9].classList.contains("selected")) {
  } else if (previewContainer[10].classList.contains("selected")) {
  } else if (previewContainer[11].classList.contains("selected")) {
  } else if (previewContainer[12].classList.contains("selected")) {
  } else if (previewContainer[13].classList.contains("selected")) {
  } else {
  }
};

playBtn.addEventListener("click", () => {
  verifyFocus();
  ptsAttribute();
});

const previewEvent = (e) => {
  console.log();
  if (count == undefined) {
  } else {
    if (previewContainer[e].classList.contains("focused")) {
      previewContainer[e].classList.remove("focused");
    } else {
      resetFocused();
      previewContainer[e].classList.add("focused");
    }
  }
};

previewContainer[0].addEventListener("click", () => {
  previewEvent(0);
});

previewContainer[1].addEventListener("click", () => {
  previewEvent(1);
});

previewContainer[2].addEventListener("click", () => {
  previewEvent(2);
});

previewContainer[3].addEventListener("click", () => {
  previewEvent(3);
});

previewContainer[4].addEventListener("click", () => {
  previewEvent(4);
});

previewContainer[5].addEventListener("click", () => {
  previewEvent(5);
});

previewContainer[6].addEventListener("click", () => {
  previewEvent(6);
});

previewContainer[7].addEventListener("click", () => {
  previewEvent(7);
});

previewContainer[8].addEventListener("click", () => {
  previewEvent(8);
});

previewContainer[9].addEventListener("click", () => {
  previewEvent(9);
});

previewContainer[10].addEventListener("click", () => {
  previewEvent(10);
});

previewContainer[11].addEventListener("click", () => {
  previewEvent(11);
});

previewContainer[12].addEventListener("click", () => {
  previewEvent(12);
});

previewContainer[13].addEventListener("click", () => {
  previewEvent(13);
});
