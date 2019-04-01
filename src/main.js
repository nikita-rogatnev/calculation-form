// Range Slider
const rangeContainer = document.querySelector(`.ranges`);

const rangeSlider = (name, price, min, max, step = 1, start = 0) => {
  const rangeTemplate = `
  <legend class="range__result">Выбрано: <span class="range__value">${start}</span> шт. по цене ${price}</legend>
	<div class="range__info">
	  <label for="range__input">${name}</label>
    <span>Цена: ${price}</span>
    <b>Итого: <span class="range__total-price">0</span></b>
  </div>
  <div class="range__controls">
    <span class="range__helper">${min}</span>
    <input type="range" name="range__input" class="range__input" min="${min}" max="${max}" step="${step}" value="${start}" data-price="${price}">
    <span class="range__helper">${max}</span>
  </div>
  `;

  const rangeItem = document.createElement(`fieldset`);
  rangeItem.className = `range__item`;
  rangeItem.innerHTML = rangeTemplate;

  return rangeContainer.appendChild(rangeItem);
};

// name, price, min, max, step, start
rangeSlider(`Обои тип 1`, 1000, 0, 100, 1, 0);
rangeSlider(`Обои тип 2`, 1100, 0, 100, 1, 0);
rangeSlider(`Обои тип 3`, 1200, 0, 100, 1, 0);

// Dynamic result
const rangeSliders = document.querySelectorAll(`.range__item`);

for (let item of rangeSliders) {
  const rangeInput = item.querySelector(`.range__input`);
  const rangeResult = item.querySelector(`.range__value`);
  const rangePrice = item.querySelector(`.range__total-price`);

  rangeInput.addEventListener('input', function () {
    rangeResult.innerHTML = `${this.value}`;
    rangePrice.innerHTML = `${this.value * this.dataset.price}`;
  });
}

// Form
const form = document.querySelector(`.form`);
const quantityElement = document.querySelector(`.form__quantity`);
const priceElement = document.querySelector(`.form__price`);

form.addEventListener('input', function () {
  const formInputs = form.querySelectorAll(`input[data-price]`);

  if (formInputs.checked) {
    console.log(`чето чекнуто`);
  }

  let totalQuantity = 0;
  let totalPrice = 0;

  for (let i = 0; i < formInputs.length; i++) {
    totalQuantity += parseInt(formInputs[i].value);
    totalPrice += parseInt(formInputs[i].dataset.price * formInputs[i].value);
  }

  quantityElement.innerHTML = totalQuantity;
  priceElement.innerHTML = totalPrice;
});
