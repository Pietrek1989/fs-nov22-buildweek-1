function triggerFeedback() {
  let agreedToTestRules = document.getElementById("quiz-agreement").checked;
  if (agreedToTestRules === true) {
    window.location.href = "feedback.html";
  } else {
    alert("Please agree to the Benchmark Rules in order to continue");
  }
}
