import {Component} from '../../../component';

// Text Class
export class Text extends Component {
  constructor(title, name, placeholder) {
    super();
    this._title = title;
    this._name = name;
    this._placeholder = placeholder;
  }

  get template() {
    return `<div class="text">
      <label class="text__label" for="text__input-${this._name}">${this._title}</label>
      <input class="text__input" id="text__input-${this._name}" name="text__input-${this._name}" type="text" placeholder="${this._placeholder}">
    </div>`;
  };
}
