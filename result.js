let correctAnswers = parseInt(window.localStorage.getItem("correctAnswers"));

console.log(correctAnswers);

let wrongAnswers = parseInt(window.localStorage.getItem("wrongAnswers"));
console.log(wrongAnswers);

let numberOfQuestions = parseInt(
  window.localStorage.getItem("numberOfQuestions")
);
console.log(numberOfQuestions);

let correctAnswerPercentage = (correctAnswers / numberOfQuestions) * 100;

let wrongAnswerPercentage = (wrongAnswers / numberOfQuestions) * 100;

document.getElementById(
  "correct-answer-percentage"
).innerText = `${correctAnswerPercentage}%`;

document.getElementById(
  "wrong-answer-percentage"
).innerText = `${wrongAnswerPercentage}%`;

document.getElementById(
  "correct-answer-absolute"
).innerText = `${correctAnswers}/${numberOfQuestions}`;

document.getElementById(
  "wrong-answer-absolute"
).innerText = `${wrongAnswers}/${numberOfQuestions}`;