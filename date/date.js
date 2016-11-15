window.onload = function(){
	document.getElementById("data").addEventListener('click',function(e){
		e.preventDefault();
		document.getElementById("resultado").innerHTML = new Date();
		document.getElementById("resultado-time").innerHTML = new Date().getTime();
	});
}