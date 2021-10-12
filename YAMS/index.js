const dicesNumber = document.querySelectorAll(".diceNumber");
const dices = document.querySelectorAll(".dice");
const launchBtn = document.querySelector(".launchDice");
const playBtn = document.querySelector(".play");
const coverLaunch = document.querySelector(".coverLaunchDice");
const coverPlay = document.querySelector(".coverPlay");
const coverPreview = document.querySelectorAll(".coverScorePreview");
const previewContainer = document.querySelectorAll(".score-preview-container");
const preview = document.querySelectorAll(".score-preview");
const totalContainer = document.getElementById("total");
const resetBtn = document.querySelector(".reset");
const displayBonusYams = document.querySelectorAll(".bonusYamsValidDisplay");

let value = [0, 0, 0, 0, 0, 0];
let one = 0,
  two = 0,
  three = 0,
  four = 0,
  five = 0,
  six = 0,
  bre = 0,
  carre = 0,
  full = 0,
  small = 0,
  large = 0,
  yams = 0,
  luck = 0,
  bonus = 0,
  scoreTotal = 0,
  yamsValidBonus = 0,
  focused = 0;
let count;
let yamsValid = false;
let diceFocused = false;
let bonusValid = false;
let yamsBonus = false;

const randomizeDice = () => {
  val = Math.ceil(Math.random() * 6);
  return val;
};

function reset() {
  yamsValid = false;
  diceFocused = false;
  bonusValid = false;
  yamsBonus = false;
  count = undefined;
  resetVal();
  resetFocused();
  one = 0;
  two = 0;
  three = 0;
  four = 0;
  five = 0;
  six = 0;
  bre = 0;
  carre = 0;
  full = 0;
  small = 0;
  large = 0;
  yams = 0;
  luck = 0;
  bonus = 0;
  scoreTotal = 0;
  for (let i = 0; i < dices.length; i++) {
    dicesNumber[i].textContent = "";
    dices[i].classList.remove("diceSelected");
  }
  for (let i = 0; i < previewContainer.length; i++) {
    preview[i].textContent = "0";
    previewContainer[i].classList.remove("selected");
    previewContainer[i].classList.remove("selectedForTotal");
    coverPreview[i].classList.add("invisible");
    displayBonusYams[i].classList.add("invisible");
  }
  playBtn.classList.add("readOnly");
  coverPlay.classList.remove("invisible");
  launchBtn.classList.remove("readOnly");
  coverLaunch.classList.add("invisible");
  totalContainer.textContent = "";
}

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
      diceFocused = true;
    }
  }
};

const verifyThree = () => {
  if (previewContainer[6].classList.contains("selectedForTotal")) {
    bre > 30
      ? (preview[6].textContent = bre - 50)
      : (preview[6].textContent = bre);
  } else {
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
  }
};

const verifyFour = () => {
  if (previewContainer[7].classList.contains("selectedForTotal")) {
    carre > 30
      ? (preview[7].textContent = carre - 50)
      : (preview[7].textContent = carre);
  } else {
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
  }
};

const verifyFull = () => {
  if (previewContainer[8].classList.contains("selectedForTotal")) {
    full > 25
      ? (preview[8].textContent = full - 50)
      : (preview[8].textContent = full);
  } else {
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
  }
};

const verifySmall = () => {
  if (previewContainer[9].classList.contains("selectedForTotal")) {
    small > 30
      ? (preview[9].textContent = small - 50)
      : (preview[9].textContent = small);
  } else {
    if (value[0] == 1 && value[1] == 1 && value[2] == 1 && value[3] == 1) {
      preview[9].textContent = "30";
    } else if (
      value[0] == 2 &&
      value[1] == 1 &&
      value[2] == 1 &&
      value[3] == 1
    ) {
    } else if (
      value[0] == 1 &&
      value[1] == 2 &&
      value[2] == 1 &&
      value[3] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[0] == 1 &&
      value[1] == 1 &&
      value[2] == 2 &&
      value[3] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[0] == 1 &&
      value[1] == 1 &&
      value[2] == 1 &&
      value[3] == 2
    ) {
      preview[9].textContent = "30";
    } else if (
      value[1] == 1 &&
      value[2] == 1 &&
      value[3] == 1 &&
      value[4] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[1] == 2 &&
      value[2] == 1 &&
      value[3] == 1 &&
      value[4] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[1] == 1 &&
      value[2] == 2 &&
      value[3] == 1 &&
      value[4] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[1] == 1 &&
      value[2] == 1 &&
      value[3] == 2 &&
      value[4] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[1] == 1 &&
      value[2] == 1 &&
      value[3] == 1 &&
      value[4] == 2
    ) {
      preview[9].textContent = "30";
    } else if (
      value[2] == 1 &&
      value[3] == 1 &&
      value[4] == 1 &&
      value[5] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[2] == 2 &&
      value[3] == 1 &&
      value[4] == 1 &&
      value[5] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[2] == 1 &&
      value[3] == 2 &&
      value[4] == 1 &&
      value[5] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[2] == 1 &&
      value[3] == 1 &&
      value[4] == 2 &&
      value[5] == 1
    ) {
      preview[9].textContent = "30";
    } else if (
      value[2] == 1 &&
      value[3] == 1 &&
      value[4] == 1 &&
      value[5] == 2
    ) {
      preview[9].textContent = "30";
    } else {
      preview[9].textContent = "0";
    }
  }
};

const verifyLarge = () => {
  if (previewContainer[10].classList.contains("selectedForTotal")) {
    large > 40
      ? (preview[10].textContent = large - 50)
      : (preview[10].textContent = large);
  } else {
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
  }
};

const verifyYams = () => {
  if (previewContainer[11].classList.contains("selectedForTotal")) {
    preview[11].textContent = yams;
  } else {
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
  }
};

const verifyLuck = () => {
  if (previewContainer[12].classList.contains("selectedForTotal")) {
    luck > 30
      ? (preview[12].textContent = luck - 50)
      : (preview[12].textContent = luck);
  } else {
    let a =
      value[0] +
      value[1] * 2 +
      value[2] * 3 +
      value[3] * 4 +
      value[4] * 5 +
      value[5] * 6;

    preview[12].textContent = a;
  }
};

const verifyBonus = () => {
  let one1 = 0,
    two1 = 0,
    three1 = 0,
    four1 = 0,
    five1 = 0,
    six1 = 0;
  one > 5 ? (one1 = one - 50) : (one1 = one);
  two > 10 ? (two1 = two - 50) : (two1 = two);
  three > 15 ? (three1 = three - 50) : (three1 = three);
  four > 20 ? (four1 = four - 50) : (four1 = four);
  five > 25 ? (five1 = five - 50) : (five1 = five);
  six > 30 ? (six1 = six - 50) : (six1 = six);

  a = one1 + two1 + three1 + four1 + five1 + six1;

  if (a > 62) {
    preview[13].textContent = "35";
    bonusValid = true;
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
  if (previewContainer[0].classList.contains("selectedForTotal")) {
    one > 5
      ? (preview[0].textContent = one - 50)
      : (preview[0].textContent = one);
  } else {
    let val = 0;
    for (let i = 0; i < dicesNumber.length; i++) {
      if (dicesNumber[i].textContent == 1) {
        val++;
      }
    }
    preview[0].textContent = val;
  }
  if (previewContainer[1].classList.contains("selectedForTotal")) {
    two > 10
      ? (preview[1].textContent = two - 50)
      : (preview[1].textContent = two);
  } else {
    val = 0;
    for (let i = 0; i < dicesNumber.length; i++) {
      if (dicesNumber[i].textContent == 2) {
        val++;
      }
    }
    preview[1].textContent = val * 2;
  }
  if (previewContainer[2].classList.contains("selectedForTotal")) {
    three > 15
      ? (preview[2].textContent = three - 50)
      : (preview[2].textContent = three);
  } else {
    val = 0;
    for (let i = 0; i < dicesNumber.length; i++) {
      if (dicesNumber[i].textContent == 3) {
        val++;
      }
    }
    preview[2].textContent = val * 3;
  }
  if (previewContainer[3].classList.contains("selectedForTotal")) {
    four > 20
      ? (preview[3].textContent = four - 50)
      : (preview[3].textContent = four);
  } else {
    val = 0;
    for (let i = 0; i < dicesNumber.length; i++) {
      if (dicesNumber[i].textContent == 4) {
        val++;
      }
    }
    preview[3].textContent = val * 4;
  }
  if (previewContainer[4].classList.contains("selectedForTotal")) {
    five > 25
      ? (preview[4].textContent = five - 50)
      : (preview[4].textContent = five);
  } else {
    val = 0;
    for (let i = 0; i < dicesNumber.length; i++) {
      if (dicesNumber[i].textContent == 5) {
        val++;
      }
    }
    preview[4].textContent = val * 5;
  }
  if (previewContainer[5].classList.contains("selectedForTotal")) {
    six > 30
      ? (preview[5].textContent = six - 300)
      : (preview[5].textContent = six);
    30;
  } else {
    val = 0;
    for (let i = 0; i < dicesNumber.length; i++) {
      if (dicesNumber[i].textContent == 6) {
        val++;
      }
    }
    preview[5].textContent = val * 6;
  }
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
  if (yamsValid == true) {
    ptsYamsValid();
  }
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
});

const ptsYamsValid = () => {
  console.log(value);
  if (
    value[0] == 5 ||
    value[1] == 5 ||
    value[2] == 5 ||
    value[3] == 5 ||
    value[4] == 5 ||
    value[5] == 5
  ) {
    yamsValidBonus = 50;
    yamsBonus = true;
  }
};

const resetYamsBonus = () => {
  yamsValidBonus = 0;
  yamsBonus = false;
};

const ptsAttribute = () => {
  if (previewContainer[0].classList.contains("selected")) {
    one = parseInt(previewContainer[0].textContent);
    if (yamsValid == true) {
      let val = one + yamsValidBonus;
      one = val;
      if (yamsBonus == true) {
        displayBonusYams[0].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[0].classList.add("selectedForTotal");
    previewContainer[0].classList.remove("selected");
    coverPreview[0].classList.remove("invisible");
  } else if (previewContainer[1].classList.contains("selected")) {
    two = parseInt(previewContainer[1].textContent);
    if (yamsValid == true) {
      let val = two + yamsValidBonus;
      two = val;
      if (yamsBonus == true) {
        displayBonusYams[1].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[1].classList.add("selectedForTotal");
    previewContainer[1].classList.remove("selected");
    coverPreview[1].classList.remove("invisible");
  } else if (previewContainer[2].classList.contains("selected")) {
    three = parseInt(previewContainer[2].textContent);
    if (yamsValid == true) {
      let val = three + yamsValidBonus;
      three = val;
      if (yamsBonus == true) {
        displayBonusYams[2].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[2].classList.add("selectedForTotal");
    previewContainer[2].classList.remove("selected");
    coverPreview[2].classList.remove("invisible");
  } else if (previewContainer[3].classList.contains("selected")) {
    four = parseInt(previewContainer[3].textContent);
    if (yamsValid == true) {
      let val = four + yamsValidBonus;
      four = val;
      if (yamsBonus == true) {
        displayBonusYams[3].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[3].classList.add("selectedForTotal");
    previewContainer[3].classList.remove("selected");
    coverPreview[3].classList.remove("invisible");
  } else if (previewContainer[4].classList.contains("selected")) {
    five = parseInt(previewContainer[4].textContent);
    if (yamsValid == true) {
      let val = five + yamsValidBonus;
      five = val;
      if (yamsBonus == true) {
        displayBonusYams[4].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[4].classList.add("selectedForTotal");
    previewContainer[4].classList.remove("selected");
    coverPreview[4].classList.remove("invisible");
  } else if (previewContainer[5].classList.contains("selected")) {
    six = parseInt(previewContainer[5].textContent);
    if (yamsValid == true) {
      let val = six + yamsValidBonus;
      six = val;
      if (yamsBonus == true) {
        displayBonusYams[5].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[5].classList.add("selectedForTotal");
    previewContainer[5].classList.remove("selected");
    coverPreview[5].classList.remove("invisible");
  } else if (previewContainer[6].classList.contains("selected")) {
    bre = parseInt(previewContainer[6].textContent);
    if (yamsValid == true) {
      let val = bre + yamsValidBonus;
      bre = val;
      if (yamsBonus == true) {
        displayBonusYams[6].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[6].classList.add("selectedForTotal");
    previewContainer[6].classList.remove("selected");
    coverPreview[6].classList.remove("invisible");
  } else if (previewContainer[7].classList.contains("selected")) {
    carre = parseInt(previewContainer[7].textContent);
    if (yamsValid == true) {
      let val = carre + yamsValidBonus;
      carre = val;
      if (yamsBonus == true) {
        displayBonusYams[7].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[7].classList.add("selectedForTotal");
    previewContainer[7].classList.remove("selected");
    coverPreview[7].classList.remove("invisible");
  } else if (previewContainer[8].classList.contains("selected")) {
    full = parseInt(previewContainer[8].textContent);
    if (yamsValid == true) {
      let val = full + yamsValidBonus;
      full = val;
      if (yamsBonus == true) {
        displayBonusYams[8].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[8].classList.add("selectedForTotal");
    previewContainer[8].classList.remove("selected");
    coverPreview[8].classList.remove("invisible");
  } else if (previewContainer[9].classList.contains("selected")) {
    small = parseInt(previewContainer[9].textContent);
    if (yamsValid == true) {
      let val = small + yamsValidBonus;
      small = val;
      if (yamsBonus == true) {
        displayBonusYams[9].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[9].classList.add("selectedForTotal");
    previewContainer[9].classList.remove("selected");
    coverPreview[9].classList.remove("invisible");
  } else if (previewContainer[10].classList.contains("selected")) {
    large = parseInt(previewContainer[10].textContent);
    if (yamsValid == true) {
      let val = large + yamsValidBonus;
      large = val;
      if (yamsBonus == true) {
        displayBonusYams[10].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[10].classList.add("selectedForTotal");
    previewContainer[10].classList.remove("selected");
    coverPreview[10].classList.remove("invisible");
  } else if (previewContainer[11].classList.contains("selected")) {
    yams = parseInt(previewContainer[11].textContent);
    previewContainer[11].classList.add("selectedForTotal");
    previewContainer[11].classList.remove("selected");
    coverPreview[11].classList.remove("invisible");
    yamsValid = true;
  } else if (previewContainer[12].classList.contains("selected")) {
    luck = parseInt(previewContainer[12].textContent);
    if (yamsValid == true) {
      let val = luck + yamsValidBonus;
      luck = val;
      if (yamsBonus == true) {
        displayBonusYams[12].classList.remove("invisible");
      }
      resetYamsBonus();
    }
    previewContainer[12].classList.add("selectedForTotal");
    previewContainer[12].classList.remove("selected");
    coverPreview[12].classList.remove("invisible");
  } else {
  }
};

const ptsTotal = () => {
  bonusValid
    ? ((bonus = 35), previewContainer[13].classList.add("selectedForTotal"))
    : (bonus = 0);
  scoreTotal =
    one +
    two +
    three +
    four +
    five +
    six +
    bre +
    carre +
    small +
    large +
    full +
    yams +
    luck +
    bonus;

  let score = scoreTotal.toString();

  totalContainer.textContent = score;
};

playBtn.addEventListener("click", () => {
  diceFocused = false;
  verifyFocus();
  if (diceFocused == true) {
    ptsAttribute();
    verifyBonus();
    ptsTotal();
    coverLaunch.classList.add("invisible");
    launchBtn.classList.remove("readOnly");
    coverPlay.classList.remove("invisible");
    playBtn.classList.add("readOnly");
    count = undefined;
    for (let i = 0; i < dices.length; i++) {
      dicesNumber[i].textContent = "";
      dices[i].classList.remove("diceSelected");
    }
  } else {
    alert("Please chose one");
  }

  focused = 0;
  for (let i = 0; i < previewContainer.length - 1; i++) {
    if (previewContainer[i].classList.contains("selectedForTotal")) {
      focused++;
    }
  }
  if (focused > 12) {
    coverLaunch.classList.remove("invisible");
    launchBtn.classList.add("readOnly");
  }
});

resetBtn.addEventListener("click", () => {
  reset();
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
