const select = document.getElementById("quizSelect");
const containers = document.querySelectorAll(".questionContainer");
let questions;
let title, radios, labels;

fetch("question.json")
  .then((res) => res.json())
  .then((data) => {
    questions = data;
    displayQuestion("general");
  });

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

const test = (theme) => {
  for (let i = 0; i < containers.length; i++) {
    title = containers[i].querySelector(".title");
    radios = containers[i].querySelectorAll("input");
    labels = containers[i].querySelectorAll("label");
    verifyAnswer(i, theme);
  }
};

const verifyAnswer = (question, theme) => {
  questionTheme = questions[theme];
  answer = questionTheme[question].answer;
  console.log(answer);

  for (i = 0; i < radios.length; i++) {
    if (radios[i].value === answer) {
      console.log("test1");
      containers[i].classList.add("test");
    } else {
      console.log("test2");
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
