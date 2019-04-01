import {Form} from './components/form/form';
import {Range} from './components/inputs/range/range';
import {Checkbox} from './components/inputs/checkbox/checkbox';
import {Radio} from './components/inputs/radio/radio';
import {Text} from './components/inputs/text/text';

// RENDER FORM
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

// RENDER RANGE SLIDERS
const rangeSliderContainer = document.querySelector(`.ranges__container`);
rangeSliderContainer.innerHTML = ``;

// @title, @name, @price, @min, @max, @step, @start
const rangeSliderItem = new Range(`Обои`, `product`, 100, 0, 100, 1, 0);
rangeSliderContainer.appendChild(rangeSliderItem.render());

const rangeSliderItem2 = new Range(`Доски`, `product`, 200, 0, 100, 1, 0);
rangeSliderContainer.appendChild(rangeSliderItem2.render());

// Range Sliders Dynamic Result
const rangeInputs = document.querySelectorAll(`.range`);

for (let item of rangeInputs) {
  const rangeInput = item.querySelector(`.range__input`);
  const rangePrice = item.querySelector(`.range__total-price`);

  rangeInput.addEventListener('input', function () {
    rangePrice.innerHTML = `${this.value * this.dataset.price}`;
  });
}

// RENDER CHECKBOXES
const checkboxesContainer = document.querySelector(`.checkboxes__container`);
checkboxesContainer.innerHTML = ``;

// @title, @name, @price
const checkboxItem = new Checkbox(`Доставка`, `additional`, 500);
checkboxesContainer.appendChild(checkboxItem.render());

const checkboxItem2 = new Checkbox(`Упаковка`, `additional`, 200);
checkboxesContainer.appendChild(checkboxItem2.render());

// RENDER RADIOS
const radioContainer = document.querySelector(`.radios__container`);
radioContainer.innerHTML = ``;

// @title, @name, @price, @group
const radioItem = new Radio(`Курьером`, `delivery`, 1000, `delivery-group`);
radioContainer.appendChild(radioItem.render());

const radioItem2 = new Radio(`Самовывоз`, `delivery`, 0, `delivery-group`);
radioContainer.appendChild(radioItem2.render());

// RENDER TEXTS
const textsContainer = document.querySelector(`.texts__container`);
textsContainer.innerHTML = ``;

// @title, @name, @placeholder
const textItem = new Text(`Имя`, `name`, `Введите ваше имя`);
textsContainer.appendChild(textItem.render());
