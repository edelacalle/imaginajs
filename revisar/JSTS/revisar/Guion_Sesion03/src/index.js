import { Usuario } from "./users/oUsers";
//import $ from 'jquery';


window.$ = window.jQuery = require("jquery");

//oUser.version = -1 ; 
var oUser = new Usuario();

oUser.version = -4 ; 

oUser.Nombre_Completo = "Antonio Lopez";



var app = document.getElementById("app");

var cHtml = `
    <table border="1" width="100%">
        <thead>
            <tr>
                <th>h1</th>
                <th>h2</th>
                <th><button id="button1" >pulsame</button></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="3"><div id="aaa">fff</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>User:<input id="usuario" type="text" /></td>
                <td>Pass:<input id="contra" type="password" /></td>
                <td><button id="send">Enviar</button></td>
            </tr>

        </tfoot>
    </table>
`

app.innerHTML = cHtml;

//document.getElementById("button1").onclick = test;
document.getElementById("send").onclick = send;

window.$("#button1").on("click", (e)=> console.log("aqui esta mi click"));



(async () => {
    await oUser.loadData();
    document.getElementById("aaa").outerHTML = miBody()

    //console.log("sigo con los datos",tpl)
})().catch(e => {
    console.log("tengo un error", e)
    // Deal with the fact the chain failed
});







function send(){
    let user = document.getElementById("usuario")?.value ?? "";
    let pass = document.getElementById("contra")?.value ?? "";
    
    if(user != '' && pass!= ''){
        oUser.addUser(user,pass,[]);
        document.getElementById("aaa").outerHTML = miBody()
    }else{
        console.log("no hay ", user, pass)
    }    
}



function test(){
    console.log("test jquery", jq)
    //oUser.addUser('pepe','lopez',[]);
    

}


function miBody(){

    var cHtml = `
        <table id="aaa">
            <tbody>`;
    
        Object.keys(oUser.getUsers()).forEach(element => {
            cHtml += `<tr><td>${element}</td></tr>` 
        });

    cHtml += `
            </tbody>
        </table>
    `

    console.log("Que saco",cHtml)
    return cHtml;
    

}



