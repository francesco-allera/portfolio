/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* Dynamically creation of elements in the horizontal and vertical menu */
var sections = document.querySelectorAll('main > section');
var text = "\n    <a href=\"./dist/resume.pdf\" class=\"btn-resume hide\" target=\"_blank\">\n        resume\n    </a>\n    <div class=\"theme-toggle\">\n        <svg class=\"moon\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z\" />\n        </svg>\n        <svg class=\"sun\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13\" />\n        </svg>\n    </div>\n";
for (var i = sections.length - 1; i > 0; i--) {
  var newText = "\n        <div class=\"item-hide\" style=\"transition-delay:".concat((sections.length - i) * 200, "ms;\" >\n            <span class=\"section-index\">0").concat(i, ".</span><a href=\"#").concat(sections[i].id, "\" class=\"header-link\" data-title=\"").concat(sections[i].id, "\">").concat(sections[i].id.replace(/-/g, ' '), "</a>\n        </div>\n    ");
  text = newText + text;
}
document.querySelector('.menu-horizontal-list').innerHTML = document.querySelector('.menu-vertical-list').innerHTML = text;

/* Toggle theme mode */
var darkToggles = document.querySelectorAll('.moon');
var lightToggles = document.querySelectorAll('.sun');
document.querySelectorAll('.theme-toggle').forEach(function (el) {
  el.addEventListener('click', function () {
    if (document.body.dataset.theme !== 'light') document.body.dataset.theme = 'light';else document.body.dataset.theme = 'dark';
    coloringSvgPath(document.body.dataset.theme);
    localStorage.setItem('theme', document.body.dataset.theme);
    darkToggles.forEach( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(t) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              t.classList.add('clicked');
              _context.next = 3;
              return new Promise(function (res, rej) {
                return setTimeout(res, 500);
              });
            case 3:
              t.classList.remove('clicked');
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    lightToggles.forEach( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(t) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              t.classList.add('clicked');
              _context2.next = 3;
              return new Promise(function (res, rej) {
                return setTimeout(res, 500);
              });
            case 3:
              t.classList.remove('clicked');
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});

/* Adding .item-hide on different elements of the sections */
var itemsHero = document.querySelectorAll('#hero > *');
var h2 = document.querySelectorAll('main section h2');
itemsHero.forEach(function (el, i) {
  el.style.cssText += "transition-delay:".concat((i + 1) * 300, "ms;");
  el.classList.add('item-hide');
});
h2.forEach(function (el) {
  el.style.cssText += "transition-delay:300ms;";
  el.classList.add('item-hide');
});

/* Adding index number before every h2 section text */
document.querySelectorAll('main section h2').forEach(function (el, i) {
  el.innerHTML = "<span class=\"section-index\">0".concat(i + 1, ".</span> ").concat(el.innerText);
});

/* First time an element .item-hide appear, an entry effect is activate */
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) entry.target.classList.add('item-show');
  });
});
document.querySelectorAll('.item-hide').forEach(function (el) {
  return observer.observe(el);
});

/* Scrolling page up or down, it checks how to set the header with classes */
var header = document.querySelector('header');
// const h2 already defined
// const h2 = document.querySelectorAll('main section h2');
var menuHorizontalMovers = document.querySelectorAll('.menu-horizontal-list .header-link');
var oldScroll = newScroll = 0;
window.addEventListener('scroll', function () {
  newScroll = window.pageYOffset;
  if (newScroll >= 100) header.classList = newScroll > oldScroll ? 'header-hide' : 'header-show';else header.classList = '';
  oldScroll = newScroll;
  var current = '';
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeightMedian = section.clientHeight / 3;
    if (newScroll > sectionTop - sectionHeightMedian) current = section.getAttribute('id');
  });
  menuHorizontalMovers.forEach(function (mover) {
    mover.classList.remove('on-site');
    if (mover.dataset.title === current) mover.classList.add('on-site');
  });
});

/* Clicking on menu-vertical-burger toggling the menu */
var burger = document.querySelector('.menu-vertical-burger');
var verticalMenu = document.querySelector('.menu-vertical-list');
burger.addEventListener('click', function () {
  burger.classList.toggle('open-burger');
  verticalMenu.classList.toggle('showing-menu');
  document.body.classList.toggle('menu');
});

/* Clicking on an menu-vertical-list elements or logo close the menu */
function closingMenu() {
  document.querySelector('.menu-vertical-burger').classList.remove('open-burger');
  document.querySelector('.menu-vertical-list').classList.remove('showing-menu');
  document.body.classList.remove('menu');
}
document.querySelectorAll('.menu-vertical-list > *').forEach(function (el) {
  el.addEventListener('click', closingMenu);
});
document.querySelector('.logo').addEventListener('click', closingMenu);

/*
Resizing the screen from sm to md, always close the vertical menu.
Resizing the screen always resize the height of the carousel.
*/
window.addEventListener('resize', function () {
  if (window.innerWidth >= 768) closingMenu();
  var maxY = 0;
  document.querySelectorAll('.slider-carousel-el').forEach(function (el) {
    if (el.offsetHeight > maxY) {
      maxY = el.offsetHeight;
      carousel.style.cssText = 'height: ' + maxY + 'px;';
    }
  });
});

/* Creating elements for carousel from data */
var projects = [{
  title: 'boolflix',
  img: 'boolflix.png',
  description: 'Landing page that echoes the style of netflix. Through AJAX calls, API calls with the TMDB server are handled.',
  technologies: ['HTML', 'CSS', 'JS', 'Vue'],
  viewport: 'large screen',
  urlRepo: 'https://github.com/francesco-allera/vue-boolflix',
  urlSite: 'https://francesco-allera.github.io/vue-boolflix/'
}, {
  title: 'tenzies',
  img: 'tenzies.png',
  description: 'Web app created to practice Hooks in React. The user rolls the dice until they are all the same (clicking on a die excludes it from the next roll).',
  technologies: ['HTML', 'CSS', 'JS', 'React'],
  viewport: 'all screens',
  urlRepo: 'https://github.com/francesco-allera/react-tenzies',
  urlSite: 'https://app-react-tenzies.netlify.app/'
}, {
  title: 'digital ocean replica',
  img: 'digital-ocean.png',
  description: 'Front-end replica of Digital Ocean landing page. Project created using Bootstrap\'s container->row->columns system, and developed from a mobile first perspective, so responsive on all devices.',
  technologies: ['HTML', 'CSS'],
  viewport: 'all screens',
  urlRepo: 'https://github.com/francesco-allera/html-css-digitalocean',
  urlSite: 'https://francesco-allera.github.io/html-css-digitalocean/'
}, {
  title: 'boolzapp',
  img: 'boolzapp.png',
  description: 'Reproduction of the WhatsApp web page application. Try chatting with quasi-artificial intelligence.',
  technologies: ['HTML', 'CSS', 'JS', 'Vue'],
  viewport: 'tablet or bigger screen',
  urlRepo: 'https://github.com/francesco-allera/vue-boolzapp',
  urlSite: 'https://francesco-allera.github.io/vue-boolzapp/'
}, {
  title: 'mid term project',
  img: 'mid-term-proj.png',
  description: 'Mid-course project in which, through all the front-end technologies learned, a predefined graphical mockup was to be replicated.',
  technologies: ['HTML', 'CSS', 'SASS', 'JS', 'Vue'],
  viewport: 'large screen',
  urlRepo: 'https://github.com/francesco-allera/proj-html-vuejs',
  urlSite: 'https://francesco-allera.github.io/proj-html-vuejs/'
}, {
  title: 'spotify web replica',
  img: 'spotify.png',
  description: 'Front-end replica of the Spotify Web landing page. Project developed on Flexbox responsive system with a mobile first perspective, so it\'s responsive on all devices.',
  technologies: ['HTML', 'CSS'],
  viewport: 'all screens',
  urlRepo: 'https://github.com/francesco-allera/html-css-spotifyweb',
  urlSite: 'https://francesco-allera.github.io/html-css-spotifyweb/'
}, {
  title: 'my burger',
  img: 'burger.png',
  description: 'First large project developed using JavaScript. Responsive on all devices. Try to order your own fake burger, but watch the price!',
  technologies: ['HTML', 'CSS', 'JS'],
  viewport: 'all screens',
  urlRepo: 'https://github.com/francesco-allera/js-burger',
  urlSite: 'https://francesco-allera.github.io/js-burger/'
}, {
  title: 'hubspot',
  img: 'hubspot.png',
  description: 'First large HTML and CSS based on the Hubspot page.',
  technologies: ['HTML', 'CSS'],
  viewport: 'large screen',
  urlRepo: 'https://github.com/francesco-allera/html-css-hubspot',
  urlSite: 'https://francesco-allera.github.io/html-css-hubspot/'
}];
var carousel = document.querySelector('.slider-carousel');
projects.forEach( /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(el, i) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          carousel.innerHTML += "\n        <div class=\"slider-carousel-el ".concat(i === 0 ? 'active' : '', "\" style=\"z-index:").concat(i === 0 ? 1 : 0, "\">\n            <img src=\"./dist/img/").concat(el.img, "\" alt=\"").concat(el.title, "\">\n            <h3>").concat(el.title, "</h3>\n            <p>").concat(el.description, "</p>\n            <p>\n                <small>Technologies used: ").concat(el.technologies.join(', '), ".</small>\n            </p>\n            <p>See the\n                <a href=\"").concat(el.urlRepo, "\" target=\"_blank\">\n                    <strong><u>code</u></strong>\n                </a>\n                or\n                <a href=\"").concat(el.urlSite, "\" target=\"_blank\">\n                    <strong><u>try it</u></strong>\n                </a>\n                (").concat(el.viewport, ")\n            </p>\n        </div>\n    ");
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());

/* Slider with child one on top each other */
var left = document.querySelector('.slider-left');
var right = document.querySelector('.slider-right');
var projectChild = 1;
function going(_x5) {
  return _going.apply(this, arguments);
}
function _going() {
  _going = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(movement) {
    var active, next;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          projectChild += movement;
          if (projectChild > projects.length) projectChild = 1;
          if (projectChild < 1) projectChild = projects.length;
          active = document.querySelector('.slider-carousel-el.active');
          next = document.querySelector('.slider-carousel-el:nth-child(' + projectChild + ')');
          active.classList.remove('active');
          active.style.cssText = 'z-index: 0;';
          _context5.next = 9;
          return new Promise(function (res, rej) {
            return setTimeout(res, 200);
          });
        case 9:
          next.style.cssText = 'z-index: 1;';
          next.classList.add('active');
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _going.apply(this, arguments);
}
left.addEventListener('click', function () {
  return going(-1);
});
right.addEventListener('click', function () {
  return going(1);
});

/* Automate the slider with going(+1) every 5 seconds, it stops if mouseover it and restarts if mouseout */
var slider = document.querySelector('.slider');
function automateSlide() {
  var timing;
  function timer() {
    timing = setInterval(function () {
      return right.click();
    }, 5000);
  }
  slider.addEventListener('mouseover', function () {
    return clearInterval(timing);
  });
  slider.addEventListener('mouseout', function () {
    return timer();
  });
  going(0);
  timer();
}

/* Launching the automate slider the first time it appears on screen */
var launchingSlider = false;
var observerSlider = new IntersectionObserver(function (sliders) {
  sliders.forEach(function (el) {
    if (el.isIntersecting && !launchingSlider) {
      launchingSlider = true;
      automateSlide();
    }
  });
});
document.querySelectorAll('.slider').forEach(function (el) {
  return observerSlider.observe(el);
});

/*  */
var pointers = document.querySelectorAll('footer .pointer');
var observerFooter = new IntersectionObserver(function (footer) {
  footer.forEach(function (el) {
    if (el.isIntersecting) pointers.forEach(function (el2) {
      return el2.style.cssText = 'opacity:0;visibility:hidden;';
    });
  });
});
document.querySelectorAll('footer').forEach(function (el) {
  return observerFooter.observe(el);
});

/* svg>path setted on color, mouseenter turn their colors back, mouseleave reset the white */
function coloringSvgPath(theme) {
  var color = theme === 'dark' ? '#fff' : '#000';
  document.querySelectorAll('ul.skills-list li').forEach(function (el) {
    var paths = el.querySelectorAll(':is(path, circle)');
    paths.forEach(function (path) {
      return path.style.cssText = 'fill:' + color + ';';
    });
    el.addEventListener('mouseenter', function () {
      return paths.forEach(function (path) {
        return path.style.cssText = '';
      });
    });
    el.addEventListener('mouseleave', function () {
      return paths.forEach(function (path) {
        return path.style.cssText = 'fill:' + color + ';';
      });
    });
  });
}

/* Handling the form-mail */
function validateName(str) {
  var regex = /^[a-zA-Z ]{3,30}$/;
  return regex.test(str);
}
function validateEmail(str) {
  // const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(str);
}
function validating(HTMLel, validation, event) {
  if (validation) {
    event.preventDefault();
    return HTMLel.classList.add('required');
  }
  HTMLel.classList.remove('required');
}
var naming = document.querySelector('.form-mail input[name="name"]');
var email = document.querySelector('.form-mail input[name="email"]');
var subject = document.querySelector('.form-mail input[name="subject"]');
var msg = document.querySelector('.form-mail textarea[name="message"]');
document.querySelector('.form-mail .btn-mail').addEventListener('click', function (e) {
  validating(naming, !validateName(naming.value), e);
  validating(email, !validateEmail(email.value), e);
  validating(subject, subject.value.length <= 5, e);
  validating(msg, msg.value.length <= 10, e);
});

/* Typewriting on #hero (launched on window 'load') */
function typewriting() {
  var intro = document.getElementById('intro');
  var dot = document.getElementById('dot');
  var words = ['Front-End', 'Back-End', 'Full Stack Web Developer'];
  var idxWords = idxStr = 0;
  var writing = setInterval(function () {
    intro.innerText = words[idxWords].slice(0, idxStr);
    if (idxWords === words.length - 1 && idxStr === words[words.length - 1].length) {
      clearInterval(writing);
      setTimeout(function () {
        return dot.innerText = '.';
      }, 250);
    } else {
      if (idxStr === -words[idxWords].length) {
        idxWords++;
        idxStr = 0;
      } else {
        if (idxStr < 0 && idxStr > -words[idxWords].length) idxStr--;
        if (idxStr === words[idxWords].length) idxStr = -1;
        if (idxStr >= 0 && idxStr < words[idxWords].length) idxStr++;
      }
    }
  }, 200);
}

/*
Getting the default or previously choised theme, and apply it.
Opacing #loader, after transition body and #app get displayed, finally #loader removed.
Getting the max height from every carousel child, then the carousel parent get that height.
Coloring the svg path on all .skills-list
After 2 seconds, launching the typewriting() for #hero.
*/
window.addEventListener('load', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var maxY;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        if (localStorage.getItem('theme')) document.body.dataset.theme = localStorage.getItem('theme');else document.body.dataset.theme = 'dark';
        coloringSvgPath(document.body.dataset.theme);
        document.getElementById('loader').style.cssText = 'opacity:0;';
        _context4.next = 5;
        return new Promise(function (res, rej) {
          return setTimeout(res, 250);
        });
      case 5:
        document.body.classList.remove('menu');
        document.getElementById('app').style.cssText = '';
        document.getElementById('loader').remove();
        maxY = 0;
        document.querySelectorAll('.slider-carousel-el').forEach(function (el) {
          if (el.offsetHeight > maxY) {
            maxY = el.offsetHeight;
            carousel.style.cssText = 'height: ' + maxY + 'px;';
          }
        });
        _context4.next = 12;
        return new Promise(function (res, rej) {
          return setTimeout(res, 2000);
        });
      case 12:
        typewriting();
      case 13:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
})));

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/script": 0,
/******/ 			"dist/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/style"], () => (__webpack_require__("./src/script.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;