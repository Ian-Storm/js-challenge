var number = -1;
var title = document.getElementById("title");
var text = document.getElementById("text");
var awnsers = [];

function start(){
	document.getElementById("start").style.display = "none";
	document.getElementById("back").style.display = "inline";
		document.getElementById("back").onclick = function(){awnser()};
	document.getElementById("yes").style.display = "inline";
		document.getElementById("yes").onclick = function(){awnser()};
	document.getElementById("idk").style.display = "inline";
		document.getElementById("idk").onclick = function(){awnser()};
	document.getElementById("no").style.display = "inline";
		document.getElementById("no").onclick = function(){awnser()};
	document.getElementById("skip").style.display = "inline";
		document.getElementById("skip").onclick = function(){awnser()};
	document.getElementById("title").style.display = "inline";
	document.getElementById("text").style.display = "inline";
}

function awnser(){
	console.log("hallo")
}