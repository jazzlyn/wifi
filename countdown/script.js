var startExecution;
var stopExecution;
var currentSeconds;
var myIntervall;
var myOutput;
var floatValue;

function startCountdown() {
  clearInterval(myIntervall);
  myOutput = document.getElementById("output");
  var userValue = document.getElementById("startValue").value;
  document.getElementById("startValue").value = "";
  floatValue = parseFloat(userValue);
  if (isNaN(floatValue)) {
    alert("Please insert a number!");
  } else {
    currentSeconds = Math.round(floatValue);
    var d = new Date();
    startExecution = d.getTime();
    runCountdown();
    myIntervall = setInterval(runCountdown, 1000);
  }
}
function runCountdown() {
  myOutput.innerHTML = currentSeconds;
  if (currentSeconds === 0) {
    var d = new Date();
    stopExecution = d.getTime();
    clearInterval(myIntervall);
    resetField();
  }
  currentSeconds--;
}
function resetField() {
  myOutput.innerHTML = "";
  var realExecutionTime = (stopExecution-startExecution) / 1000;
  myOutput.innerHTML = realExecutionTime;
}