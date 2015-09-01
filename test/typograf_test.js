/*!
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Released under the MIT license
 * https://github.com/typograf/grunt-typograf/blob/master/LICENSE
 */

var
	grunt = require('grunt');

exports.typograf = {
	setUp: function (done) {
		done();
	},

	test: function (test) {
		test.expect(3);

		var
			input1 = grunt.file.read('tmp/test.txt'),
			input2 = grunt.file.read('tmp/test2.txt'),
			input3 = grunt.file.read('tmp/test3.txt');

		var
			expected1 = grunt.file.read('test/expected/test.txt').trim(),
			expected2 = grunt.file.read('test/expected/test2.txt').trim(),
			expected3 = grunt.file.read('test/expected/test3.txt').trim();

		test.equal(input1, expected1, 'should prepare text');
		test.equal(input2, expected2, 'should prepare text with disabled rule "common/punctuation/exclamation"');
		test.equal(input3, expected3, 'should prepare text with enabled rule "ru/money/ruble"');

		test.done();
	}
};
