export class Usuarios {
    _lsUsers;
    _version;
    #users;
    constructor(){
        this._version = 1
        this.#users = {};
        this._lsUsers = 'users';
    }

    async loadData(){
        var res = await fetch('/assets/users.json');
        var jData = await res.json();
        this.#users = jData ; 
        this.saveToLocal();
    }

    // Grabo this.#users  en persistencia de LocalStorage / SesionStorage
    saveToLocal(){
        window.localStorage.setItem(this._lsUsers, JSON.stringify(this.#users))
    }

    clearUsers(cb){
        window.localStorage.removeItem(this._lsUsers);
        if(cb && (typeof cb == "function") ){
            cb("he borrado los usuarios de LocalStorage")
        }
    }

    addUser(user,pass,portfolio, cb ){
        this.#users[user] = {pass:pass, portfolio:portfolio};
        try {
            this.saveToLocal();
            if(cb && (typeof cb == "function") ){
              cb(false,{msg:"Usuario Grabado"})
            }
        } catch (error) {
            if(cb && (typeof cb == "function") ){
              cb(true,{msg:"Localstorage lleno" , obj:error })  
            }
        }
    }



    getUsers(){
        return this.#users;
    }

    /*
    loadUsuarios(){
        fetch('./assets/users.json')
        .then((res)=>res.json())
        .then((data)=>console.log("dato", data))

    }
    async loadUsuariosSync(){

        let res = await fetch('./assets/users.json');
        let jData = await res.json();

        let res2 = await fetch('./assets/cotizadiones'+jData["fichero relativo"]+'.json');
        let jData2 = await res2.json();
        


    }
    */

}