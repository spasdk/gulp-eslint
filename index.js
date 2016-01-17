/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var util   = require('util'),
    gulp   = require('gulp'),
    cache  = require('gulp-cached'),
    eslint = require('gulp-eslint'),
    Plugin = require('spa-gulp/lib/plugin'),
    plugin = new Plugin({name: 'lint', entry: 'check', context: module});


// create tasks for profiles
plugin.profiles.forEach(function ( profile ) {
    // check + watch
    profile.watch(profile.task('check', function () {
        var files = [];

        return gulp
            .src(profile.data.sourcePath || [])
            .pipe(cache('eslint'))
            .pipe(eslint())
            .pipe(eslint.results(function ( results ) {
                // collect all problematic file names
                results.forEach(function ( result ) {
                    if ( result.errorCount || result.warningCount ) {
                        files.push(util.format('%s %s/%s',
                            result.filePath, result.errorCount, result.warningCount
                        ));
                    }
                });

                // success message
                if ( files.length === 0 ) {
                    profile.notify({
                        title: 'check',
                        message: 'no problems found'
                    });
                }
            }))
            .pipe(eslint.format(profile.data.format, function ( result ) {
                // failure message
                profile.notify({
                    type: 'fail',
                    info: result,
                    title: 'check',
                    message: files
                });
            }));
    }));
});


// public
module.exports = plugin;
