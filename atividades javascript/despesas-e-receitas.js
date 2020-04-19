// Aqui vamos desenvolver um programa que calcula 
// a soma de receitas e despesas de usuários e no fim
// retorna o saldo.


const usuarios = [
    {
        nome: "José",
        receitas: [115.3,48.7,98.3,14.5],
        despesas: [85.3,13.5,19.9]
    },

    {
        nome: "Márcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },

    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2,29.9]
    }
];


function somarValores(valores){
    let somarValor = 0; 
    for(valor of valores){
        somarValor += valor
    }
    return somarValor;
}


function calcularSaldo(receitas, despesas){
    const valorReceitas = somarValores(receitas);
    const valorDespesas = somarValores(despesas);
    const saldo = valorReceitas - valorDespesas;
    return saldo;
}

function exibirSaldo(clientes){

    for (cliente of clientes){
    const status = calcularSaldo(cliente.receitas, cliente.despesas);

        if(status > 0){
            console.log(`${cliente.nome} possui saldo positivo de R$${status.toFixed(2)}`);
            console.log("----------------------------------------------------------");
        }
        else {
            console.log(`${cliente.nome} possui saldo negativo de R$${status.toFixed(2)}`);
            ("----------------------------------------------------------");
        }

    }
}

usuarios.push({nome: "Catarina", receitas: [100, 25, 25.49], despesas: [1.49,2.64,3.15]});

usuarios.push({nome: "Antônio", receitas: [12.50, 7.99, 25.49], despesas: [18.49,24.70,39.15]});


exibirSaldo(usuarios);

