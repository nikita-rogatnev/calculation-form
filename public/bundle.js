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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Range Slider
const rangeContainer = document.querySelector(`.ranges`);

const rangeSlider = (name, price, min, max, step = 1, start = 0) => {
  const rangeTemplate = `
  <legend class="range__result">Выбрано: <span class="range__value">${start}</span> шт. по цене ${price}</legend>
	<div class="range__info">
	  <label for="range__input">${name}</label>
    <span>Цена: ${price}</span>
    <b>Итого: <span class="range__total-price">0</span></b>
  </div>
  <div class="range__controls">
    <span class="range__helper">${min}</span>
    <input type="range" name="range__input" class="range__input" min="${min}" max="${max}" step="${step}" value="${start}" data-price="${price}">
    <span class="range__helper">${max}</span>
  </div>
  `;
  const rangeItem = document.createElement(`fieldset`);
  rangeItem.className = `range__item`;
  rangeItem.innerHTML = rangeTemplate;
  return rangeContainer.appendChild(rangeItem);
}; // name, price, min, max, step, start


rangeSlider(`Обои тип 1`, 1000, 0, 100, 1, 0);
rangeSlider(`Обои тип 2`, 1100, 0, 100, 1, 0);
rangeSlider(`Обои тип 3`, 1200, 0, 100, 1, 0); // Dynamic result

const rangeSliders = document.querySelectorAll(`.range__item`);

for (let item of rangeSliders) {
  const rangeInput = item.querySelector(`.range__input`);
  const rangeResult = item.querySelector(`.range__value`);
  const rangePrice = item.querySelector(`.range__total-price`);
  rangeInput.addEventListener('input', function () {
    rangeResult.innerHTML = `${this.value}`;
    rangePrice.innerHTML = `${this.value * this.dataset.price}`;
  });
} // Form


const form = document.querySelector(`.form`);
const quantityElement = document.querySelector(`.form__quantity`);
const priceElement = document.querySelector(`.form__price`);
form.addEventListener('input', function () {
  const formInputs = form.querySelectorAll(`input[data-price]`);

  if (formInputs.checked) {
    console.log(`чето чекнуто`);
  }

  let totalQuantity = 0;
  let totalPrice = 0;

  for (let i = 0; i < formInputs.length; i++) {
    totalQuantity += parseInt(formInputs[i].value);
    totalPrice += parseInt(formInputs[i].dataset.price * formInputs[i].value);
  }

  quantityElement.innerHTML = totalQuantity;
  priceElement.innerHTML = totalPrice;
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map