'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var separar = num.split("");
  var invertir = separar.reverse();
  var juntar = invertir.join("")
  var resultado = 0;
  for (var i = 0; i < juntar.length; i++) {
		if (juntar[i] == 1){
    	resultado = resultado + Math.pow(2, i);
    }
  }
return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
  var cociente = num;
  var construccion = '';
  var resultado = '';
  do {
  construccion = construccion + cociente % 2;
  cociente = Math.trunc((cociente / 2));
  }
  while (cociente !=1)
  construccion = construccion + '1';
  resultado = construccion.split('').reverse().join('');
  return resultado;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}