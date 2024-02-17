import { Usuarios } from "./users/users.js";



var oUsers = new Usuarios();
console.log(JSON.stringify(oUsers));


console.log("oUser", oUsers.login('ADMIN','admin'))

