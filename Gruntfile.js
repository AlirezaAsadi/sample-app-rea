(function () {
    'use strict';

	module.exports = function(grunt) {

	  // Project configuration.
	  grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'static/scss',
                        src: ['**/*.scss'],
                        dest: 'static/css',
                        ext: '.css'
                    }
                ],
                options: {                       
                    sourceMap: true,
                    outputStyle: 'nested',
                    sourceComments: true
                }
            }

        },

        watch: {
            configFiles:{
                files: ['Gruntfile.js'],
                options: {
                  reload: true
                }
            },
            css: {
                files: ['static/scss/{,*/}*.scss'],
                tasks: ['sass:dev'],
            },
            livereload: {
                files: ['*.html', '*.php', 'static/js/**/*.{js,json}', 'static/css/*.css','static/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            },
            hint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            }
        },


        jshint: {
            files: [
                  'Gruntfile.js',
                  'static/js/modules/*.js',
                  'static/js/modules/index/*.js'
                 ],
             options: {
                loopfunc: true,
                laxcomma: false,
                validthis: true
             }
        },

	  });

        grunt.loadNpmTasks('grunt-sass');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-notify');

		// Default task(s).
		grunt.registerTask('default', ['jshint' , 'sass:dev', 'watch']);

	};

}());