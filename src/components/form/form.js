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
    
<!--      <fieldset class="options">-->
<!--        <legend class="options__legend">Дополнительно</legend>-->
<!--        <input type="checkbox" name="delivery" id="delivery" value="100" data-price="666">-->
<!--        <label for="delivery">Доставка</label>-->
<!--        <input type="checkbox" name="delivery" id="package" value="200" data-price="200">-->
<!--        <label for="package">Упоковка</label>-->
<!--      </fieldset>-->
<!--    -->
      <div class="form__total">
        <p>Итого позиций: <span class="form__quantity">0</span></p>
        <p>Итого цена: <span class="form__price">0</span></p>
      </div>
    
      <button type="submit">Submit</button>
    </form>`;
  }
}
