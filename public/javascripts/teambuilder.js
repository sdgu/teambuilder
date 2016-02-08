

var app = angular.module("teambuilder", ["ui.router", "ngSanitize", "ngMaterial"]);



app.factory("dex", function($http)
{
	var obj = 
	{
		dex: []
	};


	obj.getAll = function()
	{
		$http.get("/movelist").success(function(data)
		{
			angular.copy(data, obj.dex);
		});
	}
	return obj;
});

// app.service("dex", function($http)
// {
// 	var dex = [];

// 	this.getAll = function(url)
// 	{
// 		// $.ajax(
// 		// {
// 		// 	url: url,
// 		// 	async: false,
// 		// 	success: function(data)
// 		// 	{
// 		// 		dex = data;
// 		// 	}
// 		// });
// 		// return dex;


// 		//trying to use $http instead of synchronous jquery
// 		// return $http.get("/movelist").success(function(data)
// 		// {
// 		// 	return data;
// 		// });
// 	}
// 	//return dex;

// 	//the word you are looking for, the array aka the dex
// 	// this.findRel = function(query, source)
// 	// {
// 	// 	var relevant = "<table>";

// 	// 	for (var i = 0; i < source.length; i++)
// 	// 	{
// 	// 		if (source[i].id.contains(query))
// 	// 	}





// 	// 	var relevant += "</table>";
// 	// }

// });


app.controller("MainCtrl", 
[
	"$scope",
	"dex",
	function($scope, dex)
	{

		$scope.test = "thing";
		var firstMove = $scope.move1;
		$scope.move1 = firstMove;

		//var movelist = dex.getAll("/movelist");
		
		var movelist = dex.dex;
		

		var currentInput = "";

		$scope.findRelMoves = function(e)
		{

			currentInput = e.target.id;
			//e.target.id
			//$scope[e.target.id]
			$scope.m.moveDex = [];


			//the move you're looking for
			var q = $scope[currentInput];

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
			$scope[currentInput] = name;
		}


	}
]);

app.config(function($stateProvider, $urlRouterProvider)
{
	$urlRouterProvider.otherwise("/home");

	$stateProvider.state("home",
	{
		url: "/home",
		templateUrl: "/views/partial-home.html",
		controller: "MainCtrl as m",
		resolve:
      	{
        	postPromise: ["dex", function(dex)
        	{
          		return dex.getAll();
        	}]
      }
	});

});
