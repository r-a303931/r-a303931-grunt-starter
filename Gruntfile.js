module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ts : {
			options : {
				noImplicitAny: true,
				target: 'es5',
				comments: false,
				allowUnreachableCode: false,
				allowUnusedLables: false,
				decleration: false,
				sourceMap: false
			},
			server : {
				src: [
					'src/**/*.ts'
				],
				outDir : 'dist',
			}
		},
		watch : {
			project: {
				files: ['src/**/*.ts'],
				tasks: ['ts']
			}
		},
		jshint : {
			all : [
				'Gruntfile.js'
			]
		},
		tslint : {
			files : {
				src: [
					"src/**/*.ts"
				]
			}
		},
		jest : {
			options: {
				coverage: true,
				testPathPattern: /.*.test.ts/
			}
		}
	});

	grunt.loadNpmTasks('grunt-jest');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-tslint');

	grunt.registerTask('compile', ['ts']);
	grunt.registerTask('develop', ['watch']);
	grunt.registerTask('test', ['jshint', 'tslint', 'jest']);
	grunt.registerTask('default', ['compile', 'test']);
};