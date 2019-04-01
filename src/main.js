import {Form} from './components/form/form';
import {RangeSlider} from './components/range-slider/range-slider';

// Render Form
const formContainer = document.querySelector(`.app`);
formContainer.innerHTML = ``;
const formItem = new Form();
formContainer.appendChild(formItem.render());

formContainer.addEventListener('input', function () {
  const formInputs = document.querySelectorAll(`input[data-price]`);
  let totalQuantity = 0;
  let totalPrice = 0;

  for (let i = 0; i < formInputs.length; i++) {
    totalQuantity += parseInt(formInputs[i].value);
    totalPrice += parseInt(formInputs[i].dataset.price * formInputs[i].value);
  }

  document.querySelector(`.form__quantity`).innerHTML = totalQuantity.toString();
  document.querySelector(`.form__price`).innerHTML = totalPrice.toString();
});

// Render Range Sliders
const rangeSliderContainer = document.querySelector(`.ranges__container`);
rangeSliderContainer.innerHTML = ``;

// @name, @price, @min, @max, @step, @start
const rangeSliderItem = new RangeSlider(`Обои`, 100, 0, 100, 1, 0);
rangeSliderContainer.appendChild(rangeSliderItem.render());

const rangeSliderItem2 = new RangeSlider(`Доски`, 200, 0, 100, 1, 0);
rangeSliderContainer.appendChild(rangeSliderItem2.render());

// Range Sliders Dynamic Result
const rangeSliders = document.querySelectorAll(`.range__item`);

for (let item of rangeSliders) {
  const rangeInput = item.querySelector(`.range__input`);
  const rangePrice = item.querySelector(`.range__total-price`);

  rangeInput.addEventListener('input', function () {
    rangePrice.innerHTML = `${this.value * this.dataset.price}`;
  });
}
