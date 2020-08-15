	
	function calcsalario() {
	let nome = document.getElementById('nome');
    let vhora = document.getElementById('vhora');
    let qhora = document.getElementById('qhora');
    let imposto = document.getElementById('imposto');
    let salbruto = document.getElementById('salbruto');
    let salliquido = document.getElementById('salliquido')
	
    if (nome.value.length != 0 && vhora.value.length != 0 && qhora.value.length != 0) {
		var bruto = parseFloat(vhora.value * qhora.value);
		salbruto.value = bruto;
		var bloqueio = 0;
		if(bruto > 55976.16){
			var bloqueio = 1;
			impostos = 10432.32;
		}
		if(bloqueio == 0 && bruto > 45012.61){
			var bloqueio = 1;
			impostos = 7633.51;
		}
		if(bloqueio == 0 && bruto > 33919.81){
			var bloqueio = 1;
			impostos = 4257.57;
		}
		if(bloqueio == 0 && bruto > 22847.77){
			var bloqueio = 1;
			impostos = 1713.58;
		}
		if(bloqueio == 0 && bruto < 22847.76){
			var bloqueio = 1;
			impostos = 0;
		}
		salliquido.value = bruto - impostos;
		imposto.value = impostos;
	}else{
		alert("Alguns campos estão faltando!");
	}
	}
	
	function apagar() {
	let nome = document.getElementById('nome');
    let vhora = document.getElementById('vhora');
    let qhora = document.getElementById('qhora');
    let imposto = document.getElementById('imposto');
    let salbruto = document.getElementById('salbruto');
    let salliquido = document.getElementById('salliquido')
	nome.value = "";
	vhora.value = "";
	qhora.value = "";
	imposto.value = "";
	salbruto.value = "";
	salliquido.value = "";
	}