//Crie um programa que armazena um array de usuários (objetos)
//Utilizando o método join().


const usuarios = [
  {
    nome: "Douglas",
    tecnologias: ["HTML","CSS"]
  },

  {
    nome: "Vivian",
    tecnologias: ["Nodejs", "PHP"]
  },

  {
    nome: "Helena",
    tecnologias: ["CSS", "Python"]
  }
];

for (usuario of usuarios){

  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(",")}`);
}
