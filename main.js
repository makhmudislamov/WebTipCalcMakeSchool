// Your scripts here
// declaring consts
const billAmount = document.getElementById("amount");
const tipPercentage = document.getElementById("percent");
const splitNumber = document.getElementById("split");
const calculate = document.getElementById("calculate");
const showTip = document.getElementById("tip");
const totalAmount = document.getElementById("total");
const eachTipAmount = document.getElementById("eachTip");
const eachTotalAmount = document.getElementById("eachTotal");


// calculation func
let calculation = 0;
let calculateForEach = 0;

calculate.onclick = (e) => {

const amount = Number(billAmount.value);
const tip = Number(tipPercentage.value);
const split = Number(splitNumber.value);

const percentage = amount * tip / 100;

calculation = amount + percentage;
calculateTipForEach = percentage / split;
calculateTotalForEach = calculation / split;
totalAmount.innerHTML = '$' + calculation.toFixed(2);
showTip.innerHTML = '$' + percentage.toFixed(2);

eachTipAmount.innerHTML = "$" + calculateTipForEach.toFixed(2);
eachTotalAmount.innerHTML = "$" + calculateTotalForEach.toFixed(2);
}