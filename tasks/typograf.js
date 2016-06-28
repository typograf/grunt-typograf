/*!
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Released under the MIT license
 * https://github.com/typograf/grunt-typograf/blob/master/LICENSE
 */

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

			if (!grunt.file.exists(src)) {
				grunt.log.warn('Source file "' + src + '" not found.');
				return res;
			}

			try {
				res = typograf.execute(grunt.file.read(src));

			} catch (err) {
				grunt.log.error(err.message);
			}

			return res;
		}

		this.files.forEach(function (file) {
			grunt.file.write(file.dest, file.src.map(map).join(''));
			grunt.log.writeln('File "' + file.dest + '" created.');
		});
	});
};
