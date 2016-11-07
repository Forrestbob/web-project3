
var mario = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

var BACKGROUND = "url('puzzle.jpg')";

function isAdjacentByIndex(index){
	//console.log("ENTRY: isAdjacentByIndex");
	
	var adj = false;
	var zeroLoc = 0;
	
	for (var i = 0; i < mario.length; i++) {
		if (mario[i] == 0){
			zeroLoc = i;
		}
	}
	
	if (index == 3 || index == 7 || index == 11){
		if (index - zeroLoc == 1 || Math.abs(index - zeroLoc) == 4){			//-4, -1, or +4
			adj = true;
		}
	}
	else if (index == 4 || index == 8 || index == 12){
		if (index - zeroLoc == -1 || Math.abs(index - zeroLoc) == 4){			//-4, 1, or +4
			adj = true;
		}
	}
	else{
		if (Math.abs(index - zeroLoc) == 1 || Math.abs(index - zeroLoc) == 4){	//-4, -1, +1, or +4
			adj = true;
		}
	}
	//console.log("EXIT: isAdjacentByIndex");
	return adj;
}

function isAdjacentByValue(number){
	
	var adj = false;
	var zeroLoc = 0;
	var index = 0;
	
	for (var i = 0; i < mario.length; i++) {
		if (mario[i] == 0){
			zeroLoc = i;
		}
		if (mario[i] == number){
			index = i;
		}
	}
	
	if (index == 3 || index == 7 || index == 11){
		if (index - zeroLoc == 1 || Math.abs(index - zeroLoc) == 4){			//-4, -1, or +4
			adj = true;
		}
	}
	else if (index == 4 || index == 8 || index == 12){
		if (index - zeroLoc == -1 || Math.abs(index - zeroLoc) == 4){			//-4, 1, or +4
			adj = true;
		}
	}
	else{
		if (Math.abs(index - zeroLoc) == 1 || Math.abs(index - zeroLoc) == 4){	//-4, -1, +1, or +4
			adj = true;
		}
	}
	return adj;
}

function swapByIndex(a){	//swaps an element with the 0 cell by index
	//console.log("ENTRY: swapByIndex");
	var zeroLoc = 0;
	
	for (var i = 0; i < mario.length; i++) {
		if (mario[i] == 0){
			zeroLoc = i;
		}
	}
	var a_value = mario[a];
	
	mario[zeroLoc] = a_value; 
	mario[a] = 0;
	//console.log("EXIT: swapByIndex");
}

function randomize(){		//this will always create a solvable result
	console.log("ENTRY: randomize");
	var swaps = 0;
	
	//printArray();
	
	while (swaps < 1000) {	//1000 swaps
		var randNum = Math.floor((Math.random() * 16));	// between [0,15] (inclusive)
		if (isAdjacentByIndex(randNum)){
			swapByIndex(randNum);
			swaps++;
		}
	}
	console.log("EXIT: randomize");
	//printArray();
}

function printArray(){
	var arr = "";
	for(var i = 0; i < mario.length; i++){
		arr += mario[i] + " ";
	}
	console.log(arr);
}

function getBackgroundPosition(value){
	var arr = 	["-300px -300px", //blank space
				"0px 0px", "-100px 0px", "-200px 0px", "-300px 0px", 
				"0px -100px", "-100px -100px", "-200px -100px", "-300px -100px",
				"0px -200px", "-100px -200px", "-200px -200px", "-300px -200px", 
				"0px -300px", "-100px -300px", "-200px -300px"
				];
				
	return arr[value];
}

function getTileIndex(position){	//takes in a string such as "23" - row 2 column 3
	var index = 0;					//returns index of mario[]
	var arr = position.split("");
	x_dim = parseInt(arr[0]);
	y_dim = parseInt(arr[1]);
	var i = 0;
	for (var x = 1; x <= 4; x++){
		for (var y = 1; y <= 4; y++){
			if (x == x_dim && y == y_dim){
				index = i;
			}
			i++;
		}
	}
	return index;
}

function display(){		//initially display the puzzle in correct order
	console.log("ENTRY: display");
	var temp = "";
	temp += "<tr>";
	var x = 1;
	var y = 1;
	for(var i = 0; i < mario.length; i++){

		if(i%4 == 0 && i != 0){
			temp += "</tr>";
			temp += "<tr>";
			y = 1;
			x++;
		}
		temp += "<td id = '" + x + y + "'>" + mario[i] + "</td>";
		y++;
	}
	temp += "</tr>";
	document.getElementById("picture").innerHTML = temp;
	
	//randomize();
	redisplay(); //remove
	
	console.log("EXIT: display");
}

function redisplay(){
	//console.log("ENTRY: redisplay");
	var i = 0;
	for (var x = 1; x <= 4; x++){
		for (var y = 1; y <= 4; y++){
			var xy = x.toString() + y.toString();
			if (mario[i] == 0){		//removing background for empty space
				document.getElementById(xy).style.backgroundImage = "none";
				document.getElementById(xy).style.backgroundColor = "black";
			}
			else {
				document.getElementById(xy).style.backgroundImage = BACKGROUND;
			}
			
			var hover = "#" + xy;
			$(hover).removeClass("clickable");
			if(isAdjacentByIndex(i)){	//make adjacent tiles clickable and hover
					$(hover).addClass("clickable");
			}
			//set background position
			document.getElementById(xy).style.backgroundPosition = getBackgroundPosition(mario[i]);
			i++;
		}
	}
	
	$(".clickable").click(function(){	//make adjacent tiles clickable
		if (isAdjacentByIndex(getTileIndex(this.id))){
			swapByIndex(getTileIndex(this.id));
			redisplay();
			console.log("click!");
		}
	});
	
	//console.log("EXIT: redisplay");
}

/*								//only works once
$(document).ready(function(){
	$(".clickable").click(function(){
		console.log("click!");
		//console.log(getTileValue(this.id));
		swapByIndex(getTileIndex(this.id));
		redisplay();
	});
});
*/



















