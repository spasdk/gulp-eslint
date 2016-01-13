/**
 * Configuration for lint gulp task.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path = require('path');

// public
module.exports = {
    // set of named configs for corresponding gulp tasks
    // each profile inherits all options from the "default" profile
    profiles: {
        // config to be extended by other profiles
        default: {
            // apply some visualization to the lint results
            // available formatters - https://github.com/eslint/eslint/tree/master/lib/formatters
            format: 'stylish',

            //
            popup: true
        },

        // config for lint:check:develop task
        develop: {
            // glob or an array of globs of files to process
            // see format in https://github.com/isaacs/node-glob
            sourceMask: [
                path.join(process.env.PATH_SRC, 'js', '**', '*.js'),
                path.join(process.env.PATH_CFG, '**', '*.js')
            ],

            // create task lint:watch:develop
            // to automatically rescan on source files change
            watch: false
        }
    }
};
