function count() {
  var textBox = document.getElementById("text");
  var textBoxValue = textBox.value;
  var length = textBoxValue.length;
  var console = document.getElementById("consoleCount");
  console.innerHTML = length;
}

function clearText() {
  var textBox = document.getElementById("text");
  textBox.value = " ";
  document.getElementById("consoleCount").innerHTML = "0";
}
