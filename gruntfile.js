process.setMaxListeners(0);

const loadGruntTasks = require('load-grunt-tasks');
const config = require('../config');
const gruntConfig = require('./grunt-config');

module.exports = function(grunt) {
    grunt.initConfig(gruntConfig.config);
    gruntConfig.registerTasks(grunt);
    loadGruntTasks(grunt);
    grunt.registerTask('default', [
        'concat',
        'babel',
        'uglify',
        'compass',
        'autoprefixer',
        'cssmin',
        'clean',
        'watch',
    ]);
};