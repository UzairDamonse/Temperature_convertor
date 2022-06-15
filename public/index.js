function farenheitToCelcius(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}
function celciusToFarenheit(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFarenheit").innerHTML = valNum * 1.8 + 32;
}
