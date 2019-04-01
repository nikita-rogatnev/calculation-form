import {Component} from '../../component';

// Range Slider Class
export class RangeSlider extends Component {
  constructor(name, price, min, max, step, start) {
    super();
    this._name = name;
    this._price = price;
    this._min = min;
    this._max = max;
    this._step = step;
    this._start = start;
  }

  get template() {
    return `<section class="range__item">
    <header class="range__info">
      <ul>
        <li>Цена: ${this._price}</li>
        <li>Итого: <b class="range__total-price">0</b></li>
      </ul>
    </header>
    <label>${this._name}</label>
    <div class="range__controls">
      <span class="range__helper">${this._min}</span>
      <input type="range" name="range__input" class="range__input" min="${this._min}" max="${this._max}" step="${this._step}" value="${this._start}" data-price="${this._price}">
      <span class="range__helper">${this._max}</span>
    </div>
  </section>`;
  };
}
