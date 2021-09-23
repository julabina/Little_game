const playerPropose = document.getElementById("playerPropose");
const lastPropose = document.querySelector(".lastPropose");
const resultStatus = document.querySelector(".resultStatus");

let goodPrice, lastPricePropose, currentPricePropose;

const randomPrice = (int) => {
  goodPrice = Math.random() * int;
};

const game = () => {
  let finish = false;
  randomPrice(1000);

  do {
    finish = true;
  } while (finish === false);
};
