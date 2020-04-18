// Tabuada Simples com js.
// Basta alterar a variável valor para
// verificar a tabela.

let valor = 2;

function multiplicarValor(numero) {

  var i = 0;

  while (i<=10) {
    console.log(`${numero}x${i}= ${(numero * i)}`);
    i++;
  }

}

multiplicarValor(valor);
