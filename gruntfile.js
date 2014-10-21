module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            counter: {
                files: {
                    'dist/counter.app.js': [
                        'src/*.js'
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
};
