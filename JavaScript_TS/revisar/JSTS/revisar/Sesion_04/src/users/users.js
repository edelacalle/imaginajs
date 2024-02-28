
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class Usuarios{
    #oUsers ; 
    constructor(){
        this.#oUsers = {};
    }

    get nUsers() {
        return Object.keys(this.#oUsers).length
    }

    set Users(values) {
        // NOTA  this.constructor.name da el nombre de la clase hija ( para cubrir el proteted)
        return this.#oUsers = values;
    }
    get Users() {
        return this.#oUsers;
    }
    addUser(alias,pass,payload){
        console.log("Metodo no definido todavia")
    }

    report(){
        let cRet = 'Listado Usuarios:';
        console.log("en report ", this.nUsers,  this.Users)
        Object.keys(this.Users).forEach((elem)=>{
            cRet += `alias: ${elem} \n`
        })
        cRet += "fin"

        return cRet;
    }
    
}

export class UsersFromLocalStorage extends Usuarios{
    #name = 'users'
    constructor(){
        super();
        super.Users = JSON.parse( window.localStorage.getItem(this.#name) );
    }

    addUser(alias,pass,payload){
        super.Users[alias] = {pass:pass,payload:payload};
        window.localStorage.setItem(this.#name,JSON.stringify(super.Users))
    }
    
}

export class UsersFromWeb extends Usuarios{
    _endpoint = '/users.json';
    constructor(){
        super();
        fetch(this._endpoint)
        .then((res) => res.json())
        .then((jData) => super.Users = jData );
    }
}

