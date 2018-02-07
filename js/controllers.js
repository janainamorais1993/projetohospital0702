let app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/alertas',{
		templateUrl: '../alertas.html',
		controller: 'AlertasCtrl'
	})
	.when('/consultas', {
        templateUrl : '../consultas.html'
  	 })
	.when('/remedios',{
		templateUrl: '../remedios.html',
	})

	/*$routeProvider.otherwise({ redirectTo: '/index'});*/

});





