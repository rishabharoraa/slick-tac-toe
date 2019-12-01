//SET TO 1 IF THERE IS A WIN/LOSS/TIE
//USED TO JAM THE WHOLE GRID AFTER A CONCLUSION
var flag = 0;

//RETURNS ID
function $(x) {
	return document.getElementById(x);
}

//SWITCHES CHANCE AFTER EACH PERSON'S TURN
var xy = "X";
function chance() {
	xy = (xy === "X") ? "O" : "X";
}

//THESE RETURN INDEX VALUE CORRESPINDING TO THE CELL CLICKED
//USED TO STORE CLICKED CELL'S DATA INTO GRID ARRAY
function x(str) {
	var a = str.charAt(0);
	switch(a) {
		case 'a':
			return 0;
		case 'b':
			return 1;
		case 'c':
			return 2;
		case 'd':
			return 3;
	}
}

function y(str) {
	var a = str.charAt(1);
	switch(a) {
		case 'a':
			return 0;
		case 'b':
			return 1;
		case 'c':
			return 2;
		case 'd':
			return 3;
	}
}

//THIS FUNCTION RESETS ALL CELLS TO NOTHING
function reset() {
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 4; j++) {
				grid[i][j] = null;
			}
		}
	    $('aa').innerHTML = '';
		$('ab').innerHTML = '';
		$('ac').innerHTML = '';
		$('ad').innerHTML = '';
		$('ba').innerHTML = '';
		$('bb').innerHTML = '';
		$('bc').innerHTML = '';
		$('bd').innerHTML = '';
		$('ca').innerHTML = '';
		$('cb').innerHTML = '';
		$('cc').innerHTML = '';
		$('cd').innerHTML = '';
		$('da').innerHTML = '';
		$('db').innerHTML = '';
		$('dc').innerHTML = '';
		$('dd').innerHTML = ''; 
		xy = "X";
		$("indicator").innerHTML = xy;
		$("result").innerHTML = "Undefined";
		flag = 0;
}

//THIS GRID STORES CELL DATA TO CHECK FOR WIN/LOSS/TIE
var aa = $('aa'),
	ab = $('ab'),
	ac = $('ac'),
	ad = $('ad'),
	ba = $('ba'),
	bb = $('bb'),
	bc = $('bc'),
	bd = $('bd'),
	ca = $('ca'),
	cb = $('cb'),
	cc = $('cc'),
	cd = $('cd'),
	da = $('da'),
	db = $('db'),
	dc = $('dc'),
	dd = $('dd');

var grid = [[aa,ab,ac,ad],
			[ba,bb,bc,bd],
			[ca,cb,cc,cd],
			[da,db,dc,dd]];

// FUNCTIONS THAT CHECK WIN/LOSS/TIE
function checkWinner() {
	checkHorz();
	checkVert();
	checkTie();
	checkDiag();
}

function checkHorz() {
	for(var i = 0; i < 4; i++) {
		if( grid[i][0] != null &&
			grid[i][0] === grid[i][1] &&
		    grid[i][0] === grid[i][2] &&
		    grid[i][0] === grid[i][3]) {
			$('result').innerHTML = grid[i][0]+" Wins!";
			flag++;
		}
    }
}

function checkTie() {
	if(	$('aa').innerHTML != '' &&
		$('ab').innerHTML != '' &&
		$('ac').innerHTML != '' &&
		$('ad').innerHTML != '' &&
		$('ba').innerHTML != '' &&
		$('bb').innerHTML != '' &&
		$('bc').innerHTML != '' &&
		$('bd').innerHTML != '' &&
		$('ca').innerHTML != '' &&
		$('cb').innerHTML != '' &&
		$('cc').innerHTML != '' &&
		$('cd').innerHTML != '' &&
		$('da').innerHTML != '' &&
		$('db').innerHTML != '' &&
		$('dc').innerHTML != '' &&
		$('dd').innerHTML != '' ) { $('result').innerHTML = "TIE" ; flag++} ;
}

function checkVert() {
	for(var i = 0; i < 4; i++) {
		if( grid[0][i] != null &&
			grid[0][i] === grid[1][i] &&
		    grid[0][i] === grid[2][i] &&
		    grid[0][i] === grid[3][i]) {
			$('result').innerHTML = grid[0][i]+" Wins!";
			flag++;
		}
    }	
}

function checkDiag() {
	if(grid[0][0] != null &&
		grid[0][0] === grid[1][1] &&
	    grid[0][0] === grid[2][2] &&
	    grid[0][0] === grid[3][3]){
		$('result').innerHTML = grid[0][0]+" Wins!";
		flag++;
	}
	else if(grid[0][3] != null &&
		grid[0][3] === grid[1][2] &&
	    grid[0][3] === grid[2][1] &&
	    grid[0][3] === grid[3][0]) {
		$('result').innerHTML = grid[0][3]+" Wins!";
		flag++;
	}
}

//MAIN DRIVER FUNCTION
function press(box) {
	if (flag != 0) {
		//pass
	}
	else if(box.innerHTML == '') {
		box.innerHTML = "<p>"+xy+"</p>"
		grid[x(box.id)][y(box.id)] = xy;
		chance();
		$("indicator").innerHTML = xy;
	}
	checkWinner();
	console.log(grid[0]);
	console.log(grid[1]);
	console.log(grid[2]);
	console.log(grid[3]);
	console.log("--------------")
}
