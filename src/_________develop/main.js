'use strict';
var $C = require('_$C');
require('frame')
let path = location.pathname.slice(1, location.pathname.length-5)



document.getElementById('a').onclick = function() {
	console.log(path)
	let script = require('./routes/' + path);
	script()
};

console.log($C)