define(['angular','app', 'angular_moack','modules/index/init'], function(angular, app, moack){
    beforeEach(angular.mock.module("rea-sample-app"))

    describe('propertyCtl', function() {
       
        // Check addProperty method
        describe('$scope.addProperty', function() {
            it('add property to the savedProperty list, if savedProperty list contains the property just added to', inject(function($controller) {
                var $scope = {
                    allProperties : [{
                      id: 1,
                      price: 0  
                    },{
                      id: 2,
                      price: 0  
                    },{
                      id: 3,
                      price: 0  
                    }],
                    savedProperties : [{
                      id: 4,
                      price: 0  
                    }]
                };
            var controller = $controller('propertyCtl', { $scope: $scope });
            var property = $scope.allProperties[2];
            $scope.addProperty(property);
            expect($scope.savedProperties).toContain(property);
            }));
        });
        
        
        // Check removeProperty method
        describe('$scope.removeProperty', function() {
            it('add property to the savedProperty list, then remove it, if savedProperty list NOT contains the property just removed from', inject(function($controller) {
                var $scope = {
                    allProperties : [{
                      id: 1,
                      price: 0  
                    },{
                      id: 2,
                      price: 0  
                    },{
                      id: 3,
                      price: 0  
                    }],
                    savedProperties : [{
                      id: 4,
                      price: 0  
                    }]
                };
            var controller = $controller('propertyCtl', { $scope: $scope });
            var property = $scope.allProperties[2];
            $scope.addProperty(property);
            $scope.removeProperty(property);
            expect($scope.savedProperties).not.toContain(property);
            }));
        });
        
        
        // Check removeProperty method
        describe('$scope.removeProperty', function() {
            it('remove property from the savedProperty list, if savedProperty list does not have any member', inject(function($controller) {
                var $scope = {
                    savedProperties : [{
                      id: 4,
                      price: 0  
                    }]
                };
            var controller = $controller('propertyCtl', { $scope: $scope });
            var property = $scope.savedProperties[0];
            $scope.removeProperty(property);
            expect($scope.savedProperties.length).toBe(0);
            }));
        });
    });
	
    // Trigger jasmine
	window.onload();

});
