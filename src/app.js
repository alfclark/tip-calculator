const billInput = document.querySelector("#input-bill");
const tipButtons = document.querySelectorAll(".btn");
const tipCustom = document.querySelector("#input-tip");
const errorMsg = document.querySelector(".error-msg");
const numPeople = document.querySelector("#input-people");
const tipValue = document.querySelector(".tip-value");
const totalValue = document.querySelector(".total-value");
const resetBtn = document.querySelector(".resetButton");

billInput.addEventListener("input", getBill);
numPeople.addEventListener("input", addPeople);
tipButtons.forEach(function (val) {
  val.addEventListener("click", btnValue);
});
tipCustom.addEventListener("input", customTip);
//resetBtn.addEventListener("click", resetAll);

let billValue = 0.0;
let peopleValue = 1;
let tip = 0;

if (billInput.value === " ") {
  tipValue.textContent = "$0.0";
  tipValue.style.opacity = 0.5;
  totalValue.textContent = "$0.0";
  totalValue.style.opacity = 0.5;
}

function getBill() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}

function addPeople() {
  peopleValue = parseFloat(numPeople.value);
  if (peopleValue < 1) {
    errorMsg.style.opacity = "1";
  } else {
    errorMsg.style.opacity = "0";
    calculateTip();
  }
}

function btnValue(event) {
  tipButtons.forEach(function (val) {
    val.classList.remove("btn-active");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("btn-active");
      tip = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function customTip() {
  tip = parseFloat(tipCustom.value) / 100;
  tipButtons.forEach(function (val) {
    val.classList.remove("btn-active");
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tip) / peopleValue;
    let totalAmount = (tipAmount + billValue) / peopleValue;
    tipValue.textContent = "$" + tipAmount.toFixed(2);
    tipValue.style.opacity = 1;
    totalValue.textContent = "$" + totalAmount.toFixed(2);
    totalValue.style.opacity = 1;
  }
}

//function resetAll() {
//  numPeople.value = "";
//  billInput.value = "";
//  tipValue.textContent = "$0.0";
//  tipValue.style.opacity = 0.5;
//  totalValue.textContent = "$0.0";
//  totalValue.style.opacity = 0.5;
//  getBill();
//  addPeople();
//}
