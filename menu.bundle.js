/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
    
    const container = document.createElement('div')
    container.classList.add('menu')

    const menuList = document.createElement('div')
    menuList.classList.add("menu-list")
    const menuHead = document.createElement('h2')
    menuHead.innerText = "Menu"
    menuList.appendChild(menuHead)

    //Menu Items
    const menuItem = document.createElement('div')
    menuItem.classList.add("menu-item")
    const itemHead = document.createElement('h3')
    itemHead.innerText = "Lorem"
    menuItem.appendChild(itemHead)
    const itemDesc = document.createElement('div')
    itemDesc.classList.add("item-desc")
    itemDesc.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna."
    menuItem.appendChild(itemDesc)
    const itemPrice = document.createElement('div')
    itemPrice.classList.add("item-price")
    itemPrice.innerText = "£3.49"
    menuItem.appendChild(itemPrice)
    
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))


    //side images
    const image1 = document.createElement('div')
    image1.classList.add('image-1', 'image-cont')

    const image2 = document.createElement('div')
    image2.classList.add('image-2', 'image-cont')

    const image3 = document.createElement('div')
    image3.classList.add('image-3', 'image-cont')

    container.appendChild(menuList)
    container.appendChild(image1)
    container.appendChild(image2)
    container.appendChild(image3)

    return container

}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UT1AtUmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UT1AtUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVE9QLVJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UT1AtUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RPUC1SZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEMiLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudScpXG5cbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKVxuICAgIGNvbnN0IG1lbnVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIG1lbnVIZWFkLmlubmVyVGV4dCA9IFwiTWVudVwiXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUhlYWQpXG5cbiAgICAvL01lbnUgSXRlbXNcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKVxuICAgIGNvbnN0IGl0ZW1IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGl0ZW1IZWFkLmlubmVyVGV4dCA9IFwiTG9yZW1cIlxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1IZWFkKVxuICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjXCIpXG4gICAgaXRlbURlc2MuaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gU2VtIGludGVnZXIgdml0YWUganVzdG8gZWdldCBtYWduYS5cIlxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjKVxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXByaWNlXCIpXG4gICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IFwiwqMzLjQ5XCJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpXG4gICAgXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0uY2xvbmVOb2RlKHRydWUpKVxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtLmNsb25lTm9kZSh0cnVlKSlcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbS5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0uY2xvbmVOb2RlKHRydWUpKVxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtLmNsb25lTm9kZSh0cnVlKSlcblxuXG4gICAgLy9zaWRlIGltYWdlc1xuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTEnLCAnaW1hZ2UtY29udCcpXG5cbiAgICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGltYWdlMi5jbGFzc0xpc3QuYWRkKCdpbWFnZS0yJywgJ2ltYWdlLWNvbnQnKVxuXG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbWFnZTMuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtMycsICdpbWFnZS1jb250JylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGlzdClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UxKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZTIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlMylcblxuICAgIHJldHVybiBjb250YWluZXJcblxufSJdLCJzb3VyY2VSb290IjoiIn0=