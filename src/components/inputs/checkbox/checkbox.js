import {Component} from '../../../component';

// Checkbox Class
export class Checkbox extends Component {
  constructor(title, name, price) {
    super();
    this._title = title;
    this._name = name;
    this._price = price;
  }

  get template() {
    return `<div class="checkbox">
        <label class="checkbox__label" for="checkbox__input-${this._name}">${this._title} (${this._price} руб.)</label>
        <input class="checkbox__input" id="checkbox__input-${this._name}" name="checkbox__input-${this._name}" type="checkbox" value="${this._price}" data-price="${this._price}">
      </div>`;
  };
}
