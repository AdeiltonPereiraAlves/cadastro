import UsuarioController from "../controllers/UsuarioController";

export default class obterUsuario {
    exibir(){
        console.log("Lista de Usuarios")
        console.log("------------")
        const usuarios = new UsuarioController().obter();
        for(const usuario of usuarios){
            console.log(`${usuario.nome} - ${usuario.email}`)
        }
    }
}