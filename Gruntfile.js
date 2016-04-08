module.exports = function(grunt) {
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       uglify: {
         options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
         },
         build: {
            src: [
              'client/scripts/client.js',
              'client/scripts/controllers/*.js',
              'client/scripts/factories/*.js'
            ],
            dest: 'server/public/assets/scripts/app.min.js'
         }
       },
       copy: {
         angular : {
           expand: true,
           cwd: 'node_modules',
           src: [
              "angular/angular.min.js",
              "angular/angular.min.js.map",
              "angular-route/angular-route.min.js",
              "angular-route/angular-route.min.js.map",
              "sass/*"
            ],
            "dest": "server/public/assets/vendors/"
         },
       }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
