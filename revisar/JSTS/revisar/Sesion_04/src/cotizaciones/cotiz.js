import { eventBus } from '../utils/utils';

export class Cotizaciones{
    _endpoint = 'https://api.coincap.io/v2/assets';
    _wss =  "wss://ws.coincap.io/prices?assets=ALL";
    //_wss =  "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin";
    _name="coins";
    _coins = [];
    _socket ;
    constructor(){
        this.loadAssets();
    }

    get coins(){return this._coins};

    loadAssets(){
        fetch(this._endpoint)
        .then((res) => res.json())
        .then((jData) =>{
            this._coins = jData.data;
            this.saveToStorage();
            eventBus.publish("assets.loaded",{})
        });
    }

    saveToStorage(){
        window.localStorage.setItem(this._name, JSON.stringify(this._coins));
    }

    socketOpen(){
        eventBus.publish("status.info","Abriendo el socket")
        this._socket = new WebSocket(this._wss);
        this._socket.onopen = function(e) {
            console.log("socket abierto")
        };
        this._socket.onmessage = function(event) {
            let jData = JSON.parse(event.data);
            console.log("recibo", jData)
            Object.keys(jData).forEach((key)=>{
                let obj = document.getElementById("c_"+key);
                if(obj){
                    obj.innerText = parseFloat(jData[key]).toFixed(2);
                }
            })
          };
          
        this._socket.onclose = function(event) {
            if (event.wasClean) {
                console.log(`[close] Conexión cerrada limpiamente, código=${event.code} motivo=${event.reason}`)
            } else {
                console.error('[close] La conexión se cayó');
            }
        };

    }
    
    socketClose(){
        eventBus.publish("status.info","Cerrando el socket")
        this._socket.close([3000], ["Socket cerrado a petición"]);
    }
}




