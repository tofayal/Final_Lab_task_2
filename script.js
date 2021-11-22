
"use strict"
	


function add(){
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	if(a == ""){
		document.getElementById('ans').innerHTML = "...";
	}else{
		document.getElementById('ans').innerHTML = "a+b";
	}
}
function sub(){
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	if(a == ""){
		document.getElementById('ans').innerHTML = "...";
	}else{
		document.getElementById('ans').innerHTML = "a-b";
	}
}
function mul(){
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	if(a == ""){
		document.getElementById('ans').innerHTML = "...";
	}else{
		document.getElementById('ans').innerHTML = "a*b";
	}
}
function div(){
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	if(a == ""){
		document.getElementById('ans').innerHTML = "...";
	}else{
		document.getElementById('ans').innerHTML = "a/b";
	}
}