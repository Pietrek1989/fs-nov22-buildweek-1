function triggerFeedback() {
  let agreedToTestRules = document.getElementById("quiz-agreement").checked;
  if (agreedToTestRules === true) {
    window.location.href = "benchmark.html";
  } else {
    alert("Please agree to the Benchmark Rules in order to continue");
  }
}

function clearLocalStorage() {
  window.localStorage.clear();
  console.log("cleared");
}

window.onload = clearLocalStorage;
