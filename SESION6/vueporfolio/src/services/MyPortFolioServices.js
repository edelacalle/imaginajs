import { EventBus } from '@/event-bus';

export default class MyPortFolioService {
    initialize(){
        const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');
        pricesWs.onmessage = function (msg) {
            // EventBus.$emit('change.price', JSON.parse( msg.data ));
        }

    }
    getAssets() {
        return fetch('/myassets.json')
        .then(res => res.json())
        .then(d => d.assets);
    }

    getCountries() {
        return fetch('demo/data/countries.json').then(res => res.json())
            .then(d => d.data);
    }
}