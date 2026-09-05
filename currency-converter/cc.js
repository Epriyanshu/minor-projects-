const BASE_URL = "https://open.er-api.com/v6/latest";
const dropdowns = document.querySelectorAll(".dropdown select");
const formCurr = document.querySelector("form select");
const ToCurr = document.querySelector(" select[name='To']");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");


const imput = document.getElementById('amount')
  .addEventListener('keydown', function (e) {
    if ((e.key >= '0' && e.key <= '9') ||
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'Tab' ||  //for block non numeric key 
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === '.') { return; }
    e.preventDefault();
  });


for (let select of dropdowns) {
  for (let currCode in CountryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "form" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "To" && currCode === "INR") {
      newOption.selected = true;
    }

    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });

}

const updateFlag = (element) => {
  let currCode = element.value;
  // console.log (currCode);
  let CountryCode = CountryList[currCode];
  let newSrc = `https://flagcdn.com/48x36/${CountryCode.toLowerCase()}.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}
const updateExchangeRate = async () => {
  // btn.addEventListener("click", async (evt) => {
  //   evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  // console.log(amtVal);
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  // console.log( fromCurr.value , toCurr.value);
  const URL = `${BASE_URL}/${formCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.rates[ToCurr.value];
  let finalAmount = Number(amtVal) * rate;
  msg.innerText = `${amtVal} ${formCurr.value} =  ${finalAmount} ${ToCurr.value}`;
};
btn.addEventListener("click", (evt) => {
  evt.preventDefault()
  updateExchangeRate();
});
window.addEventListener("load", () => {
  updateExchangeRate()
});
