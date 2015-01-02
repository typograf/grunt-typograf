var grunt = require('grunt');
exports.typograf = {
	setUp: function (done) {
		done();
	},

	test: function (test) {
		test.expect(3);

		var n = /(?:\r?\n|\r)$/;
		var input = grunt.file.read('tmp/test.txt'),
			input2 = grunt.file.read('tmp/test2.txt'),
			input3 = grunt.file.read('tmp/test3.txt');

		var expected = grunt.file.read('test/expected/test.txt')
			.replace(n, '');

		var expected2 = grunt.file.read('test/expected/test2.txt')
			.replace(n, '');

		var expected3 = grunt.file.read('test/expected/test3.txt')
			.replace(n, '');

		test.equal(input, expected, 'should prepare text');
		test.equal(input2, expected2, 'should prepare text with disabled rule "common/punctuation/exclamation"');
		test.equal(input3, expected3, 'should prepare text with enabled rule "ru/money/ruble"');

		test.done();
	}
};
