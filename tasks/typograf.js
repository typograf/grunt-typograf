'use strict';

/*!
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Released under the MIT license
 * https://github.com/typograf/grunt-typograf/blob/master/LICENSE
 */

const
	Typograf = require('typograf');

module.exports = function (grunt) {
	grunt.registerMultiTask('typograf', 'Prepare texts with Typograf', function () {
		const
			opts = this.options();

		if (Array.isArray(opts.rules)) {
			opts.rules.forEach((rule) => typeof rule === 'object' && Typograf.rule(rule));
		}

		const
			typograf = new Typograf(opts);

		if (opts.disable) {
			typograf.disable(opts.disable);
		}

		if (opts.enable) {
			typograf.enable(opts.enable);
		}

		function map(src) {
			let res = '';

			if (!grunt.file.exists(src)) {
				grunt.log.warn(`Source file "${src}" not found.`);
				return res;
			}

			try {
				res = typograf.execute(grunt.file.read(src));

			} catch (err) {
				grunt.log.error(err.message);
			}

			return res;
		}

		this.files.forEach((file) => {
			grunt.file.write(file.dest, file.src.map(map).join(''));
			grunt.log.writeln(`File "${file.dest}" created.`);
		});
	});
};
