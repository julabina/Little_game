const inputPropose = document.querySelector(".game__top__input");
const proposeBtn = document.querySelector(".game__mid__btn");
const resultContainer = document.querySelector(".game__bot");
const less = document.querySelector(".game__mid__less");
const more = document.querySelector(".game__mid__more");
const playBtn = document.querySelector(".menu__btnCont__playBtn");
const gameContainer = document.querySelector(".game");

let goodPrice, playerPrice;

const randomPrice = (diff) => {
   let val = Math.ceil(Math.random() * diff);
   return val; 
}

const verifyPrice = (playerPrice) => {
    if (playerPrice === goodPrice) {
        console.log('win');
    } else if (playerPrice < goodPrice) {
        console.log('more');
        resultContainer.innerHTML += `
        <div class="game__bot__more">${playerPrice}</div>
        `;
        resultContainer.scrollTop = resultContainer.scrollHeight;
    } else {
        console.log('less');
        resultContainer.innerHTML += `
        <div class="game__bot__less">${playerPrice}</div>
        `;
        resultContainer.scrollTop = resultContainer.scrollHeight;
    }
}

proposeBtn.addEventListener("click", () => {
    verifyPrice(parseInt(inputPropose.value));
    inputPropose.value = '';
})

inputPropose.addEventListener("keypress", (e) => {
    if (e.code === 'Enter') {
        verifyPrice(parseInt(inputPropose.value));
        inputPropose.value = '';
    }
})

playBtn.addEventListener("click", () => {
    gameContainer.classList.remove("game--off");
    goodPrice = randomPrice(100);
})