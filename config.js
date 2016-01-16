/**
 * Configuration for lint gulp task.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path   = require('path'),
    extend = require('extend'),
    config = require('spa-gulp/config');


// base config
// each profile inherits all options from the "default" profile
module.exports = extend(true, {}, config, {
    default: {
        // glob or an array of globs of files to process
        // see format in https://github.com/isaacs/node-glob
        sourceMask: [
            path.join(config.default.sourcePath, 'js', '**', '*.js')
        ],

        // apply some visualization to the lint results
        // available formatters - https://github.com/eslint/eslint/tree/master/lib/formatters
        format: 'stylish',

        // create watch task
        // to automatically rebuild on source files change
        watch: false
    }
});
