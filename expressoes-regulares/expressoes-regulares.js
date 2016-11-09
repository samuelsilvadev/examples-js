var regExp= /99999-9999/;

window.onload = function(){

	document.querySelector("#btn-passo-1").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneExec(/99999-9999/, "telefone-passo-1");		
	});

	document.querySelector("#btn-passo-2").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneTest(/\(48\) 99999-9999/, "telefone-passo-2");
	});

	document.querySelector("#btn-passo-3").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneTest(/\(48\) 99999-9999/, "telefone-passo-3");
	});

	document.querySelector("#btn-passo-4").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneTest(/^\([0-9][0-9]\) [0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/, "telefone-passo-4");
	});

	document.querySelector("#btn-passo-5").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneTest(/^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/, "telefone-passo-5");
	});

	document.querySelector("#btn-passo-6").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneTest(/^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/, "telefone-passo-6");
	});

	document.querySelector("#btn-passo-7").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneTest(/^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/, "telefone-passo-7");
	});

	document.querySelector("#btn-passo-9").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneTest(/^\(\d2}\)\s\d{4,5}-?\d{4}$/, "telefone-passo-9");
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
	console.log(regExp.test(telefone));
}