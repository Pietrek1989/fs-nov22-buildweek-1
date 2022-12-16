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
).innerText = `${correctAnswers}/${numberOfQuestions} Questions`;

document.getElementById(
  "wrong-answer-absolute"
).innerText = `${wrongAnswers}/${numberOfQuestions} Questions`;

let circle = `<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
<circle
  class="donut-hole"
  cx="21"
  cy="21"
  r="15.91549430918954"
  fill="transparent"

>
  test
</circle>
<circle
  class="donut-ring"
  cx="21"
  cy="21"
  r="15.91549430918954"
  fill="transparent"
  stroke="#991e8f"
  stroke-width="5.5"
></circle>
<circle
  class="donut-segment"
  cx="21"
  cy="21"
  r="15.91549430918954"
  fill="transparent"
  stroke="#00FFFF"
  stroke-width="5.5"
  stroke-dasharray="${correctAnswerPercentage} ${wrongAnswerPercentage}"
  stroke-dashoffset="45"
></circle>`;

function onloadOperations() {
  let containerNode = document.getElementById("circle-svg");
  if (correctAnswerPercentage >= 60) {
    containerNode.innerHTML =
      circle +
      ` <div class="chart-text">       <p class="chart-number">         Congratulations!       </p>       <p class="chart-second">         You passed the exam.       </p>       <p  class="chart-label">           We'll send you a certificate in a few minutes           Check your email (including promotion / spam folder)       </p>     </div>
</svg>`;
  } else {
    containerNode.innerHTML =
      circle +
      `<div class="chart-text">       <p class="chart-number">         <br/> We're sorry!       </p>       <p class="chart-second">         You didn't pass the exam.       </p>       <p  class="chart-label">           But please try again! Good Luck!       </p>     </div>
</svg>`;
  }
}

window.onload = onloadOperations;

function goToIndex() {
  window.location.href = "welcome.html";
}
