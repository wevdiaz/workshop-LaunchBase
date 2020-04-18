// Exercício de criação e impressão de objeto.

const usuario = {
  nome: "Daniel",
  empresa: {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
      rua: "Rua Guilherme Gembala",
      numero: 260
    }
  }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.endereco.rua}, N ${usuario.empresa.endereco.numero}.`);
