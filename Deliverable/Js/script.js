var t=0;
var mean_d = document.getElementById("mean");
var sample_d = document.getElementById("sample");
var sd_d = document.getElementById("sd");
var mad_d = document.getElementById("mad");
var cp_d = document.getElementById("cp");
var bn_d = document.getElementById("bn");
var rbar_d = document.getElementById("rbar");
var d3_d = document.getElementById("d3");
var d2_d = document.getElementById("d2");
var c4_d = document.getElementById("c4");
var sbar_d = document.getElementById("sbar");
var a_d = document.getElementById("a");
var b_d = document.getElementById("b");
function meaninputs(){
	sample_d.style.display="table-row"
	mean_d.style.display="table-row"
	sd_d.style.display="table-row"
	mad_d.style.display="table-row"
	cp_d.style.display="table-row"
	bn_d.style.display="table-row"
}
function display(t){
		mean_d.style.display="none"
		sample_d.style.display="none"
		sd_d.style.display="none"
		mad_d.style.display="none"
		cp_d.style.display="none"
		bn_d.style.display="none"
		rbar_d.style.display="none"
		d3_d.style.display="none"
		d2_d.style.display="none"
		c4_d.style.display="none"
		sbar_d.style.display="none"
		a_d.style.display="none"
		b_d.style.display="none"
	if( t == "mean")
	{
		sample_d.style.display="table-row"
		mean_d.style.display="table-row"
		sd_d.style.display="table-row"
		mad_d.style.display="table-row"
		cp_d.style.display="table-row"
		bn_d.style.display="table-row"
	}
	if( t == "range")
	{
		sample_d.style.display="table-row"
		mad_d.style.display="table-row"
		cp_d.style.display="table-row"
		rbar_d.style.display="table-row"
		bn_d.style.display="table-row"
		d3_d.style.display="table-row"
		d2_d.style.display="table-row"
	}
	if( t == "sdrange")
	{
		sample_d.style.display="table-row"
		mad_d.style.display="table-row"
		cp_d.style.display="table-row"
		sbar_d.style.display="table-row"
		c4_d.style.display="table-row"
		bn_d.style.display="table-row"
	}
	if( t == "meanrange")
	{
		sample_d.style.display="table-row"
		mean_d.style.display="table-row"
		mad_d.style.display="table-row"
		cp_d.style.display="table-row"
		rbar_d.style.display="table-row"
		d2_d.style.display="table-row"
		bn_d.style.display="table-row"
	}
	if( t == "meansd")
	{
		sample_d.style.display="table-row"
		mean_d.style.display="table-row"
		mad_d.style.display="table-row"
		cp_d.style.display="table-row"
		sbar_d.style.display="table-row"
		bn_d.style.display="table-row"
	}
	if( t == "meansdvarying")
	{
		sample_d.style.display="table-row"
		mean_d.style.display="table-row"
		mad_d.style.display="table-row"
		cp_d.style.display="table-row"
		sbar_d.style.display="table-row"
		c4_d.style.display="table-row"
		bn_d.style.display="table-row"
	}
	if( t == "reg")
	{
		sample_d.style.display="table-row"
		mad_d.style.display="table-row"
		cp_d.style.display="table-row"
		rbar_d.style.display="table-row"
		d2_d.style.display="table-row"
		bn_d.style.display="table-row"
		a_d.style.display="table-row"
		b_d.style.display="table-row"
	}
}
function displaytable(){
		var x = document.getElementById("chart").value;
		var y = document.getElementById("inputform");
		var samp = parseFloat(y.elements["samp"].value);
		var mean = parseFloat(y.elements["mean"].value);
		var sd = parseFloat(y.elements["sd"].value);
		var mad = parseFloat(y.elements["mad"].value);
		var cp = parseFloat(y.elements["cp"].value);
		var bn = parseFloat(y.elements["bn"].value);
		var rbar = parseFloat(y.elements["rbar"].value);
		var d3 = parseFloat(y.elements["d3"].value);
		var d2 = parseFloat(y.elements["d2"].value);
		var c4 = parseFloat(y.elements["c4"].value);
		var sbar = parseFloat(y.elements["sbar"].value);
		var a = parseFloat(y.elements["a"].value);
		var b = parseFloat(y.elements["b"].value);
		if( x == "mean")
		{
			var heading_1 = document.getElementById("result_0").innerHTML = "Mean Chart";
			var sq = Math.sqrt(samp);
			var a1 = mean + ((3*sd)/(sq));
			var a11 = a1.toFixed(2);
			var a2 = mean - ((3*sd)/(sq));
			var a22 = a2.toFixed(2);
			var a3 = a11 - a22;
			var a33 = a3.toFixed(2);
			var array = [
			["UCL",a11],
			["LCL",a22],
			["CL",a33]]
			table = document.getElementById("table");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array[i][j];
				}
			}
			var b1 = mean +((3*bn*mad)/sq)
			var b11 = b1.toFixed(2);
			var b2 = mean -((3*bn*mad)/sq)
			var b22 = b2.toFixed(2);
			var b3 = b11 - b22;
			var b33 = b3.toFixed(2);
			var array_1 = [
			["UCL",b11],
			["LCL",b22],
			["CL",b33]]
			table = document.getElementById("table_1");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_1[i][j];
				}
			}
			var c1 = mean + ((3*cp)/(sq));
			var c11 = c1.toFixed(2);
			var c2 = mean - ((3*cp)/(sq));
			var c22 = c2.toFixed(2);
			var c3 = c11 - c22;
			var c33 = c3.toFixed(2);
			var array_2 = [
			["UCL",c11],
			["LCL",c22],
			["CL",c33]]
			table = document.getElementById("table_2");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_2[i][j];
				}
			}
		}
		else if( x == "range")
		{
			var heading_1 = document.getElementById("result_0").innerHTML = "Range Chart";
			var a1 = rbar + ((3*d3*rbar)/(d2));
			var a11 = a1.toFixed(2);
			var a2 = rbar - ((3*d3*rbar)/(d2));
			var a22 = a2.toFixed(2);
			var array = [
			["UCL",a11],
			["LCL",a22],
			["CL",rbar]]
			table = document.getElementById("table");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array[i][j];
				}
			}
			var b1 = (((d2*bn*mad)/d3)+(3*bn*mad));
			var b11 = b1.toFixed(2);
			var b2 = (((d2*bn*mad)/d3)-(3*bn*mad));
			var b22 = b2.toFixed(2);
			var b3 = (d2*bn*mad)/d3;
			var b33 = b3.toFixed(2);
			var array_1 = [
			["UCL",b11],
			["LCL",b22],
			["CL",b33]]
			table = document.getElementById("table_1");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_1[i][j];
				}
			}
			var c1 = (((d2*cp)/d3)+(3*cp));
			var c11 = c1.toFixed(2);
			var c2 = (((d2*cp)/d3)-(3*cp));
			var c22 = c2.toFixed(2);
			var c3 = (d2*cp)/d3;
			var c33 = c3.toFixed(2);
			var array_2 = [
			["UCL",c11],
			["LCL",c22],
			["CL",c33]]
			table = document.getElementById("table_2");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_2[i][j];
				}
			}
		}
		else if( x == "sdrange")
		{
			var heading_1 = document.getElementById("result_0").innerHTML = "Standard Range Chart";
			var z = c4 * c4;
			var z1 = 1 - z;
			var sq = Math.sqrt(z);
			var a1 = sbar + ((3*sq*sbar)/(c4));
			var a11 = a1.toFixed(3);
			var a2 = sbar - ((3*sq*sbar)/(c4));
			var a22 = a2.toFixed(3);
			var array = [
			["UCL",a11],
			["LCL",a22],
			["CL",z]]
			table = document.getElementById("table");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array[i][j];
				}
			}
			var b1 = (c4*bn*mad)+(3*sq*bn*mad);
			var b11 = b1.toFixed(3);
			var b2 = (c4*bn*mad)-(3*sq*bn*mad);
			var b22 = b2.toFixed(3);
			var b3 = (c4*bn*mad);
			var b33 = b3.toFixed(3);
			var array_1 = [
			["UCL",b11],
			["LCL",b22],
			["CL",b33]]
			table = document.getElementById("table_1");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_1[i][j];
				}
			}
			var c1 = (c4*cp)+(3*sq*cp);
			var c11 = c1.toFixed(3);
			var c2 = (c4*cp)-(3*sq*cp);
			var c22 = c2.toFixed(3);
			var c3 = (c4*cp);
			var c33 = c3.toFixed(3);
			var array_2 = [
			["UCL",c11],
			["LCL",c22],
			["CL",c33]]
			table = document.getElementById("table_2");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_2[i][j];
				}
			}
		}
		else if( x == "meanrange")
		{
			var heading_1 = document.getElementById("result_0").innerHTML = "Mean using Range Chart";
			var sq = Math.sqrt(samp);
			var a1 = mean + ((3*rbar)/(sq*d2));
			var a11 = a1.toFixed(3);
			var a2 = mean - ((3*rbar)/(sq*d2));
			var a22 = a2.toFixed(3);
			var array = [
			["UCL",a11],
			["LCL",a22],
			["-","-"]]
			table = document.getElementById("table");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array[i][j];
				}
			}
			var b1 = mean + ((3*bn*mad)/(sq));
			var b11 = b1.toFixed(3);
			var b2 = mean - ((3*bn*mad)/(sq));
			var b22 = b2.toFixed(3);
			var array_1 = [
			["UCL",b11],
			["LCL",b22],
			["-","-"]]
			table = document.getElementById("table_1");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_1[i][j];
				}
			}
			var c1 = mean + ((3*cp)/(sq));
			var c11 = c1.toFixed(3);
			var c2 = mean - ((3*cp)/(sq));
			var c22 = c2.toFixed(3);
			var array_2 = [
			["UCL",c11],
			["LCL",c22],
			["-","-"]]
			table = document.getElementById("table_2");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_2[i][j];
				}
			}
		}
		else if( x == "meansd")
		{
			var heading_1 = document.getElementById("result_0").innerHTML = "Mean using Standard Chart";
			var sq = Math.sqrt(samp);
			var a1 = mean + ((3*sbar)/sq);
			var a11 = a1.toFixed(1);
			var a2 = mean - ((3*sbar)/sq);
			var a22 = a2.toFixed(1);
			var array = [
			["UCL",a11],
			["LCL",a22],
			["-","-"]]
			table = document.getElementById("table");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array[i][j];
				}
			}
			var b1 = mean + ((3*bn*mad)/(sq));
			var b11 = b1.toFixed(1);
			var b2 = mean - ((3*bn*mad)/(sq));
			var b22 = b2.toFixed(1);
			var array_1 = [
			["UCL",b11],
			["LCL",b22],
			["-","-"]]
			table = document.getElementById("table_1");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_1[i][j];
				}
			}
			var c1 = mean + ((3*cp)/(sq));
			var c11 = c1.toFixed(1);
			var c2 = mean - ((3*cp)/(sq));
			var c22 = c2.toFixed(1);
			var array_2 = [
			["UCL",c11],
			["LCL",c22],
			["-","-"]]
			table = document.getElementById("table_2");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_2[i][j];
				}
			}
		}
		else if( x == "meansdvarying")
		{
			var heading_1 = document.getElementById("result_0").innerHTML = "Mean using Standard Chart with varying";
			var sq = Math.sqrt(samp);
			var a1 = mean + ((3*sbar)/(c4*sq));
			var a11 = a1.toFixed(1);
			var a2 = mean - ((3*sbar)/(c4*sq));
			var a22 = a2.toFixed(1);
			var array = [
			["UCL",a11],
			["LCL",a22],
			["-","-"]]
			table = document.getElementById("table");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array[i][j];
				}
			}
			var b1 = mean + ((3*bn*mad)/sq);
			var b11 = b1.toFixed(1);
			var b2 = mean - ((3*bn*mad)/sq);
			var b22 = b2.toFixed(1);
			var array_1 = [
			["UCL",b11],
			["LCL",b22],
			["-","-"]]
			table = document.getElementById("table_1");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_1[i][j];
				}
			}
			var c1 = mean + ((3*cp)/(sq));
			var c11 = c1.toFixed(1);
			var c2 = mean - ((3*cp)/(sq));
			var c22 = c2.toFixed(1);
			var array_2 = [
			["UCL",c11],
			["LCL",c22],
			["-","-"]]
			table = document.getElementById("table_2");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_2[i][j];
				}
			}
		}
		else if( x == "reg")
		{
			var heading_1 = document.getElementById("result_0").innerHTML = "Regression Chart";
			var sq = Math.sqrt(samp);
			var a1 = (a + ((3*rbar)/(d2*sq)))+(b);
			var a11 = a1.toFixed(2);
			var a2 = (a - ((3*rbar)/(d2*sq)))+(b);
			var a22 = a2.toFixed(2);
			var array = [
			["UCL",a11],
			["LCL",a22],
			["-","-"]]
			table = document.getElementById("table");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array[i][j];
				}
			}
			var b1 = (a + ((3*bn*mad)/(sq)))+(b);
			var b11 = b1.toFixed(2);
			var b2 = (a - ((3*bn*mad)/(sq)))+(b);
			var b22 = b2.toFixed(2);
			var array_1 = [
			["UCL",b11],
			["LCL",b22],
			["-","-"]]
			table = document.getElementById("table_1");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_1[i][j];
				}
			}
			var c1 = (a + ((3*cp)/(sq)))+(b);
			var c11 = c1.toFixed(2);
			var c2 = (a - ((3*cp)/(sq)))+(b);
			var c22 = c2.toFixed(2);
			var array_2 = [
			["UCL",c11],
			["LCL",c22],
			["-","-"]]
			table = document.getElementById("table_2");
			for( var i = 0; i<table.rows.length; i++)
			{
				for( var j = 0; j<table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].innerHTML = array_2[i][j];
				}
			}
		}
}