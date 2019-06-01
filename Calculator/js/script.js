var n1,n2,calculate,res;

function update(n1){
	var t;
	t = document.getElementById("screen").value;
	document.getElementById("screen").value = t + n1;
}

function clearscreen(){
	document.getElementById("screen").value = '';
}

function add(){
	n1 = parseInt(document.getElementById("screen").value);
	calculate = 1;
	document.getElementById("screen").value = '';
}

function sub(){
	n1 = parseInt(document.getElementById("screen").value);
	calculate = 2;
	document.getElementById("screen").value = '';
}

function mul(){
	n1 = parseInt(document.getElementById("screen").value);
	calculate = 3;
	document.getElementById("screen").value = '';
}

function div(){
	n1 = parseInt(document.getElementById("screen").value);
	calculate = 4;
	document.getElementById("screen").value = '';
}

function result(){
switch(calculate){
	case 1: 
	n2 = parseInt(document.getElementById("screen").value);
	res = n1 + n2;
	document.getElementById("screen").value = res;
	break;
	
	case 2: 
	n2 = parseInt(document.getElementById("screen").value);
	res = n1 - n2;
	document.getElementById("screen").value = res;
	break;
	
	case 3: 
	n2 = parseInt(document.getElementById("screen").value);
	res = n1 * n2;
	document.getElementById("screen").value = res;
	break;
	
	case 4: 
	n2 = parseInt(document.getElementById("screen").value);
	res = n1 / n2;
	document.getElementById("screen").value = res;
	break;
}
}