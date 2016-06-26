var require={
    waitSeconds: 60,
    baseUrl: "/js",
    paths: {
        // Main app for angular
        app: 'modules/app',
        
        // Mapping angular file
        angular:              'vendors/angular.min'
    },
    shim: {
        angular: {
                        exports: 'angular'
                 }
    },
    dep: ['app']
};