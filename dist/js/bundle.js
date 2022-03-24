(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getApi = _interopRequireDefault(require("../getApi"));

var _renderList = _interopRequireDefault(require("../utility/renderList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var searchCountry = function searchCountry() {
  var searchFild = document.querySelector('.search-input');
  var countriesList = document.querySelector('.countries');
  searchFild.addEventListener('input', function (e) {
    var currentEleValue = "name/" + e.target.value.toLowerCase();
    countriesList.innerHTML = '';

    if (e.target.value) {
      (0, _getApi["default"])(currentEleValue, _renderList["default"]);
    }

    if (e.target.value == '') {
      (0, _getApi["default"])("all", _renderList["default"]);
    }
  });
};

var _default = searchCountry;
exports["default"] = _default;

},{"../getApi":3,"../utility/renderList":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getApi = _interopRequireDefault(require("../getApi"));

var _renderList = _interopRequireDefault(require("../utility/renderList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getRegion = function getRegion() {
  var regionEle = document.getElementById('regionId');
  var countriesList = document.querySelector('.countries');
  regionEle.addEventListener('change', function (e) {
    var currentEleValue = e.target.value;
    var newFormatedUrl = "region/" + currentEleValue;
    countriesList.innerHTML = '';
    (0, _getApi["default"])(newFormatedUrl, _renderList["default"]);
  });
};

var _default = getRegion;
exports["default"] = _default;

},{"../getApi":3,"../utility/renderList":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getApi = function getApi(parametar1, renderData) {
  var endpoint = "https://restcountries.com/v3.1/" + parametar1;
  var request = new XMLHttpRequest();

  if (!request) {
    console.log('ne radi');
  }

  request.open("GET", endpoint, true);

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      renderData(JSON.parse(this.response));
    } else {
      console.log("nije ok");
    }
  };

  request.send();
};

var _default = getApi;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _getApi = _interopRequireDefault(require("./getApi"));

var _selectRegion = _interopRequireDefault(require("./component/selectRegion"));

var _searchCountry = _interopRequireDefault(require("./component/searchCountry"));

var _renderList = _interopRequireDefault(require("./utility/renderList"));

var _clearDetailPage = _interopRequireDefault(require("./utility/clearDetailPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _getApi["default"])("all", _renderList["default"]);
(0, _selectRegion["default"])();
(0, _searchCountry["default"])();
var checkbox = document.getElementById('switchCheckbox');
var wraperModal = document.querySelector('.wraper-modal');
var btnBack = document.querySelector('.btn-back');
var loader = document.querySelector('.loader');
/*------Theme switcher------*/

checkbox.addEventListener('change', function () {
  document.body.classList.toggle('dark');
});
btnBack.addEventListener('click', function () {
  wraperModal.style.display = 'none';
  loader.style.display = 'flex';
  (0, _clearDetailPage["default"])();
}); // Kada se obrisu sva slova da se ponovo ispise lista sa zastavama-
// Dugme za back da se sredi,-
// Postaviti kursor za list item, back dugme, select-
// Napraviti layout za list item 1 do 768, 2 do 992, 3 do 1200, 4 sve preko

},{"./component/searchCountry":1,"./component/selectRegion":2,"./getApi":3,"./utility/clearDetailPage":5,"./utility/renderList":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var clearDetailPage = function clearDetailPage() {
  var countryFlag = document.querySelector('.single-country__flag');
  var countryName = document.querySelector('.single-country__info-text');
  var nativeName = document.querySelector('.info-desc__text-native-name');
  var countryPopulation = document.querySelector('.info-desc__text-population');
  var countryRegion = document.querySelector('.info-desc__text-region');
  var countrySubRegion = document.querySelector('.info-desc__text-sub-region');
  var countryCapital = document.querySelector('.info-desc__text-capital');
  var countryDomain = document.querySelector('.info-desc__text-domain');
  var countryCurrencies = document.querySelector('.info-desc__text-currencies');
  var countryLanguages = document.querySelector('.info-desc__text-languages');
  var countryBorders = document.querySelector('.country-borders__text');
  countryFlag.style.backgroundImage = '';
  countryName.innerHTML = '';
  nativeName.innerHTML = 'Native Name: ';
  countryPopulation.innerHTML = 'Population: ';
  countryRegion.innerHTML = 'Region: ';
  countrySubRegion.innerHTML = 'Sub Region: ';
  countryCapital.innerHTML = 'Capital: ';
  countryDomain.innerHTML = 'Domain: ';
  countryCurrencies.innerHTML = 'Currencies: ';
  countryLanguages.innerHTML = 'Languages: ';
  countryBorders.innerHTML = 'Borders: ';
};

var _default = clearDetailPage;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var populateDetailPage = function populateDetailPage(detail) {
  var countryFlag = document.querySelector('.single-country__flag');
  var countryName = document.querySelector('.single-country__info-text');
  var nativeName = document.querySelector('.info-desc__text-native-name');
  var countryPopulation = document.querySelector('.info-desc__text-population');
  var countryRegion = document.querySelector('.info-desc__text-region');
  var countrySubRegion = document.querySelector('.info-desc__text-sub-region');
  var countryCapital = document.querySelector('.info-desc__text-capital');
  var countryDomain = document.querySelector('.info-desc__text-domain');
  var countryCurrencies = document.querySelector('.info-desc__text-currencies');
  var countryLanguages = document.querySelector('.info-desc__text-languages');
  var countryBorders = document.querySelector('.country-borders__text');
  countryFlag.style.backgroundImage = "url(" + detail.flags.svg + ")";
  countryName.innerHTML += detail.name.official;
  nativeName.innerHTML += detail.name.nativeName[Object.keys(detail.name.nativeName)[0]].official;
  countryPopulation.innerHTML += detail.population;
  countryRegion.innerHTML += detail.region;
  countrySubRegion.innerHTML += detail.subregion;
  countryCapital.innerHTML += detail.capital;
  countryDomain.innerHTML += detail.tld ? detail.tld[Object.keys(detail.tld)[0]] : '/';
  countryCurrencies.innerHTML += detail.currencies[Object.keys(detail.currencies)[0]].name;
  countryLanguages.innerHTML += detail.languages[Object.keys(detail.languages)[0]];
  countryBorders.innerHTML += detail.borders;
};

var _default = populateDetailPage;
exports["default"] = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _populateDetailPage = _interopRequireDefault(require("./populateDetailPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderData = function renderData(data) {
  var countriesList = document.querySelector('.countries');
  var wraperModal = document.querySelector('.wraper-modal');
  var loader = document.querySelector('.loader');

  var _loop = function _loop(i) {
    if (data[i]) {
      var countriesListItem = document.createElement('li');
      countriesListItem.classList.add('countries__box');
      countriesListItem.setAttribute('id', data[i].name.official.toLowerCase());
      var countryFlag = document.createElement('div');
      countryFlag.classList.add('countries__box-flags');
      var countryFlagImg = document.createElement('div');
      countryFlagImg.classList.add('countries__box-flags-img');
      countryFlagImg.style.backgroundImage = "url(" + data[i].flags.svg + ")";
      var countryContent = document.createElement('div');
      countryContent.classList.add('countries__box-text');
      var countryName = document.createElement('p');
      countryName.classList.add('box-text__country-name', 'js-name');
      countryName.innerHTML = data[i].name.official;
      var countryPopulation = document.createElement('p');
      countryPopulation.classList.add('box-text__country-info', 'js-population');
      countryPopulation.innerHTML = 'Population:  ' + data[i].population;
      var countryRegion = document.createElement('p');
      countryRegion.classList.add('box-text__country-info', 'js-region');
      countryRegion.innerHTML = 'Region:  ' + data[i].region;
      var countryCapital = document.createElement('p');
      countryCapital.classList.add('box-text__country-info', 'js-capital');
      countryCapital.innerHTML = 'Capital:  ' + data[i].capital;
      countryContent.appendChild(countryName);
      countryContent.appendChild(countryPopulation);
      countryContent.appendChild(countryRegion);
      countryContent.appendChild(countryCapital);
      countriesListItem.appendChild(countryFlag);
      countriesListItem.appendChild(countryFlagImg);
      countryFlag.appendChild(countryFlagImg);
      countriesListItem.appendChild(countryContent);
      countriesList.appendChild(countriesListItem);
      countriesListItem.addEventListener('click', function (e) {
        wraperModal.style.display = 'block';
        (0, _populateDetailPage["default"])(data[i]);
        clearTimeout(timeout);
        var timeout = setTimeout(function () {
          loader.style.display = 'none';
        }, 1000);
      });
    }
  };

  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
};

var _default = renderData;
exports["default"] = _default;

},{"./populateDetailPage":6}]},{},[4]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2dldEFwaSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2dldEFwaVwiKSk7XG5cbnZhciBfcmVuZGVyTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxpdHkvcmVuZGVyTGlzdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgc2VhcmNoQ291bnRyeSA9IGZ1bmN0aW9uIHNlYXJjaENvdW50cnkoKSB7XG4gIHZhciBzZWFyY2hGaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuICB2YXIgY291bnRyaWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXMnKTtcbiAgc2VhcmNoRmlsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGN1cnJlbnRFbGVWYWx1ZSA9IFwibmFtZS9cIiArIGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgY291bnRyaWVzTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgKDAsIF9nZXRBcGlbXCJkZWZhdWx0XCJdKShjdXJyZW50RWxlVmFsdWUsIF9yZW5kZXJMaXN0W1wiZGVmYXVsdFwiXSk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09ICcnKSB7XG4gICAgICAoMCwgX2dldEFwaVtcImRlZmF1bHRcIl0pKFwiYWxsXCIsIF9yZW5kZXJMaXN0W1wiZGVmYXVsdFwiXSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHNlYXJjaENvdW50cnk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4uL2dldEFwaVwiOjMsXCIuLi91dGlsaXR5L3JlbmRlckxpc3RcIjo3fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2dldEFwaSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2dldEFwaVwiKSk7XG5cbnZhciBfcmVuZGVyTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxpdHkvcmVuZGVyTGlzdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgZ2V0UmVnaW9uID0gZnVuY3Rpb24gZ2V0UmVnaW9uKCkge1xuICB2YXIgcmVnaW9uRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lvbklkJyk7XG4gIHZhciBjb3VudHJpZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cmllcycpO1xuICByZWdpb25FbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY3VycmVudEVsZVZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdmFyIG5ld0Zvcm1hdGVkVXJsID0gXCJyZWdpb24vXCIgKyBjdXJyZW50RWxlVmFsdWU7XG4gICAgY291bnRyaWVzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAoMCwgX2dldEFwaVtcImRlZmF1bHRcIl0pKG5ld0Zvcm1hdGVkVXJsLCBfcmVuZGVyTGlzdFtcImRlZmF1bHRcIl0pO1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGdldFJlZ2lvbjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi4vZ2V0QXBpXCI6MyxcIi4uL3V0aWxpdHkvcmVuZGVyTGlzdFwiOjd9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBnZXRBcGkgPSBmdW5jdGlvbiBnZXRBcGkocGFyYW1ldGFyMSwgcmVuZGVyRGF0YSkge1xuICB2YXIgZW5kcG9pbnQgPSBcImh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9cIiArIHBhcmFtZXRhcjE7XG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgY29uc29sZS5sb2coJ25lIHJhZGknKTtcbiAgfVxuXG4gIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBlbmRwb2ludCwgdHJ1ZSk7XG5cbiAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgcmVuZGVyRGF0YShKU09OLnBhcnNlKHRoaXMucmVzcG9uc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJuaWplIG9rXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXF1ZXN0LnNlbmQoKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGdldEFwaTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZ2V0QXBpID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXRBcGlcIikpO1xuXG52YXIgX3NlbGVjdFJlZ2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50L3NlbGVjdFJlZ2lvblwiKSk7XG5cbnZhciBfc2VhcmNoQ291bnRyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50L3NlYXJjaENvdW50cnlcIikpO1xuXG52YXIgX3JlbmRlckxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxpdHkvcmVuZGVyTGlzdFwiKSk7XG5cbnZhciBfY2xlYXJEZXRhaWxQYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsaXR5L2NsZWFyRGV0YWlsUGFnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4oMCwgX2dldEFwaVtcImRlZmF1bHRcIl0pKFwiYWxsXCIsIF9yZW5kZXJMaXN0W1wiZGVmYXVsdFwiXSk7XG4oMCwgX3NlbGVjdFJlZ2lvbltcImRlZmF1bHRcIl0pKCk7XG4oMCwgX3NlYXJjaENvdW50cnlbXCJkZWZhdWx0XCJdKSgpO1xudmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaENoZWNrYm94Jyk7XG52YXIgd3JhcGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcGVyLW1vZGFsJyk7XG52YXIgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYmFjaycpO1xudmFyIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcbi8qLS0tLS0tVGhlbWUgc3dpdGNoZXItLS0tLS0qL1xuXG5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xufSk7XG5idG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB3cmFwZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgKDAsIF9jbGVhckRldGFpbFBhZ2VbXCJkZWZhdWx0XCJdKSgpO1xufSk7IC8vIEthZGEgc2Ugb2JyaXN1IHN2YSBzbG92YSBkYSBzZSBwb25vdm8gaXNwaXNlIGxpc3RhIHNhIHphc3RhdmFtYS1cbi8vIER1Z21lIHphIGJhY2sgZGEgc2Ugc3JlZGksLVxuLy8gUG9zdGF2aXRpIGt1cnNvciB6YSBsaXN0IGl0ZW0sIGJhY2sgZHVnbWUsIHNlbGVjdC1cbi8vIE5hcHJhdml0aSBsYXlvdXQgemEgbGlzdCBpdGVtIDEgZG8gNzY4LCAyIGRvIDk5MiwgMyBkbyAxMjAwLCA0IHN2ZSBwcmVrb1xuXG59LHtcIi4vY29tcG9uZW50L3NlYXJjaENvdW50cnlcIjoxLFwiLi9jb21wb25lbnQvc2VsZWN0UmVnaW9uXCI6MixcIi4vZ2V0QXBpXCI6MyxcIi4vdXRpbGl0eS9jbGVhckRldGFpbFBhZ2VcIjo1LFwiLi91dGlsaXR5L3JlbmRlckxpc3RcIjo3fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgY2xlYXJEZXRhaWxQYWdlID0gZnVuY3Rpb24gY2xlYXJEZXRhaWxQYWdlKCkge1xuICB2YXIgY291bnRyeUZsYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLWNvdW50cnlfX2ZsYWcnKTtcbiAgdmFyIGNvdW50cnlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1jb3VudHJ5X19pbmZvLXRleHQnKTtcbiAgdmFyIG5hdGl2ZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kZXNjX190ZXh0LW5hdGl2ZS1uYW1lJyk7XG4gIHZhciBjb3VudHJ5UG9wdWxhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlc2NfX3RleHQtcG9wdWxhdGlvbicpO1xuICB2YXIgY291bnRyeVJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlc2NfX3RleHQtcmVnaW9uJyk7XG4gIHZhciBjb3VudHJ5U3ViUmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGVzY19fdGV4dC1zdWItcmVnaW9uJyk7XG4gIHZhciBjb3VudHJ5Q2FwaXRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlc2NfX3RleHQtY2FwaXRhbCcpO1xuICB2YXIgY291bnRyeURvbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlc2NfX3RleHQtZG9tYWluJyk7XG4gIHZhciBjb3VudHJ5Q3VycmVuY2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlc2NfX3RleHQtY3VycmVuY2llcycpO1xuICB2YXIgY291bnRyeUxhbmd1YWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlc2NfX3RleHQtbGFuZ3VhZ2VzJyk7XG4gIHZhciBjb3VudHJ5Qm9yZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5LWJvcmRlcnNfX3RleHQnKTtcbiAgY291bnRyeUZsYWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gIGNvdW50cnlOYW1lLmlubmVySFRNTCA9ICcnO1xuICBuYXRpdmVOYW1lLmlubmVySFRNTCA9ICdOYXRpdmUgTmFtZTogJztcbiAgY291bnRyeVBvcHVsYXRpb24uaW5uZXJIVE1MID0gJ1BvcHVsYXRpb246ICc7XG4gIGNvdW50cnlSZWdpb24uaW5uZXJIVE1MID0gJ1JlZ2lvbjogJztcbiAgY291bnRyeVN1YlJlZ2lvbi5pbm5lckhUTUwgPSAnU3ViIFJlZ2lvbjogJztcbiAgY291bnRyeUNhcGl0YWwuaW5uZXJIVE1MID0gJ0NhcGl0YWw6ICc7XG4gIGNvdW50cnlEb21haW4uaW5uZXJIVE1MID0gJ0RvbWFpbjogJztcbiAgY291bnRyeUN1cnJlbmNpZXMuaW5uZXJIVE1MID0gJ0N1cnJlbmNpZXM6ICc7XG4gIGNvdW50cnlMYW5ndWFnZXMuaW5uZXJIVE1MID0gJ0xhbmd1YWdlczogJztcbiAgY291bnRyeUJvcmRlcnMuaW5uZXJIVE1MID0gJ0JvcmRlcnM6ICc7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBjbGVhckRldGFpbFBhZ2U7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHt9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBwb3B1bGF0ZURldGFpbFBhZ2UgPSBmdW5jdGlvbiBwb3B1bGF0ZURldGFpbFBhZ2UoZGV0YWlsKSB7XG4gIHZhciBjb3VudHJ5RmxhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtY291bnRyeV9fZmxhZycpO1xuICB2YXIgY291bnRyeU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLWNvdW50cnlfX2luZm8tdGV4dCcpO1xuICB2YXIgbmF0aXZlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlc2NfX3RleHQtbmF0aXZlLW5hbWUnKTtcbiAgdmFyIGNvdW50cnlQb3B1bGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGVzY19fdGV4dC1wb3B1bGF0aW9uJyk7XG4gIHZhciBjb3VudHJ5UmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGVzY19fdGV4dC1yZWdpb24nKTtcbiAgdmFyIGNvdW50cnlTdWJSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kZXNjX190ZXh0LXN1Yi1yZWdpb24nKTtcbiAgdmFyIGNvdW50cnlDYXBpdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGVzY19fdGV4dC1jYXBpdGFsJyk7XG4gIHZhciBjb3VudHJ5RG9tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGVzY19fdGV4dC1kb21haW4nKTtcbiAgdmFyIGNvdW50cnlDdXJyZW5jaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGVzY19fdGV4dC1jdXJyZW5jaWVzJyk7XG4gIHZhciBjb3VudHJ5TGFuZ3VhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGVzY19fdGV4dC1sYW5ndWFnZXMnKTtcbiAgdmFyIGNvdW50cnlCb3JkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnktYm9yZGVyc19fdGV4dCcpO1xuICBjb3VudHJ5RmxhZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIGRldGFpbC5mbGFncy5zdmcgKyBcIilcIjtcbiAgY291bnRyeU5hbWUuaW5uZXJIVE1MICs9IGRldGFpbC5uYW1lLm9mZmljaWFsO1xuICBuYXRpdmVOYW1lLmlubmVySFRNTCArPSBkZXRhaWwubmFtZS5uYXRpdmVOYW1lW09iamVjdC5rZXlzKGRldGFpbC5uYW1lLm5hdGl2ZU5hbWUpWzBdXS5vZmZpY2lhbDtcbiAgY291bnRyeVBvcHVsYXRpb24uaW5uZXJIVE1MICs9IGRldGFpbC5wb3B1bGF0aW9uO1xuICBjb3VudHJ5UmVnaW9uLmlubmVySFRNTCArPSBkZXRhaWwucmVnaW9uO1xuICBjb3VudHJ5U3ViUmVnaW9uLmlubmVySFRNTCArPSBkZXRhaWwuc3VicmVnaW9uO1xuICBjb3VudHJ5Q2FwaXRhbC5pbm5lckhUTUwgKz0gZGV0YWlsLmNhcGl0YWw7XG4gIGNvdW50cnlEb21haW4uaW5uZXJIVE1MICs9IGRldGFpbC50bGQgPyBkZXRhaWwudGxkW09iamVjdC5rZXlzKGRldGFpbC50bGQpWzBdXSA6ICcvJztcbiAgY291bnRyeUN1cnJlbmNpZXMuaW5uZXJIVE1MICs9IGRldGFpbC5jdXJyZW5jaWVzW09iamVjdC5rZXlzKGRldGFpbC5jdXJyZW5jaWVzKVswXV0ubmFtZTtcbiAgY291bnRyeUxhbmd1YWdlcy5pbm5lckhUTUwgKz0gZGV0YWlsLmxhbmd1YWdlc1tPYmplY3Qua2V5cyhkZXRhaWwubGFuZ3VhZ2VzKVswXV07XG4gIGNvdW50cnlCb3JkZXJzLmlubmVySFRNTCArPSBkZXRhaWwuYm9yZGVycztcbn07XG5cbnZhciBfZGVmYXVsdCA9IHBvcHVsYXRlRGV0YWlsUGFnZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9wb3B1bGF0ZURldGFpbFBhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BvcHVsYXRlRGV0YWlsUGFnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgcmVuZGVyRGF0YSA9IGZ1bmN0aW9uIHJlbmRlckRhdGEoZGF0YSkge1xuICB2YXIgY291bnRyaWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXMnKTtcbiAgdmFyIHdyYXBlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBlci1tb2RhbCcpO1xuICB2YXIgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICBpZiAoZGF0YVtpXSkge1xuICAgICAgdmFyIGNvdW50cmllc0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvdW50cmllc0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvdW50cmllc19fYm94Jyk7XG4gICAgICBjb3VudHJpZXNMaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgZGF0YVtpXS5uYW1lLm9mZmljaWFsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgdmFyIGNvdW50cnlGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb3VudHJ5RmxhZy5jbGFzc0xpc3QuYWRkKCdjb3VudHJpZXNfX2JveC1mbGFncycpO1xuICAgICAgdmFyIGNvdW50cnlGbGFnSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb3VudHJ5RmxhZ0ltZy5jbGFzc0xpc3QuYWRkKCdjb3VudHJpZXNfX2JveC1mbGFncy1pbWcnKTtcbiAgICAgIGNvdW50cnlGbGFnSW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgZGF0YVtpXS5mbGFncy5zdmcgKyBcIilcIjtcbiAgICAgIHZhciBjb3VudHJ5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY291bnRyeUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY291bnRyaWVzX19ib3gtdGV4dCcpO1xuICAgICAgdmFyIGNvdW50cnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY291bnRyeU5hbWUuY2xhc3NMaXN0LmFkZCgnYm94LXRleHRfX2NvdW50cnktbmFtZScsICdqcy1uYW1lJyk7XG4gICAgICBjb3VudHJ5TmFtZS5pbm5lckhUTUwgPSBkYXRhW2ldLm5hbWUub2ZmaWNpYWw7XG4gICAgICB2YXIgY291bnRyeVBvcHVsYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb3VudHJ5UG9wdWxhdGlvbi5jbGFzc0xpc3QuYWRkKCdib3gtdGV4dF9fY291bnRyeS1pbmZvJywgJ2pzLXBvcHVsYXRpb24nKTtcbiAgICAgIGNvdW50cnlQb3B1bGF0aW9uLmlubmVySFRNTCA9ICdQb3B1bGF0aW9uOiAgJyArIGRhdGFbaV0ucG9wdWxhdGlvbjtcbiAgICAgIHZhciBjb3VudHJ5UmVnaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY291bnRyeVJlZ2lvbi5jbGFzc0xpc3QuYWRkKCdib3gtdGV4dF9fY291bnRyeS1pbmZvJywgJ2pzLXJlZ2lvbicpO1xuICAgICAgY291bnRyeVJlZ2lvbi5pbm5lckhUTUwgPSAnUmVnaW9uOiAgJyArIGRhdGFbaV0ucmVnaW9uO1xuICAgICAgdmFyIGNvdW50cnlDYXBpdGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY291bnRyeUNhcGl0YWwuY2xhc3NMaXN0LmFkZCgnYm94LXRleHRfX2NvdW50cnktaW5mbycsICdqcy1jYXBpdGFsJyk7XG4gICAgICBjb3VudHJ5Q2FwaXRhbC5pbm5lckhUTUwgPSAnQ2FwaXRhbDogICcgKyBkYXRhW2ldLmNhcGl0YWw7XG4gICAgICBjb3VudHJ5Q29udGVudC5hcHBlbmRDaGlsZChjb3VudHJ5TmFtZSk7XG4gICAgICBjb3VudHJ5Q29udGVudC5hcHBlbmRDaGlsZChjb3VudHJ5UG9wdWxhdGlvbik7XG4gICAgICBjb3VudHJ5Q29udGVudC5hcHBlbmRDaGlsZChjb3VudHJ5UmVnaW9uKTtcbiAgICAgIGNvdW50cnlDb250ZW50LmFwcGVuZENoaWxkKGNvdW50cnlDYXBpdGFsKTtcbiAgICAgIGNvdW50cmllc0xpc3RJdGVtLmFwcGVuZENoaWxkKGNvdW50cnlGbGFnKTtcbiAgICAgIGNvdW50cmllc0xpc3RJdGVtLmFwcGVuZENoaWxkKGNvdW50cnlGbGFnSW1nKTtcbiAgICAgIGNvdW50cnlGbGFnLmFwcGVuZENoaWxkKGNvdW50cnlGbGFnSW1nKTtcbiAgICAgIGNvdW50cmllc0xpc3RJdGVtLmFwcGVuZENoaWxkKGNvdW50cnlDb250ZW50KTtcbiAgICAgIGNvdW50cmllc0xpc3QuYXBwZW5kQ2hpbGQoY291bnRyaWVzTGlzdEl0ZW0pO1xuICAgICAgY291bnRyaWVzTGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB3cmFwZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgKDAsIF9wb3B1bGF0ZURldGFpbFBhZ2VbXCJkZWZhdWx0XCJdKShkYXRhW2ldKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBfbG9vcChpKTtcbiAgfVxufTtcblxudmFyIF9kZWZhdWx0ID0gcmVuZGVyRGF0YTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi9wb3B1bGF0ZURldGFpbFBhZ2VcIjo2fV19LHt9LFs0XSk7XG4iXSwiZmlsZSI6ImJ1bmRsZS5qcyJ9
