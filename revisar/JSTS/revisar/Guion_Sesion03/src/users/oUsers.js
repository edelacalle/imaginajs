export class Usuario{
    _version = 0 ; 
    #users = {};

    constructor(){
    }

    async loadData(){
       var res = await fetch('/assets/users.json');
       var jData = await res.json();
       this.#users = jData ; 
       this.saveTolocal();
    }

    get version() { return "Usuario Version:" + this._version.toString();} 

    set version(value){ 
        if(parseInt(value) < 1 ){
            alert("version no puede ser menor que 0 ")
        }else{
            this._version = value;
        }
    };
    get usuarios(){ return this.#users} 

    set usuarios(value){ 
        this.#users = value;
    }; 

    

    getUsers(){
        return this.#users;
    }
    
  
    saveTolocal(){
        window.localStorage.setItem('users',JSON.stringify(this.#users))
    }

    addUser(user,pass,portfolio){
        this.#users[user] = {pass:pass, portfolio:portfolio}
        this.saveTolocal();
    }

   
}


/*
  loadFromJson(){
        fetch('/assets/users.json')
        .then((res)=>res.json())
        .then((data)=>{
            this.#users = data;
            this.saveTolocal()
        })
    }



*/