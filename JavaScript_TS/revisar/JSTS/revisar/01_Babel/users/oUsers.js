//import { leeFichero, escribeFich, mensajeError } from "../utils/index.js";

import * as utils from '../utils/index.js';

export class Usuarios {
    path = 'c:/JSTS/portfolio/users/';
    users = {};
    
    constructor(){
        this.loadFileUsers();
    }

    // FIXME: se necesita blindar si no se un buen JSON 
    loadFileUsers(){
        try {
            this.users = JSON.parse( utils.leeFichero(this.path +'users.json') );
            utils.mensaje("Fichero cargado correctamente");
          } catch (err) {
            utils.mensajeError(err);
        }
    }
    // FIXME: se necesita blindar si no se un buen JSON 
    saveFileUsers(){
        try {
            utils.escribeFich( this.path +'users.json' , JSON.stringify(this.users, null, " "));
            utils.mensaje("Fichero grabado correctamente");
          } catch (err) {
            utils.mensajeError(err);
        }
    }


    addUser(user,pass,porfolio){
        user = user.toLowerCase();
        // INFO: Busco el usuario , si existe lo rechazo
        this.loadFileUsers();
        if(this.users[user]!=null){
            return utils.mensajeError("El usuario ya existe");
        };
        this.users[user] = { porfolio:porfolio , pass:pass , role:"guest"};
        this.saveFileUsers();
        let aux = {...this.users[user]};
        aux.pass = '*****';
        utils.mensaje( "Usuario dado de alta", aux );
        return aux ;
    }

    delUser(user, pass){
        let existUser = this.login(user, pass);
        if (Object.keys(existUser).length != 0) {
            delete this.users[user];
            this.saveFileUsers();
            utils.mensaje( "Borrado usuario: ", user )
        }else{
            utils.mensajeError("Usuario inexistente")
        }
    }

    updUser(user,pass, portfolio ){
        let existUser = this.login(user, pass);
        if (Object.keys(existUser).length != 0) {
            
            //let aux =  this.users[user];
            let aux = {... this.users[user]}
            aux["porfolio"] = portfolio;

            this.saveFileUsers();
            utils.mensaje( "usuario actualizado: ", user )
        }else{
            utils.mensajeError("Usuario inexistente")
        }

        console.log("metodo updUser ")
    }

    getUsers(){
        return this.users;
    }

    login(user,pass){
        user = user.toLowerCase();
        let oRet = this.users[user];
        if(oRet == null ){ return  {}; }
        if(oRet["pass"] != pass){ return {} };

        oRet["flastlogin"] = Date.now();
        this.saveFileUsers();
        let aux = {...oRet};
        delete aux.portolio;

        return aux; 
    }
    signup(user,pass,portolio){

    }
}

export class RoleUsuarios {

}