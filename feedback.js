function setValue() {
  document.getElementById("star1").checked = true;
  document.getElementById("star2").checked = true;
  document.getElementById("star3").checked = true;
  document.getElementById("star4").checked = true;
  document.getElementById("star5").checked = true;
  document.getElementById("star6").checked = true;
}
window.onload = setValue();

function goToIndex() {
  window.location.href = "welcome.html";
}
