const questions = [
  {
    category: "Science: Computers",
    timeToComplete: 30,
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    timeToComplete: 20,
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    timeToComplete: 15,
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    timeToComplete: 20,
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    timeToComplete: 50,
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    timeToComplete: 30,
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    timeToComplete: 40,
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    timeToComplete: 20,
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    timeToComplete: 30,
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    timeToComplete: 15,
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let shuffledQuestions = questions.sort(() => Math.random() - 0.5);

let currentIndexQuestion = -1;
let counterCorrect = 0;
let counterIncorrect = 0;
let numberOfQuestion = document.getElementById("counter");

function show() {
  currentIndexQuestion++;
  numberOfQuestion.innerText = currentIndexQuestion + 1;
  let quizContainer = document.getElementById("quiz");
  let quizSpace = document.createElement("div");
  quizSpace.innerHTML = `<div>${shuffledQuestions[currentIndexQuestion].question}</div>`;
  quizSpace.classList.add("for-hide", "question");
  quizContainer.append(quizSpace);
  let newwArr = [...shuffledQuestions[currentIndexQuestion].incorrect_answers];
  newwArr.push(shuffledQuestions[currentIndexQuestion].correct_answer);
  let shuffledAnswers = newwArr.sort(() => Math.random() - 0.5);
  console.log(shuffledAnswers);
  for (const iterator of shuffledAnswers) {
    let answerDiv = document.createElement("div");
    answerDiv.innerText = iterator;
    answerDiv.classList.add("answer-button");
    answerDiv.addEventListener("click", selectAnswer);
    quizSpace.append(answerDiv);
  }
  let button = document.createElement("button");
  button.innerText = "NEXT";
  button.setAttribute("id", "next-button");
  quizSpace.append(button);
  button.addEventListener("click", hide);
  startTimer(shuffledQuestions[currentIndexQuestion].timeToComplete + 1);
}

function selectAnswer(event) {
  event.target.classList.toggle("selected");
}

function hide() {
  let selectedElements = document.querySelector(".selected");
  if (selectedElements === null || selectedElements === undefined) {
    counterIncorrect++;
    console.log("Nothing clicked and incorrect answers:", counterIncorrect);
  } else if (
    selectedElements.classList.contains("selected") &&
    selectedElements.innerText !==
      questions[currentIndexQuestion].correct_answer
  ) {
    counterIncorrect++;
    console.log("incorrect answers:", counterIncorrect);
  } else {
    counterCorrect++;
    console.log("correct answers:", counterCorrect);
  }

  document.querySelector(".for-hide").remove();
  if (currentIndexQuestion + 1 < questions.length) {
    show();
  } else {
    window.localStorage.setItem(
      "correctAnswers",
      JSON.stringify(counterCorrect)
    );
    window.localStorage.setItem(
      "wrongAnswers",
      JSON.stringify(counterIncorrect)
    );
    window.localStorage.setItem(
      "numberOfQuestions",
      JSON.stringify(questions.length)
    );

    window.location.href = "result.html";
  }
}

function selectAnswer(event) {
  event.target.classList.toggle("selected");
}

window.onload = show();

function goToIndex() {
  window.location.href = "welcome.html";
}
