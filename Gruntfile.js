'use strict';

/*!
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Released under the MIT license
 * https://github.com/typograf/grunt-typograf/blob/master/LICENSE
 */

module.exports = function (grunt) {
	grunt.initConfig({
		clean: {
			tests: ['tmp']
		},

		typograf: {
			test: {
				options: {
					locale: ['ru', 'en-US']
				},

				files: {
					'tmp/test.txt': 'test/fixtures/test.txt'
				}
			},

			test2: {
				options: {
					locale: ['ru', 'en-US'],
					disableRule: ['ru/punctuation/exclamation']
				},

				files: {
					'tmp/test2.txt': 'test/fixtures/test2.txt'
				}
			},

			test3: {
				options: {
					locale: ['ru', 'en-US'],
					enableRule: ['ru/money/ruble']
				},

				files: {
					'tmp/test3.txt': 'test/fixtures/test3.txt'
				}
			},

			test_own_rules: {
				options: {
					locale: ['ru', 'en-US'],
					rules: [
						{
							name: 'common/other/typographicalEmoticon',
							handler(text) {
								return text.replace(/:-\)/, ':—)');
							}
						}
					]
				},
				files: {
					'tmp/test_own_rules.txt': 'test/fixtures/test_own_rules.txt'
				}
			}
		},

		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['clean', 'typograf', 'nodeunit']);
	grunt.registerTask('default', ['test']);
};
