'use strict';

/*!
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Released under the MIT license
 * https://github.com/typograf/grunt-typograf/blob/master/LICENSE
 */

const
	grunt = require('grunt');

exports.typograf = {
	setUp(done) {
		done();
	},

	test(test) {
		const
			input1 = grunt.file.read('tmp/test.txt'),
			input2 = grunt.file.read('tmp/test2.txt'),
			input3 = grunt.file.read('tmp/test3.txt'),
			inputOwnRules = grunt.file.read('tmp/test_own_rules.txt');

		const
			expected1 = grunt.file.read('test/expected/test.txt').trim(),
			expected2 = grunt.file.read('test/expected/test2.txt').trim(),
			expected3 = grunt.file.read('test/expected/test3.txt').trim(),
			expectedOwnRules = grunt.file.read('test/expected/test_own_rules.txt').trim();

		test.equal(input1, expected1, 'should prepare text');
		test.equal(input2, expected2, 'should prepare text with disabled rule "common/punctuation/exclamation"');
		test.equal(input3, expected3, 'should prepare text with enabled rule "ru/money/ruble"');
		test.equal(inputOwnRules, expectedOwnRules, 'should execute own rules');

		test.done();
	}
};
