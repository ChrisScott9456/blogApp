const ticketApp = angular.module('ticketApp', ['ngRoute', 'ngMaterial']);

ticketApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/post', {
			templateUrl: '/views/postBody.html',
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);
}]);


ticketApp.controller('ticketCtrl', ['$scope', function($scope){
	$scope.tests = [];

	$scope.tests[0] = 0;
	$scope.tests[1] = 1;
	$scope.tests[2] = 2;
	
}]);