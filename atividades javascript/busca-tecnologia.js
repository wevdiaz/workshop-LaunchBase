// Programa que mostra quem usa CSS
//uma função que recebe os dados de um objeto de usuário e retorna SE
// o usuário trabalha com CSS ou não.


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

function checarTecnologia(usuario) {
    for(tecno of usuario){
      if(tecno == "CSS"){
        return true
      }
    }
}

for(usuario of usuarios){
  const usuarioTrabalhaComCSS = checarTecnologia(usuario.tecnologias);

  if(usuarioTrabalhaComCSS){
    console.log(`O usuário ${usuario.nome} trabalha com CSS`);
  }
}
