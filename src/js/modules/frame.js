"use strict";

var FRAME = (function () {
	return window.requestAnimationFrame ||
		   window.mozRequestAnimationFrame ||
		   window.webkitRequestAnimationFrame ||
		   window.oRequestAnimationFrame ||
		   window.msRequestAnimationFrame ||
	function ( t ) {
		setTimeout(t, 1000 / 60)
	}
})();

global.FRAME = FRAME; 
