/*VARIABLES*/
var rates = [0.57, 1.73, 2.2, 0.45, 0.26, 3.78]; //do poprawy

var hrkPln = rates[0];
var plnHrk = rates[1];

var bamPln = rates[2];
var plnBam = rates[3];

var hrkBam = rates[4];
var bamHrk = rates[4];

var input1 = document.getElementById("amountCurrencyInput");
var firstCurrency = document.getElementById("firstCurrency");
var secondCurrency = document.getElementById("secondCurrency");
var button1 = document.querySelector(".calculateCurrency");
var writtenResult = document.querySelector(".result");
/*funkcja - intrukcje warunkowe i */

function calculate(event) {
  event.preventDefault();

  var inputValue = input1.value;
  var firstCurrencyValue = firstCurrency.value;
  var secondCurrencyValue = secondCurrency.value;
  var result = 0; //zerujemy i tworzymy zmienną

  if (firstCurrencyValue === "HRK" && secondCurrencyValue === "BAM") {
    result = inputValue * hrkBam;
  } else if (firstCurrencyValue === "HRK" && secondCurrencyValue === "PLN") {
    result = inputValue * hrkPln;
  } else if (firstCurrencyValue === "BAM" && secondCurrencyValue === "HRK") {
    result = inputValue * bamHrk;
  } else if (firstCurrencyValue === "BAM" && secondCurrencyValue === "PLN") {
    result = inputValue * bamPln;
  } else if (firstCurrencyValue === "PLN" && secondCurrencyValue === "HRK") {
    result = inputValue * plnHrk;
  } else if (firstCurrencyValue === "PLN" && secondCurrencyValue === "BAM") {
    result = inputValue * plnBam;
  } else {
    alert("Please, choose other currency than first one.");
  }
  document.querySelector(".amount").innerHTML = inputValue;
  document.querySelector(".firstResultCurrency").textContent =
    firstCurrencyValue + " = ";
  writtenResult.textContent = result;
  document.querySelector(".secondResultCurrency").textContent =
    " " + secondCurrencyValue;
}

button1.addEventListener("click", calculate);
