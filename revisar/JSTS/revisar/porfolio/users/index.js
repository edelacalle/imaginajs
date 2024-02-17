import { Usuarios } from './users.js';

var oUsers = new Usuarios();

console.log("login", oUsers.login('admin','admin'))
console.log("signup", oUsers.signup('pepe','pepe'))