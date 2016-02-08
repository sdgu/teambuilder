

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
	// this.findRel = function(query, source)
	// {
	// 	var relevant = "<table>";

	// 	for (var i = 0; i < source.length; i++)
	// 	{
	// 		if (source[i].id.contains(query))
	// 	}





	// 	var relevant += "</table>";
	// }

});


app.controller("MainCtrl", 
[
	"$scope",
	"dex",
	function($scope, dex)
	{

		$scope.test = "thing";
		var firstMove = $scope.move1;
		$scope.move1 = firstMove;

		var movelist = dex.getAll("/movelist");

		var numKeyStrokes = 0;

		$scope.findRelMoves = function(e)
		{
			

			$scope.m.moveDex = [];


			//the move you're looking for
			var q = $scope.move1;

			for (var i = 0; i < movelist.length; i++)
			{
				if (movelist[i].id.contains(q) || movelist[i].name.toLowerCase().contains(q))
				{
					if (q.length >= 2)
					{
						$scope.m.moveDex.push(movelist[i]);
					}
				}
			}


		}

		$scope.fillInput = function(name)
		{
			$scope.move1 = name;
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

});
