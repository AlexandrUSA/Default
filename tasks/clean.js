'use strict';

const gulp = require('gulp'),
	  del  = require('del');

module.exports ( o ) => {
	return () => {
		return del( o.dst );
	}	
});