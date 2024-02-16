 
<template>
    <TabView>
	<TabPanel header="Items">
        <DataTable 
            :value="prices" 
            responsiveLayout="scroll"
            :loading="loading"
            :globalFilterFields="['bc','grp1','slug']"
            :filters.sync="filters"
            v-on:filter="onFilter"
            filterDisplay="menu" 

            >

            <template #header>
                <div class="flex grid">
                    <div class="col-2" >
                        <span>{{ prices.length }} / {{ itemsfiltered.length }}</span>
                    </div>
                    <div class="col-5" >
                        <span>{{ formatCurrency(sumAll(itemsfiltered,"usd"))  }} </span>

                    </div>
                    <div class="col-5" >
                        <InputText v-model="filters['global'].value"   placeholder="Keyword Search" />
                        <i class="pi pi-search" />
 
                    </div>
                    
                </div>
                

            </template>

            

            <Column header="alias"  field="alias" sortable>
                <template #footer>
                    {{prices.length}} / {{itemsfiltered.length  }} 
                </template>
            </Column>
            <Column header="Grupo"  field="grp1" sortable>
            </Column>

            <Column header="slug"   field="slug" sortable >
                <template #filter="{filterModel,filterCallback}">
                    <InputText 
                        type="text" 
                        v-model="filterModel.value" 
                        @input="filterCallback()" 
                        class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/>
                </template>
            </Column>
            <Column header="cant"   field="ammount"     
                :bodyStyle="{'text-align': 'right', overflow: 'visible'}" 
                :footerStyle="{'text-align': 'right', overflow: 'visible'}" >
                
                <template #body="{data}">
                    {{formatUnit(data.ammount)}}
                </template>
                <template #footer>
                    {{formatUnit(sumAll(itemsfiltered,"ammount"))  }} 
                </template>
            </Column>
            <Column header="precio" field="price"  dataType="numeric" 
                :bodyStyle="{'text-align': 'right', overflow: 'visible'}" 
                :footerStyle="{'text-align': 'right', overflow: 'visible'}" 
            >
                <template #body="{data}">
                    {{formatCurrency(data.price)}}
                </template>
            </Column>
            <Column header="usd"    field="usd" sortable dataType="numeric" 
                :bodyStyle="{'text-align': 'right', overflow: 'visible'}" 
                :footerStyle="{'text-align': 'right', overflow: 'visible'}" 
            >
               
                <template #body="{data}">
                    {{formatCurrency(data.usd)}}
                </template>
                <template #footer>
                    {{formatCurrency(sumAll(itemsfiltered))  }} 
                </template>
            </Column>
            <Column header="lect" dataType="numeric" sortable>
                <template #body="{data}">
                    <p>{{ formatUnit( Date.now() - data.ts  )}}</p>
                </template>
            </Column>
            <Column header="lect" field="lec" dataType="numeric" sortable>
                
            </Column>
            
        </DataTable>
	</TabPanel>
	<TabPanel header="Token">
		<DataTable 
            :value="prices" 
            sortMode="single"
            sortField="slug"
            :sortOrder="1"
            rowGroupMode="subheader"
            groupRowsBy="slug"
            responsiveLayout="scroll"
            :expandableRowGroups="false"
            :xexpandedRowGroups.sync="expandedRowGroups"

            
            
            >
            
            
            <template #header>
                <div class="flex grid">
                    <div class="col-2" >
                        <span>{{ prices.length }} / {{ itemsfiltered.length }}</span>
                    </div>
                    <div class="col-5" >
                        <span>{{ formatCurrency(sumAll(itemsfiltered,"usd"))  }} </span>
                    </div>
                    <div class="col-5" >
                        <InputText v-model="filters['global'].value"   placeholder="Keyword Search" />
                        <i class="pi pi-search" />
                    </div>
                </div>
            </template>

            <template #groupheader="slotProps">
                <span class="flex grid" 
                    :set=" calc = {  usd:aggregate( itemsfiltered,'slug', slotProps.data.slug , 'sum' ,'usd') , cant: aggregate(  itemsfiltered,'slug', slotProps.data.slug , 'sum' ,'ammount') }"
                    >
                    <span class="col-8">{{ slotProps.data.slug }}</span>
                    <span class="col-2 text-right">{{ calc.cant }}</span>
                    <span class="col-2 text-right">{{  formatCurrency(calc.usd)  }}</span>
                </span>
            </template>                


        </DataTable>

        
	</TabPanel>
	<TabPanel header="Header III">
		Content III
	</TabPanel>
    </TabView>
</template>

<script>

/*

<span :set="myUSD = aggregate(  itemsfiltered,'slug', slotProps.data.slug , 'sum' ,'usd')">
                    <span :style="1 === 1 ? 'display: none;' : ''">
                        {{ slotProps.data.slug }}  / {{ myUSD }}
                    </span>
                    
                </span>
            <template #groupheader="slotProps">
                <div :style="1 === 1 ? 'display: none;' : ''">
                    <span>{{ slotProps.data.slug}}</span>
                    <span>{{ formatCurrency ( aggregate(  itemsfiltered,'slug', slotProps.data.slug , 'sum' ,'usd') ) }}</span>
                </div>                
            </template>

   :value="prices" 
                rowGroupMode="subheader" 
                groupRowsBy="grp1"
                sortMode="single" 
                sortField="grp1" 
                :sortOrder="1" 
                responsiveLayout="scroll"
                scrollable scrollHeight="400px"

                :expandableRowGroups="true"
                :expandedRowGroups.sync="expandedRowGroups"

                @xrowgroup-expand="onRowGroupExpand" 
                @xrowgroup-collapse="onRowGroupCollapse"

*/



    import FilterMatchMode from 'primevue/api/FilterMatchMode';
    import FilterService from 'primevue/api/FilterService';

    // import Button from 'primevue/button';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import InputText from 'primevue/inputtext';

    import TabView from 'primevue/tabview';
    import TabPanel from 'primevue/tabpanel';


    import MyPortFolioServices from '../services/MyPortFolioServices';

    import { EventBus } from '@/event-bus';
    

    const YOUR_FILTER = 'YOUR FILTER';

    export default {
        data(){
            return {
                prices:[],
                itemsfiltered:[],
                filters: {
                    'global':{value:""},
                    'slug':{ value: "", matchMode: "startsWith"}
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
            this.myAssetsService = new  MyPortFolioServices();
        },
        mounted(){
            let me = this;
            this.myAssetsService.initialize();
            
            this.myAssetsService.getAssets().then((data)=>{
                data.forEach(r => {
                    r.lec = 0 ; 
                    r.ts = 0 ;
                    r.price = r.price || 0;
                    r.usd = r.price * r.ammount
                });
                this.prices =  data
            })

            this.loading = false;

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


        },
        methods: {
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
        name: 'CaiTest',
        components:{ DataTable ,Column, InputText ,TabView , TabPanel},
        props: {  msg: String },
        filtros:[]
    }
</script>

<style>
   
</style>