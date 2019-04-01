import {Component} from '../../../component';

// Radio Class
export class Radio extends Component {
  constructor(title, name, price, group) {
    super();
    this._title = title;
    this._name = name;
    this._price = price;
    this._group = group;
  }

  get template() {
    return `<div class="radio">
        <label class="radio__label" for="radio__input-${this._name}">${this._title} (${this._price} руб.)</label>
        <input class="radio__input" type="radio" name="radio__input-${this._group}" id="radio__input-${this._name}" value="${this._price}" data-price="${this._price}">
      </div>`;
  };
}
