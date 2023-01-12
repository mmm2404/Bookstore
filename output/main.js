/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mobile.scss":
/*!*************************!*\
  !*** ./src/mobile.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookstore/./src/mobile.scss?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookstore/./src/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _mobile_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile.scss */ \"./src/mobile.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookstore/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _toTop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTop.js */ \"./src/js/toTop.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction pageLoaded() {\r\n\r\n  const container = document.querySelector(\".output\");\r\n  const apiKey = \"AIzaSyDZhaHR0ZJZG0yGQifAm5qN1oRmHWRWKeo\";\r\n  const apiURL = \"https://www.googleapis.com/books/v1/volumes?\"; \r\n  const moreBtn = document.querySelector('.moreBooks');\r\n  const placeHolder = document.createElement('img');\r\n  placeHolder.src = \"./images/placeholder.png\";\r\n\r\n\r\n\r\n//параметры запроса\r\n  let query = {\r\n    q: \" \",\r\n    key: apiKey,\r\n    printType: 'books',\r\n    langRestrict: 'en',\r\n    filter:'paid-ebooks',\r\n    maxResults: '6', \r\n    startIndex: '0'\r\n\r\n   }\r\n\r\nlet params = new URLSearchParams(query)\r\n\r\n\r\n  function sendRequest() {\r\n    \r\n    fetch(`${apiURL}${params.toString()}`)\r\n    \r\n    .then(response => {\r\n\r\n        return response.json();\r\n      })\r\n\r\n      .then(data => {\r\n        handleResponse(data);\r\n\r\n      })\r\n  }\r\n\r\n  function handleResponse(data) {\r\n    \r\n//записываем необходимые данные для карточки\r\n    data.items.forEach((item) => {\r\n      let bookCover = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHolder;\r\n      let bookAuthor = (item.volumeInfo.authors) ? item.volumeInfo.authors : \"Author is unknown\";\r\n      let bookTitle = item.volumeInfo.title;\r\n      let stars =  (item.volumeInfo.averageRating) ? item.volumeInfo.averageRating : \" \";\r\n      let ratings = (item.volumeInfo.ratingsCount) ? item.volumeInfo.ratingsCount + \" \" + \"reviews\": \" \";\r\n      let bookDescription = (item.volumeInfo.description) ? item.volumeInfo.description : \"No description\";\r\n      let bookPrice = (item.saleInfo.listPrice) ? '$' + \" \" + item.saleInfo.listPrice.amount : \" \";\r\n\r\n // определяем процент заполнения звезд рейтинга на основании полученых данных\r\n      const starTotal = 5;\r\n      const starPercentage = (stars / starTotal) * 100;\r\n      const starPercentageRounded = (Math.round(starPercentage / 10) * 10);\r\n     \r\n \r\n    \r\n\r\n   //создаем карточки\r\n      let book = document.createElement(\"div\");\r\n      book.innerHTML = `<div class=\"card\">\r\n      <div class=\"imgContainer\">\r\n      <img class=\"card-image\" loading=\"lazy\" src=\"${bookCover}\"></img>\r\n      <img class=\"imgPreloader\" src=\"./images/Book.gif\"/>\r\n      </div>\r\n      <div style=\"margin-left:36px\">\r\n      <div class=\"card-author\">${bookAuthor}</div>\r\n      <div class=\"card-title\">${bookTitle}</div>\r\n      <div class=\"card-rating\">\r\n      <div class=\"stars-outer\"><div class=\"stars-inner\" style=\"width:${starPercentageRounded}%\"></div></div>${ratings}</div>\r\n      <div class=\"card-description\">${bookDescription}</div>\r\n      <p class=\"card-price\">${bookPrice}</p>\r\n      <button class=\"button addNumber\">BUY NOW</button>\r\n      </div>\r\n      </div>`\r\n\r\n     \r\n      container.appendChild(book);\r\n  \r\n      moreBtn.style.display = \"block\";\r\n\r\n\r\n\r\n       \r\n//добавляем и убираем книгу из корзины покупок\r\n \r\n      function addToCart(event) {\r\n        let cart = document.querySelector('.inCart');\r\n\r\n\r\n        if (event.target.matches('.addNumber')){\r\n          event.preventDefault();\r\n            cart.style.display = \"block\"\r\n            cart.innerText ++; \r\n            event.target.innerText = \"IN THE CART\"\r\n            event.target.classList.remove('addNumber');     \r\n            event.target.classList.add('minus');\r\n                       \r\n       \r\n        }else if(event.target.matches('.minus')){\r\n            cart.innerHTML--;\r\n            event.target.innerText = \"BUY NOW\" \r\n            event.target.classList.remove('minus');\r\n            event.target.classList.add('addNumber');\r\n           \r\n        }\r\n        localStorage.setItem('incart',cart.innerHTML)\r\n      }      \r\n\r\n book.addEventListener('click', addToCart);\r\n  \r\n    })\r\n    \r\n          \r\n  }\r\n\r\n//кнопка загрузки остального контента\r\n\r\nfunction loadMore(){\r\n  \r\n  let startIndex = query.startIndex;\r\n  let maxResults = query.maxResults\r\n  \r\n  if('URLSearchParams' in window){ \r\n    if(startIndex == 0 ){\r\n      startIndex = maxResults;\r\n\r\n    }\r\n   if(startIndex == maxResults){\r\n      query.startIndex = 12;\r\n    }\r\n\r\n    if(startIndex > maxResults){\r\n      query.startIndex += 6;\r\n    }\r\n \r\n\r\n  params.set(\"startIndex\", `${startIndex++}`)\r\n   \r\n  window.history.replaceState({}, '', `${location.pathname}?${params}`);\r\n  sendRequest();\r\n\r\n  }\r\n}\r\n  \r\n  moreBtn.addEventListener('click', loadMore);\r\n\r\n\r\n\r\n//навешиваем событие на кнопки , меняя параметры поиска\r\n  const parameters = [\"subject:Architecture\", \"subject:Art\", \"subject:Biography & Autobiography\",  \"subject:Business\",\r\n  \"subject:Crafts & Hobbies\", \"subject:Drama\", \"subject:Fiction\", \"subject:Cooking\", \"subject:Health & Fitness\", \"subject:History\",\r\n  \"subject:Humor\",\"subject:Poetry\", \"subject:Psychology\", \"subject:Science\", \"subject:Technology\", \"subject:Travel\"]\r\n\r\n  let buttons = document.querySelectorAll('li');\r\n  let lastClicked = buttons[0];\r\n\r\n  for( let i = 0; i < buttons.length; i++ ){\r\n    \r\n   buttons[i].addEventListener('click', function(){\r\n      lastClicked.classList.remove('pressed');\r\n      this.classList.add('pressed'); \r\n      this.firstChild.style.color = '#1C2A39';\r\n      updateDisplay();  \r\n      params.set('q', `${parameters[i++]}`);\r\n      lastClicked = this;\r\n      sendRequest(); \r\n    });\r\n  }\r\n\r\n\r\n\r\n  \r\n\r\n  function updateDisplay() {\r\n    let cart = document.querySelector('.inCart');\r\n    cart.innerHTML = localStorage.getItem('incart');\r\n    while (container.firstChild) {\r\n      container.removeChild(container.firstChild);\r\n     moreBtn.style.display = \"none\";\r\n    }\r\n}\r\n\r\n}\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", pageLoaded);\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\n\n//# sourceURL=webpack://bookstore/./src/js/main.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('*');\r\n\r\n let images = [{url:\"./images/slider1.jpg\"}, {url:\"./images/slider2.jpg\"},{url:\"./images/slider3.jpg\"}];\r\nfunction initSlider(options) {\r\n    if (!images || !images.length) return;\r\n    \r\n      options = options || {\r\n      dots: true,\r\n      autoplay: false\r\n    };\r\n\r\n  let sliderImages = document.querySelector(\".slider__images\");\r\n  let sliderDots = document.querySelector(\".slider__dots\");\r\n  initImages();\r\n  \r\n  if (options.dots) {\r\n    initDots();\r\n  }\r\n  \r\n  if (options.autoplay) {\r\n    initAutoplay();\r\n  }\r\n\r\n  function initImages() {\r\n    images.forEach((image, index) => {\r\n      let imageDiv = `<div class=\"image n${index} ${index === 0? \"active\" : \"\"}\" style=\"background-image:url(${images[index].url});\" data-index=\"${index}\"></div>`;\r\n      sliderImages.innerHTML += imageDiv;\r\n    });\r\n  }\r\n\r\n\r\n  function initDots() {\r\n    images.forEach((image, index) => {\r\n      let dot = `<div class=\"slider__dots-item n${index} ${index === 0? \"active\" : \"\"}\" data-index=\"${index}\"></div>`;\r\n      sliderDots.innerHTML += dot;\r\n    });\r\n    sliderDots.querySelectorAll(\".slider__dots-item\").forEach(dot => {\r\n      dot.addEventListener(\"click\", function() {\r\n        moveSlider(this.dataset.index);\r\n      })\r\n    })\r\n  }\r\n\r\n  function moveSlider(num) {\r\n    sliderImages.querySelector(\".active\").classList.remove(\"active\");\r\n    sliderImages.querySelector(\".n\" + num).classList.add(\"active\");\r\n    if (options.dots) {\r\n      sliderDots.querySelector(\".active\").classList.remove(\"active\");\r\n      sliderDots.querySelector(\".n\" + num).classList.add(\"active\");\r\n    }\r\n    \r\n  }\r\n  function initAutoplay() {\r\n    setInterval(() => {\r\n      let curNumber = +sliderImages.querySelector(\".active\").dataset.index;\r\n      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;\r\n      moveSlider(nextNumber);\r\n    }, options.autoplayInterval);\r\n  }\r\n\r\n\r\n}\r\n\r\n let sliderOptions = {\r\n    dots: true,\r\n    autoplay: true,\r\n    autoplayInterval: 5000\r\n  };\r\n  \r\n document.addEventListener(\"DOMContentLoaded\", function() {\r\n    initSlider(sliderOptions);\r\n  });\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookstore/./src/js/slider.js?");

/***/ }),

/***/ "./src/js/toTop.js":
/*!*************************!*\
  !*** ./src/js/toTop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('*');\r\nfunction scrollTo(to, duration = 700) {\r\n    const\r\n        element = document.scrollingElement || document.documentElement,\r\n        start = element.scrollTop,\r\n        change = to - start,\r\n        startDate = +new Date(),\r\n        // t = настоящее время\r\n        // b = изначальное значение\r\n        // c = изменение значения\r\n        // d = продолжительность\r\n        easeInOutQuad = function (t, b, c, d) {\r\n            t /= d / 2;\r\n            if (t < 1) return c / 2 * t * t + b;\r\n            t--;\r\n            return -c / 2 * (t * (t - 2) - 1) + b;\r\n        },\r\n        animateScroll = function () {\r\n            const currentDate = +new Date();\r\n            const currentTime = currentDate - startDate;\r\n            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));\r\n            if (currentTime < duration) {\r\n                requestAnimationFrame(animateScroll);\r\n            }\r\n            else {\r\n                element.scrollTop = to;\r\n            }\r\n        };\r\n    animateScroll();\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    let btn = document.querySelector('#toTop');\r\n    window.addEventListener('scroll', function () {\r\n        // Если прокрутили дальше 599px, показываем кнопку\r\n        if (pageYOffset > 550) {\r\n            btn.classList.add('show');\r\n            // Иначе прячем\r\n        } else {\r\n            btn.classList.remove('show');\r\n        }\r\n    });\r\n\r\n    // При клике прокручиываем на самый верх\r\n    btn.onclick = function (click) {\r\n        click.preventDefault();\r\n        scrollTo(500, 100);\r\n    }\r\n});\n\n//# sourceURL=webpack://bookstore/./src/js/toTop.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;