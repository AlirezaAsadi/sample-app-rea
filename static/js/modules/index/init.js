define(['jquery', 'angular','app'], function($, angular, app){


	/***********************************\
		 Mouse over method handler
	\***********************************/
	$(document).on('mouseover', '.property-wrapper', function(){
			$('.property-wrapper').find('.action').removeClass('active');
			$(this).find('.action').addClass('active');
	});
	
	/***********************************\
		 Property controller method
	\***********************************/
	app.controller('propertyCtl', ['$scope','$http', function($scope, $http) 
	{
		$http.post('/service/getData', null,{headers: {'Content-Type': 'application/json'} }).success(
			function(response) {
		    	$scope.allProperties = response.results;
		    	$scope.savedProperties = response.saved;
			}
		);
		
		/************************\
		  Add property method
		\************************/
		$scope.addProperty = function(property){
			// Check if property already added to the savedProperties
			var alreadyExist = false;
			var existProperty = $.map($scope.savedProperties, function(el){
				if(el.id == property.id)
					alreadyExist = true;
			});
			
			if(!alreadyExist)
				$scope.savedProperties.push(property);
		};
		
		
		/************************\
		  Remove property method
		\************************/
		$scope.removeProperty = function(property){
			// Remove property if exists in the savedProperty list
			$scope.savedProperties = $.grep($scope.savedProperties, function(el){
				return (el.id != property.id);
			});
		};
		
	}]);
	


	/***********************************\
		 Angular Bootstrap method
	\***********************************/
	angular.element(document).ready(function() { 
		angular.bootstrap(document, ['rea-sample-app']);
	});
});
