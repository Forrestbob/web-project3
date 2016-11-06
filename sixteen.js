
var mario = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

function isAdjacentByIndex(index){
	console.log("ENTRY: isAdjacentByIndex");
	
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
	console.log("EXIT: isAdjacentByIndex");
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

function display(){
	console.log("ENTRY: display");
	document.getElementById("picture").innerHTML = "<tr><td>hi</td></tr>";
	
	
	
	
	console.log("EXIT: display");
}

























