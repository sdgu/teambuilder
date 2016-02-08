var app = angular.module("teambuilder", ["ui.router", "ngSanitize", "ngMaterial"]);


// app.factory("movedex", function($http)
// {
// 	var o = 
// 	{
// 		movedex: []
// 	}

// 	o.getAll = function()
// 	{
	    
// 	    return $http.get("/movelist").success(function(data)
// 	    {
// 	      //alert("getAllInReturn");
// 	      angular.copy(data, o.movedex);
// 	    });
// 	}
//   	return o;
// });

app.service("dex", function()
{
	var dex = [];

	this.getAll = function(url)
	{
		$.ajax(
		{
			url: url,
			async: false,
			success: function(data)
			{
				dex = data;
			}
		});
		return dex;
	}

	//the word you are looking for, the array aka the dex
	this.findRel = function(query, source)
	{
		var relevant = "<table>";

		for (var i = 0; i < source.length; i++)
		{
			if (source[i].id.contains(query) || )
		}












		var relevant += "</table>";
	}

})


app.controller("MainCtrl", 
[
	"$scope",
	"dex",
	function($scope, dex)
	{
		var firstMove = $scope.move1;
		$scope.move1 = firstMove;

		var movelist = dex.getAll("/movelist");

		$scope.findRelMoves = function(e)
		{
			var q = $scope.move1;
			var relevantMoves = "<table>";
			for (var i = 0; i < movelist.length; i++)
			{

				if (movelist[i].id.contains(q) || movelist[i].name.toLowerCase().contains(q))
				{
					relevantMoves += '<tr>';

					relevantMoves += '<td>';
					relevantMoves += movelist[i].name;
					relevantMoves += '</td>';

					relevantMoves += '</tr>';




					
				}
			}
			relevantMoves += "</table>";
			$scope.relMoves = relevantMoves;

		}


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