var allButtons = document.querySelectorAll("button");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", addClass);
};

function addClass() {
  var actualColor = event.target.id;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var newColor = capitalizeFirstLetter(actualColor);
  var changeClass = document.getElementById("output").className = ("bg" + newColor);
}
