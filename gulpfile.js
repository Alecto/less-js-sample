'use strict';

require('/webProjects/gulp/gulp-init.js')({HTML: '.'});

const comb     = require('/webProjects/gulp/tasks/comb.js');
const uglifyes = require('/webProjects/gulp/tasks/uglify.js').uglifyes;
const cs       = require('/webProjects/gulp/tasks/create-structure');
const { sync, syncInit } = require('/webProjects/gulp/tasks/sync.js');

function watchFiles () {
    syncInit();
    watch('./assets/less/**/*.less', sync);
    watch($.PATH.html.files, sync);
}

task('cs', cs);
task('watch', watchFiles);
