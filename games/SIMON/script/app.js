const greenBtn = document.querySelector(".game__green");
const blueBtn = document.querySelector(".game__blue");
const yellowBtn = document.querySelector(".game__yellow");
const redBtn = document.querySelector(".game__red");

let simonOrder = [];
let playerOrder = [];

const randomColor = () => {
    let val = Math.ceil(Math.random() * 4);
    return val;
}

const resetColors = () => {
    redBtn.classList.remove("game__red--selected");
    greenBtn.classList.remove("game__green--selected");
    blueBtn.classList.remove("game__blue--selected");
    yellowBtn.classList.remove("game__yellow--selected");
}

const playSimon = () => {
    let i = 0;
    let interv = setInterval(() => {
        resetColors();
        setTimeout(() => {
        if (i === simonOrder.length) {
            clearInterval(interv);
            setTimeout(() => {
                resetColors();
            }, 1000);
        }
            if (simonOrder[i] === 1) {
                greenBtn.classList.add("game__green--selected");
            } else if (simonOrder[i] === 2) {
                redBtn.classList.add("game__red--selected");
            } else if (simonOrder[i] === 3) {
                yellowBtn.classList.add("game__yellow--selected");
            } else if (simonOrder[i] === 4) {
                blueBtn.classList.add("game__blue--selected");
            }
            i++;
        }, 600);
    }, 1000);
}

const verify = () => {
        for (let i = 0; i < playerOrder.length; i++) {
            if (simonOrder[i] === playerOrder[i]) {
                console.log("ok");
            } else {
                console.log("lose");
                playerOrder = [];      
                simonOrder = [];
            }
        }
        if (simonOrder.length === playerOrder.length) {
            playerOrder = [];      
            console.log('test');
            playGoodOrder();
        }
}

const playersChoice = (choice) => {
    playerOrder.push(choice);
    console.log(simonOrder);
    console.log(playerOrder);
    verify();
}

const playGoodOrder = () => {
    let val = randomColor();
    simonOrder.push(val);
    playSimon();
}

greenBtn.addEventListener("click", () => {
    playersChoice(1);
})

redBtn.addEventListener("click", () => {
    playersChoice(2);
})

yellowBtn.addEventListener("click", () => {
    playersChoice(3);
})

blueBtn.addEventListener("click", () => {
    playersChoice(4);
})