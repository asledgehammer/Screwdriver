'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scss: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass'],
            },
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    'dist/css/main.css': 'src/scss/main.scss',
                },
            },
        },
    });

    console.log('test');

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
