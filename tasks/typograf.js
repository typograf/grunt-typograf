/*
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Copyright (c) 2014 kobezzza
 * Licensed under the MIT license.
 */

var Typograf = require('typograf');

module.exports = function (grunt) {
	grunt.registerMultiTask('typograf', 'Prepare texts with Typograf', function () {
		var options = this.options(),
			typograf = new Typograf(options);

		if (options.disable) {
			typograf.disable(options.disable);
		}

		if (options.enable) {
			typograf.enable(options.enable);
		}

		this.files.forEach(function (f) {
			var src = f.src.filter(function (filepath) {
				if (grunt.file.exists(filepath)) {
					return true;
				}

				grunt.log.warn('Source file "' + filepath + '" not found.');
				return false;

			}).map(function (filepath) {
				var res = '';

				try {
					res = typograf.execute(grunt.file.read(filepath));

				} catch (err) {
					grunt.log.error(err.message);
				}

				return res;

			}).join('');

			grunt.file.write(f.dest, src);
			grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});
};
