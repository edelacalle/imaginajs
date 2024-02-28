import { eventBus } from "../utils/utils";

export class Cotizaciones {
    #endpoint = 'https://api.coincap.io/v2/assets';
    #wss =  "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin";
    #lsName ="coins";
    #coins = [] ;
    #socket;

    constructor(){
        this.loadAssets();
    }

    get coins (){ return this.#coins};

    loadAssets(){
        fetch(this.#endpoint)
        .then((res) => res.json())
        .then((jData) =>{
            this.#coins = jData.data;
            this.saveToStorage();
            eventBus.publish("assets.loaded",{})
        });
    }

    saveToStorage(){
        window.localStorage.setItem(this.#lsName, JSON.stringify(this.#coins));
    }

    socketOpen(){
        eventBus.publish("status.info","Abriendo el socket");
        this.#socket = new WebSocket(this.#wss);
        this.#socket.onopen = function(e) {
            eventBus.publish("status.info","Socket Abierto");
        };
        this.#socket.onclose = function(event) {
            if (event.wasClean) {
                eventBus.publish("status.info",`[close] Conexión cerrada limpiamente, código=${event.code} motivo=${event.reason}`);
            } else {
                eventBus.publish("status.info","[close] Conexión se cayo");
            }
        };
        this.#socket.onmessage = function(event) {
            //console.log("recibo el evento", event)
            
            let jData = JSON.parse(event.data);

            console.log("recibo", jData)
            Object.keys(jData).forEach((key)=>{
                let obj = document.getElementById("c_"+key);
                if(obj){
                    obj.innerText = parseFloat(jData[key]).toFixed(2);
                }
            })
            
          };

    }
    socketClose(){
        eventBus.publish("status.info","Cerrando el socket")
        this.#socket.close([3001], ["Socket cerrado a petición"]);
    }


        
}