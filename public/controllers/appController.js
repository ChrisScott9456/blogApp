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
		var postJSON = {_id: 1};

		return $http.post('/createPost', postJSON).then(function(res) {
			console.log(res);
		});
	};

	$scope.getButton = function() {
		var getID = 1;

		return $http.get('/getPost/' + getID).then(function(res) {
			console.log(res);
		});
	};

}]);