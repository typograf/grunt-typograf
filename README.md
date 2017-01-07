[grunt](http://gruntjs.com)-typograf
====================================

[![NPM version](https://img.shields.io/npm/v/grunt-typograf.svg)](https://www.npmjs.com/package/grunt-typograf)
[![NPM downloads](https://img.shields.io/npm/dm/grunt-typograf.svg)](https://www.npmjs.com/package/grunt-typograf)
[![Dependency Status](https://david-dm.org/typograf/grunt-typograf.svg)](https://david-dm.org/typograf/grunt-typograf)
[![devDependency Status](https://david-dm.org/typograf/grunt-typograf/dev-status.svg)](https://david-dm.org/typograf/grunt-typograf?type=dev)
[![Build Status](https://travis-ci.org/typograf/grunt-typograf.png?branch=master)](https://travis-ci.org/typograf/grunt-typograf)

Prepare texts with [Typograf](https://github.com/typograf/typograf) for Grunt.

## Install

```bash
npm install typograf grunt-typograf --save-dev
```

## Usage

**Gruntfile.js**

```js
module.exports = function (grunt) {
  grunt.initConfig({
    typograf: {
      compile: {
        options: {
          lang: 'ru'
        },
        files: {
          'hello.txt': ['header.txt', 'footer.txt']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-typograf');
  grunt.registerTask('default', ['typograf']);
};
```

### With additional options

```js
module.exports = function (grunt) {
  grunt.initConfig({
    typograf: {
      compile: {
        options: {
          lang: 'ru', // 'ru' or 'en'
          htmlEntity: {
            type: 'digit' // Type of HTML entities: 'digit' - &#160, 'name' - &nbsp;, 'default' - UTF-8
          },
          disable: ['ru/optalign/*'], // Disable rules
          enable: ['ru/money/ruble'], // Enable rules
          rules: [ // Own rules
            {
              name: 'common/other/typographicalEmoticon',
              handler: (text, settings) => text.replace(/:-\)/, ':—)')
            },
            {
              name: 'common/other/trimLeft',
              handler: (text, settings) => text.trimLeft()
            }
          ]
        },

        files: {
          'hello.txt': ['header.txt', 'footer.txt']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-typograf');
  grunt.registerTask('default', ['typograf']);
};
```

## [License](https://github.com/typograf/grunt-typograf/blob/master/LICENSE)

The MIT License.
