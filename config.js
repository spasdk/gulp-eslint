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
        // array of file globs to process
        // see format in https://github.com/isaacs/node-glob
        sourceFile: [
            path.join(config.default.sourcePath, 'js', '**', '*.js')
        ],

        // apply some visualization to the lint results
        // available formatters - https://github.com/eslint/eslint/tree/master/lib/formatters
        format: 'stylish',

        // false to prevent watch task creation
        // otherwise array of globs to monitor
        watch: [
            path.join(config.default.sourcePath, 'js', '**', '*.js')
        ]
    }
});
