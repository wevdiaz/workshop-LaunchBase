// Exercício com objetos e vetores

const usuarios = [
  {
    nome: "Lucas",
    idade: 32,
    tecnologias: [
      {
        nome:  "C++",
        especialidade: "Desktop"
      }
    ]
  }
];

console.log(`O usuário ${usuarios[0].nome} tem ${usuarios[0].idade} anos e usa a tecnologia ${usuarios[0].tecnologias[0].nome} com especialidade em ${usuarios[0].tecnologias[0].especialidade}.`);
