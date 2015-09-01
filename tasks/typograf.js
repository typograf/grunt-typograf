/*!
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Released under the MIT license
 * https://github.com/typograf/grunt-typograf/blob/master/LICENSE
 */

var
	$C = require('collection.js').$C;

var
	Typograf = require('typograf');

module.exports = function (grunt) {
	grunt.registerMultiTask('typograf', 'Prepare texts with Typograf', function () {
		var
			opts = this.options(),
			typograf = new Typograf(opts);

		if (opts.disable) {
			typograf.disable(opts.disable);
		}

		if (opts.enable) {
			typograf.enable(opts.enable);
		}

		function map(src) {
			var res = '';

			try {
				res = typograf.execute(grunt.file.read(src));

			} catch (err) {
				grunt.log.error(err.message);
			}

			return res;
		}

		function filter(src) {
			if (grunt.file.exists(src)) {
				return true;
			}

			grunt.log.warn('Source file "' + src + '" not found.');
			return false;
		}

		$C(this.files).forEach(function (file) {
			grunt.file.write(file.dest, $C(file.src).map(map, {filter: filter}).join(''));
			grunt.log.writeln('File "' + file.dest + '" created.');
		});
	});
};
