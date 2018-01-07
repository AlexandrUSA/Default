'use strict';

var _$C = function (sel, w, h) {
	var c;
	if (!arguments.length) {
		c = document.createElement('canvas');
		c.width = w || window.innerWidth;
		c.height = h || window.innerHeight;
		console.log('Выполнено: Обьект canvas был создан.');
		return {
			el: c,
			ctx: c.getContext('2d'),
			w: c.width,
			h: c.height
		};
	}
	c = document.querySelector(sel);
	if (c && c.getContext) {
		var _c = c.getContext('2d');
		c.width = w || window.innerWidth;
		c.height = h || window.innerHeight;
		console.log('Выполнено: Обьект canvas получен. Высота: ' + c.height + 'px Ширина: ' + c.width + 'px');
		return {
			c: c,
			ctx: _c,
			w: c.width,
			h: c.height
		};
	};
	throw new Error('Ошибка: не удалось получить обьект canvas!');
};

module.exports = _$C;