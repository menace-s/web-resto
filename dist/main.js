(()=>{"use strict";var e={748:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap);"]),i.push([e.id,'*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #f1f1f1;\n  --header-height: 60px;\n  font-size: 10px;\n}\nbody {\n  height: 100vh;\n}\nbody,\nheader {\n  background-color: var(--main-bg-color);\n}\nheader {\n  padding: 10px;\n  height: var(--header-height);\n}\nheader,\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav {\n  width: 350px;\n  justify-content: space-between;\n}\nnav button {\n  font-size: 1.5rem;\n  font-family: "Tilt Neon", sans-serif;\n  border: none;\n  background-color: var(--main-bg-color);\n}\nnav button:hover {\n  color: red;\n}\n#content {\n  display: flex;\n  height: calc(100vh - var(--header-height));\n}\n.content-text {\n  width: 40%;\n  padding-left: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content-text > h1 {\n  font-family: "Tilt Neon", sans-serif;\n  font-size: 6.5rem;\n  font-weight: 700;\n}\nh1 > span {\n  color: #ff9001;\n}\n.content-img {\n  width: 60%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content-img > img {\n  height: 80%;\n  width: 70%;\n  filter: drop-shadow(-4px 13px 29px #707070);\n  -webkit-filter: drop-shadow(-4px 13px 29px #707070);\n  -moz-filter: drop-shadow(-4px 13px 29px #707070);\n}\n.cardContainer {\n  /* background-color: rgb(255, 172, 94); */\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n.cardContainer .card {\n  background-color: #fff;\n  border-radius: 10px;\n  border: 0.5px solid gray;\n  width: 300px;\n  height: 400px;\n  overflow: hidden;\n  transition: transform 0.2s;\n}\n.card:hover {\n  transform: translateY(-5px);\n}\n.card .imgContainer {\n  width: 100%;\n  height: 200px;\n}\n.card .textContainer {\n  padding: 20px;\n  width: 100%;\n  height: 200px;\n}\nh2 {\n  color: red;\n  font-family: "Tilt Neon", sans-serif;\n}\n.textContainer .pelmt {\n  font-family: "Tilt Neon", sans-serif;\n  font-size: 1.3rem;\n  margin-top: 10px;\n}\n.imgContainer img {\n  height: 100%;\n  width: 100%;\n}\n@media screen and (max-width: 674px) {\n  #content {\n    height: auto;\n    flex-direction: column;\n  }\n  .content-text {\n    padding: 20px;\n    width: 100%;\n  }\n  .content-text > h1 {\n    font-size: 3.5rem;\n  }\n  .content-img{\n    width: 100%;\n  }\n  .cardContainer {\n    flex-direction: column;\n  }\n}\n',""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var p=t(a[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"5bbc6379e4e1105866b3.png";function n(){const n=document.getElementById("content");n.textContent=" ";const t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("img"),a=document.createElement("h1"),i=document.createElement("span"),c=document.createElement("span"),d=document.createTextNode("Ce n'est pas seulement de la "),s=document.createTextNode("nourriture"),p=document.createTextNode("c'est une "),l=document.createTextNode("Expérience"),u=document.createTextNode(".");o.src=e,o.setAttribute("alt","image de plat de riz"),i.appendChild(s),c.appendChild(l),a.appendChild(d),a.appendChild(i),a.appendChild(document.createTextNode(" ")),a.appendChild(p),a.appendChild(c),a.appendChild(u),t.classList.add("content-text"),r.classList.add("content-img"),t.appendChild(a),r.appendChild(o),n.appendChild(t),n.appendChild(r)}const r=t.p+"90d867570a1460a019d9.jpg",o=t.p+"3fc78b79b9ebbc3084c2.jpg",a=[{titre:"Poulet rôti aux herbes",description:"Un délicieux plat de poulet rôti lentement avec un mélange d'herbes aromatiques, accompagné de légumes grillés et de pommes de terre rôties.",src:`${r}`},{titre:"Pâtes Carbonara",description:"Des pâtes al dente mélangées à une sauce crémeuse à base d'œufs, de pancetta, de parmesan et de poivre noir fraîchement moulu.",src:""+(t.p+"714346aba0809cd490ec.jpg")},{titre:"Salade de quinoa aux légumes",description:"Une salade légère et nutritive composée de quinoa cuit, de légumes frais comme les tomates, les concombres et les poivrons, et assaisonnée d'une vinaigrette à l'huile d'olive et au citron.",src:`${o}`}],i=[{titre:"Notre Chef",description:"Rencontrez notre chef de renommée mondiale, avec plus de 20 ans d'expérience dans la cuisine gastronomique.",src:""+(t.p+"ee0c24af30b35b448666.jpg")},{titre:"Le Restaurant",description:"Découvrez l'ambiance chaleureuse et accueillante de notre restaurant, parfait pour des dîners en famille ou des événements spéciaux.",src:""+(t.p+"18b56d3367e24858fc40.jpg")},{titre:"Notre Équipe",description:"Une équipe dévouée et passionnée, prête à vous offrir une expérience culinaire inoubliable.",src:""+(t.p+"a3d751bb724d7fe64332.jpg")}];function c(e){content.textContent="";const n=document.createElement("div");n.classList.add("cardContainer");for(const t of e){const e=document.createElement("div");e.classList.add("card");const r=document.createElement("div");r.classList.add("imgContainer");const o=document.createElement("img");o.setAttribute("src",t.src);const a=document.createElement("h2");a.textContent=t.titre;const i=document.createElement("p");i.textContent=t.description,i.classList.add("pelmt");const c=document.createElement("div");c.classList.add("textContainer"),r.appendChild(o),c.appendChild(a),c.appendChild(i),e.appendChild(r),e.appendChild(c),n.appendChild(e)}content.appendChild(n)}c(i);var d=t(72),s=t.n(d),p=t(825),l=t.n(p),u=t(659),m=t.n(u),f=t(56),h=t.n(f),g=t(540),v=t.n(g),x=t(113),b=t.n(x),C=t(748),y={};y.styleTagTransform=b(),y.setAttributes=h(),y.insert=m().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=v(),s()(C.A,y),C.A&&C.A.locals&&C.A.locals,window.onload=e=>{n()};const w=document.getElementById("homeButton"),E=document.getElementById("menuButton"),T=document.getElementById("aboutButton");w.addEventListener("click",n),E.addEventListener("click",(()=>{!function(e){content.textContent="";const n=document.createElement("div");n.classList.add("cardContainer");for(const t of e){const e=document.createElement("div");e.classList.add("card");const r=document.createElement("div");r.classList.add("imgContainer");const o=document.createElement("img");o.setAttribute("src",t.src);const a=document.createElement("h2");a.textContent=t.titre;const i=document.createElement("p");i.textContent=t.description,i.classList.add("pelmt");const c=document.createElement("div");c.classList.add("textContainer"),r.appendChild(o),c.appendChild(a),c.appendChild(i),e.appendChild(r),e.appendChild(c),n.appendChild(e)}content.appendChild(n)}(a)})),T.addEventListener("click",(()=>{c(i)}))})()})();