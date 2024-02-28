import { Usuarios } from './users/oUsers.js' ;
import $ from 'jquery'


// console.log("jquery es ", $ );


 let app = document.getElementById("app");
//let app = $("#app");

let oUser = new Usuarios();



(async () => {
    console.log("antes de cargar usuarios");
    await oUser.loadData();
    app.innerHTML = formateaDatos();
    
    $("#btn1").on("click", (e)=> BorraPersistencia() );
    $("#btnSend").on("click", (e)=> AnadeUsuario() );

    //document.getElementById("btn1").onclick = BorraPersistencia;
    //document.getElementById("btnSend").onclick = AnadeUsuario;
    
    //app.innerHTML = JSON.stringify(oUser.getUsers())
    //document.getElementById("aaa").outerHTML = miBody()
    //console.log("sigo con los datos",tpl)
})().catch(e => {
    console.log("tengo un error", e)
    // Deal with the fact the chain failed
});


//app.innerHTML = "Enlazo mi jscript con la pag web ";
//app.innerHTML = formateaDatos();


function BorraPersistencia(){
    oUser.clearUsers((value)=>{
        alert(value)
    })
}

function AnadeUsuario(){
    // necesito la varia user
    // necesito la variable pass
    // invoco al oUser , add 
    let user = document.getElementById("eUser").value;
    let pass = document.getElementById("ePass").value;
    oUser.addUser(user,pass, null , (err,payload)=>{
        
        if(err){
            alert( "se ha producido un error "+ payload?.msg ?? '' )
        }else{
           app.innerHTML = formateaDatos();
        }
    })
    

    //console.log("voy bien ", user , pass )
}

function formateaDatos(){

    var cHtml = `
        <table id="aaa" border="1" width="100%">
            <thead>
                <tr><th colspan="3">Cabecera1</th></tr>
            </thead>
            <tbody>`;
    
        Object.keys(oUser.getUsers()).forEach(element => {
            cHtml += `<tr><td colspan="3">${element}</td></tr>` 
        });

    cHtml += `
            </tbody>
            <tfoot>
                <tr>
                    <td>Usuario:<input id="eUser"></input></td>
                    <td>Pass:<input id="ePass" type="password"></input></td>
                    <td><button id="btnSend">Enviar</button></td>
                </tr>
                <tr>
                    <td><button id="btn1">Borrar Usuarios Persistentes</button></td>
                </tr>
            </tfoot>
        </table>
    `

    // console.log("Que saco",cHtml)
    return cHtml;
    

}
