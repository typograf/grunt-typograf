# [grunt](http://gruntjs.com/)-typograf

[![Build Status](https://travis-ci.org/typograf/grunt-typograf.png?branch=master)](https://travis-ci.org/typograf/grunt-typograf)

Prepare texts with typograf for Grunt.

## Install

```bash
npm install grunt-typograf --save-dev
```

## Usage

**Gruntfile.js**

```js
module.exports = function (grunt) {
	grunt.initConfig({
		typograf: {
			compile: {
				options: {
					lang   : 'ru',
					mode   : 'digit',           // Entities as digits
					disable: ['ru/optalign/*'], // Disable rules
					enable : ['ru/money/ruble'] // Enable rules
				 },

				files: {
					'hello.txt': ['header.txt', 'footer.txt']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-typograf');
	grunt.registerTask('default', ['typograf']);
};
```
