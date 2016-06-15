var allButtons = document.querySelectorAll("button");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", changeColor);
};

function changeColor() {
  var actualColor = event.target.id;
  var newColor = actualColor.slice(4);
  document.getElementById("colorfield").style.backgroundColor = newColor;
}