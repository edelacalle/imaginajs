import { UsersFromLocalStorage, UsersFromWeb } from "./users/users";

let app = document.getElementById("root");

app.innerHTML = `
    <div id="container">
        <div>Demostracion Herencia </div>
        <div>
            <button id="id_local">Load Local</button>
            <button id="id_web">Load Web</button>
        </div>
        <div id="idBody">xxxxxx</div>
    </div>`;


    
let idLocal    = document.getElementById("id_local");
let idWeb      = document.getElementById("id_web");
let idBody     = document.getElementById("idBody");


idLocal.onclick = ()=>{
    let oUsers    = new UsersFromLocalStorage();
    oUsers.loadData();
    idBody.innerHTML = bodyLayout(oUsers.Users);
}

idWeb.onclick = async ()=>{
    let oUsers    = new UsersFromWeb();
    await oUsers.loadDataAsync();
    idBody.innerHTML = bodyLayout(oUsers.Users);
}


function bodyLayout(data={}){
    let cHtml = `
        <table width="100%" border="1">
            <thead>
                <tr>
                    <th>Alias</th>
                    <th>pass</th>
                    <th>portFolio</th>
                </tr>
            </thead>
            <tbody>
    `;


     //let o= {}; => Object.keys(o).length = 0 
     // o == { a=12 } Object.keys(o).length = 1 
     // o === {}

    Object.keys(data).forEach((key)=>{
        cHtml += `<tr>
            <td >${key}</td>
            <td >${data[key].pass}</td>
            <td >${JSON.stringify(data[key].porfolio)}</td>
        </tr>`

    })
    cHtml += `           
               
            </tbody>
            <tfoot></tfoot>
        </table>
    `;
    return cHtml;
}


/*

let oUser = new UsersFromLocalStorage();

oUser.loadData();

console.log("tengo oUser", JSON.stringify(oUser.Users,null," ") );
oUser.addUser("usuario1","pass1", [] );
oUser.addUser("usuario2","pass2", [{btc:123}] );
*/

