//Atividade de Cálculo do imc

//Criei uma função para esse exercício.


function calcularImc(nome, peso, altura) {
    const imc = peso / (altura * altura);

    if(imc >= 30) {
        console.log(`${nome} você está acima do peso.`);
    }
    else {
        console.log(`${nome} você não está acima do peso.`);
    }
}

calcularImc("Pedro", 78, 1.75);
