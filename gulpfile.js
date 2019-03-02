'use strict';

require('../../gulp/gulp-init.js')({HTML: '.'});

const comb = require('../../gulp/tasks/comb');
const cs = require('../../gulp/tasks/create-structure');
const uglifyes = require('../../gulp/tasks/uglify').uglifyes;
const { sync, syncInit } = require('../../gulp/tasks/sync');

function watchFiles () {
    syncInit();
    watch('./assets/less/**/*.less', sync);
    watch($.path.html.files, sync);
}

task('cs', cs);
task('watch', watchFiles);