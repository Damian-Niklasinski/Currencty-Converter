{


  const calculateResult = () => {

    const plnElement = document.querySelector(".js-plnValue");
    const eurElement = document.querySelector(".js-eurValue");
    const usdElement = document.querySelector(".js-usdValue");
    const gbpElement = document.querySelector(".js-gbpValue");

    const pln = plnElement.value;
    const eurRate = pln / 4.57;
    const usdRate = pln / 3.82;
    const gbpRate = pln / 5.26;
    eurElement.innerText = eurRate.toFixed(2) + " €";
    usdElement.innerText = usdRate.toFixed(2) + " $";
    gbpElement.innerText = gbpRate.toFixed(2) + " £";

  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      calculateResult();

    });
  };

  init();

};