let permissao;
permissao = "comum";


switch (permissao) {
  case "comum":
      console.log("Acesso básico");
      break;

  case "gerente":
      console.log("Acesso intermediário");
      break;

  case "diretor":
      console.log("Acesso geral");
      break;

  default:
  console.log("Acesso negado");
}
