import Prompt from "prompt-sync";
import UsuarioController from "../controllers/UsuarioController";

export default class layoutUi {
    private prompt = Prompt()
    exibir(){
       console.log("Novo Usuario")
       console.log("---------")
       const nome = this.prompt("Informe o nome do usuario. ")
       const email = this.prompt("Informe o email do usuario. ")
       new UsuarioController().cadastrar(nome,email)

       console.log("Usuario cadastrado com sucesso")

    }
}