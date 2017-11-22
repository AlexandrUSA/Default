'use strict';
import Menu from './menu';
var $C = require('_$C');
require('frame');


var m1 = new Menu();
console.log(m1.name)

document.getElementById('b1').onclick = function() {
	require.ensure([], function() {
		require('./header')
	})
}

