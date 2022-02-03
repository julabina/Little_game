const greenBtn = document.querySelector(".game__green");
const blueBtn = document.querySelector(".game__blue");
const yellowBtn = document.querySelector(".game__yellow");
const redBtn = document.querySelector(".game__red");
const playBtn = document.getElementById("playBtn");
const resultCont = document.querySelector(".result");

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

const eventNone = () => {
    redBtn.classList.add("game__red--disabled");
    greenBtn.classList.add("game__green--disabled");
    blueBtn.classList.add("game__blue--disabled");
    yellowBtn.classList.add("game__yellow--disabled");
}

const eventOk = () => {
    redBtn.classList.remove("game__red--disabled");
    greenBtn.classList.remove("game__green--disabled");
    blueBtn.classList.remove("game__blue--disabled");
    yellowBtn.classList.remove("game__yellow--disabled");
}

const playSimon = () => {
    let i = 0;
    eventNone();
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
    if (i === simonOrder.length) {
        eventOk();
        }
    }, 1000);
}

const verify = () => {
    for (let i = 0; i < playerOrder.length; i++) {
        if (simonOrder[i] !== playerOrder[i]) {
            resultCont.textContent = "LOSE - " + simonOrder.length + " turn";
            playerOrder = [];      
            simonOrder = [];
            eventNone();
            return;
        } 
    }
    if (simonOrder.length === playerOrder.length) {
        playerOrder = [];      
        playGoodOrder();
    }
}

const playersChoice = (choice) => {
    playerOrder.push(choice); 
    verify();
}

const playGoodOrder = () => {
    let val = randomColor();
    simonOrder.push(val);
    playSimon();
}

greenBtn.addEventListener("click", () => {
    playersChoice(1);
    greenBtn.classList.add("game__green--selected");
    setTimeout(() => {
        greenBtn.classList.remove("game__green--selected");     
    }, 200);
})

redBtn.addEventListener("click", () => {
    playersChoice(2);
    redBtn.classList.add("game__red--selected");
    setTimeout(() => {
        redBtn.classList.remove("game__red--selected");     
    }, 200);
})

yellowBtn.addEventListener("click", () => {
    playersChoice(3);
    yellowBtn.classList.add("game__yellow--selected");
    setTimeout(() => {
        yellowBtn.classList.remove("game__yellow--selected");     
    }, 200);
})

blueBtn.addEventListener("click", () => {
    playersChoice(4);
    blueBtn.classList.add("game__blue--selected");
    setTimeout(() => {
        blueBtn.classList.remove("game__blue--selected");     
    }, 200);
})

playBtn.addEventListener("click", () => {
    playerOrder = [];      
    simonOrder = [];
    resultCont.textContent = "";
    playGoodOrder();
})