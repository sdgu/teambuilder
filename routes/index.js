var express = require('express');
var router = express.Router();


var moves = require("../public/data/moves");

var moveList = [];
for (var move in moves.BattleMovedex)
{
	console.log(move);
	moveList.push(moves.BattleMovedex[move]['name']);
}
console.log(moveList);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Teambuilder" });
});



module.exports = router;
