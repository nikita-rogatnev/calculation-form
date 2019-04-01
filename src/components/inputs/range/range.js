import {Component} from '../../../component';

// Range Class
export class Range extends Component {
  constructor(title, name, price, min, max, step, start) {
    super();
    this._title = title;
    this._name = name;
    this._price = price;
    this._min = min;
    this._max = max;
    this._step = step;
    this._start = start;
  }

  get template() {
    return `<div class="range">
      <label class="range__label" for="range__input-${this._name}">${this._title} (${this._price} руб. / шт.)</label>
      <b class="range__total-price">0</b>
      <div class="range__controls">
        <span class="range__helper">${this._min}</span>
        <input class="range__input" id="range__input-${this._name}" name="range__input-${this._name}" type="range" min="${this._min}" max="${this._max}" step="${this._step}" value="${this._start}" data-price="${this._price}">
        <span class="range__helper">${this._max}</span>
      </div>
    </div>`;
  };
}
