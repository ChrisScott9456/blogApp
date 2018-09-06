const ticketApp = angular.module('ticketApp', ['ngRoute']);

ticketApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/test', {
			templateUrl: '/views/test.html',
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