module.exports = function(grunt){
    //Project configuration for Heroku_Micro_Set.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        includeSource: {

        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/app.js',
                dest:'public/javascripts/app.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    //{
                    //    expand: true,
                    //    cwd: "node_modules/bootstrap/dist/css/",
                    //    src: [
                    //        "bootstrap.css",
                    //        "bootstrap.css.map",
                    //        "bootstrap.min.css",
                    //        "bootstrap-theme.css",
                    //        "bootstrap-theme.css.map",
                    //        "bootstrap-theme.min.css"
                    //    ],
                    //    "dest": "server/public/vendor/bootstrap/css_js"
                    //},
                    {
                        expand: true,
                        cwd: "node_modules/jquery/dist",
                        src: [
                            "jquery.min.js",
                            "jquery.min.map"
                        ],
                        "dest": "javascripts/"
                    },
                    //{
                    //    expand: true,
                    //    cwd: "node_modules/bootstrap/dist/js",
                    //    src: [
                    //        "bootstrap.min.js"
                    //    ],
                    //    "dest": "server/public/vendor/bootstrap/css_js"
                    //},
                    {
                        expand: true,
                        cwd: "client/",
                        src: [
                            "style.css"
                        ],
                        "dest": "styleheets/"
                    },
                    {
                        expand: true,
                        cwd: "client/",
                        src: [
                            "app.js"
                        ],
                        "dest": "javascripts/"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-include-source');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};