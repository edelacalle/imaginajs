import { UsersFromLocalStorage ,UsersFromWeb} from './users/users.js';

let app = document.getElementById("root");


app.innerHTML = `
    <div id="container">
        <div id="idStatus"></div>
        <div>Demostracion Herencia </div>
        <div>
            <button id="loadlocal">Load Local</button>
            <button id="loadweb">Load Web</button>
        </div>
        <div id="idBody"></div>
    </div>`;


let idLocal    = document.getElementById("loadlocal");
let idWeb      = document.getElementById("loadweb");

let idBody      = document.getElementById("idBody");
let idStatus    = document.getElementById("idStatus");


idLocal.onclick = ()=>{
    let oUsersLocal    = new UsersFromLocalStorage();
    oUsersLocal.loadData();
    idBody.innerHTML = layout(oUsersLocal.Users);
}

idWeb.onclick = async ()=>{
    let oUsersWeb    = new UsersFromWeb();
    await oUsersWeb.loadDataAsync();
    idBody.innerHTML = layout(oUsersWeb.Users);
}



function layout(data={}){
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



