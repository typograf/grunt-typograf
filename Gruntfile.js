/*
 * grunt-typograf
 * https://github.com/typograf/grunt-typograf
 *
 * Copyright (c) 2014 kobezzza
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],

			options: {
				jshintrc: '.jshintrc'
			}
		},

		clean: {
			tests: ['tmp']
		},

		typograf: {
			test: {
				options: {
					lang: 'ru'
				},

				files: {
					'tmp/test.txt': 'test/fixtures/test.txt'
				}
			},

			test2: {
				options: {
					lang: 'ru',
					disable: ['common/punctuation/exclamation']
				},

				files: {
					'tmp/test2.txt': 'test/fixtures/test2.txt'
				}
			},

			test3: {
				options: {
					lang: 'ru',
					enable: ['ru/money/ruble']
				},

				files: {
					'tmp/test3.txt': 'test/fixtures/test3.txt'
				}
			}
		},

		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['clean', 'typograf', 'nodeunit']);
	grunt.registerTask('default', ['jshint', 'test']);
};
