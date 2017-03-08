var carros = new Array();

function add(carro){
	if(carro.carro != ""){
		carros.push(carro);
		atualizaTabela();
	}
}

function addSplice(carro){
	if(carro.carro != ""){
		carros.splice(carros.length, 0, carro);
		atualizaTabela();
	}
}

function update(indice, carro){
	carros.splice(indice, 1, carro);
	atualizaTabela();
}

function remove(indice){
	if(confirm("Deseja Deletar")){
		carros.splice(indice, 1);
		atualizaTabela();
	}
}

function atualizaTabela(){
	document.querySelector("table").innerHTML = percorre();
}

function percorre(){
	var html = '';
	for (var i = 0; i < carros.length; i++) {
		html += '<tr>'+
					'<td>'+(i+1)+'</td>'+
					'<td>'+carros[i].carro+'</td>'+
					'<td>'+carros[i].preco+'</td>'+
					'<td><span class="change-cursor label label-warning" onclick="preparaParaAtualizar('+i+')">Alterar</span><span class="change-cursor label label-danger" onclick="remove('+i+')">Excluir</span></td>'+
				'</tr>';
	}
	return html;
}

function percorreForEach(){
	var html = '';
	carros.forEach(function(carro){
		html += '<tr>'+
					'<td>'+carro.carro+'</td>'+
					'<td>'+carro.preco+'</td>'+
					'<td><span class="label label-warning">Alterar</span><span class="label label-danger">Excluir</span></td>'+
				'</tr>';
	});
	return html;
}

function log(mensagem){
	console.log(mensagem);
}

function preparaParaAtualizar(indice){
	let carroParaAtualizar = carros[indice];
	document.querySelector("#btn-adiciona").style.display = "none";
	document.querySelector("#btn-atualiza").style.display = "inline-block";
	document.querySelector("#carro").value = carroParaAtualizar.carro;
	document.querySelector("#preco").value = carroParaAtualizar.preco;
	document.querySelector("#indice").value = indice;
}