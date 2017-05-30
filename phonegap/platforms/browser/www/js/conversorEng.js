// Formatar números
function numberFormat(n) {
	var parts=n.toString().split(".");
	return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (parts[1] ? "," + parts[1] : "");
}

function numberFormatUS(n) {
	return n;
}

$(document).ready(function() {

	// CONVERTER PESO
	$("#eng-btn-converter-peso").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-peso").val();
		unidadesPesoDe = $("#unidadesPesoDe").val();
		unidadesPesoPara = $("#unidadesPesoPara").val();
		// converter de "libras"
		if (unidadesPesoDe == "lb")
			if (unidadesPesoPara == "lb")
				$("#engResultadoPeso").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPesoPara == "kg")
				$("#engResultadoPeso").text(formato((valor*0.45359237).toFixed(decimal)));
			else if (unidadesPesoPara == "oz")
				$("#engResultadoPeso").text(formato((valor*14.583344).toFixed(decimal)));
			else if (unidadesPesoPara == "mg")
				$("#engResultadoPeso").text(formato((valor*453592.7037).toFixed(decimal)));
			else if (unidadesPesoPara == "g")
				$("#engResultadoPeso").text(formato((valor*453.5927).toFixed(decimal)));
			else if (unidadesPesoPara == "t")
				$("#engResultadoPeso").text(formato((valor*0.0005).toFixed(decimal)));
		// converter de "quilogramas"
		if (unidadesPesoDe == "kg")
			if (unidadesPesoPara == "lb")
				$("#engResultadoPeso").text(formato((valor*2.2046).toFixed(decimal)));
			else if (unidadesPesoPara == "kg")
				$("#engResultadoPeso").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPesoPara == "oz")
				$("#engResultadoPeso").text(formato((valor*35.2739).toFixed(decimal)));
			else if (unidadesPesoPara == "mg")
				$("#engResultadoPeso").text(formato((valor*1000000).toFixed(decimal)));
			else if (unidadesPesoPara == "g")
				$("#engResultadoPeso").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesPesoPara == "t")
				$("#engResultadoPeso").text(formato((valor*0.001).toFixed(decimal)));
		// converter de "onças"
		if (unidadesPesoDe == "oz")
			if (unidadesPesoPara == "lb")
				$("#engResultadoPeso").text(formato((valor*0.0686).toFixed(decimal)));
			else if (unidadesPesoPara == "kg")
				$("#engResultadoPeso").text(formato((valor*0.0311).toFixed(decimal)));
			else if (unidadesPesoPara == "oz")
				$("#engResultadoPeso").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPesoPara == "mg")
				$("#engResultadoPeso").text(formato((valor*31103.476).toFixed(decimal)));
			else if (unidadesPesoPara == "g")
				$("#engResultadoPeso").text(formato((valor*31.103476).toFixed(decimal)));
			else if (unidadesPesoPara == "t")
				$("#engResultadoPeso").text(formato((valor*0.0000311).toFixed(decimal)));	
		// converter de "miligramas"
		if (unidadesPesoDe == "mg")
			if (unidadesPesoPara == "lb")
				$("#engResultadoPeso").text(formato((valor*0.0000022046).toFixed(decimal)));
			else if (unidadesPesoPara == "kg")
				$("#engResultadoPeso").text(formato((valor*0.000001).toFixed(decimal)));
			else if (unidadesPesoPara == "oz")
				$("#engResultadoPeso").text(formato((valor*0.0000352739).toFixed(decimal)));
			else if (unidadesPesoPara == "mg")
				$("#engResultadoPeso").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPesoPara == "g")
				$("#engResultadoPeso").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesPesoPara == "t")
				$("#engResultadoPeso").text(formato((valor*0.000000001).toFixed(decimal)));	
		// converter de "gramas"
		if (unidadesPesoDe == "g")
			if (unidadesPesoPara == "lb")
				$("#engResultadoPeso").text(formato((valor*0.002204621).toFixed(decimal)));
			else if (unidadesPesoPara == "kg")
				$("#engResultadoPeso").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesPesoPara == "oz")
				$("#engResultadoPeso").text(formato((valor*0.0352739).toFixed(decimal)));
			else if (unidadesPesoPara == "mg")
				$("#engResultadoPeso").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesPesoPara == "g")
				$("#engResultadoPeso").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPesoPara == "t")
				$("#engResultadoPeso").text(formato((valor*0.000001).toFixed(decimal)));
		// converter de "toneladas"
		if (unidadesPesoDe == "t")
			if (unidadesPesoPara == "lb")
				$("#engResultadoPeso").text(formato((valor*2204.621).toFixed(decimal)));
			else if (unidadesPesoPara == "kg")
				$("#engResultadoPeso").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesPesoPara == "oz")
				$("#engResultadoPeso").text(formato((valor*35273.94).toFixed(decimal)));
			else if (unidadesPesoPara == "mg")
				$("#engResultadoPeso").text(formato((valor*1000000000).toFixed(decimal)));
			else if (unidadesPesoPara == "g")
				$("#engResultadoPeso").text(formato((valor*1000000).toFixed(decimal)));
			else if (unidadesPesoPara == "t")
				$("#engResultadoPeso").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER TEMPERATURA
	$("#eng-btn-converter-temperatura").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-temperatura").val();
		unidadesTemperaturaDe = $("#unidadesTemperaturaDe").val()
		unidadesTemperaturaPara = $("#unidadesTemperaturaPara").val()
		// converter de "celsius"
		if (unidadesTemperaturaDe == "c")
			if (unidadesTemperaturaPara == "f")
				$("#engResultadoTemp").text(formato((valor*1.8+32).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "k")
				$("#engResultadoTemp").text(formato((parseFloat(273.15)+parseFloat(valor)).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "r")
				$("#engResultadoTemp").text(formato((valor*1.8+491.67).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "n")
				$("#engResultadoTemp").text(formato((valor*0.33000).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "c")
				$("#engResultadoTemp").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "re")
				$("#engResultadoTemp").text(formato((valor*0.80000).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "ro")
				$("#engResultadoTemp").text(formato((valor*(21/40)+7.5).toFixed(decimal)));
		// converter de "farenheit"
		if (unidadesTemperaturaDe == "f")
			if (unidadesTemperaturaPara == "f")
				$("#engResultadoTemp").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "k")
				$("#engResultadoTemp").text(formato(((parseFloat(valor)+459.67)/parseFloat(1.8)).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "r")
				$("#engResultadoTemp").text(formato((parseFloat(valor)+parseFloat(459.67)).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "n")
				$("#engResultadoTemp").text(formato(((valor-32)*(11/60)).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "c")
				$("#engResultadoTemp").text(formato(((valor-32)/1.8).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "re")
				$("#engResultadoTemp").text(formato(((valor-32)/2.25).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "ro")
				$("#engResultadoTemp").text(formato(((valor-32)*(7/24)+7.5).toFixed(decimal)));
		// converter de "kelvin"
		if (unidadesTemperaturaDe == "k")
			if (unidadesTemperaturaPara == "f")
				$("#engResultadoTemp").text(formato(((valor*1.8)-459.67).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "k")
				$("#engResultadoTemp").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "r")
				$("#engResultadoTemp").text(formato((valor*1.8000).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "n")
				$("#engResultadoTemp").text(formato(((valor-273.15)*33/100).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "c")
				$("#engResultadoTemp").text(formato((valor-273.15).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "re")
				$("#engResultadoTemp").text(formato(((valor-273.15)*0.8).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "ro")
				$("#engResultadoTemp").text(formato(((valor-273.15)*(21/40)+7.5).toFixed(decimal)));
		// converter de "rankine"
		if (unidadesTemperaturaDe == "r")
			if (unidadesTemperaturaPara == "f")
				$("#engResultadoTemp").text(formato((valor-459.67).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "k")
				$("#engResultadoTemp").text(formato((valor/1.8).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "r")
				$("#engResultadoTemp").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "n")
				$("#engResultadoTemp").text(formato(((valor-491.67)*(11/60)).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "c")
				$("#engResultadoTemp").text(formato(((valor-491.67)*5/9).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "re")
				$("#engResultadoTemp").text(formato(((valor-491.67)*4/9).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "ro")
				$("#engResultadoTemp").text(formato(((valor-491.67)*(7/24)+(7.5)).toFixed(decimal)));
		// converter de "newton"
		if (unidadesTemperaturaDe == "n")
			if (unidadesTemperaturaPara == "f")
				$("#engResultadoTemp").text(formato(((valor*60/11)+32).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "k")
				$("#engResultadoTemp").text(formato(((valor*100/33)+273.15).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "r")
				$("#engResultadoTemp").text(formato(((valor*60/11)+491.67).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "n")
				$("#engResultadoTemp").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "c")
				$("#engResultadoTemp").text(formato((valor*100/33).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "re")
				$("#engResultadoTemp").text(formato((valor*80/33).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "ro")
				$("#engResultadoTemp").text(formato(((valor*35/22)+7.5).toFixed(decimal)));
		// converter de "reaumur"	
		if (unidadesTemperaturaDe == "re")
			if (unidadesTemperaturaPara == "f")
				$("#engResultadoTemp").text(formato((valor*2.25+32).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "k")
				$("#engResultadoTemp").text(formato((valor/0.8+273.15).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "r")
				$("#engResultadoTemp").text(formato((valor*2.25+491.67).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "n")
				$("#engResultadoTemp").text(formato((valor*33/80).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "c")
				$("#engResultadoTemp").text(formato((valor/0.8).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "re")
				$("#engResultadoTemp").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "ro")
				$("#engResultadoTemp").text(formato((valor*21/32+7.5).toFixed(decimal)));
		// converter de "romer"
		if (unidadesTemperaturaDe == "ro")
			if (unidadesTemperaturaPara == "f")
				$("#engResultadoTemp").text(formato(((valor-7.5)*24/7+32).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "k")
				$("#engResultadoTemp").text(formato(((valor-7.5)*40/21+273.15).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "r")
				$("#engResultadoTemp").text(formato(((valor-7.5)*24/7+491.67).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "n")
				$("#engResultadoTemp").text(formato(((valor-7.5)*22/35).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "c")
				$("#engResultadoTemp").text(formato(((valor-7.5)*40/21).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "re")
				$("#engResultadoTemp").text(formato(((valor-7.5)*32/21).toFixed(decimal)));
			else if (unidadesTemperaturaPara == "ro")
				$("#engResultadoTemp").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER PRESSÃO
	$("#eng-btn-converter-pressao").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-pressao").val();
		unidadesPressaoDe = $("#unidadesPressaoDe").val()
		unidadesPressaoPara = $("#unidadesPressaoPara").val()
		// converter de "Libra/Polegada Quadrada"
		if (unidadesPressaoDe == "lpo")
			if (unidadesPressaoPara == "lpo")
				$("#engResultadoPress").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPressaoPara == "lpe")
				$("#engResultadoPress").text(formato((valor*144).toFixed(decimal)));
			else if (unidadesPressaoPara == "at")
				$("#engResultadoPress").text(formato((valor*0.06805).toFixed(decimal)));
			else if (unidadesPressaoPara == "ba")
				$("#engResultadoPress").text(formato((valor*0.06895).toFixed(decimal)));
			else if (unidadesPressaoPara == "pom")
				$("#engResultadoPress").text(formato((valor*2.03602).toFixed(decimal)));
			else if (unidadesPressaoPara == "cem")
				$("#engResultadoPress").text(formato((valor*5.17149).toFixed(decimal)));
			else if (unidadesPressaoPara == "qmq")
				$("#engResultadoPress").text(formato((valor*703.06958).toFixed(decimal)));
			else if (unidadesPressaoPara == "pas")
				$("#engResultadoPress").text(formato((valor*6894.75728).toFixed(decimal)));
		// converter de "Libra/Pé Quadrado"
		if (unidadesPressaoDe == "lpe")
			if (unidadesPressaoPara == "lpo")
				$("#engResultadoPress").text(formato((valor*0.00694).toFixed(decimal)));
			else if (unidadesPressaoPara == "lpe")
				$("#engResultadoPress").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPressaoPara == "at")
				$("#engResultadoPress").text(formato((valor*0.00047).toFixed(decimal)));
			else if (unidadesPressaoPara == "ba")
				$("#engResultadoPress").text(formato((valor*0.00048).toFixed(decimal)));
			else if (unidadesPressaoPara == "pom")
				$("#engResultadoPress").text(formato((valor*0.01414).toFixed(decimal)));
			else if (unidadesPressaoPara == "cem")
				$("#engResultadoPress").text(formato((valor*0.03591).toFixed(decimal)));
			else if (unidadesPressaoPara == "qmq")
				$("#engResultadoPress").text(formato((valor*4.88243).toFixed(decimal)));
			else if (unidadesPressaoPara == "pas")
				$("#engResultadoPress").text(formato((valor*47.88026).toFixed(decimal)));
		// converter de "Atmosfera"
		if (unidadesPressaoDe == "at")
			if (unidadesPressaoPara == "lpo")
				$("#engResultadoPress").text(formato((valor*14.69595).toFixed(decimal)));
			else if (unidadesPressaoPara == "lpe")
				$("#engResultadoPress").text(formato((valor*2116.21684).toFixed(decimal)));
			else if (unidadesPressaoPara == "at")
				$("#engResultadoPress").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPressaoPara == "ba")
				$("#engResultadoPress").text(formato((valor*1.01325).toFixed(decimal)));
			else if (unidadesPressaoPara == "pom")
				$("#engResultadoPress").text(formato((valor*29.92126).toFixed(decimal)));
			else if (unidadesPressaoPara == "cem")
				$("#engResultadoPress").text(formato((valor*76).toFixed(decimal)));
			else if (unidadesPressaoPara == "qmq")
				$("#engResultadoPress").text(formato((valor*10332.27555).toFixed(decimal)));
			else if (unidadesPressaoPara == "pas")
				$("#engResultadoPress").text(formato((valor*101325.01).toFixed(decimal)));
		// converter de "Bar"
		if (unidadesPressaoDe == "ba")
			if (unidadesPressaoPara == "lpo")
				$("#engResultadoPress").text(formato((valor*14.50377).toFixed(decimal)));
			else if (unidadesPressaoPara == "lpe")
				$("#engResultadoPress").text(formato((valor*2088.54343).toFixed(decimal)));
			else if (unidadesPressaoPara == "at")
				$("#engResultadoPress").text(formato((valor*0.98692).toFixed(decimal)));
			else if (unidadesPressaoPara == "ba")
				$("#engResultadoPress").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPressaoPara == "pom")
				$("#engResultadoPress").text(formato((valor*29.52998).toFixed(decimal)));
			else if (unidadesPressaoPara == "cem")
				$("#engResultadoPress").text(formato((valor*75.00616).toFixed(decimal)));
			else if (unidadesPressaoPara == "qmq")
				$("#engResultadoPress").text(formato((valor*10197.16213).toFixed(decimal)));
			else if (unidadesPressaoPara == "pas")
				$("#engResultadoPress").text(formato((valor*100000).toFixed(decimal)));
		// converter de "Polegada de Mercúrio"
		if (unidadesPressaoDe == "pom")
			if (unidadesPressaoPara == "lpo")
				$("#engResultadoPress").text(formato((valor*0.49115).toFixed(decimal)));
			else if (unidadesPressaoPara == "lpe")
				$("#engResultadoPress").text(formato((valor*70.7262).toFixed(decimal)));
			else if (unidadesPressaoPara == "at")
				$("#engResultadoPress").text(formato((valor*0.03342).toFixed(decimal)));
			else if (unidadesPressaoPara == "ba")
				$("#engResultadoPress").text(formato((valor*0.03386).toFixed(decimal)));
			else if (unidadesPressaoPara == "pom")
				$("#engResultadoPress").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPressaoPara == "cem")
				$("#engResultadoPress").text(formato((valor*2.54).toFixed(decimal)));
			else if (unidadesPressaoPara == "qmq")
				$("#engResultadoPress").text(formato((valor*345.31554).toFixed(decimal)));
			else if (unidadesPressaoPara == "pas")
				$("#engResultadoPress").text(formato((valor*3386.38867).toFixed(decimal)));
		// converter de "Centímetro de Mercúrio"
		if (unidadesPressaoDe == "cem")
			if (unidadesPressaoPara == "lpo")
				$("#engResultadoPress").text(formato((valor*0.19337).toFixed(decimal)));
			else if (unidadesPressaoPara == "lpe")
				$("#engResultadoPress").text(formato((valor*27.84496).toFixed(decimal)));
			else if (unidadesPressaoPara == "at")
				$("#engResultadoPress").text(formato((valor*0.01316).toFixed(decimal)));
			else if (unidadesPressaoPara == "ba")
				$("#engResultadoPress").text(formato((valor*0.01333).toFixed(decimal)));
			else if (unidadesPressaoPara == "pom")
				$("#engResultadoPress").text(formato((valor*0.3937).toFixed(decimal)));
			else if (unidadesPressaoPara == "cem")
				$("#engResultadoPress").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPressaoPara == "qmq")
				$("#engResultadoPress").text(formato((valor*135.951).toFixed(decimal)));
			else if (unidadesPressaoPara == "pas")
				$("#engResultadoPress").text(formato((valor*1333.2239).toFixed(decimal)));
		// converter de "Quilograma/Metro Quadrado"
		if (unidadesPressaoDe == "qmq")
			if (unidadesPressaoPara == "lpo")
				$("#engResultadoPress").text(formato((valor*0.00142).toFixed(decimal)));
			else if (unidadesPressaoPara == "lpe")
				$("#engResultadoPress").text(formato((valor*0.20482).toFixed(decimal)));
			else if (unidadesPressaoPara == "at")
				$("#engResultadoPress").text(formato((valor*0.0001).toFixed(decimal)));
			else if (unidadesPressaoPara == "ba")
				$("#engResultadoPress").text(formato((valor*0.0001).toFixed(decimal)));
			else if (unidadesPressaoPara == "pom")
				$("#engResultadoPress").text(formato((valor*0.0029).toFixed(decimal)));
			else if (unidadesPressaoPara == "cem")
				$("#engResultadoPress").text(formato((valor*0.00736).toFixed(decimal)));
			else if (unidadesPressaoPara == "qmq")
				$("#engResultadoPress").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesPressaoPara == "pas")
				$("#engResultadoPress").text(formato((valor*9.80665).toFixed(decimal)));
		// converter de "Pascal"
		if (unidadesPressaoDe == "pas")
			if (unidadesPressaoPara == "lpo")
				$("#engResultadoPress").text(formato((valor*0.00015).toFixed(decimal)));
			else if (unidadesPressaoPara == "lpe")
				$("#engResultadoPress").text(formato((valor*0.02089).toFixed(decimal)));
			else if (unidadesPressaoPara == "at")
				$("#engResultadoPress").text(formato((valor*0.00001).toFixed(decimal)));
			else if (unidadesPressaoPara == "ba")
				$("#engResultadoPress").text(formato((valor*0.00001).toFixed(decimal)));
			else if (unidadesPressaoPara == "pom")
				$("#engResultadoPress").text(formato((valor*0.0003).toFixed(decimal)));
			else if (unidadesPressaoPara == "cem")
				$("#engResultadoPress").text(formato((valor*0.00075).toFixed(decimal)));
			else if (unidadesPressaoPara == "qmq")
				$("#engResultadoPress").text(formato((valor*0.10197).toFixed(decimal)));
			else if (unidadesPressaoPara == "pas")
				$("#engResultadoPress").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER VELOCIDADE
	$("#eng-btn-converter-velocidade").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-velocidade").val();
		unidadesVelocidadeDe = $("#unidadesVelocidadeDe").val();
		unidadesVelocidadePara = $("#unidadesVelocidadePara").val();
		// converter de "metros/segundo"
		if (unidadesVelocidadeDe == "ms")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*2.236936).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*3.6).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*3.28084).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*1.943845).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*0.0006213712).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*0.000000003336).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*0.0029154519).toFixed(decimal)));
		// converter de "milhas/hora"
		if (unidadesVelocidadeDe == "mih")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*0.4470400584).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*1.6093442101).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*1.4666669051).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*0.8689765823).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*0.0004470401).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*0.0002777778).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*0.000000001491).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*0.0013033238).toFixed(decimal)));
		// converter de "km/h"
		if (unidadesVelocidadeDe == "kmh")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*0.2777777778).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*0.6213711111).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*0.9113444444).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*0.5399569444).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*0.0002777778).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*0.0001726031).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*0.0000000009266).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*0.000809848).toFixed(decimal)));
		// converter de "ft/s"
		if (unidadesVelocidadeDe == "fts")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*0.3047999902).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*0.681818071).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*1.0972799649).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*0.592483937).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*0.0003048).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*0.0001893939).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*0.000000001017).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*0.0008886297).toFixed(decimal)));
		// converter de "n"
		if (unidadesVelocidadeDe == "n")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*0.5144443101).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*1.1507789973).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*1.8519995164).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*1.6878094704).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*0.0005144443).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*0.0003196609).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*0.000000001716).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*0.0014998376).toFixed(decimal)));
		// converter de "km/sec"
		if (unidadesVelocidadeDe == "kms")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*2236.936).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*3600).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*3280.84).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*1943.845).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*0.6213712).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*0.0000033356).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*2.915451895).toFixed(decimal)));
		// converter de "milha por segundo"
		if (unidadesVelocidadeDe == "mis")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*1609).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*3600).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*5794).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*5280).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*3128).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*1.609).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*0.000005368).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*4.691964956).toFixed(decimal)));
		// converter de "velocidade da luz"
		if (unidadesVelocidadeDe == "luz")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*299792458).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*670616629).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*1079000000).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*983600000).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*582700000).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*299792.458).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*186282.397).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*881742.52352941).toFixed(decimal)));
		// converter de "velocidade do som"
		if (unidadesVelocidadeDe == "som")
			if (unidadesVelocidadePara == "ms")
				$("#engResultadoVelocidade").text(formato((valor*343).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mih")
				$("#engResultadoVelocidade").text(formato((valor*767.269048).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kmh")
				$("#engResultadoVelocidade").text(formato((valor*1234.8).toFixed(decimal)));
			else if (unidadesVelocidadePara == "fts")
				$("#engResultadoVelocidade").text(formato((valor*1125.32812).toFixed(decimal)));
			else if (unidadesVelocidadePara == "n")
				$("#engResultadoVelocidade").text(formato((valor*666.738835).toFixed(decimal)));
			else if (unidadesVelocidadePara == "kms")
				$("#engResultadoVelocidade").text(formato((valor*0.343).toFixed(decimal)));
			else if (unidadesVelocidadePara == "mis")
				$("#engResultadoVelocidade").text(formato((valor*0.2131303216).toFixed(decimal)));
			else if (unidadesVelocidadePara == "luz")
				$("#engResultadoVelocidade").text(formato((valor*0.0000011441).toFixed(decimal)));
			else if (unidadesVelocidadePara == "som")
				$("#engResultadoVelocidade").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER TEMPO
	$("#eng-btn-converter-tempo").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-tempo").val();
		unidadesTempoDe = $("#unidadesTempoDe").val()
		unidadesTempoPara = $("#unidadesTempoPara").val()
		// converter de "nanosegundos"
		if (unidadesTempoDe == "ns")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*0.000001).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*0.000000001).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*0.0000000000166666666667).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*0.000000000000277777777777780).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*0.00000000000001157407407).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*0.000000000000001653439153).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*0.0000000000000003805175038).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.00000000000000003170979198).toFixed(decimal)));
		// converter de "microsegundos"
		if (unidadesTempoDe == "us")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*0.000001).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*0.000000017).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*0.0000000002777777778).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*0.00000000001157407407).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*0.000000000001653439153).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*0.0000000000003805175038).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.00000000000003170979198).toFixed(decimal)));
		// converter de "milisegundos"
		if (unidadesTempoDe == "ms")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*1000000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*0.000016667).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*0.000000278).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*0.000000012).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*0.000000002).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*0.0000000003805175038).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.00000000003170979198).toFixed(decimal)));
		// converter de "segundos"
		if (unidadesTempoDe == "s")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*1000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*1000000).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*0.0166666667).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*0.0002777778).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*0.0000115741).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*0.0000016534).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*0.000000381).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.000000032).toFixed(decimal)));
		// converter de "minutos"
		if (unidadesTempoDe == "min")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*60000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*60000000).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*60000).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*60).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*0.0166666667).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*0.0006944444).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*0.0000992063).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*0.0000228154).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.0000019013).toFixed(decimal)));
			// converter de "horas"
		if (unidadesTempoDe == "hrs")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*3600000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*3600000000).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*3600000).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*3600).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*60).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*0.041666667).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*0.005952381).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*0.001369863).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.000114155).toFixed(decimal)));
			// converter de "dias"
		if (unidadesTempoDe == "dia")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*86400000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*86400000000).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*86400000).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*86400).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*1440).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*24).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*0.142857143).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*0.032876712).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.002739726).toFixed(decimal)));
			// converter de "semanas"
		if (unidadesTempoDe == "sem")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*604800000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*604800000000).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*604800000).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*604800).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*10080).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*168).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*7).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*0.230136986).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.019178082).toFixed(decimal)));
			// converter de "meses"
		if (unidadesTempoDe == "mes")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*2628000000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*2628000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*2628000000).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*2628000).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*43800).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*730).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*30.416666667).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*4.345238095).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*0.083333333).toFixed(decimal)));
			// converter de "anos"
		if (unidadesTempoDe == "ano")
			if (unidadesTempoPara == "ns")
				$("#engResultadoTempo").text(formato((valor*31536000000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "us")
				$("#engResultadoTempo").text(formato((valor*31536000000000).toFixed(decimal)));
			else if (unidadesTempoPara == "ms")
				$("#engResultadoTempo").text(formato((valor*31536000000).toFixed(decimal)));
			else if (unidadesTempoPara == "s")
				$("#engResultadoTempo").text(formato((valor*31536000).toFixed(decimal)));
			else if (unidadesTempoPara == "min")
				$("#engResultadoTempo").text(formato((valor*525600).toFixed(decimal)));
				else if (unidadesTempoPara == "hrs")
				$("#engResultadoTempo").text(formato((valor*8760).toFixed(decimal)));
			else if (unidadesTempoPara == "dia")
				$("#engResultadoTempo").text(formato((valor*365).toFixed(decimal)));
			else if (unidadesTempoPara == "sem")
				$("#engResultadoTempo").text(formato((valor*52.142857143).toFixed(decimal)));
			else if (unidadesTempoPara == "mes")
				$("#engResultadoTempo").text(formato((valor*12).toFixed(decimal)));
			else if (unidadesTempoPara == "ano")
				$("#engResultadoTempo").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER VOLUME
	$("#eng-btn-converter-volume").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-volume").val();
		unidadesVolumeDe = $("#unidadesVolumeDe").val()
		unidadesVolumePara = $("#unidadesVolumePara").val()
		// converter de "galões"
		if (unidadesVolumeDe == "gal")
			if (unidadesVolumePara == "gal")
				$("#engResultadoVolume").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVolumePara == "l")
				$("#engResultadoVolume").text(formato((valor*3.78541178).toFixed(decimal)));
			else if (unidadesVolumePara == "floz")
				$("#engResultadoVolume").text(formato((valor*133.227531).toFixed(decimal)));
			else if (unidadesVolumePara == "m3")
				$("#engResultadoVolume").text(formato((valor*0.003785).toFixed(decimal)));
		// converter de "litros"
		if (unidadesVolumeDe == "l")
			if (unidadesVolumePara == "gal")
				$("#engResultadoVolume").text(formato((valor*0.227021).toFixed(decimal)));
			else if (unidadesVolumePara == "l")
				$("#engResultadoVolume").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVolumePara == "floz")
				$("#engResultadoVolume").text(formato((valor*35.19501).toFixed(decimal)));
			else if (unidadesVolumePara == "m3")
				$("#engResultadoVolume").text(formato((valor*0.001).toFixed(decimal)));
		// converter de "onça fluída"
		if (unidadesVolumeDe == "floz")
			if (unidadesVolumePara == "gal")
				$("#engResultadoVolume").text(formato((valor*0.006714).toFixed(decimal)));
			else if (unidadesVolumePara == "l")
				$("#engResultadoVolume").text(formato((valor*0.029574).toFixed(decimal)));
			else if (unidadesVolumePara == "floz")
				$("#engResultadoVolume").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesVolumePara == "m3")
				$("#engResultadoVolume").text(formato((valor*0.00003).toFixed(decimal)));
		// converter de "metro cúbico"
		if (unidadesVolumeDe == "m3")
			if (unidadesVolumePara == "gal")
				$("#engResultadoVolume").text(formato((valor*227.0208).toFixed(decimal)));
			else if (unidadesVolumePara == "l")
				$("#engResultadoVolume").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesVolumePara == "floz")
				$("#engResultadoVolume").text(formato((valor*35195.01).toFixed(decimal)));
			else if (unidadesVolumePara == "m3")
				$("#engResultadoVolume").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER COMPRIMENTO
	$("#eng-btn-converter-comprimento").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-comprimento").val();
		unidadesComprimentoDe = $("#unidadesComprimentoDe").val()
		unidadesComprimentoPara = $("#unidadesComprimentoPara").val()
		// converter de "milhas"
		if (unidadesComprimentoDe == "mi")
			if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*1.609344).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*1609.344).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*16093.44).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*160934.4).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*1.609344*(10*10*10*10*10*10)).toFixed(decimal)));
			else if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*1760).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*5280).toFixed(decimal)));
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*63360).toFixed(decimal)));
		// converter de "quilômetros"
		if (unidadesComprimentoDe == "km")
			if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*0.621371192).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*10000).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*100000).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*1000000).toFixed(decimal)));
			else if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*1093.6133).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*3280.8399).toFixed(decimal)));
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*39370).toFixed(decimal)));
		// converter de "jardas"
		if (unidadesComprimentoDe == "yd")
			if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*0.00057).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*0.9144).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*9.144).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*91.44).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*914.4).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*3).toFixed(decimal)));
			else if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*0.00091).toFixed(decimal)));
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*36).toFixed(decimal)));
		// converter de "pés"
		if (unidadesComprimentoDe == "ft")
			if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*0.0003).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*0.00019).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*0.3048).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*3.048).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*30.48).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*304.8).toFixed(decimal)));
			else if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*0.33333).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*12).toFixed(decimal)));
		// converter de "metros"
		if (unidadesComprimentoDe == "m")
			if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*0.00062).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*10).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*100).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*1.09361).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*3.28084).toFixed(decimal)));	
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*39.370).toFixed(decimal)));	
		// converter de "decímetros"
		if (unidadesComprimentoDe == "dm")
			if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*0.0001).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*0.00006).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*0.1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*10).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*100).toFixed(decimal)));
			else if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*0.10936).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*0.328084).toFixed(decimal)));
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*3.93700787).toFixed(decimal)));
		// converter de "centímetros"
		if (unidadesComprimentoDe == "cm")
			if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*0.00001).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*0.00001).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*0.01).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*0.1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*10).toFixed(decimal)));
			else if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*0.01094).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*0.03281).toFixed(decimal)));
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*0.393700787).toFixed(decimal)));
		// converter de "milímitros"
		if (unidadesComprimentoDe == "mm")
			if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*0.000001).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*0.000001).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*0.01).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*0.1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*0.001094).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*0.003281).toFixed(decimal)));
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*0.0393700787).toFixed(decimal)));
		// converter de "inches"
		if (unidadesComprimentoDe == "in")
			if (unidadesComprimentoPara == "km")
				$("#engResultadoComprimento").text(formato((valor*0.000025400).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mi")
				$("#engResultadoComprimento").text(formato((valor*0.00001578).toFixed(decimal)));
			else if (unidadesComprimentoPara == "m")
				$("#engResultadoComprimento").text(formato((valor*0.0254).toFixed(decimal)));
			else if (unidadesComprimentoPara == "dm")
				$("#engResultadoComprimento").text(formato((valor*0.254).toFixed(decimal)));
			else if (unidadesComprimentoPara == "cm")
				$("#engResultadoComprimento").text(formato((valor*2.54).toFixed(decimal)));
			else if (unidadesComprimentoPara == "mm")
				$("#engResultadoComprimento").text(formato((valor*25.4).toFixed(decimal)));
			else if (unidadesComprimentoPara == "yd")
				$("#engResultadoComprimento").text(formato((valor*0.0277777778).toFixed(decimal)));
			else if (unidadesComprimentoPara == "ft")
				$("#engResultadoComprimento").text(formato((valor*0.0833333333).toFixed(decimal)));
			else if (unidadesComprimentoPara == "in")
				$("#engResultadoComprimento").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER ÁREA
	$("#eng-btn-converter-area").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-area").val();
		unidadesAreaDe = $("#unidadesAreaDe").val();
		unidadesAreaPara = $("#unidadesAreaPara").val();
		// converter de "square feet"
		if (unidadesAreaDe == "sqft")
			if (unidadesAreaPara == "sqft")
				$("#engResultadoArea").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesAreaPara == "m2")
				$("#engResultadoArea").text(formato((valor*0.09290304).toFixed(decimal)));
			else if (unidadesAreaPara == "ha")
				$("#engResultadoArea").text(formato((valor*0.000009).toFixed(decimal)));
		// converter de "metros quadrados"
		if (unidadesAreaDe == "m2")
			if (unidadesAreaPara == "m2")
				$("#engResultadoArea").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesAreaPara == "sqft")
				$("#engResultadoArea").text(formato((valor*10.7639104).toFixed(decimal)));
			else if (unidadesAreaPara == "ha")
				$("#engResultadoArea").text(formato((valor*0.0001).toFixed(decimal)));
		// converter de "hectares"
		if (unidadesAreaDe == "ha")
			if (unidadesAreaPara == "m2")
				$("#engResultadoArea").text(formato((valor*10000).toFixed(decimal)));
			else if (unidadesAreaPara == "sqft")
				$("#engResultadoArea").text(formato((valor*107639.1).toFixed(decimal)));
			else if (unidadesAreaPara == "ha")
				$("#engResultadoArea").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER FREQUENCIA
	$("#eng-btn-converter-frequencia").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-frequencia").val();
		unidadesFrequenciaDe = $("#unidadesFrequenciaDe").val()
		unidadesFrequenciaPara = $("#unidadesFrequenciaPara").val()
		// converter de "Hertz"
		if (unidadesFrequenciaDe == "hz")
			if (unidadesFrequenciaPara == "hz")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "khz")
				$("#engResultadoFrequencia").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "mhz")
				$("#engResultadoFrequencia").text(formato((valor*0.000001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "ghz")
				$("#engResultadoFrequencia").text(formato((valor*0.000000001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1s")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1min")
				$("#engResultadoFrequencia").text(formato((valor*60).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1h")
				$("#engResultadoFrequencia").text(formato((valor*3600).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1dia")
				$("#engResultadoFrequencia").text(formato((valor*86400).toFixed(decimal)));
		// converter de "KiloHertz"
		if (unidadesFrequenciaDe == "khz")
			if (unidadesFrequenciaPara == "hz")
				$("#engResultadoFrequencia").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "khz")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "mhz")
				$("#engResultadoFrequencia").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "ghz")
				$("#engResultadoFrequencia").text(formato((valor*0.000001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1s")
				$("#engResultadoFrequencia").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1min")
				$("#engResultadoFrequencia").text(formato((valor*60000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1h")
				$("#engResultadoFrequencia").text(formato((valor*3600000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1dia")
				$("#engResultadoFrequencia").text(formato((valor*86400000).toFixed(decimal)));
		// converter de "MegaHertz"
		if (unidadesFrequenciaDe == "mhz")
			if (unidadesFrequenciaPara == "hz")
				$("#engResultadoFrequencia").text(formato((valor*1000000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "khz")
				$("#engResultadoFrequencia").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "mhz")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "ghz")
				$("#engResultadoFrequencia").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1s")
				$("#engResultadoFrequencia").text(formato((valor*1000000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1min")
				$("#engResultadoFrequencia").text(formato((valor*60000000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1h")
				$("#engResultadoFrequencia").text(formato((valor*3600000000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1dia")
				$("#engResultadoFrequencia").text(formato((valor*86400000000).toFixed(decimal)));
		// converter de "GigaHertz"
		if (unidadesFrequenciaDe == "ghz")
			if (unidadesFrequenciaPara == "hz")
				$("#engResultadoFrequencia").text(formato((valor*1000000000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "khz")
				$("#engResultadoFrequencia").text(formato((valor*1000000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "mhz")
				$("#engResultadoFrequencia").text(formato((valor*1000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "ghz")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1s")
				$("#engResultadoFrequencia").text(formato((valor*1000000000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1min")
				$("#engResultadoFrequencia").text(formato((valor*60000000000).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1h")
				$("#engResultadoFrequencia").text(formato((valor*3599999999999.9995).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1dia")
				$("#engResultadoFrequencia").text(formato((valor*86399999999999.98).toFixed(decimal)));
		// converter de "1/s"
		if (unidadesFrequenciaDe == "1s")
			if (unidadesFrequenciaPara == "hz")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "khz")
				$("#engResultadoFrequencia").text(formato((valor*0.001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "mhz")
				$("#engResultadoFrequencia").text(formato((valor*0.000001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "ghz")
				$("#engResultadoFrequencia").text(formato((valor*0.000000001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1s")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1min")
				$("#engResultadoFrequencia").text(formato((valor*60).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1h")
				$("#engResultadoFrequencia").text(formato((valor*3600).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1dia")
				$("#engResultadoFrequencia").text(formato((valor*86400).toFixed(decimal)));
		// converter de "1/min"
		if (unidadesFrequenciaDe == "1min")
			if (unidadesFrequenciaPara == "hz")
				$("#engResultadoFrequencia").text(formato((valor*0.0166666667).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "khz")
				$("#engResultadoFrequencia").text(formato((valor*0.0000166666667).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "mhz")
				$("#engResultadoFrequencia").text(formato((valor*0.0000000166667).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "ghz")
				$("#engResultadoFrequencia").text(formato((valor*0.0000000000166667).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1s")
				$("#engResultadoFrequencia").text(formato((valor*0.0166666667).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1min")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1h")
				$("#engResultadoFrequencia").text(formato((valor*60).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1dia")
				$("#engResultadoFrequencia").text(formato((valor*1440).toFixed(decimal)));
		// converter de "1/h"
		if (unidadesFrequenciaDe == "1h")
			if (unidadesFrequenciaPara == "hz")
				$("#engResultadoFrequencia").text(formato((valor*0.00028).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "khz")
				$("#engResultadoFrequencia").text(formato((valor*0.00000028).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "mhz")
				$("#engResultadoFrequencia").text(formato((valor*0.00000000028).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "ghz")
				$("#engResultadoFrequencia").text(formato((valor*0.00000000000028).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1s")
				$("#engResultadoFrequencia").text(formato((valor*0.00028).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1min")
				$("#engResultadoFrequencia").text(formato((valor*0.01667).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1h")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1dia")
				$("#engResultadoFrequencia").text(formato((valor*24).toFixed(decimal)));
		// converter de "1/dia"
		if (unidadesFrequenciaDe == "1h")
			if (unidadesFrequenciaPara == "hz")
				$("#engResultadoFrequencia").text(formato((valor*0.00001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "khz")
				$("#engResultadoFrequencia").text(formato((valor*0.00000001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "mhz")
				$("#engResultadoFrequencia").text(formato((valor*0.00000000001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "ghz")
				$("#engResultadoFrequencia").text(formato((valor*0.00000000000001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1s")
				$("#engResultadoFrequencia").text(formato((valor*0.00001).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1min")
				$("#engResultadoFrequencia").text(formato((valor*0.00069).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1h")
				$("#engResultadoFrequencia").text(formato((valor*0.04167).toFixed(decimal)));
			else if (unidadesFrequenciaPara == "1dia")
				$("#engResultadoFrequencia").text(formato((valor*1).toFixed(decimal)));
	});

	// CONVERTER ANGULO
	$("#eng-btn-converter-angulo").click(function() {
		decimal = $("#eng-decimais").val();
		format = $("#eng-formato").val();
		var formato;
		if (format == "us") {
			formato = numberFormatUS;
		} else {
			formato = numberFormat;
		}
		valor = $("#eng-valor-angulo").val();
		unidadesAnguloDe = $("#unidadesAnguloDe").val()
		unidadesAnguloPara = $("#unidadesAnguloPara").val()
		// converter de "grau"
		if (unidadesAnguloDe == "grau")
			if (unidadesAnguloPara == "grau")
				$("#engResultadoAngulo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesAnguloPara == "grad")
				$("#engResultadoAngulo").text(formato((valor*1.11111).toFixed(decimal)));
			else if (unidadesAnguloPara == "minu")
				$("#engResultadoAngulo").text(formato((valor*59.99994).toFixed(decimal)));
			else if (unidadesAnguloPara == "radi")
				$("#engResultadoAngulo").text(formato((valor*0.01745).toFixed(decimal)));
			else if (unidadesAnguloPara == "segu")
				$("#engResultadoAngulo").text(formato((valor*3599.32087).toFixed(decimal)));
			else if (unidadesAnguloPara == "rota")
				$("#engResultadoAngulo").text(formato((valor*0.00278).toFixed(decimal)));
		// converter de "grado"
		if (unidadesAnguloDe == "grad")
			if (unidadesAnguloPara == "grau")
				$("#engResultadoAngulo").text(formato((valor*0.9).toFixed(decimal)));
			else if (unidadesAnguloPara == "grad")
				$("#engResultadoAngulo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesAnguloPara == "minu")
				$("#engResultadoAngulo").text(formato((valor*54).toFixed(decimal)));
			else if (unidadesAnguloPara == "radi")
				$("#engResultadoAngulo").text(formato((valor*0.01571).toFixed(decimal)));
			else if (unidadesAnguloPara == "segu")
				$("#engResultadoAngulo").text(formato((valor*3240).toFixed(decimal)));
			else if (unidadesAnguloPara == "rota")
				$("#engResultadoAngulo").text(formato((valor*0.0025).toFixed(decimal)));
		// converter de "minuto"
		if (unidadesAnguloDe == "minu")
			if (unidadesAnguloPara == "grau")
				$("#engResultadoAngulo").text(formato((valor*0.01667).toFixed(decimal)));
			else if (unidadesAnguloPara == "grad")
				$("#engResultadoAngulo").text(formato((valor*0.01852).toFixed(decimal)));
			else if (unidadesAnguloPara == "minu")
				$("#engResultadoAngulo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesAnguloPara == "radi")
				$("#engResultadoAngulo").text(formato((valor*0.00029).toFixed(decimal)));
			else if (unidadesAnguloPara == "segu")
				$("#engResultadoAngulo").text(formato((valor*60).toFixed(decimal)));
			else if (unidadesAnguloPara == "rota")
				$("#engResultadoAngulo").text(formato((valor*0.00005).toFixed(decimal)));
		// converter de "radiano"
		if (unidadesAnguloDe == "radi")
			if (unidadesAnguloPara == "grau")
				$("#engResultadoAngulo").text(formato((valor*57.29578).toFixed(decimal)));
			else if (unidadesAnguloPara == "grad")
				$("#engResultadoAngulo").text(formato((valor*63.66198).toFixed(decimal)));
			else if (unidadesAnguloPara == "minu")
				$("#engResultadoAngulo").text(formato((valor*3437.74677).toFixed(decimal)));
			else if (unidadesAnguloPara == "radi")
				$("#engResultadoAngulo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesAnguloPara == "segu")
				$("#engResultadoAngulo").text(formato((valor*206264.80625).toFixed(decimal)));
			else if (unidadesAnguloPara == "rota")
				$("#engResultadoAngulo").text(formato((valor*0.15915).toFixed(decimal)));
		// converter de "segundo"
		if (unidadesAnguloDe == "segu")
			if (unidadesAnguloPara == "grau")
				$("#engResultadoAngulo").text(formato((valor*0.00028).toFixed(decimal)));
			else if (unidadesAnguloPara == "grad")
				$("#engResultadoAngulo").text(formato((valor*0.00031).toFixed(decimal)));
			else if (unidadesAnguloPara == "minu")
				$("#engResultadoAngulo").text(formato((valor*0.01667).toFixed(decimal)));
			else if (unidadesAnguloPara == "radi")
				$("#engResultadoAngulo").text(formato((valor*0).toFixed(decimal)));
			else if (unidadesAnguloPara == "segu")
				$("#engResultadoAngulo").text(formato((valor*1).toFixed(decimal)));
			else if (unidadesAnguloPara == "rota")
				$("#engResultadoAngulo").text(formato((valor*0).toFixed(decimal)));
		// converter de "rotacao"
		if (unidadesAnguloDe == "rota")
			if (unidadesAnguloPara == "grau")
				$("#engResultadoAngulo").text(formato((valor*360).toFixed(decimal)));
			else if (unidadesAnguloPara == "grad")
				$("#engResultadoAngulo").text(formato((valor*400).toFixed(decimal)));
			else if (unidadesAnguloPara == "minu")
				$("#engResultadoAngulo").text(formato((valor*21600).toFixed(decimal)));
			else if (unidadesAnguloPara == "radi")
				$("#engResultadoAngulo").text(formato((valor*6.28319).toFixed(decimal)));
			else if (unidadesAnguloPara == "segu")
				$("#engResultadoAngulo").text(formato((valor*1295999.99999).toFixed(decimal)));
			else if (unidadesAnguloPara == "rota")
				$("#engResultadoAngulo").text(formato((valor*1).toFixed(decimal)));
	});
});