var t=0;
xy = "rangegsr";
function load(s){
		
		if( t == 0 && xy != "rangegsr")
		{
			
		}
		else if ( t >=1)
		{
			var clear = document.getElementById("first");
			var parents = clear.parentNode;
			parents.removeChild(clear);
		}		
}

function displaytable(){
		var x = document.getElementById("chart").value;
		var y = document.getElementById("inputform");
		var sample = parseFloat(y.elements["sample"].value);
		var mean = parseFloat(y.elements["mean"].value);
		var sd = parseFloat(y.elements["sd"].value);
		var mad = parseFloat(y.elements["mad"].value);
		var cp = parseFloat(y.elements["cp"].value);
		var bn = parseFloat(y.elements["bn"].value);
		if( x == "meankw")
		{
			t = 1;
			var a1 = mean + (sd * sample);
			var a2 = mean - (sd * sample);
			var a3 = cp;
			var b1 = mad + (sd * sample);
			var b2 = mad - (sd * sample);
			var b3 = bn;
			var c1 = cp + (sd * bn);
			var c2 = cp - (sd * bn);
			var c3 = sd;
			var array = [
			["","Shewhart","Cp","Ld"],
			["LCI",a1,a2,a3],
			["UC",b1,b2,b3],
			["UCL",c1,c2,c3]
			];
			var table = "";
			var rows = 4;
			var cols = 4;
			
			var heading = document.getElementById("result").innerHTML="KW Chart for Mean";
			var main = document.getElementById("output");
			var tb = document.createElement("table");
			tb.setAttribute("id","first");
			var tbbody = document.createElement("tbody");
			
			for(var r = 0;r<rows;r++)
			{
				var trow = document.createElement("tr");
				for(var c = 0;c<cols;c++)
				{
					var tcol = document.createElement("td");
					var tdata = document.createTextNode(array[r][c]);
					
					tcol.appendChild(tdata);
					trow.appendChild(tcol);
				}
				tbbody.appendChild(trow);
			}
			tb.appendChild(tbbody);
			main.appendChild(tb);
			tb.setAttribute("border", "2");
			tb.setAttribute("width", "100%");
			console.log(t);
		}
		if( x == "rangegsr")
		{
			t=1;
			var bj = mean * mean;
			var a1 = bj - (mean + (sd * sample));
			var a2 = mean + (sd * sample);
			var a3 = cp;
			var b1 = bj - (mad + (sd * sample));
			var b2 = mad + (sd * sample);
			var b3 = bn;
			var c1 = bj - (cp + (sd * bn));
			var c2 = cp + (sd * bn);
			var c3 = sd;
			var array = [
			["","Shewhart","Cp","Ld"],
			["LCI",a1,a2,a3],
			["UC",b1,b2,b3],
			["UCL",c1,c2,c3]
			];
			var table = "";
			var rows = 4;
			var cols = 4;
			
			var heading = document.getElementById("result").innerHTML="GSR Chart for Range";
			var main = document.getElementById("output");
			var tb = document.createElement("table");
			tb.setAttribute("id","first");
			var tbbody = document.createElement("tbody");
			
			for(var r = 0;r<rows;r++)
			{
				var trow = document.createElement("tr");
				for(var c = 0;c<cols;c++)
				{
					var tcol = document.createElement("td");
					var tdata = document.createTextNode(array[r][c]);
					
					tcol.appendChild(tdata);
					trow.appendChild(tcol);
				}
				tbbody.appendChild(trow);
			}
			tb.appendChild(tbbody);
			main.appendChild(tb);
			tb.setAttribute("border", "2");
			tb.setAttribute("width", "100%");
		}
		console.log(x);
}