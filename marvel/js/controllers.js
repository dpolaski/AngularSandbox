angular.module('mainApp').controller('CharController', function($scope, CharacterFactory) {
	$scope.chars = CharacterFactory.getCharacters().then(function(response){
		$scope.chars = response.data.data.results;
	    }, function(error){
		$scope.status = 'Unable to load customer data: ' + error.message;
	    });	
    });
