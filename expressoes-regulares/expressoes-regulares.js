var regExp= /99999-9999/;

window.onload = function(){
	document.querySelector("#valorDeTeste").value;
	document.querySelector("#validaRegExp").addEventListener("click", function(e){
		e.preventDefault();
		var regExp = document.querySelector("#regExp").value;
		console.log(regExp);
		validarTelefoneTest(regExp, "valorDeTeste");
	});
}

/*exec*/
function validarTelefoneExec(regExp, idComponente){
	var telefone = document.querySelector("#"+idComponente).value;
	console.log(regExp.exec(telefone));
}

/*test*/
function validarTelefoneTest(regExp, idComponente){
	var telefone = document.querySelector("#"+idComponente).value;
	var r = new RegExp(regExp);
	console.log(r.test(telefone));
}