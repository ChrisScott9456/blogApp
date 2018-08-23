var blogApp = angular.module('blogApp', []);

blogApp.controller('blogCtrl', ['$scope', function($scope){

	$scope.tests = [];

	for(var i = 1; i <= 5; i++){
		$scope.tests[i] = i;
	}

}]);