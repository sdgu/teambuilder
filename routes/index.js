var express = require('express');
var router = express.Router();


var moves = require("../public/data/moves");
var pokes = require("../public/data/pokedex");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Teambuilder" });
});

router.get("/movelist", function(req, res, next)
{
	var moveList = [];
	for (var move in moves.BattleMovedex)
	{
		//console.log(move);
		moveList.push(moves.BattleMovedex[move]);
	}
	//console.log(moveList);
	res.send(moveList);
});

router.get("/pokedex", function(req, res, next)
{
	var pokedex = [];
	for (var mon in pokes.BattlePokedex)
	{
		delete pokes.BattlePokedex[mon]['heightm'];
		delete pokes.BattlePokedex[mon]['weightkg'];
		delete pokes.BattlePokedex[mon]['genderRatio'];
		delete pokes.BattlePokedex[mon]['eggGroups'];
		delete pokes.BattlePokedex[mon]['color'];
		delete pokes.BattlePokedex[mon]['evos'];
		delete pokes.BattlePokedex[mon]['prevo'];
		delete pokes.BattlePokedex[mon]['evoLevel'];
		pokedex.push(pokes.BattlePokedex[mon]);

	}
	res.send(pokedex);
});

module.exports = router;
