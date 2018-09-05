'use strict';

angular.module('ticketApp').config(function($routeProvider) {
	$routeProvider
	.when('/test', {
		templateUrl: '<p>TEST PAGE</p>'
	})

	.otherwise ({ 
		redirectTo: '/'
	});
});