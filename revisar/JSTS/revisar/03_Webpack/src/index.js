//console.log("Hello World2!");
import * as utils from './utils/index.js';
import * as user from './users/oUsers.js';


utils.mensaje("construyo usuarios");

var pp = new user.Usuarios();

utils.mensaje("ya tengo usaer", pp)
