module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            counter: {
                files: {
                    'dist/counter.app.js': [
                        'app.js'
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
};
