var express = require('express');
var router = express.Router();


var moves = require("../public/data/moves");



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


module.exports = router;
