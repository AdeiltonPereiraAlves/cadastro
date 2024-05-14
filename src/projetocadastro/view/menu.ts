import PromptSync from "prompt-sync"
import obterUsuario from "./obterUsuarios"

import layoutUi from "./uiCadastro"


export default class Menu {
    private prompt = PromptSync()
    exibir() {
        console.log("1 - Cadastrar novo Usuario")
        console.log("2 - Lista de Usuarios")
        console.log("3 - Sair...")

        const opcao = this.prompt('Escolha uma opção: ')

        if (opcao === '1') {
            new layoutUi().exibir()
        }
        else if (opcao === '2') {
            new obterUsuario().exibir()
        }
        else if (opcao === '3') {
            console.log("Saiu da aplicação...")
            process.exit(0)
        }
       
        this.exibir()
    }
}