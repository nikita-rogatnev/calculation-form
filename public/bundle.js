/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");

class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate BaseComponent, only concrete one.`);
    }

    this._element = null;
    this._state = {// Component state
    };
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  render() {
    this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.template);
    this.bind();
    return this._element;
  }

  bind() {}

  unbind() {}

}

/***/ }),

/***/ "./src/components/form/form.js":
/*!*************************************!*\
  !*** ./src/components/form/form.js ***!
  \*************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component */ "./src/component.js");
 // Form Class

class Form extends _component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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

/***/ }),

/***/ "./src/components/range-slider/range-slider.js":
/*!*****************************************************!*\
  !*** ./src/components/range-slider/range-slider.js ***!
  \*****************************************************/
/*! exports provided: RangeSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSlider", function() { return RangeSlider; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component */ "./src/component.js");
 // Range Slider Class

class RangeSlider extends _component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
  }

}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form/form */ "./src/components/form/form.js");
/* harmony import */ var _components_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/range-slider/range-slider */ "./src/components/range-slider/range-slider.js");

 // Render Form

const formContainer = document.querySelector(`.app`);
formContainer.innerHTML = ``;
const formItem = new _components_form_form__WEBPACK_IMPORTED_MODULE_0__["Form"]();
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
}); // Render Range Sliders

const rangeSliderContainer = document.querySelector(`.ranges__container`);
rangeSliderContainer.innerHTML = ``; // @name, @price, @min, @max, @step, @start

const rangeSliderItem = new _components_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_1__["RangeSlider"](`Обои`, 100, 0, 100, 1, 0);
rangeSliderContainer.appendChild(rangeSliderItem.render());
const rangeSliderItem2 = new _components_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_1__["RangeSlider"](`Доски`, 200, 0, 100, 1, 0);
rangeSliderContainer.appendChild(rangeSliderItem2.render()); // Range Sliders Dynamic Result

const rangeSliders = document.querySelectorAll(`.range__item`);

for (let item of rangeSliders) {
  const rangeInput = item.querySelector(`.range__input`);
  const rangePrice = item.querySelector(`.range__total-price`);
  rangeInput.addEventListener('input', function () {
    rangePrice.innerHTML = `${this.value * this.dataset.price}`;
  });
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
// Create Element
const createElement = template => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map