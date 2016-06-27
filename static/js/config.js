var require={
    waitSeconds: 60,
    baseUrl: "/js",
    paths: {
        // Main app for angular
        app:         'modules/app',
        
        // Mapping angular/jquery file
        angular:     'vendors/angular.min',
        jquery:      'vendors/jquery-3.0.0.min',
        
        
        // Jasmin files
        jasmine:     'vendors/testing/jasmine.min',
        jasmine_html:'vendors/testing/jasmine-html.min',
        jasmine_boot:'vendors/testing/boot.min',
        angular_moack:'vendors/testing/angular-mocks'
    },
    shim: {
        angular: {
                        exports: 'angular'
        },
        jasmine_html: {
                        deps : ['jasmine'],
                        exports: 'jasmine_html'
        },
        jasmine_boot: {
                        deps : ['jasmine', 'jasmine_html'],
                        exports: 'jasmine_boot'
        },
        angular_moack: {
                        deps : ['jasmine_boot'],
                        exports: 'angular_moack'
        }
    },
    dep: ['app']
};