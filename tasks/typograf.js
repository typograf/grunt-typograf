'use strict';

/*!
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Released under the MIT license
 * https://github.com/typograf/grunt-typograf/blob/master/LICENSE
 */

const
	Typograf = require('typograf'),
	names = [];

module.exports = function (grunt) {
	grunt.registerMultiTask('typograf', 'Prepare texts with Typograf', function () {
		const
			opts = this.options();

		if (Array.isArray(opts.rules)) {
			opts.rules.forEach((rule) => {
				if (
					typeof rule === 'object' &&
					typeof rule.name === 'string' &&
					names.indexOf(rule.name) === -1

				) {
					Typograf.rule(rule);
					names.push(rule.name);
				}
			});
		}

		const
			typograf = new Typograf(opts);

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
