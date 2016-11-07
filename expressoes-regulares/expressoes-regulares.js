var regExp= /99999-9999/;

window.onload = function(){

	document.querySelector("#btn-passo-1").addEventListener("click", function(e){
		e.preventDefault();
		validarTelefoneExec();
	});

}

/*exec*/
function validarTelefoneExec(){
	var telefone = document.querySelector("#telefone-passo-1").value;
	console.log(regExp.exec(telefone));
}

/*test*/
function validarTelefoneTest(){
	var telefone = document.querySelector("#telefone-passo-1").value;
	console.log(regExp.test(telefone));
}