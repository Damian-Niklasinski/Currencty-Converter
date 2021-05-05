let plnElement = document.querySelector(".js-plnValue");
let eurElement = document.querySelector(".js-eurValue");
let usdElement = document.querySelector(".js-usdValue");
let gbpElement = document.querySelector(".js-gbpValue");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let pln = plnElement.value;
  let eurRate = pln / 4.57;
  let usdRate = pln / 3.82;
  let gbpRate = pln / 5.26;
  eurElement.innerText = eurRate.toFixed(2) + " €";
  usdElement.innerText = usdRate.toFixed(2) + " $";
  gbpElement.innerText = gbpRate.toFixed(2) + " £";

});
