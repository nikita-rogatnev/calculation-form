import {Component} from '../../component';

// Form Class
export class Form extends Component {
  constructor() {
    super();
  }

  get template() {
    return `<form class="form">

      <fieldset class="ranges">
        <legend class="ranges__legend">Товары</legend>
        <div class="ranges__container"></div>
      </fieldset>
      
      <fieldset class="checkboxes">
        <legend class="checkboxes__legend">Дополнительные опции</legend>
        <div class="checkboxes__container"></div>
      </fieldset>
  
      <fieldset class="radios">
        <legend class="radios__legend">Способ доставки</legend>
        <div class="radios__container"></div>
      </fieldset>
      
      <fieldset class="texts">
        <legend class="texts__legend">Информация о вас</legend>
        <div class="texts__container"></div>
      </fieldset>
      
      <div class="form__total">
        <p>Итого позиций: <span class="form__quantity">0</span></p>
        <p>Итого цена: <span class="form__price">0</span></p>
      </div>
    
      <button type="submit">Отправить заявку</button>
    </form>`;
  }
}
