parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"8hC1":[function(require,module,exports) {
"use strict";function e(e){return console.log(e),e.map(function(e){return'\n\n            <h5 class="album__title">'.concat(e.albumTitle,"</h5>\n          \n            ")}).join("")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"t6Jm":[function(require,module,exports) {
"use strict";function e(e){return console.log(e),e.map(function(e){return'\n\n            <h5 class="song__title">'.concat(e.songTitle,"</h5>\n          \n            ")}).join("")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"iqfV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;var n=i(require("./AllAlbums")),t=i(require("./AllSongs"));function i(n){return n&&n.__esModule?n:{default:n}}function e(i){return'\n    <header>\n    <a href="index.html"><img class="logo" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></a>\n    <nav class="nav__menu">\n        <ul>\n            <p><li class="nav__menu__albums">Albums</li></p>\n            <p><li class="nav__menu__artists">Artists</li></p>\n            <p><li class="nav__menu__songs">Songs</li></p>\n        </ul>\n    </nav>\n    <button class="menu__button"><i class="fa fa-bars"></i></button>\n  </header>\n      <main class="main__wrapper">\n              <div class="logo__banner"><img class="logo2" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png" alt="Logo"></div>\n        <div class="main__content"><div class="content__img"><img src="https://www.popsike.com/pix/20170905/263189068682.jpg"></div>\n          <div class="main__text"><h2>Albums</h2>\n            <h3 class="main__subtitle">For Emma, Forever Ago</h3><h4>by Bon Iver</h4><article>Lorem ipsum dolor amet aesthetic cold-pressed DIY craft beer, plaid biodiesel vaporware iPhone air plant meh edison bulb hoodie scenester leggings.</article>\n            <ul>\n              <li>Top 5</li>\n    '.concat(i.map(function(t){return"\n\n            <li>".concat((0,n.default)(t.allAlbums),"</li>\n            \n            \n            ")}).join(""),'\n          </ul>\n    \n          </div>\n          </div>\n      <div class="main__content2">\n        <div class="content__img"><img src="https://www.treblezine.com/wp-content/uploads/2013/07/icon-ac-090412-download.jpg"></div> \n        <div class="main__text"><h2>Artists</h2>\n        <h3 class="main__subtitle">Animal Collective</h3><article>Lorem ipsum dolor amet vexillologist lyft pok pok, health goth williamsburg typewriter tofu sartorial tumblr 90\'s retro truffaut disrupt PBR&B plaid. </article>\n          <ul>\n            <li>Top 5</li>\n            ').concat(i.map(function(n){return"\n      \n                  <li>".concat(n.firstName," ").concat(n.lastName,"</li>\n                  \n                  \n                  ")}).join(""),'\n          </ul>\n        </div>\n      </div>\n        <div class="main__content3"> \n                  <div class="content__img"><img src="https://m.media-amazon.com/images/M/MV5BYjhhN2I4MDItZWViZi00MjNhLTkwNTctNTQ2MGRjNzY0OWQ5XkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg"></div> \n          <div class="main__text"><h2>Songs</h2>\n            <h3 class="main__subtitle">Elephant Gun</h3><h4>by Beirut</h4><article>Lorem ipsum dolor amet before they sold out sustainable waistcoat, mlkshk migas man bun keffiyeh godard portland kickstarter tumeric tumblr. </article>\n                      <ul>\n            <li>Top 5</li>\n            ').concat(i.map(function(n){return"\n                  <li>".concat((0,t.default)(n.allAlbums[0].allSongs),"</li>\n                  \n                  \n                  ")}).join(""),"\n\n\n\n\n          </ul>\n          </div>\n      </div>\n  </main>\n\n  <footer>Before They Sold Out: A Hipster Music Collection © 2019</footer> \n")}
},{"./AllAlbums":"8hC1","./AllSongs":"t6Jm"}],"Th3n":[function(require,module,exports) {
"use strict";function n(n){return'\n\n            <header>\n  <a href="index.html"><img class="logo" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></a>\n  <nav class="nav__menu">\n      <ul>\n          <p><li class="nav__menu__albums">Albums</li></p>\n          <p><li class="nav__menu__artists">Artists</li></p>\n          <p><li class="nav__menu__songs">Songs</li></p>\n      </ul>\n  </nav>\n  <button class="menu__button"><i class="fa fa-bars"></i></button>\n</header>\n\n<main class="main__wrapper">\n'.concat(n.map(function(n){return'\n<div class="main__content">\n              <div class="content__img"><img src="'.concat(n.albumImage,'"></div> \n              <div class="main__text"><h2>').concat(n.albumTitle,'</h2>\n              <p class="album__rating">').concat(n.rating,"</p>\n              \n              \n              </div>\n              </div>\n              ")}).join(""),"\n            \n           \n        </main>\n        <footer>Before They Sold Out: A Hipster Music Collection © 2019</footer> \n\n")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"AE3x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var t=a(require("./Albums"));function a(t){return t&&t.__esModule?t:{default:t}}function s(a){return'\n    <header>\n        <a href="index.html"><img class="logo" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></a>\n        <nav class="nav__menu">\n            <ul>\n                <p><li class="nav__menu__albums">Albums</li></p>\n                <p><li class="nav__menu__artists">Artists</li></p>\n                <p><li class="nav__menu__songs">Songs</li></p>\n            </ul>\n        </nav>\n        <button class="menu__button"><i class="fa fa-bars"></i></button>\n    </header>\n\n\n        <ul class="artist">\n        '.concat(a.map(function(a){return console.log(a.allAlbums),'\n            <h3 class="artist__name">'.concat(a.firstName," ").concat(a.lastName,'</h3>\n            <img class="artist__image" src="').concat(a.artistImage,'"/>\n            <p class="artist__age">Age: ').concat(a.age,'</p>\n            <p class="artist__hometown">Hometown: ').concat(a.hometown,'</p>\n            <p class="artist__rating">Average Rating: ').concat(a.rating,'</p>\n                <ul class="albums">\n               ').concat((0,t.default)(a.allAlbums),"\n            </ul>\n            </li>\n        ")}).join(""),'\n    </ul>\n    <section class="add-artist">\n    <input type="text" class="add-artist__first-name" placeholder="Artist\'s First Name">\n    <input type="text" class="add-artist__last-name" placeholder="Artist\'s Last Name">\n    <input type="text" class="add-artist__image" placeholder="Artist\'s Image">\n    <input type="text" class="add-artist__age" placeholder="Artist\'s Age">\n    <input type="text" class="add-artist__hometown" placeholder="Artist\'s Hometown">\n    <input type="text" class="add-artist__rating" placeholder="Artist Rating">\n    <button class="add-artist__submit">Add Artist</button>\n    </section>\n    <footer>Before They Sold Out: A Hipster Music Collection © 2019</footer> \n    ')}
},{"./Albums":"Th3n"}],"JqfT":[function(require,module,exports) {
"use strict";function n(n){return'\n\n    <header>\n    <a href="index.html"><img class="logo" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></a>\n    <nav class="nav__menu">\n        <ul>\n            <p><li class="nav__menu__albums">Albums</li></p>\n            <p><li class="nav__menu__artists">Artists</li></p>\n            <p><li class="nav__menu__songs">Songs</li></p>\n        </ul>\n    </nav>\n    <button class="menu__button"><i class="fa fa-bars"></i></button>\n  </header>\n  <main class="main__wrapper">\n\n  '.concat(n.map(function(n){return'\n    <div class="main__content">\n      <div class="main__text"><h2>'.concat(n.songTitle,'</h2>\n      <p class="song__duration">').concat(n.duration,'</p>\n      <p class="song__rating">Average Rating:').concat(n.rating,"</p>\n      \n      ")}).join(""),'\n    \n    </div>\n    </div>\n    \n    <a href="0"><h3 class="main__subtitle">Add Song</h3></a>\n</main>\n<footer>Before They Sold Out: A Hipster Music Collection © 2019</footer> \n\n')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"Yw/X":[function(require,module,exports) {
"use strict";function t(t,e){fetch(t).then(function(t){return t.json()}).then(function(t){return e(t)}).catch(function(t){return console.log(t)})}function e(t,e,n){fetch(t,{method:"POST",body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){return n(t)}).catch(err=console.log(err))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={getRequest:t,postRequest:e};exports.default=n;
},{}],"WIWw":[function(require,module,exports) {
"use strict";function e(e,t,r){e.addEventListener(t,function(e){return r(e)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={on:e};exports.default=t;
},{}],"GFX4":[function(require,module,exports) {
"use strict";var e=i(require("./components/index")),t=i(require("./components/Artists")),n=i(require("./components/Albums")),a=i(require("./components/Songs")),u=i(require("./utils/api/api-actions")),s=i(require("./utils/events/event-actions"));function i(e){return e&&e.__esModule?e:{default:e}}function r(){function i(){return document.querySelector("#app")}u.default.getRequest("/all",function(t){console.log(t),i().innerHTML=(0,e.default)(t)}),s.default.on(i(),"click",function(){if(event.target.classList.contains("add-artist__submit")){var e=document.querySelector(".add-artist__first-name").value,n=document.querySelector(".add-artist__last-name").value,a=document.querySelector(".add-artist__image").value,s=document.querySelector(".add-artist__age").value,r=document.querySelector(".add-artist__hometown").value,o=document.querySelector(".add-artist__rating").value;u.default.postRequest("/artists/add",{firstName:e,lastName:n,artistImage:a,age:s,hometown:r,rating:o},function(e){return i().innerHTML=(0,t.default)(e)})}}),s.default.on(i(),"click",function(){event.target.classList.contains("nav__menu__artists")&&u.default.getRequest("/artists",function(e){i().innerHTML=(0,t.default)(e)})}),s.default.on(i(),"click",function(){event.target.classList.contains("nav__menu__albums")&&u.default.getRequest("/albums",function(e){i().innerHTML=(0,n.default)(e)})}),s.default.on(i(),"click",function(){event.target.classList.contains("nav__menu__songs")&&u.default.getRequest("/songs",function(e){i().innerHTML=(0,a.default)(e)})})}r();
},{"./components/index":"iqfV","./components/Artists":"AE3x","./components/Albums":"Th3n","./components/Songs":"JqfT","./utils/api/api-actions":"Yw/X","./utils/events/event-actions":"WIWw"}]},{},["GFX4"], null)
//# sourceMappingURL=/app.a7fb0d71.js.map