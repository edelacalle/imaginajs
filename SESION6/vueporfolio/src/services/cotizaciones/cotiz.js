// import { eventBus } from '../utils/utils';
import { EventBus } from '@/event-bus';

export default class Cotizaciones{
    _endpoint = 'https://api.coincap.io/v2/assets';
    //_wss =  "wss://ws.coincap.io/prices?assets=ALL";
    _wss =  "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin";
    _name="coins";

    #oCoins = {};
    #aCoins = [];

    _socket;

    constructor(){ this.loadAssets();}

    get oCoins(){ return this.#oCoins }
    get aCoins(){ return this.#aCoins }

    nPosAlias(alias){ 
        return Object.keys(this.#oCoins).indexOf(alias)
     }

    async loadCoinsSync(){
        let res = await fetch(this._endpoint);
        let jData = await res.json();
        this.#aCoins = jData.data;
        this.#oCoins = {};
        jData.data.forEach((r)=>this.#oCoins[r["id"]]=parseFloat(r["priceUsd"]))
        return this.#aCoins;
    }



    loadAssets(){
        fetch(this._endpoint)
        .then((res) => res.json())
        .then((jData) =>{
            //this._coins = jData.data;
            //console.log("hola ", this._coins)
            //this.saveToStorage();
            //eventBus.publish("assets.loaded",{})
        });
    }

    saveToStorage(){
        window.localStorage.setItem(this._name, JSON.stringify(this.oCoins));
    }

    socketOpen(){
        //eventBus.publish("status.info","Abriendo el socket")
    
        this._socket = new WebSocket(this._wss);
        this._socket.onopen = function(e) {
            console.log("socket abierto")
        };
        this._socket.onmessage = function(event) {
            let jData = JSON.parse(event.data);
            // console.log("recibo", jData)
            Object.keys(jData).forEach((key)=>{
                EventBus.$emit('change.price', {key:key,value:parseFloat(jData[key])});
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
        //eventBus.publish("status.info","Cerrando el socket")
        this._socket.close([3000], ["Socket cerrado a petición"]);
    }
}




