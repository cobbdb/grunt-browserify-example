module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            counter: {
                files: {
                    'dist/counter.app.js': 'src/app.js'
                },
                options: {
                    browserifyOptions: {
                        standalone: 'CounterApp'
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
};
