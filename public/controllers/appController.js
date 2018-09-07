const ticketApp = angular.module('ticketApp', ['ngRoute', 'ngMaterial']);


/******************************AngularJS Routing******************************/

ticketApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/post', {
			templateUrl: '/views/postBody.html',
		})

	$locationProvider.html5Mode(true);
}]);


/******************************AngularJS Controller******************************/

ticketApp.controller('ticketCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.postButton = function() {
		console.log('Test button click');
		var testJSON = {_id: 1};
		return $http.post('/createPost', testJSON).then(function(res) {
			console.log(res);
		});
	};
}]);