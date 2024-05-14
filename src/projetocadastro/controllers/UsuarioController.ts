import { Usuario } from "../model/Usuario";
import usuarioDb from "../model/UsuarioDb";

export default class UsuarioController{
       cadastrar(nome: string, email: string){
        const novoUsuario = new Usuario(nome, email)
        usuarioDb.listaUsuario.push(novoUsuario)

       }
       obter(){
        return usuarioDb.listaUsuario;
       }
}