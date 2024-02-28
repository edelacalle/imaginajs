import { Cotizaciones } from './cotizaciones/cotiz';
import { eventBus } from './utils/utils';

let app = document.getElementById("root");

let oCotiz = new Cotizaciones();


app.innerHTML = `
    <div id="container">
        <div id="idStatus"></div>
        <div>
            <button id="socketOn">Socket ON</button>
            <button disabled id="socketOff">Socket OFF</button>
            <button id="test">Test</button>
        </div>
        <div id="idBody"></div>

    </div>`;

let idSocketOn  = document.getElementById("socketOn");
let idSocketOff = document.getElementById("socketOff");
let idStatus    = document.getElementById("idStatus");


idSocketOn.onclick = ()=>{
    idSocketOn.setAttribute("disabled", true);
    idSocketOff.removeAttribute("disabled");
    oCotiz.socketOpen();
}

idSocketOff.onclick = ()=>{
    idSocketOn.removeAttribute("disabled")
    idSocketOff.setAttribute("disabled", true);
    oCotiz.socketClose();
}


eventBus.subscribe('assets.loaded',(payload)=>{
    idBody.innerHTML = layoutCrypto();
})

eventBus.subscribe('status.info',(payload)=>{
    idStatus.innerHTML = payload ;
})





function layoutCrypto(){
    let cHtml = `
        <table width="100%" border="1">
            <thead>
                <tr>
                    <th>Moneda</th>
                    <th>Symbol</th>
                    <th>USD</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    oCotiz.coins.forEach(element => cHtml += `<tr>
            <td >${element["id"]}</td>
            <td>${element["symbol"]}</td>
            <td align="right"><span id="c_${element["id"]}" >${parseFloat(element["priceUsd"]).toFixed(2) }</span>&nbsp;$</td>
        </tr>`)
    cHtml += `           
               
            </tbody>
            <tfoot></tfoot>
        </table>
    `;
    return cHtml;
}