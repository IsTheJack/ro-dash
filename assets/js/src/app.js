'use strict';
var App = (function() {
	var a = 1;
	var b = 2;
	var c = 3;
	var that = this;

	function sum () {
		return that.a + that.b + that.c;
	}

	return {
		"sum": sum
	};
})();