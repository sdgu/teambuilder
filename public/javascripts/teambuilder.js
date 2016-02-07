var app = angular.module("teambuilder", ["ui.router", "ngSanitize", "ngMaterial"]);

app.controller("MainCtrl", 
[
	"$scope",
	function($scope)
	{
		var firstMove = $scope.move1;
		$scope.move1 = firstMove;
	}
]);

app.config(function($stateProvider, $urlRouterProvider)
{
	$urlRouterProvider.otherwise("/home");

	$stateProvider.state("home",
	{
		url: "/home",
		templateUrl: "/views/partial-home.html"
	});

})