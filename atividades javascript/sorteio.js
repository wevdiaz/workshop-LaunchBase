// Programa Simulando sorteio.
// Organizando os números em ordem crescente.

var sorteio = new Array();

var numero;

var i = 0;

function sortearNumeros() {

    while ( i < 10) {

        numero = Math.ceil(Math.random()*60);
       
        if (sorteio.indexOf(numero) < 0) {
            sorteio.push(numero);            
            i++;
        }
    }   
   console.log(sorteio.sort(ordenarNumeros));
}

function ordenarNumeros(a,b){
    return a - b;
}

sortearNumeros();

