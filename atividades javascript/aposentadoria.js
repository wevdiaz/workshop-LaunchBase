//Aqui um cálculo para aposentadoria.
//***Atividade simples somente para prática educacional,
//Pois existe muito mais para realizar essa tarefa.***


const nome = "Álvaro";
const sexo = "M";
const idade = 48;
const contribuicao = 31;

function calcularAposentadoria(nome, sexo, idade, contribuicao){

const somaIdade = idade + contribuicao;

if (sexo == "F" && (contribuicao >= 30) || (sexo == "F" && (somaIdade >= 85))) {
    console.log(`Sra. ${nome} você já pode dar entrada em sua aposentadoria.`);

}
else if(sexo == "F") {
   console.log(`Sra.${nome}, você ainda não pode se aposentar.`)
}

if (sexo == "M" && (contribuicao >= 35) || (sexo == "M" && (somaIdade >= 95))) {
    console.log(`Sr.${nome} você já pode dar entrada em sua aposentadoria.`);
}
else if(sexo == "M") {
    console.log(`Sr.${nome}, você ainda não pode se aposentar.`);
}

console.log("================================================");

}

calcularAposentadoria(nome, sexo, idade, contribuicao);
