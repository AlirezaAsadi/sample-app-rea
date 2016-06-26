var require={
    waitSeconds: 60,
    baseUrl: "/js",
    paths: {
        // Main app for angular
        app:         'modules/app',
        
        // Mapping angular/jquery file
        angular:     'vendors/angular.min',
        jquery:      'vendors/jquery-3.0.0.min'
    },
    shim: {
        angular: {
                        exports: 'angular'
                 }
    },
    dep: ['app']
};