 
<template>
        <div>
        <button @click="openSocket()">Open Socket</button>
        <button @click="closeSocket()">Close Socket</button>
 
        <DataTable 
            :value="aCoins" 
            responsiveLayout="scroll"
            :globalFilterFields="['name','id']"
            :filters.sync="filters"
            :loading = "loading"
            v-on:filter="onFilter"
            filterDisplay="menu" 
            >

            <template #header>
                <div class="flex grid">
                    <div class="col-2" >
                        <span>{{ ''}} / {{ itemsfiltered.length }}</span>
                    </div>
                    <div class="col-5" >
                        <InputText v-model="filters['global'].value"   placeholder="Busqueda" />
                        <i class="pi pi-search" />
                    </div>
                    
                </div>
                

            </template>

            
            <Column field="name"></Column>
            <Column header="USD"  field="priceUsd" sortable
                    :bodyStyle="{'text-align': 'right', overflow: 'visible'}" 
            >
                <template #body="{data}">
                    {{formatCurrency(parseFloat(data.priceUsd))}}
                </template>
            </Column>
            <Column header="24h"  field="changePercent24Hr" sortable
                    :bodyStyle="{'text-align': 'right', overflow: 'visible'}" 
            >
                <template #body="{data}">
                    {{formatPercent(parseFloat(data.changePercent24Hr))}}
                </template>
            </Column>

            
            
  
        

           
            
        </DataTable>
	
    </div>
</template>


<script>

/*
          <Column field="@id"></Column>
            <Column field="@name"></Column>
    <Column header="USD"  field="priceUsd" sortable
                    :bodyStyle="{'text-align': 'right', overflow: 'visible'}" 
            >
                <template #body="{data}">
                    {{formatCurrency(parseFloat(data.priceUsd))}}
                </template>
            </Column>
            <Column header="24h"  field="changePercent24Hr" sortable
                    :bodyStyle="{'text-align': 'right', overflow: 'visible'}" 
            >
                <template #body="{data}">
                    {{formatPercent(parseFloat(data.changePercent24Hr))}}
                </template>
            </Column>


*/
    import DataTable    from 'primevue/datatable';
    import Column       from 'primevue/column';
    import InputText    from 'primevue/inputtext';

    import Cotizaciones from '../services/cotizaciones/cotiz';

    import { EventBus } from '@/event-bus';
  
    export default {
        data(){
            return {
                serv:null,
                aCoins:[],
                oCoins:{},
                itemsfiltered:[],
                filters: {
                    'global':{value:""},
                    //'slug':{ value: "", matchMode: "startsWith"}
                    //'name': {value: null, matchMode: YOUR_FILTER},
                    //'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
                },
                matchModeOptions: [
                    //{label: 'Your Equals', value: YOUR_FILTER},
                    //{label: 'Starts With', value: FilterMatchMode.STARTS_WITH}
                ],
                loading:true,
                expandedRowGroups: null
                
            }
        },

        created(){
            //this.myCoinservice = new Cotizaciones();
            //EventBus.$on('change.price', this.updPrice);
            this.serv = new Cotizaciones();
        },
        async mounted(){
           console.clear();
           let jData =  await this.serv.loadCoinsSync();
           this.aCoins = jData;
           this.loading = false;
         

           EventBus.$on('change.price',this.updPrice);
                   

        

            

            /*

            const updPrice = function(msg) {
                Object.keys(msg).forEach((key)=>{
                    let fData = me.prices.filter(r=>r['slug'] == key );
                    // if(fData.length == 0){    console.log("fuera", key)};
                    fData.forEach((r)=>{
                        if( msg[key] != null ){
                            r.ts = Date.now();
                            r.price = parseFloat( msg[key] );
                            r.usd = r.price * r.ammount;
                            r.lec = r.lec + 1;
                        }
                    })
                })
            }

            EventBus.$on('change.price', updPrice);
            */
        },
        methods: {
            openSocket(){ this.serv.socketOpen();},
            closeSocket(){ this.serv.socketClose();},

            CoinByAlias(alias,name,value){
                console.log("coinbyalias",alias,name,value)
                let nPos = this.serv.nPosAlias(alias);
                if(nPos >= 0 ){
                    this.aCoins[nPos][name]=value; 
                }
                

            },
            updPrice(payload){
                this.CoinByAlias(payload.key,'priceUsd', payload.value);
                //const self = this;
                //console.log("updprice",payload["key"],this.myCoinservice.oCoins[payload["key"]]) ;
                //if(self.myCoinservice.oCoins[payload["key"]] != null ){
                //    console.log("hola". self.myCoinservice.oCoins[payload["key"]] )
                    //this.oCoins[payload["key"]] = payload["value"];
                //}
                
                //console.log("method updprice",payload.key , payload.value , this.myCoinservice.oCoins )
                //this.coins = [];
                //if( this.myCoinservice.oCoins[payload.key] != null ){
                   // console.log("updRPrice", payload.key, payload.value,this.myCoinservice.oCoins[payload.key], this.myCoinservice.oCoins, )
                   //this.myCoinservice.oCoins[payload.key]["priceUsd"] = 123456;

                   //this.myCoinservice.setCoinByAlias(payload.key,"priceUsd",123);
                 //  this.myCoinservice.setCoinByAlias('bitcoin',"priceUsd",123);
                   

                //}
                

            },
            sumAll(values,field="usd"){
                return values.reduce((a,v)=>a+v[field],0)
            },
            formatUnit(value) {
                let cRet = '';
                if( value > 1000000 ){
                    cRet = ( value / 1000000).toFixed(2) +' M'
                } else if(value > 100000 ){
                    cRet = ( value / 100000 ).toFixed(2) +' m'
                }else{
                    cRet = value.toFixed(2) +' u';
                }
                return cRet;
            },
            formatDate(value) {
                return value.toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });
            },
            formatCurrency(value) {
                return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
            },

            formatPercent(value) {
                return parseFloat(value).toFixed(2) + ' %' ;
            },


            onFilter: function(event) {
                this.itemsfiltered = event.filteredValue;
                console.log("filtro",event.filteredValue);
            },
            aggregate(data,name,filter,func,field='usd') {
                // [] , "slug", "bitcoin", sum , usd 
               // console.log("aggregate", data, filter,func , field)
                return data.reduce((a,v) =>{
                    let aux = (v[name]==filter) ? v[field] :0 ;
                    return a + aux ;

                    /*                    
                    if(v[name]==filter){
                        return a+v[field];
                    }else{
                        return a;
                    }*/
                    
                },0)

                //return 123 
                // slotProps.data, slotProps.data.slug , 'sum' ,'usd'

            },
            calculateCustomerTotal(name) {
                let total = 0;
                if (this.customers) {
                    for (let customer of this.customers) {
                        if (customer.representative.name === name) {
                            total++;
                        }
                    }
                }
                return total;
            },
            onRowGroupExpand(event) {
                console.log("expand")
            // this.$toast.add({severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000});
            },
            onRowGroupCollapse(event) {
                console.log("collapse")
            //    this.$toast.add({severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000});
            },
        },
        name: 'CaiCoins',
        components:{ DataTable ,Column, InputText },
        props: {  msg: String },
        
        filtros:[]
    }
</script>

<style>
   
</style>


