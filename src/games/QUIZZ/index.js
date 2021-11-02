const select = document.getElementById("quizSelect");
const containers = document.querySelectorAll(".questionContainer");
const btn = document.getElementById("verifyBtn");
const resultContainer = document.querySelector(".result");
const error = document.querySelector(".errorEmpty");
const answers = document.querySelectorAll(".answer");
const resp1 = document.querySelectorAll(".resp1");
let questions;
let title, radios, labels;
let check = 0;

fetch("question.json")
  .then((res) => res.json())
  .then((data) => {
    questions = data;
    displayQuestion("general");
  });

const reset = () => {
  error.textContent = "";
  resultContainer.innerHTML = ``;
  for (i = 0; i < resp1.length; i++) {
    resp1[i].checked = true;
    resp1[i].checked = false;
  }
  for (i = 0; i < answers.length; i++) {
    answers[i].textContent = "";
  }
  for (i = 0; i < containers.length; i++) {
    containers[i].classList.remove("answerBad");
    containers[i].classList.remove("answerGood");
  }
};

const smallReset = () => {
  error.textContent = "";
  resultContainer.innerHTML = ``;

  for (i = 0; i < answers.length; i++) {
    answers[i].textContent = "";
  }
  for (i = 0; i < containers.length; i++) {
    containers[i].classList.remove("answerBad");
    containers[i].classList.remove("answerGood");
  }
};

const emptyCheck = (theme) => {
  console.log(theme);
  check = 0;
  for (let i = 0; i < containers.length; i++) {
    test = 0;
    radios = containers[i].querySelectorAll("input");
    for (let i = 0; i < radios.length; i++) {
      if (!radios[i].checked) {
        test++;
      }
    }
    if (test === 4) {
      error.textContent = "All answers must be checked";
    } else {
      check++;
      console.log("ok");
    }
  }
  if (check === 10) {
    verifyAnswerPrologue(theme);
  } else {
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

const verifyAnswerPrologue = (theme, e) => {
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
        containers[question].classList.add("answerGood");
        containers[question].classList.remove("answerBad");
        result++;
      } else {
        containers[question].classList.add("answerBad");
        containers[question].classList.remove("answerGood");
        answerContainer.textContent = "The good answer is " + answer;
      }
    }
  }
};

select.addEventListener("change", (e) => {
  e.preventDefault();
  if (select.selectedIndex === 0) {
    reset();
    displayQuestion("general");
  } else if (select.selectedIndex === 1) {
    reset();
    displayQuestion("classical");
  } else {
    reset();
    displayQuestion("cinema");
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (select.selectedIndex === 0) {
    smallReset();
    emptyCheck("general");
  } else if (select.selectedIndex === 1) {
    smallReset();
    emptyCheck("classical");
  } else {
    smallReset();
    emptyCheck("cinema");
  }
});
