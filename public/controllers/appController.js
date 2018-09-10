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

	//Button to CREATE Post
	$scope.postButton = function() {
		var postJSON = {
			_id: $scope.formID,
			comments: $scope.formComments
		};

		return $http.post('/createPost', postJSON).then(function(res) {
			console.log(res);
		});
	};

	//Button to GET Post
	$scope.getButton = function() {
		if($scope.formID){
		return $http.get('/getPost/' + $scope.formID).then(function(res) {
			console.log(res.data);

			$scope.postFields = res.data;
		});
		}else {
			console.log("Please insert an ID!");
		}
	};

}]);