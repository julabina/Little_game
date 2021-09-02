const select = document.getElementById("quizSelect");
const containers = document.querySelectorAll(".questionContainer");
const btn = document.getElementById("verifyBtn");
const resultContainer = document.querySelector(".result");
let questions;
let title, radios, labels;
let check = 0;

fetch("question.json")
  .then((res) => res.json())
  .then((data) => {
    questions = data;
    displayQuestion("general");
  });

const emptyCheck = (theme) => {
  console.log(theme);
  check = 0;
  const error = document.querySelector(".errorEmpty");
  for (let i = 0; i < containers.length; i++) {
    test = 0;
    radios = containers[i].querySelectorAll("input");
    for (let i = 0; i < radios.length; i++) {
      if (!radios[i].checked) {
        test++;
      }
    }
    if (test === 4) {
      console.log("2165454165446544654985");
    } else {
      check++;
      console.log("ok");
    }
  }
  console.log(check);
  if (check === 10) {
    verifyAnswerPrologue(theme);
  } else {
    console.log("test");
  }
};

const addContent = (question, theme) => {
  questionTheme = questions[theme];
  title.textContent = questionTheme[question].title;
  for (let i = 0; i < labels.length; i++) {
    radios[i].value = questionTheme[question].resp[i].chose;
    labels[i].textContent = questionTheme[question].resp[i].chose;
  }
};

const displayQuestion = (theme) => {
  for (let i = 0; i < containers.length; i++) {
    title = containers[i].querySelector(".title");
    radios = containers[i].querySelectorAll("input");
    labels = containers[i].querySelectorAll("label");
    addContent(i, theme);
  }
};

const verifyAnswerPrologue = (theme) => {
  result = 0;
  for (let i = 0; i < containers.length; i++) {
    title = containers[i].querySelector(".title");
    radios = containers[i].querySelectorAll("input");
    labels = containers[i].querySelectorAll("label");
    answerContainer = containers[i].querySelector(".answer");
    verifyAnswer(i, theme);
  }
  resultContainer.innerHTML = `
  <p>${result}/10</p>
  `;
};

const verifyAnswer = (question, theme) => {
  questionTheme = questions[theme];
  answer = questionTheme[question].answer;

  for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      if (radios[i].value == answer) {
        containers[question].classList.add("test");
        containers[question].classList.remove("test2");
        result++;
      } else {
        containers[question].classList.add("test2");
        containers[question].classList.remove("test");
        answerContainer.textContent = "The good answer is " + answer;
      }
    } else {
    }
  }
};

select.addEventListener("change", () => {
  if (select.selectedIndex === 0) {
    displayQuestion("general");
  } else if (select.selectedIndex === 1) {
    displayQuestion("classical");
  } else {
    displayQuestion("cinema");
  }
});

btn.addEventListener("click", () => {
  if (select.selectedIndex === 0) {
    emptyCheck("general");
  } else if (select.selectedIndex === 1) {
    emptyCheck("classical");
  } else {
    emptyCheck("cinema");
  }
});
