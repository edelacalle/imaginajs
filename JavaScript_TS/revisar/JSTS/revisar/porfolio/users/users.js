import fs from 'node:fs';

export class Usuarios{
    path = 'c:/JSTS/porfolio/users/';
    users = {};
    constructor(){
        this.loadUsers()
    }

    loadUsers(){
        try {
            const data = fs.readFileSync(this.path +'users.json', 'utf8');
            this.users = JSON.parse(data);
          } catch (err) {
            this.showErrors(err)
        }
    }
    saveUsers(){
        try {
            fs.writeFileSync (this.path +'users.json',JSON.stringify(this.users,null," "), 'utf8');
          } catch (err) {
            this.showErrors(err)
        }
    }

    login(user,pass){
        let oRet = this.users[user.toLowerCase()];
        if(oRet!=null &&  oRet.pass == pass ){
            return {status:'+OK', msg:"Usuario correcto" , payload:oRet};
        }else{
            return {status:'-ERR', msg:"Usuario no valido"};
        }
    }
    signup(user,pass,payload=[]){
        let oRet = this.users[user];
        if(oRet != null){
            return this.showErrors({status:'-ERR', msg:'Usuario duplicado'})
        }
        this.users[user] = {pass:pass, payload:payload};
        this.saveUsers();

    }
    delUser(){}
    updUser(){}
    showErrors(err){
        console.log("hay errores en la app ");
        console.error(err)
    }
}
